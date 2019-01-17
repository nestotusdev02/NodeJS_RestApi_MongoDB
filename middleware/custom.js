const Company 			    = require('../models/company.model');
const Customer 			    = require('../models/customer.model');
const { to, ReE, ReS } = require('../services/util.service');

let company = async function (req, res, next) {
    let company_id, err, company;
    company_id = req.params.company_id;

    [err, company] = await to(Company.findOne({_id:company_id}));
    if(err) return ReE(res,"err finding company");

    if(!company) return ReE(res, "Company not found with id: "+company_id);
    let user, users_array;
    user = req.user;
    users_array = company.users.map(obj=>String(obj.user));

    if(!users_array.includes(String(user._id))) return ReE(res, "User does not have permission to read app with id: "+app_id);

    req.company = company;
    next();
}
module.exports.company = company;

let customer = async function (req, res, next) {
    let customer_id, err, customer;
    customer_id = req.params.customer_id;

    [err, customer] = await to(Customer.findOne({_id:customer_id}));
    if(err) return ReE(res,"err finding customer");

    if(!customer) return ReE(res, "Customer not found with id: "+customer_id);
    let user, users_array;
    user = req.user;
    users_array = customer.user.map(obj=>String(obj.user));

    if(!users_array.includes(String(user._id))) return ReE(res, "User does not have permission to read app with id: "+app_id);

    req.customer = customer;
    next();
}
module.exports.customer = customer;