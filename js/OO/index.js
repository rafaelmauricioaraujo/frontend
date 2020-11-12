import { Client } from './Client.js';
import { Account } from './Account.js';

const acc = new Account();
acc.agency = 111;
acc._balance = 1000;

console.log('acc: ', acc);

const acc2 = new Account();
acc2.agency = 222;
acc2._balance = 200;

const cli2 = new Client();
acc2.client = cli2;

acc2.client.name = 'Rafael';
acc2.client.id = null;

console.log('acc2: ', acc2);

