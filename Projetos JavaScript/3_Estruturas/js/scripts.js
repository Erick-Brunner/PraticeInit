// 1- Variaveis
// let nome ="Erick";
// console.log(nome);
// nome = "Erick Bruner"
// console.log(nome);
// const idade = 23;
// console.log(idade);
// // idade = 32; 
// console.log(typeof nome);
// console.log(typeof idade);
// // 2- mais sobre variaveis
// // let 2test = "invalido"
// // let @test = "invalido"
// let a=10, b=20, c=30;
// console.log(a,b,c);
// const nomecompleto = "Erick brunner"
// const nomeCompleto = "huebra neres"
// console.log(nomecompleto);
// console.log(nomeCompleto);
// let _test = "ok";
// let $test = "ok";
// console.log(_test, $test);
// // 3- prompt
// const age = prompt("Digite a sua idade:")
// console.log(`Voce tem ${age} anos.`)
// // 4- alert
// alert("Testando")
// const z = 10
// alert(`O numero e ${z}`)
// 5- Math
// console.log(Math.max(5,2,1,10));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.14));
// // 5- console
// console.log("teste!");
// console.error("erro!");
// console.warn("aviso!");
// 7- if
const m = 10;
if(m > 5){
    console.log("M e maior que 5!")
};
const user = "João"
if(user === "João"){
    console.log("Bem-Vindo João!")
}
if(user === "Maria"){
    console.log("Olá Maria!")
};
console.log(user === "João", user === "Maria")
// 8- else
const loggedIn = false;
if(loggedIn){
    console.log("Está autenticado!")
}else {
    console.log("Não está autenticado!")
}
const q = 10
const w = 15
if(q > 5 && w > 20) {
    console.log(" Números mais altos")
} else {
    console.log("Os números não são mais altos")
}
// 9- else if
if(1 > 2){
    console.log("Teste")
} else if(2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim!")
}
const userName = "Erick"
const userAge = 23
if(userName === "José"){
    console.log("Bem vindo José")
} else if (userName === "Erick" && userAge === 23){
    console.log("Olá Erick, voce tem 23 anos!")
} else {
    console.log("Nenhuma condição aceita!")
}