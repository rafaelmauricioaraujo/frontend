import { Client } from './Client.js';
import { SavingAcc } from './Account/SavingAcc.js';
import { CurrentAcc } from '.Account/CurrentAcc.js';
import { Account } from '.Account/Account.js';

const client = new Client('Rafael', 222);
const saving = new SavingAcc(1000, client, 222);

saving.withdrawing(100);
console.log(saving);

