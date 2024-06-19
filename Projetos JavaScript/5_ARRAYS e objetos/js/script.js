// // 1- arrays
// const lista = [1, 2, 3, 4, 5]
// console.log(lista);
// console.log(typeof lista);
// const itens = ["Érick", true, 2, 4.12, []];
// console.log(itens);
// // 2- mais sobre arrays
// const arr = ["a", "b", "c", "d", "d"];
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[83]);
// // 3- propriedades
// const numbers = [5, 3, 4]
// console.log(numbers.length);
// console.log(numbers["length"]);
// const myName = "Érick";
// console.log(myName.length);
// // 4- métodos
// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);
// const text = "algum texto";
// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase);
// console.log(text.indexOf("g"));
// // 5- objetos
// const person = {
//     name: "Érick",
//     age: 23,
//     job: "Bartender"
// }
// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);
// 6- criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km:20000,
};
console.log(car);
car.dorrs = 4;
console.log(car);
delete car.km;
console.log(car);
// 7- mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof Object);
const obj2 = {
    c: [],
};
Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);
// 8- conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car));
// 9- mutação
const a = {
    name:"Érick",
};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);
a.age = 23
console.log(a);
console.log(b);
delete b.age;
console.log(a);
console.log(b);
// 10- loop em array
const users = ["Érick", "kelwin", "guilherme", "jão"];
for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`);
}