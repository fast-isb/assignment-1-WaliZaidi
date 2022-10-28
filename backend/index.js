/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

 const express = require('express');
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');
 const cors = require('cors');
// Importing user route
const router = require('./routes/userInfoRoute.js');
// const router = require('router')

// const bodyParser = require('body-parser')

//all the const additions 

dotenv.config()

mongoose.connect(process.env.connectionString, () => console.log("Database is connected"))
// admin = require("");
const app = express()

app.use(cors());
app.use(express.json);
// Adding a Router
// app.use('/app', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(8000, () => {
    console.log(`Example app listening on port ${port}`)
})