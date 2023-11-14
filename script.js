class BankAccount {
    constructor(accountNumber, owner) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.transactions = [];
    };
  
    balance() {
        let totalBalance = 0;
        for (const transaction of this.transactions) {
          totalBalance += transaction.amount;
        }
        return totalBalance;
    };
    deposit(amt) {
        const transaction = new Transaction(amt, "Deposit");
        this.transactions.push(transaction);
        return amt + this.balance();
    };  
    charge(payee, amt) {
        const transaction = new Transaction(-amt, payee);
        this.transactions.push(transaction);
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

console.log(`$${account.balance()}`);
account.deposit(500);
console.log(`$${account.balance()}`);
account.charge('582', 200);
console.log(`$${account.balance()}`);
