import { Router } from 'express'
import * as postsCtrl from "../controllers/posts.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

// GET - localhost:3000/posts (index.ejs)
router.get('/', isLoggedIn, postsCtrl.index) 
// GET - localhost:3000/posts/:id (show.ejs)
router.get('/:id', isLoggedIn, postsCtrl.show)
// GET - localhost:3000/posts/new (new.ejs)
router.get("/new", isLoggedIn, postsCtrl.new) 
// GET - edit post: localhost:3000/posts/:id/edit
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)

// CREATE - create new post: localhost:3000/posts (index (redirect))
router.post('/', isLoggedIn, postsCtrl.create ) 

// DELETE - delete post: localhost:3000/:id
router.delete('/:id', isLoggedIn, postsCtrl.delete) 


//PUT - update post: localhost:3000/:id
router.put('/:id', isLoggedIn, postsCtrl.update)


export {
  router
} 
