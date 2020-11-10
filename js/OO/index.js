class Client {
    name;
    id;
}
class Account {
    agency;
    #balance = 0;

    withdrawing(amount) {
        if (this.#balance >= amount){
            this.#balance -= amount
        }else {
            console.log('denied');
        }
    }

    deposit(amount) {
        if (amount > 0){
            this.#balance += amount;
        }
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

account.withdrawing(10000);
account.deposit(999);

console.log(account);