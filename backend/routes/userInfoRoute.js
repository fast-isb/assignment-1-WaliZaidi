const express = new require('express')
const AccountSchema  = require('../models/userInfo.js')
const router = express.Router()

router.post('/request', (req, res) => {

    const generatedAccount = new AccountSchema({
        username: req.body.username,
        password: req.body.password
    })

    generatedAccount.save()
    .then(data =>{
        res.json(data);
    })

    .catch(error =>{
        res.json(error);
    })
});

module.exports = router;