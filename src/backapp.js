const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const db = require('./mydb') ;
const dotenv = require('dotenv');



const app = express();
dotenv.config({path:'./.env'});

app.use(cors());
app.use(bodyParser.json());

const rt = require('./router/r1');

app.use('/' , rt);

app.use((req , res , next )=>{
    res.send(`this is root server`);
});

module.exports = app;
