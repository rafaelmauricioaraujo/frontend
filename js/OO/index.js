class Client {
    name;
    id;
}
class Account {
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

const client = new Client();
client.name = 'Araujo';
client.id = 123;

console.log(client);

const account = new Account();
// account.#balance = 1000;
account.agency = 888;

console.log(account);

let number = account.withdrawing(10000)
console.log('withdrawing', number);

number = account.withdrawing(10);
console.log('withdrawing', number);

account.deposit(999);

number = account.withdrawing(10);
console.log('withdrawing', number);
