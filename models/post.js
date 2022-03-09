import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  time: {type: Date, default: Date.now()},
  text: String,
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
} 