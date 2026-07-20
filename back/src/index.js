import { createServer } from "http";
import GerenciaRotas from "#rotas/GerenciaRotas.js";

const port = 3000;

const server = createServer((req, res) => {
    const router = new GerenciaRotas(req.method, req.url, res);
});

server.listen(port, () =>
    console.log(`Escutando na port ${ port }`));
