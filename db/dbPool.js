module.exports = {
    getConnection(sql, msg, req, res) {
        return new Promise((resolve,reject)=>{
            // 获取前台页面传过来的参数 
            var params = req.body,
                param = [];
            if (typeof params == "object" && Object.keys(params).length > 0) {
                this.eachObject(params, param);
            } else {
                params = req.params || req.query;
                this.eachObject(params, param);
            }

            pool.getConnection(function (err, connection) {
                connection.query(sql, param, function (err, result) {
                    if (result) {
                        result = {
                            code: 200,
                            msg: msg,
                            result: result
                        };
                        resolve(result);
                    }else{
                        result = {
                            code: 500,
                            msg: '请检查您的数据库链接或参数是否有误'
                        };
                        reject(result);
                    }   
                    // 释放连接  
                    connection.release();
                    
                });
            });
        })
    },
    eachObject(obj, param) {
        for (var value in obj) {
            console.log(obj[value]);
            param.push(obj[value]);
        }
    }

}

