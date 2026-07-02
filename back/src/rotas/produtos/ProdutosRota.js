import bd from "../../conexao/bdConexao.js";

export default new class ProdutosRotas {
    // Chegou na rota produtos
    get(response) {
        const msg = "Página produtos\n";
        const headers = {
            "Content-Type": "text/plain",
            "Content-Length": msg.length,
        };
        response.writeHead(200, headers).end(msg);
    }
}
