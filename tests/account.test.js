const Account = require('../account');

describe('account', () => {

  let account;

  beforeEach(() => {
    account = new Account();
  })

  it('has a balance of zero when created', () => {
    expect(account.balance).toBe(0);
  })
})