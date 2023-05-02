import pg from "pg";
const { Pool } = pg;

import dotenv from 'dotenv';
dotenv.config()

let DATABASE_URL = '';
const { NODE_ENV, DB_URL, DB_URL_PROD } = process.env;

if (NODE_ENV === 'test') {
    DATABASE_URL = process.env.DB_URL_TEST;
} else if (NODE_ENV === 'production') {
    DATABASE_URL = DB_URL_PROD;
} else {
    DATABASE_URL = DB_URL;
}

// if (!DATABASE_URL) {
//   throw new Error('database not found');
// }

const connection = new Pool({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default connection;