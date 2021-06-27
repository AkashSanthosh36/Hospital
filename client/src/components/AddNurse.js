import React, {useState, useContext} from 'react';

import { Card, TextField, MenuItem, Typography, AccordionDetails, Accordion, AccordionSummary, Button } from '@material-ui/core'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import useStyles from '../componentsStyling/AddDoctor'

toast.configure()

function AddNurse(props) {
    const classes = useStyles()
    
    return (
        <div>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6"><strong>Add Nurse</strong></Typography>
                </AccordionSummary>

                <AccordionDetails>
                <Card className={classes.card}>
                    <Formik
                        initialValues = {{
                            nurseName: '',
                            email: '',
                            age: 0,
                            experience: 0
                        }}

                        validationSchema = {
                            Yup.object({
                                nurseName: Yup.string().required('Required'),
                                email: Yup.string()
                                .email('Invalid email format')
                                .required('Required !'),
                                age: Yup.number().required('Required !'),
                                experience: Yup.number().required('Required !')
                            })
                        }

                        onSubmit = { (values) => { 
                            console.log(values)
                            fetch('/addNurse', {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    name: values.nurseName,
                                    email: values.email,
                                    age: values.age,
                                    experience: values.experience,
                                    password: values.nurseName + values.age
                                })
                            }) 
                            .then(res => res.json())
                            .then(data => {
                                if(data.error) {
                                    toast.dark(data.error, {autoClose: 5000})
                                }
                                else {
                                    toast.dark(data.message, {autoClose: 5000})
                                }
                            })  
                        }}
                    >
                    { formik => (
                        <Form>

                            <Field 
                                name="nurseName"
                                className={classes.textfield}
                                as={ TextField }
                                id="outlined-basic" 
                                label="Name"
                                type="text" 
                                variant="outlined"
                                fullWidth 
                                error={(formik.errors.nurseName && formik.touched.nurseName) ? true : false}
                                helperText={<ErrorMessage name="nurseName" />}
                            />

                            <Field 
                                name="email"
                                className={classes.textfield}
                                as={ TextField }
                                id="outlined-basic" 
                                label="E-mail address"
                                type="text" 
                                variant="outlined"
                                fullWidth 
                                error={(formik.errors.email && formik.touched.email) ? true : false}
                                helperText={<ErrorMessage name="email" />}
                            />

                            <Field 
                                name="age"
                                className={`${classes.textfield} ${classes.number}`}
                                as={ TextField }
                                id="outlined-basic" 
                                label="Age"
                                type="number" 
                                variant="outlined"
                                fullWidth 
                                error={(formik.errors.age && formik.touched.age) ? true : false}
                                helperText={<ErrorMessage name="age" />}
                            />

                            <Field 
                                name="experience"
                                className={`${classes.textfield} ${classes.number}`}
                                as={ TextField }
                                id="outlined-basic" 
                                label="Experience"
                                type="number" 
                                variant="outlined"
                                fullWidth 
                                error={(formik.errors.experience && formik.touched.experience) ? true : false}
                                helperText={<ErrorMessage name="experience" />}
                            />

                            <Button className={classes.button} type="submit" fullWidth>Add Nurse</Button>
                        </Form>
                    )}
                    </Formik>
                </Card> 
                </AccordionDetails> 
            </Accordion>  
        </div>
    );
}

export default AddNurse;