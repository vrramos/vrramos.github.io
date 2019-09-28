function verificaValorIndice(array){    
    let i = 0;
    let menorNum = 0;
    
    for (indice in array){
      if (array[indice] < menorNum){
        menorNum = array[indice];
        i = indice;        
      }
    }
    return i;
}

let array = [2, 4, 6, 7, 10, 0, -3];

console.log(verificaValorIndice(array));
