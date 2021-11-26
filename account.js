const operations = require("./operations");

class Account {
  constructor(){
    this.balance = 0;
  }

  deposit(date, amount){ 
    this.balance += amount;
    operations.push(`date: ${date}`,`credit: ${amount}`)
    
  }

  withdraw(date,amount){ 
    if (!(this.balance <= 0)) {
      this.balance -= amount;
      operations.push(`date: ${date}`,`debit: ${amount}`)
    }
    else {
      throw 'Not enough money in your balance !'
    }
  }
}
module.exports = Account;