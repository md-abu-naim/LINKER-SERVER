import { getUserCollection } from "./user.model.js"


export const createUser = async(req, res) => {
    const user = req.body
    console.log('user', user);

    const userBody = await getUserCollection()
    const result = await userBody.insertOne(user)

    res.json({
        success: true,
        data: result
    })
}


// Get all users from DB
export const getUsers = async(req, res) => {
    const usersCollection = await getUserCollection()
    const users = await usersCollection.find().toArray();
    
    res.json({
        success: true,
        data: users
    })
}