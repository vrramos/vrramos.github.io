//Exercício 1
const fatorar = numero => {
    numeroFatorado = 1;
    for(let indice = 1; indice <= numero; indice++) {
        numeroFatorado *= indice
    }
    return `${numero}! = ${numeroFatorado}`
}

console.log(fatorar(6))

//Exercício 2
const longestWord = frase => {
    palavrasNaFrase = frase.split(" ")
    palavraMaior = palavrasNaFrase[0];
    
    for (i in palavrasNaFrase){
        if (palavrasNaFrase[i].length > palavraMaior.length){
            palavraMaior = palavrasNaFrase[i]
        }
    }
    return palavraMaior;
}

let frase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(longestWord(frase))

// Exercício 3
let clickCount = 0;
let results = document.querySelector('#results');
document.querySelector('#button').addEventListener('click', () => {
    clickCount++
    if (clickCount == 1) {
        results.textContent = `Você clicou em mim ${clickCount} vez seu danado!`
    } else {
        results.textContent = `Você clicou em mim ${clickCount} vezes seu danado!`
    }
})
