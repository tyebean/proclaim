import { Post } from "../models/post.js"
import { Comment } from "../models/comment.js"

///posts (all posts)
function index(req, res){
  console.log("index fun :)");
  Post.find({})
  .then(posts => {
    res.render('posts/index',{
      posts
    })
  })
  .catch(err =>{
    console.log(err, 'ctrlrs/idx/fun ERROR');
    res.redirect('/posts')
  })
}

//specific post 
function show (req, res){
  console.log("show me the function xD");
}

// new post (redirect to /posts)
function create(req, res){
  console.log("create new fun");
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  .then(post=>{
    res.redirect('/posts')
  })
  .catch(err=>{
    console.log(err, 'create ERROR');
    res.redirect('/posts')
  })
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

