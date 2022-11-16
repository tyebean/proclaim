import { Router } from 'express'
import * as commentsCtrl from "../controllers/comments.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.post('/:id', isLoggedIn, commentsCtrl.createComment) 

export {
  router
} 

