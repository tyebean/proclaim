import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  avatar: String,
  text: String,
  time: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  post: {type: Schema.Types.ObjectId, ref: "Post"}
})

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
} 