import { getUserCollection } from "./user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
    const collection = await getUserCollection()
    const { name, password, email, birth, gender, } = req.body

    const hassedPass = await bcrypt.hash(password, 10)

    const newUser = { name, password: hassedPass, email, birth, gender }

    const result = await collection.insertOne(newUser)

    res.json({
        success: true,
        data: result
    })
}


// Login User
export const loginUser = async (req, res) => {
    const collection = await getUserCollection()
    const { password, email } = req.body

    const user = await collection.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.json({
        user: { id: user._id, email: user.email, name: user.name },
        token
    })
}


// Get all users from DB
export const getUsers = async (req, res) => {
    const usersCollection = await getUserCollection()
    const users = await usersCollection.find().toArray();

    res.json({
        success: true,
        data: users
    })
}