import connection from "./connection.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(__dirname);

const dbBuild = () => {
  const file = fs.readFileSync(path.join(__dirname, "build.sql")).toString();
  return connection.query(file);
};

dbBuild()
  .then(() => {
    console.log("Database built successfully");
  })
  .catch((err) => {
    console.log(err);
  });

export default dbBuild;
