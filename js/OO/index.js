class Client {
    name;
    id;
}
class Account {
    agency;
    balance;

    withdrawing(amount) {
        if (this.balance >= amount){
            this.balance -= amount
        }else {
            console.log('denied');
        }
    }
}

const client = new Client();
client.name = 'Araujo';
client.id = 123;

console.log(client);

const account = new Account();
account.balance = 1000;
account.agency = 888;

console.log(account);

account.withdrawing(10000);