function verificaPalindrome(palavra){
    var s = '';
    for (i of palavra){
        s = i + s; 
    }
    return palavra == s;
}

var s = "alalala";

console.log(verificaPalindrome(s));
