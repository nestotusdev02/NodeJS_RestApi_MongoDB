const mongoose 			= require('mongoose');
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');
const Company           = require('./company.model');
const validate          = require('mongoose-validator');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

let IbeaconSchema = mongoose.Schema({
    customer_id:{type : mongoose.Schema.ObjectId, ref : 'Customer'},
    UUID:{type:String},
    MajorID:{type:Number},
    MinorID:{type:Number}
}, {timestamps: true});

let Ibeacon = module.exports = mongoose.model('Ibeacon', IbeaconSchema);