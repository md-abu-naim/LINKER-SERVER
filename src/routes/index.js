import express from 'express'
import userRoutes from '../modules/user/user.router.js'
import postRoutes from '../modules/post/post.router.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('LINKER is running in server')
})

router.use('/users', userRoutes)
router.use('/posts', postRoutes)

export default router