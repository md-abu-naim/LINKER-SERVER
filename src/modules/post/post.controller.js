import { getPostCollection } from "./post.model.js"



export const getPosts = async(req, res) => {
    const collection = await getPostCollection()

    const posts = collection.find().toArray()
    res.send(posts)
}