import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  avatar: String,
  text: String,
  time: String,
  author: { ObjectId, ref: "profile"}
})

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}