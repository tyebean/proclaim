import { Post } from "../models/post.js"

function index(req, res){
  Post.find({})
  .populate('author') 
  .then (posts => {
    res.render('posts/index',{
      posts
    })
  })
  .catch(err =>{
    console.log('❌ INDEX ERROR', err);
    res.redirect('/posts')
  })
} 

function newPost (req, res) {
  console.log("❓ we're tryna see /new up in here");
  res.render('posts/new')
}

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

function show (req, res){
  Post.findById(req.params.id)
  .populate('comments') 
  .populate({path: 'comments', populate: {path: 'author'}})  
  .populate('author') 
  .then ( post => {
    res.render('posts/show', {
      post,
      })
  })
  .catch( err => {
    console.log('❌  SHOW ERROR', err);
    res.redirect('/posts')
  })
}

function deletePost (req, res){
  console.log("delete fun :(");
  Post.findById(req.params.id)
  .then( post => {
    if (post.author.equals(req.user.profile._id)) {
      post.delete()
      .then(() => {
        res.redirect("/posts")
      })
    } else {
      throw new Error ("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("❌ the DELETE error:", err)
    res.redirect("/posts")
  })
}

function update (req, res){
  console.log("✅ update the fun");
  console.log(req.body.text);
  Post.findById(req.params.id)
  .then( post => {
    if (post.author.equals(req.user.profile._id)) {
      post.update(req.body, {new: true})
      .then(() => { 
        res.redirect(`/posts/${post._id}`)
      }) 
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("❌ the UPDATE error:", err)
    res.redirect("/posts")
  })
  console.log(req.body.text);
} 

export {
  index,
  show,
  create,
  deletePost as delete,
  update,
  newPost as new,
} 

