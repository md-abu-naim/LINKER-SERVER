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
