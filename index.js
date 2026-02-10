const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser')
const cors = require('cors');
const propertyRouter = require('./router/propertyRouter')
const userRouter = require('./router/users')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
app.use(cors())

app.use(cookie())

app.use(session({
    secret: 'secret1234',
    resave: false,
    saveUninitialized : false

}))

//create a path
app.use('/api/property', propertyRouter)
app.use('/api/users', userRouter)

// mongoose connection
// let URI = 'mongodb://localhost:27017/property'
let URI = 'mongodb+srv://sujeetbhai:ps123456@ecommerce.aayqcnq.mongodb.net/property'
 mongoose.connect(URI)
    .then(() => {
        console.log('db is created/connected');
        
    })
    .catch((err)=>{
        console.log(err.message, 'pls try again');
        
    })
// error handler 
app.use((err, req, res, next) => {
    if(err){

        res.status(500).json({msg: 'somthing wrong pls try after some time'})
    }
})

let PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server is ready http://localhost:5000')
})
