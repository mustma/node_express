var express = require('express');
var home = require('../service/index');

/* GET home page. */
exports.list = async function(req, res, next) {
  console.log("21212121");
  var result = await new home().queryUsers(req,res);
  res.send(result);  
};
exports.addUser = async function(req, res, next) {
  var result = await new home().addUser(req,res);
  res.send(result);  
};
exports.queryUserById = async function(req, res, next) {
  console.log("reset node");
  var result = await new home().queryUserById(req,res);
  res.send(result);  
};

