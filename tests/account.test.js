const Account = require('../account');

describe('account', () => {

  let account;
  let starterBalance;
  let depositAmount;
  let withdrawalAmount;
  let upBalance;
  let currentBalance;
  let downBalance;

  beforeEach(() => {
    account = new Account();
    starterBalance = 0;
  })
  describe('balance', () => {
    it('has a balance of zero when created', () => {
      currentBalance = account.balance;
      expect(currentBalance).toBe(starterBalance);
    })
  })
  
  describe('deposit', () => {
    it('adds money to your balance when you make a deposit', () => {
      currentBalance = account.balance;
      depositAmount = 100
      account.deposit(depositAmount);
      upBalance = currentBalance + depositAmount;
      expect(account.balance).toBe(upBalance);
    })
  })

  describe('withdraw', () => {
    it('cannot withdraw money if balance is of 0', () => {
      currentBalance = account.balance;
      withdrawalAmount = 100;
      expect(() => { 
        account.withdraw(withdrawalAmount); 
      }).toThrow("Not enough money in your balance !");
    })

    it('withdraws money from your account', () => {
      account.balance = 90;
      withdrawalAmount = 50;
      downBalance = account.balance - withdrawalAmount;
      account.withdraw(withdrawalAmount);
      expect(account.balance).toBe(downBalance);

    })
  })
})