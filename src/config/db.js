// import { MongoClient } from 'mongodb';

// let db 

// export const connectDB = async() => {
//     const client = new MongoClient(process.env.MONGO_URI)

//      db = client.db('LINKER')

//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// }

// export const getDB = () => {
//   if (!db) {
//     throw new Error("Database not connected!");
//   }

//   return db;
// };


import { MongoClient } from "mongodb";

let client;
let db;

export const connectDB = async () => {
  if (db) return db;

  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db("LINKER");
    console.log("MongoDB Connected");
  }

  return db;
};

export const getDB = () => {
  if (!db) throw new Error("Database not connected!");
  return db;
};
