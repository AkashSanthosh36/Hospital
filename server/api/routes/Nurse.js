const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const Nurse = require('../models/Nurse');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key : "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"
    }
}));

router.post('/addNurse', (req, res, next) => {
    const { name, email, age, experience, password} = req.body
    console.log(req.body)
    Nurse.findOne({email: email})
    .then(savedNurse => {
        if(savedNurse) {
            return res.status(422).json({
                error: "Nurse already exist with that email"
            });
        }
        
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const newNurse = new Nurse({
                name: name,
                email: email,
                age: age,
                experience: experience,
                password: hashedPassword,
            });
    
            newNurse.save()
            .then(nurse => {
                transporter.sendMail({
                    to: nurse.email,
                    from: "akas17ec006@rmkcet.ac.in",
                    subject: "Account created successfully",
                    html: `
                        <h1>Welcome to Seattle Grace Hospital</h1>
                        <h2>Your Password is ${password}</h2>
                        <h3>Change the password after login</h3>
                        `
                })
                res.status(201).json({
                    message: "Account created successfully"
                });
            })
            .catch(error => {
                console.log(error);
            });

        })
        .catch(error => {
            console.log(error);
        });
    })
    .catch(error => {
        console.log(error);
    });
})

module.exports = router;
