import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: String,
  time: {type: Date, default: Date.now()},
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  post: {type: Schema.Types.ObjectId, ref: "Post"}
}) 

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
} 