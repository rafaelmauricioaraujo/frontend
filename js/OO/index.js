import { Client } from './Client.js';
import { Account } from './Account.js';

const client = new Client('Rafael', 222);
console.log('client ', client);

const acc = new Account(333, client);
console.log('acc: ', acc);

