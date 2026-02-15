import { getUserCollection } from "./user.model.js"


// export const createUser = async(req, res) => {
//     const user = req.body
//     console.log('user', user);

//     const result = await getUserCollection.insertOne(user)
//     console.log('result', result);

//     res.send(result)
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