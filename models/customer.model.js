const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let VisitSchema = mongoose.Schema({
    customer_name : {type:String},
    address : [{ 
        addr1:{type:String}, 
        addr2:{type:String}, 
        city:{type:String}, 
        state:{type:String}, 
        zip:{type:Number} 
    }],
    status : {type:Boolean},
    user_id : {type : mongoose.Schema.ObjectId, ref : 'User'},
}, {timestamps: true});

CustomerSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

CustomerSchema.methods.get = function(){
    return CustomerSchema.find();
};


let customer = module.exports = mongoose.model('Customer', CustomerSchema);

