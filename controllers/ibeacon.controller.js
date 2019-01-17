const { Ibeacon }      = require('../models');
const ibeaconService   = require('../services/ibeacon.service');
const { to, ReE, ReS }  = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;
    [err, ibeacon] = await to(ibeaconService.createIbeacon(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new ibeacon.'}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let ibeacons = await to(Ibeacon.find());
    return ReS(res, {ibeacons},201);
}
module.exports.getAll = getAll;