import { createServer } from "http";
import rotas from "./rotas/rotas.js"

const porta = 8000;

const server = createServer((req, res) => {
    let msg = "";
    // Trabalhar nisso
     rotas(req.method, req.url);
});

server.listen(porta, () =>
    console.log(`Escutando na porta ${ porta }`));
