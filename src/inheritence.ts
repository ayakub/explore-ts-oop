class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address
    }
    makeSleep (hours: number ) {
return `this is ${this.name} .he is ${hours} sleeping`
    }
}


class Student extends Parent {
    constructor(name: string, age: number, address: string){
        super(name, age, address)
    }
}

const student1 = new Student("Wadud", 20, "Baridara")




// more properties
class Teacher extends Parent {
designation: string;
    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation
    }
    makeSleep (hours: number ) {
return `this is ${this.name} .he is ${hours} sleeping`
    }
    makeClass (classOfNumbers: number ) {
return `this is ${this.name} .he is ${classOfNumbers} sleeping`
    }
}

const teacher1 = new Teacher("Jhankar Mahbub", 32, "california", "CEO")
