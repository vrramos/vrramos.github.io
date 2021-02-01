function nomeMaior(listaNomes){
    nomeMaior = listaNomes[0];

    for (i in listaNomes){
        if (listaNomes[i].length > nomeMaior.length){
           nomeMaior = listaNomes[i]
        }
    }
    return nomeMaior;
}

let nomesAleatorios = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomeMaior(nomesAleatorios))