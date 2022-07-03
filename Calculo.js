function valorTotalDoProdutoComDisconta(x, y){
    let total = ( y - (x * (y / 100)))
    return total;
};

function totalDeDesconto (x, y){
    let total = (x * (y / 100))
    return total;
}

export {valorTotalDoProdutoComDisconta, totalDeDesconto};