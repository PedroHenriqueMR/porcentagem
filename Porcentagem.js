import {valorTotalDoProdutoComDisconta, totalDeDesconto} from './Calculo.js'

let totalDesconto = 74;
let totalDoPorduto = 2500;

const valorDoProduto = valorTotalDoProdutoComDisconta(totalDesconto, totalDoPorduto);
const valorDeDesconto = totalDeDesconto(totalDesconto, totalDoPorduto);

console.log("Valor do produto com desconto: R$"+valorDoProduto.toFixed(2))

console.log("Total do desconto: R$"+valorDeDesconto.toFixed(2))