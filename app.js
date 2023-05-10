const mysqlConnection1= require('./db connect/connect db');

const express = require('express');
const app = express();



const bodyParser= require("body-parser");
// parse application/json
app.use(bodyParser.json());




app.use(express.json());
 



// // to check only
app.get('/', (req, res) =>{
    res.json({
        success:1,
        message: "This is rest api working"
    })
})


const PORT = process.env.APP_PORT || 5500;
app.listen(PORT, ()=>{
    console.log("Server up and runnig on Port :- ", PORT);
})