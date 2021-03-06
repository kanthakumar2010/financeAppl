const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config/database')

//Customer Schema
const CustomerSchema = mongoose.Schema({
    name : {type: String, required : true},
    fatherName : {type: String},
    gender : {type: String},
    dob : {type: String},
    occupation : {type: String},
    mobileNumber : {type: String},
    landline : {type: String},
    idProof : {type: String},
    idNumber : {type: String},
    reference : {type: String},
    refRelationship : {type: String},
    address : {type: String},
    state : {type: String},
    city : {type: String},
    pincode : {type: String}
})

const Customer = module.exports = mongoose.model('Customer', CustomerSchema)

//Add new Customer
module.exports.addCustomer = (newCustomer, callback) => {
    newCustomer.save(callback)
}

//Get Customer Details By Querying IdNumber
module.exports.getCustomerByidNumber = (_idNumber, callback) => {
    const query = {idNumber: _idNumber}
    //console.log(query)
    Customer.findOne(query, callback);
}