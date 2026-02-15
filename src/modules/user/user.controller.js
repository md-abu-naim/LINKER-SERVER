import { getUserCollection } from "./user.model.js"


// export const createUser = async() => {
//     const user = req.body
// }


// Get all users from DB
export const getUsers = async(req, res) => {
    const users = await getUserCollection().find().toArray();
    
    // res.json({
    //     success: true,
    //     data: users
    // })
    res.send(users)
}