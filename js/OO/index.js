import { Client } from './Client.js';
import { SavingAcc } from './SavingAcc.js';
import { CurrentAcc } from './CurrentAcc.js';
import { Account } from './Account.js';

const client = new Client('Rafael', 222);
const account = new Account(200, client, 222);

console.log(account);

