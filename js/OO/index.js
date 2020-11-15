import { Client } from './Client.js';
import { Account } from './Account.js';
import { Saving } from './Saving.js';

const client = new Client('Rafael', 111);
const account = new Account(123, client);

const saving = new Saving(1000, client, 123);

console.log('saving: ', saving);

