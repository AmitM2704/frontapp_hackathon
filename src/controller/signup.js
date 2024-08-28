const resp = require('../helper/resp');
const myDB = require('../mydb');
const path = require('path');

// exports.signup = async(req,res,next)=>{

//     const {username,password,contact,address} = req.body;
//     const checkquery = 'SELECT count(*) count FROM user WHERE contact = ?';
//     myDB.query(checkquery,[contact],(err,result)=>{
//         if (err){
//             return resp(400,{message: "Failure!" },res);

//         }
//         const getcount = result.map(result =>({
//             has_contact:result.count
//         }));
//         //console.log(getcount[0].has_contact);
//         if (getcount[0].has_contact >= 1){
//             return resp(400,{message: "Contact Already Exists!" },res);

//         }
//         else{
//             const query = 'INSERT INTO user (username,password,contact,address) VALUES (?,?,?,?)';
//             myDB.query(query,[username,password,contact,address],(err,result)=>{
//                 if(err){
//                     console.log(err);
//                     return resp(400,{message :"Values Not Inserted!" },res);
//                 }

//             });
//             return resp(200,{message :"values inserted successfully!" },res);    
//         }
//     });
// } 


app.get("/signup",(res,req)=>{
    res.render("getstr");
})