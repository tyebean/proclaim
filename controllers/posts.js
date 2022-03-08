import { Post } from "../models/post.js"
import { Profile } from "../models/profile.js"
import { Comment } from "../models/comment.js"

function index(req, res){
  console.log("index function ✅");
  Post.find({})
  .then (posts => {
    console.log('rendering posts ✅');
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

// specific post 
function show (req, res){
  console.log("showing me the post ✅");
  Post.findById(req.params.id)
  // .populate('Profile')
  .then ( post => {
    console.log(post);
    res.render('posts/show', {
      post
    })
  })
  .catch( err => {
    console.log('❌  SHOW ERROR', err);
    res.redirect('/posts')
  })
  // Profile.findById(req.params.id)
  // .then ( profile => {
  //   console.log("profile is", profile);
  //   Profile.findById(req.user.profile._id)
  //   .then(self => {
  //     const isSelf = self._id.equals(profile._id)
  //     res.render("profile/show",{
  //       profile,
  //       isSelf
  //     })
  //   })
  // })
}

function edit (req, res){
  console.log('✅ edit sanity check');
  Post.findById(req.params.id)
  .then(post =>{
    res.render("posts/edit",{
      post,
    })
  })
  .catch(err=>{
    console.log("❌ EDIT ERROR", err);
    res.redirect("/posts")
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
  console.log("update the fun");
  Post.findById(req.params.id)
  .then( post => {
    if (post.author.equals(req.user.profile._id)) {
      post.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/posts/${req.params.id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("❌ the UPDATE error:", err)
    res.redirect("/posts")
  })
} 

export {
  index,
  show,
  create,
  deletePost as delete,
  update,
  newPost as new,
  edit
}

