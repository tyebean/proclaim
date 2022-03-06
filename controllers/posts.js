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
    console.log(err, 'ctrlrs/idx/fun err');
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

