var UserSQL = {  
    insert:'INSERT INTO User(id,userName,password,scretekey) VALUES(?,?,?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserById:'SELECT * FROM User WHERE id = ? ',
};
module.exports = UserSQL;