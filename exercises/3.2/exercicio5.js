function numPrimo(num){
    for (let i = 2; i < num; i++){
        if (num%i === 0){
            return false;
        } else {
            return num !== 1;
        }
    }
}
let num = 4;
console.log(numPrimo(num))