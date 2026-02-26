import express from 'express'
import {  createUser, getUserByEmail, getUsers, loginUser } from './user.controller.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/:email', getUserByEmail)


export default router;
