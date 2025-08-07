import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    created_at:{
        type : Date,
        required : true
    }
})

// export default mongoose.model("Thread", ThreadSchema)
const Post = mongoose.model("Post",postSchema)

export default Post;