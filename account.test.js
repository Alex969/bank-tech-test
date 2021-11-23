const Account = require('./account');

let balance;
let account;

describe('account', () => {
  beforeEach(() => {
    balance = 200;
    account = new Account(balance);
 })
 
  it('has a balance', () => {
    expect(account.balance).toBeTruthy();
  })
})