let valorProduto = 1000 * 40;
let valorVenda = 1000 * 90;
let lucro = 0;

if (valorProduto < 0 || valorVenda < 0){
    console.log("Insira algum valor válido.");
} else {
    lucro = valorVenda - (valorProduto - valorProduto / 100 * 20);
    console.log("O lucro da empresa é "+ lucro +" reais.");
}
