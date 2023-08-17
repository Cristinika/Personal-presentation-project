class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, transactionLimit) {
      super(accountNumber, balance);
      this.transactionLimit = transactionLimit;
      this.transactionCount = 0;
    }
  
    withdraw(amount) {
      if (amount <= this.balance && this.transactionCount < this.transactionLimit) {
        this.balance -= amount;
        this.transactionCount++;
      } else {
        console.log("Insufficient funds or transaction limit exceeded");
      }
    }
  }
  
  const savingsAccount = new SavingsAccount("1234567890", 1000, 0.05);
  console.log(savingsAccount.getBalance()); // Output: 1000
  
  savingsAccount.deposit(500);
  console.log(savingsAccount.getBalance()); // Output: 1500
  
  savingsAccount.withdraw(700);
  console.log(savingsAccount.getBalance()); // Output: 800
  
  console.log(savingsAccount.interestRate); // Output: 0.05
  
  const checkingAccount = new CheckingAccount("9876543210", 2000, 3);
  console.log(checkingAccount.getBalance()); // Output: 2000
  
  checkingAccount.deposit(1000);
  console.log(checkingAccount.getBalance()); // Output: 3000
  
  checkingAccount.withdraw(500);
  console.log(checkingAccount.getBalance()); // Output: 2500
  
  checkingAccount.withdraw(700);
  console.log(checkingAccount.getBalance()); // Output: 2500 (transaction limit exceeded)
  
  console.log(checkingAccount.transactionLimit); // Output: 3
  