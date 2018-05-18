const chalk = require('chalk'); // chalk for Cli log colour
const express = require('express');
const router = express.Router();
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Customer = require('../models/customer');

//Add New Customer
router.post('/register', (req, res, next) => {
    let newCustomer = new Customer ({
        name : req.body.name,
        city : req.body.city,
        idNumber : req.body.idNumber
    })

    Customer.addCustomer(newCustomer, (err, newCustomer) => {
        if(err){
            console.log(chalk.red(err) ) 
            res.json({success : false, msg : 'Failed To Add New Customer'})
        } else {
            console.log( chalk.blue(newCustomer) )
            res.json({success : true, msg : 'Customer Added Sucessuful'})
        }
    })
  })

//Find Customer By idNumber.
router.get('/detail/:idNumber', (req, res, next) => {
    //console.log( chalk.yellow(req.params.idNumber) )

    Customer.getCustomerByidNumber(req.params.idNumber, (err, customer) => {
        if(err) throw err
        // console.log(chalk.bgCyan(customer.name))
        res.json(customer)
    })
})

router.get('/add', (req, res) => {
    res.render('customer_add')
}) 

module.exports = router