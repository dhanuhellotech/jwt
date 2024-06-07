const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
module.exports = mongoose.connect('mongodb+srv://dhanalakshmihellotech:pZimVlCpyTli6n3B@todo.hugefr0.mongodb.net/',{
    useUnifiedTopology :true,
    useNewUrlParser :true,
    useFindAndModify :false
},err =>{
    if(err){
        console.log('Error id db connection')
        }else{
            console.log('connected to db')
            }
            
})