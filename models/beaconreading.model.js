const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let BeaconReadingSchema = mongoose.Schema({
    visit_id : {type : mongoose.Schema.ObjectId, ref : 'Visit'},
    property_id : {type : mongoose.Schema.ObjectId, ref : 'Property'},
    seller_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Seller'},
    buyer_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    buyer_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    room_id : {type : mongoose.Schema.ObjectId, ref : 'Room'},
    signal_power : {type: Double }
}, {timestamps: true});

let beaconreading = module.exports = mongoose.model('BeaconReading', BeaconReadingSchema);