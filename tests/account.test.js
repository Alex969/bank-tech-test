const Account = require('../account');

describe('account', () => {

  let account;
  let amount;

  beforeEach(() => {
    account = new Account();
    depositAmount += 100;
    withdrawalAmount -= 100;
  })

  it('has a balance of zero when created', () => {
    expect(account.balance).toBe(0);
  })

  it('adds money to your balance when you make a deposit', () => {
    account.deposit(depositAmount);
    expect(account.balance).toBe(0 + amount)
  })

})