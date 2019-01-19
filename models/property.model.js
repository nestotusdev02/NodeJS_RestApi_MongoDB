const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let PropertySchema = mongoose.Schema({
    title : {type : String},
    description : {type : String},
    category : {type : string},
    subcategory : {type : string},
    address : [{ 
        addr1:{type:String}, 
        addr2:{type:String}, 
        city:{type:String}, 
        state:{type:String}, 
        zip:{type:Number} 
    }],
    thumbnail_picture : {type : string},
    seller_agent_id : {type : mongoose.Schema.ObjectId, ref : 'Seller'},
    rooms : [{
        room_name : {type:String},
        floor_number : {type:Number},
        rthumbnail_picture : {type:String},
        ibeacon_id : {type: mongoose.Schema.ObjectId, ref : 'Ibeacon'},
        images : [{
            image_title:{type:String},
            image_url:{type:String},
            image_thumbnail : {type:String},
            uploaded_by:{type: mongoose.Schema.ObjectId, ref : 'User'},
        },{timestamps: true}],
        audios : [{
            audio_title:{type:String},
            audio_url:{type:String},
            audio_thumbnail : {type:String},
            uploaded_by:{type: mongoose.Schema.ObjectId, ref : 'User'},
        },{timestamps: true}],
        videos : [{
            video_title:{type:String},
            video_url:{type:String},
            video_thumbnail : {type:String},
            uploaded_by:{type: mongoose.Schema.ObjectId, ref : 'User'},
        },{timestamps: true}],
        htmls : [{
            html_title:{type:String},
            html_url:{type:String},
            html_thumbnail : {type:String},
            uploaded_by:{type: mongoose.Schema.ObjectId, ref : 'User'},
        },{timestamps: true}],

    }],
    
}, {timestamps: true});

let property = module.exports = mongoose.model('Property', PropertySchema);