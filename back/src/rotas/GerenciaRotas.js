import ProdutosRota from "#rotas/produtos/ProdutosRota.js";

/**
 * Rota padrão
 */
export default class GerenciaRotas {
    #endpointExists() {
        const endpoints = ["/","/produtos"];
        return endpoints[this.endpoint] ? true : false;
    }

    constructor(method, endpoint, response, content = undefined) {
        this.method = method;
        this.endpoint = endpoint;
        this.response = response;
        this.content = content;

        if(!this.#endpointExists()) {
            const msg = {
                message: "Opss, página não encontrada..."
            };
            const headers = {
                "Content-Type": "json/plain",
                "Content-Lenth": Buffer.byteLength(msg.message)
            }
            response.writeHead(200, headers).end(JSON.stringify(msg));
        }
    }
}
