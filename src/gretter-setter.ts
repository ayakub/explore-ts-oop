class MybankAccount {
    readonly id: number;
     name: string;
     private _balance: number
     constructor(id:number, name:string, balance:number){
         this.id = id;
         this.name = name;
         this._balance = balance;
     }
     //getter
     get balance():number {
        return this.balance
     }
    //  getBalance(){
    //     return `My current balance ${this.balance}`
    //  }

     //setter 
     set addAmount (amount:number){
        this._balance = this._balance+amount;
     }

 }
 
 const account1 = new MybankAccount(444, "ayakub", 100000)
 console.log(account1);
console.log(account1.balance)
console.log(account1.addAmount = 30)