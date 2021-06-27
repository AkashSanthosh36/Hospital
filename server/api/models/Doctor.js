const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Doctor", DoctorSchema);