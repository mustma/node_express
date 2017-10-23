var express = require('express');
var users = require('../service/users');

/* GET users listing. */
exports.list = async function(req, res, next) {
  var userList = await new users().queryUsers(req,res);
  res.send(userList);
};
exports.get = function(req, res, next) {
  res.send('respond with a resource11');
};
