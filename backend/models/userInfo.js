const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    username: String,
    password: String,
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;