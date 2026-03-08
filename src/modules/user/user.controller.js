import { getUserCollection } from "./user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb"


// Create user in DB
export const createUser = async (req, res) => {
    const collection = await getUserCollection()
    const { name, birth, gender, email, password, bio, cover, profile, currentCity, location, school, work, university } = req.body

    const hassedPass = await bcrypt.hash(password, 10)

    const newUser = { name, birth, gender, email, password: hassedPass, bio, cover, profile, currentCity, location, school, work, university, joined: new Date().toDateString() }

    const result = await collection.insertOne(newUser)

    res.json({
        success: true,
        data: result
    })
}


// Login user
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

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )

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


// Get user by email
export const getUserByEmail = async (req, res) => {
    const collection = await getUserCollection()
    const { email } = req.params

    const user = await collection.findOne({ email })

    res.json({
        success: true,
        data: user
    })
}


// Get user by id
export const getUserById = async (req, res) => {
    const collection = await getUserCollection()
    const { id } = req.params

    const user = await collection.findOne({ _id: new ObjectId(id) })

    res.json({
        success: true,
        data: user
    })
}


// Update user by email
export const updateUser = async (req, res) => {
    const collection = await getUserCollection()
    const { id } = req.params

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: req.body })

    res.json({
        success: true,
        data: result
    })
}