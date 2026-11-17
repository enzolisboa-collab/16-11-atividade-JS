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
 
const dobrarNum = (numeros) => numeros*2