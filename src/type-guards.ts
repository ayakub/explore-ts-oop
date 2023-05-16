//key Of guard
type alpanumeric = number | string;
function addTwoNumber(param1: alpanumeric , param2:alpanumeric ):alpanumeric{
    if(typeof param1 ==="number" && typeof param2 ==="number"){
        return param1 + param2     
    }
    else{
        return param1.toString() + param2.toString()
    }
}
const result1 = addTwoNumber("10", 12)
const result2 =  addTwoNumber(10, 12)
console.log(result1, result2)


// in type
type normalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: "admin"
}
function checkUser (user: normalUser | AdminUser) {
if("role" in user) {
    return `I'm ${user.name}. I'm an Admin`
}
}

const normalUser1: normalUser ={name:"Kallu"};
const adminUser1:AdminUser ={name: "mr: bando", role: "admin"} 
console.log(checkUser(normalUser1))
console.log(checkUser(adminUser1))

//instance of guard

class Animal  {
    name: string;
    species : string;
    constructor (name: string, species: string){
this.name = name;
this.species = species;
    }
    makeSound () {
        console.log("I'm making sound")
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeSoundCat () {
        console.log('My sound is mew mew');
    }
}
class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeSoundDog () {
        console.log('My sound is gew gew');
    }
}

function createSound (animal: Animal) {
if(animal instanceof Dog) {
    return animal.makeSoundDog()
}
else if (animal instanceof Cat) {
    return animal.makeSoundCat()
}
else{
    animal.makeSound()
}
}
const animal1 = new Dog("bolod khan", "Dog")
const animal2 = new Cat("pussy", "Cat")
createSound(animal2)