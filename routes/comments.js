import { Router } from 'express'
import * as commentsCtrl from "../controllers/comments.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

//identify proper route:
  //
// create ui that issues request that matches route
  //
//define route + map to controller action
  //
//code/export controller action
  //
//render view or redirect and add the  view .ejs

//comments
//view comments on show.ejs 
//make a comment on show.ejs


//GET - read all comments for a blog /blogs/:id/comments
// GET - create new comment :S

//localhost:3000/posts/:id 
router.post('/:id', isLoggedIn, commentsCtrl.createComment) 

export {
  router
} 

