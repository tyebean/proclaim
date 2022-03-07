import mongoose from 'mongoose'
import { Comment } from './comment.js'

const Schema = mongoose.Schema

const postSchema = new Schema({
  avatar: String,
  username: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  time: String,
  text: String,
  // comment: { Comment },
  // todo: add something that a user can select...
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}
