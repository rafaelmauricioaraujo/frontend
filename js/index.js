import { CurrentAcc } from './Account/CurrentAcc.js';
import { Client } from './Client.js';

import { Manager } from './Employees/Manager.js';

const client = new Client('Rafael', 123456);
const acc = new CurrentAcc(client, 1232);

const manager = new Manager('Araujo', 10000, 456789);

console.log('account: ', acc);
console.log('manager: ', manager);

