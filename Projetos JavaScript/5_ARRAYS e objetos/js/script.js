// 1- arrays
const lista = [1, 2, 3, 4, 5]
console.log(lista);
console.log(typeof lista);
const itens = ["Érick", true, 2, 4.12, []];
console.log(itens);
// 2- mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);
// 3- propriedades
const numbers = [5, 3, 4]
console.log(numbers.length);
console.log(numbers["length"]);
const myName = "Érick";
console.log(myName.length);
// 4- métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);
const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));
// 5- objetos
const person = {
    name: "Érick",
    age: 23,
    job: "Bartender"
}
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);
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