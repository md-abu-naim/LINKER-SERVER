const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: ['http://localhost:3000', 'https://linkerbd.vercel.app', 'https://linker-psi-ruddy.vercel.app'],
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to our LINKER!')
})

app.listen(port, () => {
  console.log(`LINKER listening on port ${port}`)
})
