class Account {
  constructor(){
    this.balance = 0;
  }

  deposit(amount){ 
    this.balance += amount;
  }

  withdraw(amount){ 
    if (!(this.balance <= 0)) {
      this.balance -= amount;
    }
    else {
      throw 'Not enough money in your balance !'
    }
  }
}
module.exports = Account;