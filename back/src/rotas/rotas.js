import Produtos from "./produtos/ProdutosRota.js"

const rotasArr = ["Produtos"]
const rotasClass = {
    produto: Produtos
}

function rotasMethod(mtd, rotaClass) {
    const methods = {
        "GET": rotaClass.get(),
        "POST": rotaClass.post(),
        "PUT": rotaClass.put(),
        "DELETE": rotaClass.delete()
    };
    return methods[mtd];
}
export default (method, path, content = undefined) => {
    // Verifica qual é o caminho do endpoint
    if (!rotasArr[path]) {
        const rotaCl = rotasClass[path];
        //Chama o method adequado
        rotasMethod(method, rotaCl);
    }
}
