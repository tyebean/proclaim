import { Router } from 'express'
import * as postsCtrl from "../controllers/posts.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

// GET - ALL posts: localhost:3000/posts (index)
router.get('/posts', postsCtrl.index) 
// GET - specific post: localhost:3000/posts/:id (show)
// router.get('/:id', postsCtrl.show)
// GET - new post: localhost:3000/posts/new (new)
router.get("/new", postsCtrl.new)
// CREATE - create new post: localhost:3000/posts (index (redirect))
router.post('/', postsCtrl.create )
// DELETE - delete post: localhost:3000/:id
router.delete('/:id', postsCtrl.delete) 
//PUT - update post: localhost:3000/:id
router.put('/:id', postsCtrl.update)

export {
  router
} 
