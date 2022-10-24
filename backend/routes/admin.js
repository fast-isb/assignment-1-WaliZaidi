const router = require('express').Router();
let bloodbank = require('../models/bloodBank');
let bloodBBOrder = require('../models/bloodBank'); //not necessary

router.route('/add').post((req,res) => {
    const id = Number(req.body.id);
    const title = req.body.title;
    const newBloodBank = new bloodbank({id, title});
    newBloodBank.save() //saves the thing
    .then(() => res.json('Movie Added!')) //reply as successful
    .catch(err => res.status(400).json('Error:' + err)); //reply if failure
})