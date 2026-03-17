import express from 'express'
import { createPost, getPosts, getPostsByEmail } from './post.controller.js'
import { verifyJWT } from '../../middleware/verifyJWT.js'

const router = express.Router()

router.get('/', verifyJWT, getPosts)
router.get('/:email', verifyJWT, getPostsByEmail)
router.post('/', verifyJWT, createPost)


export default router;