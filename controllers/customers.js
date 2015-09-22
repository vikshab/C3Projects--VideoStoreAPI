"use strict";
var Customer = require("../models/customer.js");

exports.customersController = {
  findAllCustomers: function(req, res) {
    var dbCustomer = new Customer();
    var result = dbCustomer.find_all(function(err,result){
    return res.status(200).json(result);
    });
  },

  sortCustomersByName: function(req, res) {
    var dbCustomer = new Customer();
    var limit = req.params.limit;
    var offset = req.params.offset;
    var result = dbCustomer.sort_by("name", limit, offset, function(err,result){
    return res.status(200).json(result);
    });
  },

  sortCustomersByRegisteredAt: function(req, res) {
    var dbCustomer = new Customer();
    var limit = req.params.limit;
    var offset = req.params.offset;
    var result = dbCustomer.sort_by("registered_at", limit, offset, function(err,result){
    return res.status(200).json(result);
    });
  }
}
