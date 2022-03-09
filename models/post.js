import mongoose from 'mongoose'
import { Comment } from './comment.js'

const Schema = mongoose.Schema

const postSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  time: {type: Date, default: Date.now()},
  text: String,
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
} 