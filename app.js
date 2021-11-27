const express = require('express') //import express module to project
const app = express() //create express application which we will use to create server
const mongoose = require('mongoose')
const dotenv = require('dotenv') // used to loads environment variables from a .env file into process.env
//to use the dotenv we required, we need to invoke the config method
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
dotenv.config()
// app.get('/', (req, res) => { //takes url and call back which gives a response based on requested url
//     res.send("Hello world from node js and Hassan")
// }) 

//db
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
    )
.then (() => console.log('DB connected')) //we connect to the database

//if there is an error in the connection, we log the error message like so
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})

// const port = 8080
// app.listen(port, () => console.log(`A node js api is listening on port: ${port}`)) //listen for connections on the given port
// //back ticks allows inserting a variable in a string as literals

    //Put routes in seperate file to keep app organized
// const postRoutes = require('./routes/post') //import post.js module. You don't need to spell out post.js in full

// app.get('/', postRoutes.getPosts); //here we have extracted the callback(route) to a seperate module and required it into this module 

// const port = 8080
// app.listen(port, () => {
//     console.log(`A node js api is listening on port: ${port}`);
// }); //listen for connections on the given port
//back ticks allows inserting a variable in a string as literals

    //Using morgan package
//Morgan is an HTTP request logger middleware for node.js
const morgan = require('morgan') //import morgan
const postRoutes = require('./routes/post') //import post.js module. You don't need to spell out post.js in full

//use morgan middleware 
app.use(morgan('dev')) //This will log to the console whichever route you are getting a request from when running the dev script(app.js)

// //Create your own middleware
// const myOwnMiddleWare = (req, res, next) => {
//     console.log('middleware working!!')
//     next()
// }
// //use own middleware
// app.use(myOwnMiddleWare)
app.use(bodyParser.json())

app.use(expressValidator())

app.use(postRoutes); //postRoutes serve as a middleware for handling the request url and passing the resposibility of the 
//callback to controller, which sends a response based on the request

// //now we reference port to the value stored inside the .env file
// const port = 8080
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`A node js api is listening on port: ${port}`)
});

//to acess the environment variables we created in .env file, we install dotenv from npm and require it in the app
    