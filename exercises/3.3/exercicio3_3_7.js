function verificaFimPalavra(inicio, fim){
    let palavraInicio = inicio.split(''), palavraFim = fim.split('')

    for (let i = fim.length; i >= 0; i--) {        
        if (palavraInicio[palavraInicio.length-1] == palavraFim[palavraFim.length-1]){
            return true
        } else {
            return false;
        }
    }
} 

let stringWord = "trybe", stringEnding = "be";
console.log(verificaFimPalavra(stringWord, stringEnding));