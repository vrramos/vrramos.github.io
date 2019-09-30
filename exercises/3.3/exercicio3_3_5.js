function verificaNumerosRepetidos(numeros){
    
    let numRepetidos = []
    let numRepetido = []

    for(let i = 0; i < numeros.length - 1; i++){
        if (numeros[i + 1] == numeros[i]){
            numRepetidos.push(numeros[i])
        }
    }
    let numMaior = 0;
    for (let x = 0; x < numRepetidos.length - 1; x++){
        if (numRepetidos[x + 1] == numRepetidos[x]){
            numMaior = numRepetidos[x]
        } 
    }
    return numMaior;
}

let array = [5, 2, 2, 3, 2, 5, 8, 3, 2, 2,]
console.log(verificaNumerosRepetidos(array.sort()))
