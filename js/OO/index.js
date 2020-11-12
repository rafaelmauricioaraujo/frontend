import { Client } from './Client.js';
import { Account } from './Account.js';

const client = new Client();
client.name = 'Rafael';
client.id = 222;

const acc = new Account();
acc.client = client;
acc.agency = 456;

console.log('acc: ', acc);

