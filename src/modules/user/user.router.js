import express from 'express'
import { createUser, getUserByEmail, getUserById, getUserProfile, getUsers, loginUser, updateUser } from './user.controller.js'
import { verifyJWT } from '../../middleware/verifyJWT.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', verifyJWT, getUsers)
router.get('/profile/:email', getUserProfile)
router.get('/user/:id', verifyJWT, getUserById)
router.get('/:email', verifyJWT, getUserByEmail)
router.put('/update/:id', verifyJWT, updateUser)


export default router;
