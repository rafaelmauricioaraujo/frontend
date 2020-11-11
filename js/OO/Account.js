export class Account {
    agency;
    #balance = 0;

    withdrawing(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount
            return amount;
        } else {
            return 'deined';
        }
    }

    deposit(amount) {
        if (amount <= 0) return
        this.#balance += amount;
    }
}