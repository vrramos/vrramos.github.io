const fatorar = numero => {
    numeroFatorado = 1;
    for(let indice = 1; indice <= numero; indice++) {
        numeroFatorado *= indice
    }
    return `${numero}! = ${numeroFatorado}`
}

console.log(fatorar(6))
