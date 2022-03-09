import { Router } from 'express'
import * as postsCtrl from "../controllers/posts.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

// localhost:3000/posts
router.get('/', isLoggedIn, postsCtrl.index) 
//localhost:3000/posts/new
router.get("/new", isLoggedIn, postsCtrl.new) 
//localhost:3000/posts/:id
router.get('/:id', isLoggedIn, postsCtrl.show) 


//localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.create) 

//localhost:3000/:id
router.delete('/:id', isLoggedIn, postsCtrl.delete) 

//localhost:3000/:id
router.put('/:id', isLoggedIn, postsCtrl.update)

export {
  router
} 