import express from 'express'
import {  createUser, getUserByEmail, getUsers, loginUser, updateUser } from './user.controller.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/:email', getUserByEmail)
router.put('/:id', updateUser)


export default router;
