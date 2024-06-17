// // 1- Criando uma função
// function minhaFuncao(){
//     console.log("Testando")
// }
// minhaFuncao();
// minhaFuncao();
// const minhaFuncaoEmVariavel = function (){
//     console.log("Função e, variavel")
// }
// minhaFuncaoEmVariavel();
// function funcaoComParametro (txt){
//     console.log(`Imprimindo: ${txt}`)
// }
// funcaoComParametro("Imprimindo alguma coisa");
// funcaoComParametro("outra função")
// // teste (1)
// function funcaoComSoma(txt){
//     console.log(`a soma e igual a: ${txt}`)
// }
// funcaoComSoma("1 + 1 = 2")
// // teste (2)
// function somateste(o){
//     console.log(`O esta com o valor ${o}`)
// }
// for(let o = 10; 10 < 20; o++){
//     somateste(o);
//     if(o === 20){
//         console.log(`O chegou em ${o} `)
//         break;
//     }
// }
// // 2- return
// const a = 10
// const b = 20
// const c = 30
// const d = 40
// function soma(n1, n2) {
//     return n1 + n2;
// }
// const resultado = soma(a, b)
// console.log(resultado);
// console.log(soma (c, d));
// // teste
// const z = 2
// const q = 10
// function somateste1(n1, n2){
//     return n1 * n2;
// }
// const resultadoteste = somateste1(z, q)
// console.log(resultadoteste);
// console.log(somateste1(z, q));
// // 3- escopo da fuinção
// let y = 15
// function testandoEscopo(){
//     let y = 20;
//     console.log(`Y dentro da função é: ${y}`);
// }
// testandoEscopo();
// console.log(`Y fora da função é : ${y}`);
// testandoEscopo();
// // 4- escopo alinhado - nested scopes
// let m= 10
// function escopoAninhado(){
//     let m = 20
//     if(true) {
//         let m = 30
//         if(true){
//             let m = 40
//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }
// escopoAninhado();
// console.log(m)
// // 5- arrow function
// const testeArrow = () =>{
//     console.log("Esta é uma arrow function")
// };
// testeArrow();
// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//         console.log("Par")
//         return
//     }
//     console.log("Impar")
// };
// parOuImpar(5);
// parOuImpar(10);
// // 6- mais sobrte arrow functions
//  const raizQuadrada = (x) => {
//     return x * x
//  }
//  console.log(raizQuadrada(4));
//  const raizQuadrada2 = (x) => x * x
//  console.log(raizQuadrada2(5));
//  console.log(raizQuadrada2(12));
//  const helloWord = () => console.log("Hello World")
//  helloWord();
// //  7- paramentro opcional
// const multiplication = function(m, n) {
//     if(n === undefined) {
//         return m* 2;
//     } else {
//         return m * n
//     }
// }
// console.log(multiplication(5));
// console.log(multiplication(2, 4));
// const greeting = (name) => {
//     if(!name){
//         console.log("Olá!");
//         return;
//     }
//     console.log(`Olá ${name}!`);
// };
// greeting ();
// greeting("Érick");
// 8- valor default
const customGreeting = (name, greet = "Olá") =>{
    return `${greet}, ${name}!`
}
console.log(customGreeting("Érick"));
console.log(customGreeting("Pedro", "Bom dia"));
const repeatText = (text, repeat = 2)=>{
    for(let i = 0; i < repeat ; i++){
        console.log(text);
    }
};
repeatText("Testando");
repeatText("Agora repete 5 vezes", 5)
// 9- clousure
function someFunction(){
    let txt = "Alguma coisa";
    function display(){
        console.log(txt);
    }
    display();
}
someFunction();
// 10- mais sobre clouser
const multiplicationClouser = (n) => {
    return (m) => {
        return n * m;
    };
};
const c1 = multiplicationClouser(5);
const c2= multiplicationClouser(10);
console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));
// 11- recursion
const untilTen = (n,m)=> {
    if(n < 10){
        console.log("A função parou de executar!")
    } else {
        const x = n - m
        console.log(x)
        untilTen(x,m)
    }
}
untilTen(100, 7)
// // infinite recursion
// function run(){
//     console.log("Executando...";)
//     rum();
// }
// run ();
function factorial(x){
    if(x===0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}
const num = 6
const result = factorial(num);
console.log(`O fatorial do número ${num} é ${result}`);