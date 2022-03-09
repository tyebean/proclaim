import { Comment } from "../models/comment.js"
import { Post } from "../models/post.js";

function createComment (req, res){
  req.body.author = req.user?.profile._id
  Post.findById(req.params.id)
  .then( post => {
    // console.log("post is", post);
    req.body.post = post._id
    Comment.create(req.body) 
    .then( comment => {
      post.comments.push(comment._id)
      post.save()
      // console.log("the comment is:", comment);
      res.redirect(`/posts/${req.params.id}`) 
    }) 
    .catch(err=>{
      console.log(err, 'WE HAVE A CREATE ERROR ❌');
      res.redirect('/posts')
    })
  })
} 

export {
  createComment,
} 