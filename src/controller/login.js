const resp = require('../helper/resp');
const myDB = require('../mydb');

exports.login = async(req,res,next)=>{

    const {username,password} = req.body;
    const check ='SELECT * FROM user WHERE username = ? AND password = ?';
    myDB.query(check,[username,password],(err,result)=>{
        if(err){
        return resp(400,{message : "Error Logging In!" },res);
            
        }
        else{
            console.log(result);
            if(result.length<=0){
                return resp(200,{message : "No Matching Username/Password!"},res);
            }
            else{
            const sesh_token = result.map(result =>({
                username:result.username,
                uid:result.uid,
                contact:result.contact
            }));
            return resp(200,{message : "Successfully Logged In!", data:sesh_token},res);
            }
            
        }
        

    
    })  
} 