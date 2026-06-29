import { createServer } from "http";

const porta = 8000;
const server = createServer((req, res) => {
    
    const msg = "Funcionou!!!";

    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Content-Length": msg.length,
    }).end(msg);
}).listen(porta, () =>
    console.log(`Escutando na porta ${ porta }`));
