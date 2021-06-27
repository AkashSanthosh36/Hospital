const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(
    MONGO_URI,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
);
mongoose.promise = global.promise;

app.use(express.json());

app.use(require('./api/routes/Doctor'));
app.use(require('./api/routes/Nurse'));

app.listen(PORT, () => {
    console.log(`Server is running in PORT: ${PORT}`);
});