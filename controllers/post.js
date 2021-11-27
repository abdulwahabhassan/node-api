const Post = require('../models/post')

exports.getPosts = (req, res) => { //takes url and call back which gives a response based on requested url
    // res.send("Hello world from node js, routed!")
    //instead of sending a plain text, we can send a json object
    // res.json({
    //     posts: [{ title: "Fist Post" }, { title: "Second Post"}]
    // });

    //get all the posts from mongodb
    const posts = Post.find() //this will find all the Posts on database
    .select("_id title body") //we can use select to specify what fields we want to retrieve
    .then((posts) => {
        res.json({posts: posts})
    })
    .catch(err => console.log(err))
};

//with data that will be sent by users from front end, we will create a new post
exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log("CREATING POST: ", req.body)

    //since we added the express-validator middleware and are handling all errors there, we don't need to do so here anymore
    // post.save((err, result) => {
    //     if(err) {
    //         return res.status(400).json({
    //             error: err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // })
    post.save()
    .then(result => {
        res.status(200).json({
            post: result
        })
    })

}