import express from 'express'
import userRoutes from '../modules/user/user.router.js'

const router = express.Router()

router.get('/', async(req, res) => {
    res.send('LINKER is running in server')
})

router.use('/users', userRoutes)

export default router