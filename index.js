const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

const projectRoute = require('./routes/projectRoute')

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("db connected successful")
}).catch((e) => {
    console.log(e)
})
app.use(express.json());
app.use('/api', projectRoute);

app.listen(process.env.PORT || 6000, () => {
    console.log(`port is running ${process.env.PORT}`)
})