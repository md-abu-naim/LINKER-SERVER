import { getDB } from "../../config/db.js"


export const getPostCollection = async() => {
    const db = await getDB()

    return db.collection('posts')
}