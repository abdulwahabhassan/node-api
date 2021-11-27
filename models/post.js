const mongoose = require('mongoose')

//schema is used to define the post structure and its requirement for mongoDb
const postSchema = new mongoose.Schema(
    {
        //Because we have a validator now, we can simplify our schema
        // title: {
        //     type: String,
        //     required: "Title is required",
        //     minlength: 4,
        //     maxlength: 150
        // },
        // body: {
        //     type: String,
        //     required: "Body is required",
        //     minlength: 4,
        //     maxlength: 2000
        // }
        title: {
            type: String,
            required: true,
        
        },
        body: {
            type: String,
            required: true
        }
    }
);

//we export the schema like so, to be used by the controller
module.exports = mongoose.model("Post", postSchema)