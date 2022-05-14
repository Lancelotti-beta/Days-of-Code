let nome = prompt('Qual o seu nome?');
let idade = prompt(`Quantos anos você tem, ${nome}?`);
let linguagem = prompt(`${nome}, qual linguagem de programação você?`);

let resposta = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para SIM e 2 para NÃO`);

document.write(`Olá, ${nome}, você tem ${idade} anos e já esta aprendendo ${linguagem}`);

if(resposta == 1){
    document.write(`<br>Muito bom! Continue se esforçando e você terá muito sucesso.`)
} else if (resposta == 2){
    document.write(`<br>Poxa, uma pena você não estar gostando de ${linguagem}. . . Já tentou aprender outras linguagem?`)
}