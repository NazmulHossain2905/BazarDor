import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;

if (!uri) {
  throw new Error("DATABASE connection failed");
}

const client = new MongoClient(uri);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, { client }),
});
