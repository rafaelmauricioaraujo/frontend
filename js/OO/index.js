import { Client } from './Client.js';
import { Account } from './Account.js';

const client1 = new Client();
client1.name = 'Rafael';
client1.id = 123;

const client2 = new Client();
client2.name = 'Teti';
client2.id = 456;

const account1 = new Account();
account1.agency = 222;
account1.Client = client1;
console.log('accoun1: ', account1);

const account2 = new Account();
account2.agency = 333;
account2.Client = client2;
console.log('accoun2: ', account2);

console.log('transfer');

account1.deposit(1000);

account1.transfer(500, account2);

console.log('accoun1: ', account1);
console.log('accoun2: ', account2);