import { Post } from "../models/post.js"
import { Comment } from "../models/comment.js"

function index(req, res){
  console.log("index fun :)");
}

function show (req, res){
  console.log("show me the function xD");
}

function create(req, res){
  console.log("create new fun");
}

function deletePost (req, res){
  console.log("delete fun :(");
}

function update (req, res){
  console.log("update the fun");
}

export {
  index,
  show,
  create,
  deletePost as delete,
  update
}

