import express from 'express'
import upload from '../../middleware/upload.js'
import { uploadMedia } from './media.controller.js'



const router = express.Router()

router.post("/upload", upload.single("file"), uploadMedia)


export default router