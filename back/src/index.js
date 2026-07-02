import { createServer } from "http";
import rotas from "./rotas/rotas.js"

const porta = 8000;

const server = createServer((req, res) => {
     rotas(req.method, req.url, res);
});

server.listen(porta, () =>
    console.log(`Escutando na porta ${ porta }`));
