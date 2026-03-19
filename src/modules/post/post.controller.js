import { getPostCollection } from "./post.model.js"



// Get all posts from Database
export const getPosts = async (req, res) => {
    const collection = await getPostCollection()

    const posts = await collection.find().sort({ createdAt: -1 }).toArray()
    res.json({
        success: true,
        data: posts
    })
}

// Get posts from db using email
export const getPostsByEmail = async(req, res) => {
    const collection = await getPostCollection()
    const {email} = req.params
    
    const result = await collection.find({"author.email": email}).sort({ createdAt: -1 }).toArray()
    res.json({
        success: true,
        data: result
    })
} 

// Save post in Database => 
export const createPost = async (req, res) => {
    const collection = await getPostCollection()
    const body = req.body

    const result = await collection.insertOne(body)
    res.json({
        success: true,
        data: result
    })
}