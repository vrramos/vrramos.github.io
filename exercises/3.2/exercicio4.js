let n = 5, s=0, spac, hash, ast;

for (var i = 0; i < n; i += 2){
  spac = n - s;
  hash = i + 1;
  ast = ' '.repeat(spac) + '*'.repeat(hash);
  s++;
  console.log(ast);    
}  