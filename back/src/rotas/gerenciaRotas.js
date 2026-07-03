import ProdutosRota from "./produtos/ProdutosRota.js"

const rotasArr = ["produtos"]
const rotasClass = {
    "/produtos": ProdutosRota
}

const rotasMethod = (mtd, rotaClass) => {
    const methods = {
        "GET": rotaClass.get,
/*        "POST": rotaClass.post(),
        "PUT": rotaClass.put(),
        "DELETE": rotaClass.delete()
        */
    };

    // Retorna o método requisitado
    return methods[mtd];
}

export default (method, endpoint, response, content = undefined) => {

    // Verifica qual é o endpoint
    if (rotasClass[endpoint]) {
        const rotaCl = rotasClass[endpoint];

        // Escolhe o method adequado
        const methodVerb = rotasMethod(method, rotaCl);

        // Adiciona os parâmetros
        methodVerb(response);
    }
}
