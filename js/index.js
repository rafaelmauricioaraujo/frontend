import { CurrentAcc } from './Account/CurrentAcc.js';
import { Client } from './Client.js';

import { Manager } from './Employees/Manager.js';

const manager = new Manager('Araujo', 5000, 111);
manager.password(123);

console.log(manager);

const client = new Client('Rafael', 222);
const currentAcc = new CurrentAcc(client, 222);
console.log(currentAcc);