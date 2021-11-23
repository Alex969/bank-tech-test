# bank-tech-test

## User Stories : 
```````
I want to have an account with a balance
```````
```````
I want to be able to make a deposit on my account
```````
```````
I also want to be able to withdraw money from my account
```````
```````
I shouldn't be able to withdraw more money than present on my current balance 
```````
```````
I want to be able to print my account's bank statement
```````
````````
My account statement should show withdrawals and deposits made on my account
`````````
````````
Each withdrawal and deposit should state the date of operation and amout
````````
## Specification
### Requirements

 * You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
 * Deposits, withdrawal.
 * Account statement (date, amount, balance) printing.
 * Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023

**And** a deposit of 2000 on 13-01-2023

**And** a withdrawal of 500 on 14-01-2023

**When** she prints her bank statement

**Then** she would see
```````
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```````
