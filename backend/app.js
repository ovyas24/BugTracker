require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const Routes = require('./Routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURI)
    .then(() => console.log('Connected to db'))
    .catch(err => console.error(err.message));

// app.use('/', Routes);
// app.use(/)

app.post('/test', (req, res, next) => {
    const Joi = require('joi');
    const data = req.body;
    console.log(req.originalUrl)
  
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    });

    res.json({valid: schema.validate(data)})
  });

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
})