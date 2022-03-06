import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})


// GET - ALL posts: localhost:3000/posts (index)
router.get('/', postsCtrl.index)
// GET - specific post: localhost:3000/posts/:id (show)
router.get('/:id', postsCtrl.show)
// CREATE - create new post: localhost:3000/posts
router.post('/', postsCtrl.create )
// DELETE - delete post: localhost:3000/:id
router.delete('/:id', postsCtrl.delete)
//PUT - update post: localhost:3000/:id
router.put('/:id', postsCtrl.update)

export {
  router
}
