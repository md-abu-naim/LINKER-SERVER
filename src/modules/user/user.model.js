import { getDB } from "../../config/db.js";


export const getUserCollection = () => {
    const db = getDB()

    return db.collection("users");
}