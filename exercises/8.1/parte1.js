// Exercício 1
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//Exercício 2
const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // change code above this line
}
editInPlace();
