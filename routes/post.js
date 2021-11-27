//This entire routes file can be used as a middleware into our application
const express = require('express'); //import express so that we can use its Router method
const postController = require('../controllers/post'); //import post controller
const validator = require("../validator")

const router = express.Router();

//our requests will now be handled by the express router
//The router will accept the url that is requested and forward the resposibility of the callback to controllers
router.get('/', postController.getPosts); //to fetch posts
router.post('/post', validator.createPostValidator, postController.createPost); //to create post //only when the validator is passed will it go to the next middleware i.e createPost

module.exports = router;