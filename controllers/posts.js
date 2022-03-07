import { Post } from "../models/post.js"
import { Comment } from "../models/comment.js"


function index(req, res){
  console.log("index fun :)");
  Post.find({})
  .then(posts => {
    console.log('sanity check!');
    res.render('posts/index',{
      posts
    })
  })
  .catch(err =>{
    console.log(err, 'ctrlrs/idx/fun ERROR');
    res.redirect('/posts')
  })
} 

function newPost (req, res) {
  res.render('posts/new')
}

// specific post 
function show (req, res){
  console.log("show me the post xD");
  Post.findById(req.params.id)
  .populate('author')
  .then(post => {
    console.log(post);
    res.render('post/show', {
      post
    })
  })
  .catch(err=>{
    console.log(err);
    res.redirect('/posts')
  })
}

// new post (redirect to /posts)
function create(req, res){
  req.body.author = req.user?.profile._id
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
  update,
  newPost as new,
}

