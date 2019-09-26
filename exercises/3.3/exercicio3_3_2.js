function verificaValorIndice(array){    
    let maior = 0;
    for (indice in array){
      if (array[indice] > indice){
          maior = indice;
      }
    }
    return maior;
}

let array = [2, 3, 6, 7, 10, 1];

console.log(verificaValorIndice(array));
