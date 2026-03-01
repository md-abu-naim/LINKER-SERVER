import express from 'express'
import {  createUser, getUserByEmail, getUserById, getUsers, loginUser, updateUser } from './user.controller.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/:email', getUserByEmail)
router.get('/user/:id', getUserById)
router.put('/update/:id', updateUser)


export default router;
