//Recebe a data do evento
const dataEvento = new Date('2021-08-01 10:00:00'); 
const dataAtual = new Date();
console. log('Data do evento : '+ dataFormatada());

//Recebe a idado do participante
var idade = 20;

//Lista os participantes
let listaParticipantes = ['Participante 1', 'Participante 2', 'Participante 3', 'Participante 4', 'Participante 5'];
//lista os palestrantes
let listaPalestrantes = ['Palestrante 1', 'Palestrante 2'];

let total = listaParticipantes.length 

//Verifica a data do evento
if (dataEvento > dataAtual){
    console.log("Inscrição não permitida! Data deve ser posterior a data atual!");
    //Não cadastra o evento

} else {
    //Se a data do evento for válida
    console.log('O Evento tem uma data válida, inscrição permitida.');
    
    //Cadastra participante
    if (idade < 18) {
        //Se a didade não for válida
        console.log("Menor de 18 anos!!! Não permitido.");
    } else {
        //Se a idade for permitida
        console.log("Maior de 18 anos. Permitir cadastro.");

        //Verifica quantidade de participantes
        if (listaParticipantes > 100) {
            console.log('Não é permitido mais que 100 inscritos para o evento');
        } else{
            //cadastra participante
            console.log('Cadastro do participante realizado!');
            console.log('Até agora temos '+ listaParticipantes.length +' Participantes');
            console.log('São eles :');
            for (let i = 0; i < listaParticipantes.length; i++) {
                const element = listaParticipantes[i];
                console.log(element)
            }
        }
        
    };
    
}



function dataFormatada(){
    var data = dataEvento,
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}