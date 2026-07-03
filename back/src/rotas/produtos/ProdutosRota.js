import bd from "../../conexao/bdConexao.js";

/**
 * Atende aos métodos HTTP requesitados no endpoint `produtos`
 * @namespace ProdutosRotas
 */
export default new class ProdutosRotas {
    /**
     * Retorna o get sem requisitar paramatros, retornando a página ao cliente
     * @method get
     * @param {http.ServerResponee}
     */
    get(response) {
        const msg = "Página produtos\n";
        const headers = {
            "Content-Type": "text/plain",
            "Content-Length": msg.length,
        };
        response.writeHead(200, headers).end(msg);
    }
}
