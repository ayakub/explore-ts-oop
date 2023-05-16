class countNumber {
    static counter: number = 0
    
   static increament () {
        return  (countNumber.counter = countNumber.counter+1)
    }
    static decrement () {
        return (countNumber.counter = countNumber.counter-0)
    }
}

const intanse1 = new countNumber()
const intanse2 = new countNumber()
console.log(countNumber.increament())
console.log(countNumber.increament())