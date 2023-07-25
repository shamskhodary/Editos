import pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";
dotenv.config();

let dbUrl = "";
const { NODE_ENV, DB_URL, DATABASE_URL } = process.env;

if (NODE_ENV === "test") {
  dbUrl = DB_URL_TEST;
} else if (NODE_ENV === "production") {
  dbUrl = DATABASE_URL;
} else {
  dbUrl = DB_URL;
}

// if (!DATABASE_URL) {
//   throw new Error('database not found');
// }

const connection = new Pool({
  connectionString: dbUrl,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export default connection;
