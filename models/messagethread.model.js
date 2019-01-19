const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let VisitSchema = mongoose.Schema({
    visit_id : {type : mongoose.Schema.ObjectId, ref : 'Visit'},
    property_id : {type : mongoose.Schema.ObjectId, ref : 'Property'},
    seller_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Seller'},
    buyer_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    buyer_id : {type : mongoose.Schema.ObjectId, ref : 'Buyer'},
    room_id : {type : mongoose.Schema.ObjectId, ref : 'Room'},
    messages : [{ 
        user_id : {type : mongoose.Schema.ObjectId, ref : 'User'},
        message_id : {type : mongoose.Schema.ObjectId, ref : 'Message'},
        message : {type : String},
    }, {timestamps: true}],
}, {timestamps: true});

let visit = module.exports = mongoose.model('Visit', VisitSchema);