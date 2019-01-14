const mongoose 			= require('mongoose');

let IbeaconSchema = mongoose.Schema({
    cust_id:    {type:String},
    UUID:       {type:String},
    MajorID:    {type:Number},
    MinorID:    {type:Number}
}, {timestamps: true});

let iBeacon = module.exports = mongoose.model('Ibeacon', IbeaconSchema);