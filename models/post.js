import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  avatar: String,
  username: String,
  author: { ObjectId, ref: "Profile" },
  time: String,
  text: String,
  comment: {commentSchema},
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}



