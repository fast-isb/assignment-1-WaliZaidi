const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodBankSchema = new Schema({ //define schema in this part for the database

    title: { //name of field
        type:String,
        required: true, //must required to fill 
    },

    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
},
{
    timestamps: true,
});

const bloodBB = mongoose.model('BloodBank', bloodBankSchema);
const bloodBBOrder = mongoose.model('BloodBank Order', bloodBankSchema);
module.exports = bloodBB, bloodBBOrder;