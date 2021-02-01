function somaDeValores(number){
    let soma = 0;
    let total = 0;  
    for (let i = 1; i <= number; i++){
        total += i
        soma = soma + "+" + i 
    }
    soma = soma + "=" + total
    return soma
}
let num = 15
console.log(somaDeValores(num))