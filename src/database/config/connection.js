import pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";
dotenv.config();

let dbUrl = "";
let ssl = false;
const { NODE_ENV, DB_URL, DATABASE_URL } = process.env;

if (NODE_ENV === "development") {
  dbUrl = DB_URL;
} else if (NODE_ENV === "production") {
  dbUrl = DATABASE_URL;
  ssl = {
    require: true,
    rejectUnauthorized: false,
  };
} else {
  throw new Error("Invalid environment");
}

if (!dbUrl) {
  throw new Error("database not found");
}

const connection = new Pool({ connectionString: dbUrl, ssl });

export default connection;
