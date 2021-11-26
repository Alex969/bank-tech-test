const operations = require('../operations');
const Account = require('../account');

let account;

describe('operations', () => {
  describe('deposits', () => {
    it('receives date log from a deposit', () => {
      let account = new Account;
      account.deposit('26/11/2021', 400)
      expect(operations[0]).toBe('date: 26/11/2021')
    })
    
    it('receives amount log from a deposit', () => {
      let account = new Account;
      account.deposit('26/11/2021', 400)
      expect(operations[1]).toBe('credit: 400')
    })
  })

  describe('withdrawals', () => {
    beforeEach(() => {
      account = new Account;
      account.deposit('26/11/2021', 400)
    })
    
    it('receives date log from a withdrawal', () => {
      account.withdraw('27/11/2021', 200)
      expect(operations[6]).toBe('date: 27/11/2021')
    })
    it('receives amount log from a withdrawal', () => {
      account.withdraw('27/11/2021', 200)
      expect(operations[7]).toBe('debit: 200')
    }) 
  })
})