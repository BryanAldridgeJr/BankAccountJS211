class BankAccount {
    constructor(accountNumber, owner) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.transactions = [];
    }
  
    balance() {
      let totalBalance = 0;
      for (const transaction of this.transactions) {
        totalBalance += transaction.amount;
      }
      return totalBalance;
    }
    deposit(amt) {
        return amt + this.balance();
    };
    charge(payee, amt) {
        return this.balance() - amt;
    };
};

class Transaction {
    constructor(amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    };
};

const account = new BankAccount("321", "Bryan Aldridge")

console.log(account.balance());
console.log(account.deposit(500));
console.log(account.balance());
console.log(account.charge('582', 200));
console.log(account.balance());
