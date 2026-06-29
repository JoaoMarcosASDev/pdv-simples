import { DatabaseSync } from "node:sqlite";

try {
    const db = new DatabaseSync(
        "../bd/banco_de_dados.db"
    );
} catch (err) {
    console.error(err);
}
