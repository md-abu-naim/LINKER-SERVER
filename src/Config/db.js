import { MongoClient } from 'mongodb';

let db 

export const connectDB = async() => {
    const client = new MongoClient(process.env.MONGO_URI)

    db = client.db('posts')

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

export {db}