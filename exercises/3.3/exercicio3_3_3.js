function verificaValorIndice(array){    
    let menor = 0;
    for (indice in array){
      if (array[indice] < indice){
          menor = indice;
      }
    }
    return menor;
}

let array = [2, -4, 6, 7, 10, 0, 2];

console.log(verificaValorIndice(array));
