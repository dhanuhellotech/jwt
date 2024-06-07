const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
// const port = process.env.PORT || port ;
const router = require('./routes/goalRoutes')
const userrouter =require('./routes/userRoutes')
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = 5000
const app = express();
// app.get('/',(req,res)=>{
//     res.status(201).json({message :'welcome'})
// })
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
app.use('/api/goals',router)
app.use('/api/users',userrouter)
app.listen(port,(err)=>{
    if(err) console.log(err)
        console.log(`server is starting :${port}`)
})

mongoose.connect('mongodb+srv://dhanalakshmihellotech:pZimVlCpyTli6n3B@todo.hugefr0.mongodb.net/task')
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});