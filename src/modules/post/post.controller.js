import { getPostCollection } from "./post.model.js"



// Get all posts
export const getPosts = async(req, res) => {
    const collection = await getPostCollection()

    const posts = await collection.find().toArray()
    res.send(posts)
}