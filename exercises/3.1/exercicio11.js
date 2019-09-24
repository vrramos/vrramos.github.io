salarioBruto = 900.80;
let salarioLiquido = 0;

inss = {
    aliquota8: 8,
    aliquota9: 9,
    aliquota11: 11,
    aliquotaMax: 570.88
}

if (salarioBruto <= 1.556,94){
    salarioBruto = salarioBruto - salarioBruto / 100 * inss.aliquota8;
}

console.log(salarioBruto);