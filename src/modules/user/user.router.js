import express from 'express'
import {  createUser, getUsers, loginUser } from './user.controller.js'

const router = express.Router()

router.post('/login', createUser)
router.post('/', loginUser)
router.get('/', getUsers)


export default router;
