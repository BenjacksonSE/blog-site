const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('connected up')).catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);

app.listen('3000', ()=>{
  console.log("Backend is ago")
});