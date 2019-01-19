const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let VisitSchema = mongoose.Schema({
    property_id : {type : mongoose.Schema.ObjectId, ref : 'Property'},
    seller_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Seller'},
    buyer_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    buyer_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    showing_time : {type: Date},
    status : {type:Boolean}
}, {timestamps: true});

let visit = module.exports = mongoose.model('Visit', VisitSchema);