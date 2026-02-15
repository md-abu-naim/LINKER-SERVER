import express from 'express'

const router = express.Router()

router.get('/', async(req, res) => {
    res.send('LINKER is running in server')
})

export default router