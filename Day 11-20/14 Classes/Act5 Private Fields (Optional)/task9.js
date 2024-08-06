//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

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
