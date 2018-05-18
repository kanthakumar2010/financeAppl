const chalk = require('chalk');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Customer = require('../models/customer');


//Add Loan 
router.post('/new', (req, res, next) => {
    // let newCustomer = new Customer({
    //     idNumber : req.body.idNumber,
    //     loanNumber : req.body.loanNumber,
    //     loanType : req.body.loanType
    // })
})