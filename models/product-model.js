const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_schema = new Schema({
    text: {
        type: String,
        ref: 'product',
        required: true
    
             },
    amount: {
        type: Number,
        required: true  
     },

    picture: {
        type: String,
        //required: true  
    },
         
});


const product_model = new mongoose.model('product', product_schema);

module.exports = product_model;