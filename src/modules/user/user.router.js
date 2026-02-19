import express from 'express'
import {  createUser, getUsers, loginUser } from './user.controller.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)


export default router;
