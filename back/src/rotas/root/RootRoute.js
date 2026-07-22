export default class  {
    static get(response) {
        const msg = { message: "Página Raiz" };
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        response.writeHead(200, headers).end(stringMsg);
    } 
}

