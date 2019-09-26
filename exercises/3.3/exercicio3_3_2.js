function verificaValorIndice(array){    
    let i = 0;
    let maiorNum = 0;
    for (indice in array){
      if (array[indice] > maiorNum){
        maiorNum = array[indice];
        i = indice;        
      }
    }
    return i;
}

let array = [2, 3, 6, 7, 10, 1];

console.log(verificaValorIndice(array));
