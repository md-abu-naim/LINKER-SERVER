import express from 'express'
import { createPost, getPostByEmail, getPosts } from './post.controller.js'
import { verifyJWT } from '../../middleware/verifyJWT.js'

const router = express.Router()

router.get('/', verifyJWT, getPosts)
router.get('/:email', verifyJWT, getPostByEmail)
router.post('/', verifyJWT, createPost)


export default router;