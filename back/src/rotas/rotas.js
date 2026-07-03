import Produtos from "./produtos/ProdutosRota.js"

const rotasArr = ["produtos"]
const rotasClass = {
    "/produtos": Produtos
}

const rotasMethod = (mtd, rotaClass) => {
    const methods = {
        "GET": rotaClass.get,
/*        "POST": rotaClass.post(),
        "PUT": rotaClass.put(),
        "DELETE": rotaClass.delete()
        */
    };
    return methods[mtd];
}

export default (method, path, response, content = undefined) => {
    // Verifica qual é o endpoint
    if (rotasClass[path]) {
        const rotaCl = rotasClass[path];
        // Escolhe o method adequado
        const methodVerb = rotasMethod(method, rotaCl);
        // Coloca os parametros
        methodVerb(response);
    }
}
