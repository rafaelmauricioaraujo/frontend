import { Client } from './Client.js';
import { Account } from './Account.js';

const client = new Client('Rafael', 222);
const client2 = new Client('Mauricio', 333);
const client3 = new Client('Araujo', 333);
const client4 = new Client('Teti', 333);

const acc = new Account(333, client);
const acc2 = new Account(444, client2);
const acc3 = new Account(444, client3);
const acc4 = new Account(444, client4);

console.log('count: ', Account._count);

