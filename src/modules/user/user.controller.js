import { getUserCollection } from "./user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb"
import { getPosts } from "../post/post.controller.js"


// Create user in DB
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


// Get user by id
export const getUserByEmail = async(req, res) => {
    const collection = await getUserCollection()
    const {email} = req.params

    const user = await collection.findOne({email})

    res.json({
        success:true,
        data:user
    })
}


// Update user by ID
export const updateUser = async(req, res) => {
    const collection = await getUserCollection()
    const posts = await getPosts()
    const user = req.body
    const {id} = req.params
    const idObj = {_id: new ObjectId(id)}
    const options = {upsert: true}
    
    const updateDoc = {
        $set:{
            name: user.name,
            email: user.email,
            birth: user.birth,
            gender: user.gender,
            profile: user.profile,
            cover: user.cover,
            bio: user.bio,
            school: user.school,
            university: user.university,
            work: user.work,
            location: user.location,
            currentCity: user.currentCity,
           posts
        }
    }
    const result = await collection.updateOne(idObj, updateDoc, options)
    res.json({
        success: true,
        data: result
    })
}