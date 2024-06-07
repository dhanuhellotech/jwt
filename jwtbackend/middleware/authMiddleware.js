const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

const User =('../model/userModel.js')


const protect = asyncHandler( async (req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
token = req.headers.authorization.split('')[1];

    }catch(error){
    
    }
}
})

module.exports = {
    protect
}