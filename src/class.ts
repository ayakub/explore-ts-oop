// //normal properties
// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name:string, speies: string, sound: string){
//         this.name = name;
//         this.species = speies;
//         this.sound = sound
//     }
//     makeSound () {
//         return `${this.species} sound is ${this.sound}. I'm ${this.name}`
//     }
// }

// const dogSound = new Animal("Tommy", "Dog", "Ghew ghew")
// const catSound = new Animal ("possy", "cat", "mew mew")
// const resultCat = catSound.makeSound()
// const result = dogSound.makeSound();
// console.log(result)
// console.log(resultCat)


// parameter properties
// class Animal {
//     constructor(public name:string, public species: string, public sound: string){
//     }
//     public makeSound () {
//         return `${this.species} sound is ${this.sound}. I'm ${this.name}`
//     }
// }

// const dogSound = new Animal("Tommy", "Dog", "Ghew ghew")
// const catSound = new Animal ("possy", "cat", "mew mew")
// const resultCat = catSound.makeSound()
// const result = dogSound.makeSound();
// console.log(result)
// console.log(resultCat)