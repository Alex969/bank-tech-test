const Account = require('../account');

describe('account', () => {

  let account;
  let starterBalance;
  let depositAmount;
  let withdrawalAmount;

  beforeEach(() => {
    account = new Account();
    starterBalance = 0;
  })

  it('has a balance of zero when created', () => {
    expect(account.balance).toBe(starterBalance);
  })

  it('adds money to your balance when you make a deposit', () => {
    depositAmount += 100
    account.deposit(depositAmount);
    expect(account.balance).toBe(starterBalance + depositAmount)
  })
  it('cannot withdraw money if balance is of 0', () => {
    withdrawalAmount -= 100;
    expect(() => { 
      account.withdraw(withdrawalAmount); 
    }).toThrow("Not enough money in your balance !");
  })
})