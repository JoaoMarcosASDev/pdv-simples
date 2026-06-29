import { DatabaseSync } from "node:sqlite";

try {
    const db = new DatabaseSync(
       process.env.URL_DB 
    );
} catch (err) {
    console.error(err);
}
