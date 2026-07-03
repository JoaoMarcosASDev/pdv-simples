import { createServer } from "http";
import gRotas from "./rotas/gerenciaRotas.js";

const porta = 8000;

const server = createServer((req, res) => {
     gRotas(req.method, req.url, res);
});

server.listen(porta, () =>
    console.log(`Escutando na porta ${ porta }`));
