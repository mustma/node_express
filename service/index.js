var userSQL = require('../db/usersql');
var connection = require('../db/dbPool');

module.exports = class Index{
    constructor(){

    }
    queryUsers(req,res){
        let userList = connection.getConnection(userSQL.queryAll,'success',req,res);
        return userList;
    }
    addUser(req,res){
        let userList = connection.getConnection(userSQL.insert,'success',req,res);
        return userList;
    }
    queryUserById(req,res){
        let userList = connection.getConnection(userSQL.getUserById,'success',req,res);
        return userList;
    }
    toString(){

    }
}