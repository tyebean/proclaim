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

function newPost (req, res) {
  res.render('posts/new')
}

//specific post 
// function show (req, res){
//   console.log("show me the function xD");
// }

// new post (redirect to /posts)
function create(req, res){
  console.log("create new fun");
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

//flights create
// function create(req, res) {
//   console.log("req.body is", req.body);
//   for (let key in req.body){
//     if (req.body[key] === '') delete req.body[key]
//   }
//   const flight = new Flight (req.body)
//   console.log("flight is", flight);
//   flight.save(function(err){
//     if (err) return res.redirect('/flights/new') 
//     res.redirect('/flights')
//   }) 
//   }

function deletePost (req, res){
  console.log("delete fun :(");
}

function update (req, res){
  console.log("update the fun");
}

export {
  index,
  // show,
  create,
  deletePost as delete,
  update,
  newPost as new,
}

