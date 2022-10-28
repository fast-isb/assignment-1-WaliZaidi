//  const express = require('express');
//  const mongoose = require('mongoose');
//  const dotenv = require('dotenv');
//  const cors = require('cors');
// const router = require('./routes/userInfoRoute.js');

// dotenv.config()

// mongoose.connect(process.env.connectionString, () => console.log("Database is connected uwu"))
// // admin = require("");
// const app = express()

// app.use(cors());
// app.use(express.json);

// // Adding a Router
// app.use('/app', router);    

// app.get('/', (req, res) => {
//     res.send('Hello Universe!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })

// app.listen(8000, () => {
//     console.log(`Example app listening on port ${8000}!`)
// })

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/userInfoRoute.js')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(8000, () => {
    console.log("Server is up and running")
})

app.post('/success', (req, res) => {
    res.send("My successs")
})

app.get('/hospitaldata', (req, res) =>{
    HospitalSchema.find({}).then(
        items => res.json(items)
    )
});

app.get('/requestdata', (req, res) =>{
    RequestSchema.find({}).then(
        items => res.json(items)
    )
})