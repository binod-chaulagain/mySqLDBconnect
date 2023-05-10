const mysql = require('mysql');
const mysqlConnection1 = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:'name' //da name in MYsql
})

 mysqlConnection1.connect((err) =>{
    if(!err){
        console.log('DB connect success');

    }else{
        console.log('Error in DB connect' +JSON.stringify(err,undefined,2));
    }
})


module.exports = mysqlConnection1; 