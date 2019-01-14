const { Ibeacon }   = require('../models');
const validator     = require('validator');
const { to, TE }    = require('../services/util.service');

const createIbeacon = async function(beaconInfo){
    let unique_key, beacon_info, err;

    beacon_info={}
    beacon_info.status='create';
    [err, ibeacon] = await to(Ibeacon.create(beaconInfo));
    if(err) TE('user already exists with that email');
    return ibeacon;
}
module.exports.createIbeacon = createIbeacon;