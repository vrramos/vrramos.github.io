let pecas = "peao";

switch(pecas){
    case "peao":
        console.log("Uma casa há frente por vez. Exceto no primeiro movimento de cada peça individualmente, onde é duas casas a frente.");
        break;
    
    case "bispo":
        console.log("Diagonal.");
        break;

    case "torre":
        console.log("Horizontalmente ou Verticalmente."); 
        break;
        
    case "cavalo":
        console.log("Movimento em forma de L.");
        break;
        
    case "rainha":
        console.log("Verticalmente, Horizontalmente ou Diagonalmente");
        break;
        
    case "rei":
        console.log("Qualquer casa adjacente.");
        break;
        
    default:
        console.log("Não é uma peça de Xadrez.");    
}