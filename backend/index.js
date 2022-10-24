/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000;

const uri = process.env.uri;
mongoose.connect(uri, {useNewUrlParser:true});

const connection = mongoose.connection;
connection.once() //edit this once you get home


const admin = require('./routes/admin');

app.use('/admin', admin);

app.use(cors());
app.use(express.json);

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})