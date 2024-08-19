const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
//keep in mind that require('mysql') works just fine in the host machine
const mysql = require('mysql2'); 
//but when we use containers require('mysql') poses problems as a package, therefore we are using mysql2 instead which works fine on the containerized environment
//if you met any incompatibility issues like this don't waste time using chat-gpt just search it straight on google and stackoverflow.
//at rare cases you might need to read some documentations D:
const app = express();
dotenv.configDotenv();
app.use(cors());
app.use(express.json());


const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("connected to database");
    app.listen(4000,(err)=>{
        if(err) throw err;
        console.log("listening on port 4000")
    });
})

app.get("/api/get",(req,res)=>{
    try{
        conn.query("SELECT * FROM Alerts",(err,results,fields)=>{
            res.json({msg: results[0].message});
        });
    }
    catch(ex){
        console.log(ex);
        res.status(501).json({msg:"internal server error"});
    }
})