'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var imageSchema = new mongoose.Schema({
    Filepath: {
        type: String,
        required: 'Filepath missing'
    },
    Price:{
        type: Number,
        required: 'Price required'
    },
    Discount:{
        type: Number
    },
    Quantity:{
        type: Number,
        required: 'Quantity required'
    },
    Timestamp:{
            type: Date,
            default: Date.now
    }
});

module.exports = mongoose.model('Images', imageSchema);