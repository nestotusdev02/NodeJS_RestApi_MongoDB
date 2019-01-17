const { Customer } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, customer;
    let user = req.user;

    let customer_info = req.body;
    customer_info.users = [{user:user._id}];

    [err, customer] = await to(Customer.create(customer_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{customer:customer.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    [err, customers] = await to(Customer.find());
    return ReS(res, {customers},201);
}
module.exports.getAll = getAll;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let customer = req.customer;
    return ReS(res, {customer:customer.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, customer, data;
    customer = req.user;
    data = req.body;
    customer.set(data);

    [err, customer] = await to(customer.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {customer:customer.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let customer, err;
    customer = req.customer;

    [err, customer] = await to(customer.remove());
    if(err) return ReE(res, 'error occured trying to delete the customer');

    return ReS(res, {message:'Deleted Customer'}, 204);
}
module.exports.remove = remove;