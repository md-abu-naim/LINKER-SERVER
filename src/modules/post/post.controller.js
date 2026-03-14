import { getPostCollection } from "./post.model.js"



// Get all posts from Database
export const getPosts = async (req, res) => {
    const collection = await getPostCollection()

    const posts = await collection.find().toArray()
    res.json({
        success: true,
        data: posts
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