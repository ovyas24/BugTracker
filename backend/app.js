require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected to db'))
    .catch(err => console.error(err.message))


app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
})