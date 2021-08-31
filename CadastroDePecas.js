const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
}
else {
    console.log("Não há mais espaço na lista")
}

var peso = 300;

if (peso >= 100 ) {
    console.log("Peso da peça está adequado")    
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "DiscoDeFreio";

if (nomePeca.length > 3) {
    console.log("Nome Adequado")    
} else if (nomePeca == 0) {
    console.log("Nome não pode ser vazio")    
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
} 

/*
switch (nomePeca.length) {
    case 0:
        console.log("Nome não pode ser vazio")
        break;
    case 1,2,3:    
        console.log("O nome deve possuir mais de 3 caracteres")
        break;
    default:
        console.log("Nome Adequado")   
        break;
}
*/
