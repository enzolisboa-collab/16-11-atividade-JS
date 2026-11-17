//atividade 1//
function saudacao(nome) {
  return "Olá, " + nome;
}

const saudacao1 = (nome) =>{
    return "ola "+nome

}
//atividade 2//
console.log(saudacao1("ana"))
const soma = (a,b)  =>{
    return a+b
}
console.log(soma(2,2))
//atividade3//
const desconto = (numero) =>{
return numero*0.9
}
console.log(desconto(100))
//atividade4//
const verificadorIdade = (idade) => idade >= 18 ? "maior de idade" : "menor de idade";

console.log(verificadorIdade(20)); // "maior de idade"
console.log(verificadorIdade(15)); // "menor de idade"
//atividade 5//
const statusNota = (nota) => nota >= 7 ? "aprovado" : "desaprovado";
console.log(statusNota(7))
//atividade 6//

const textoBotao = (logado) => (logado ? "Sair" : "Entrar");
console.log(textoBotao(true)); 

//atividae 7 //
const numeros = [1, 2, 3, 4];
 
const dobrarNum = numeros.map((numero) =>numero*2)

console.log(dobrarNum)
//atividae 8//
const nomes = ["ana", "bruno", "carla"];

const caixaAlta = nomes.map((nome) => nome.toLocaleUpperCase())
console.log(caixaAlta)
//atividade 9//
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];
const verificacao = produtos.map((produtos)=>produtos.nome)
console.log(verificacao)
//atividade 10//
const numeros1 = [1, 2, 3, 4, 5, 6];

const pares = numeros1.filter((numero) => numero%2==0)
console.log(pares)
//atividade 11//

const notas = [5, 8, 6.5, 9, 7];
const aprovados1 = notas.filter((numero) => numero>=7)
console.log(aprovados1)
//atividae 12//
const menores50 =produtos.filter(produtos=>produtos.preco<50 ).map((produtos) => produtos.nome)
console.log(menores50)