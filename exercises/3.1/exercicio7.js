let nota = 50;

if (nota >= 90 && nota <= 100){
    console.log("Nota A.");
}

else if (nota >= 70 && nota < 90){
    console.log("Nota B.");
}

else if (nota >= 60 && nota < 70){
    console.log("Nota C.");
}

else if (nota >= 40 && nota < 60){
    console.log("Nota D.");
}

else if (nota >= 0 && nota < 40) {
    console.log("Nota F.");
} else {
    console.log("Essa nota está errada.");
}