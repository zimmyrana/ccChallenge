// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account {
    #balance
    constructor() {
        this.#balance = 0
    }

    deposit(money) {
        if (money > 0) {
            this.#balance += money
        } else {
            console.log('Deposit amount must be greater then zero')
        }
    }

    withdraw(money) {
        if (money < this.#balance && money > 0) {
            this.#balance -= money
        } else{
            console.log('withdrawal amount should equal or lesser')
        }
    }

    getBalance(){
        return this.#balance
    }
}

const ac = new Account()

console.log(ac.getBalance())

ac.deposit(100)

console.log(ac.getBalance())

ac.withdraw(10)

console.log(ac.getBalance())

ac.withdraw(100)

ac.deposit(-10)