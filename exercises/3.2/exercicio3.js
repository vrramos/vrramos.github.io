let n = 5, spac, hash, ast;

for (var i = 0; i < n; i++){
  spac = n - i;
  hash = i + 1;
  ast = ' '.repeat(spac) + '*'.repeat(hash);
  console.log(ast);    
}  