var userSQL = require('../db/usersql');
var connection = require('../db/dbPool');

module.exports = class Users{
    constructor(){

    }
    queryUsers(req,res){
        let userList = connection.getConnection(userSQL.queryAll,'success',req,res);
        return userList;
    }
    toString(){

    }
}