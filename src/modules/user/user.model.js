import { getDB } from "../../config/db.js";


export const getUserCollection = async() => {
    const db = await getDB()

    return db.collection("users");
}