const Account = require('../account');

describe('account', () => {

  let account;
  let starterBalance;
  let upBalance;
  let downBalance;

  beforeEach(() => {
    account = new Account();
    starterBalance = 0;
  })
  describe('balance', () => {
    it('has a balance of zero when created', () => {
      expect(account.balance).toBe(starterBalance);
    })
  })
  
  describe('deposit', () => {
    it('adds money to your balance when you make a deposit', () => {
      upBalance = account.balance + 100;
      account.deposit("24/11/2021", 100);
      expect(account.balance).toBe(upBalance);
    })
  })

  describe('withdraw', () => {
    it('cannot withdraw money if balance is of 0', () => {
      expect(() => { 
        account.withdraw("24/11/2021", 100); 
      }).toThrow("Not enough money in your balance !");
    })

    it('withdraws money from your account', () => {
      account.balance = 90;
      downBalance = account.balance - 50;
      account.withdraw("24/11/2021", 50);
      expect(account.balance).toBe(downBalance);

    })
  })
})