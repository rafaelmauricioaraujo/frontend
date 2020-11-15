import { Client } from './Client.js';
import { SavingAcc } from './SavingAcc.js';
import { CurrentAcc } from './CurrentAcc.js';

const client1 = new Client('Rafael', 111);
const client2 = new Client('Araujo', 222);

const currentAcc = new CurrentAcc(client1, 111);
const savingAcc = new SavingAcc(1000, client2, 222);

console.log('\n currentAcc type: ', typeof currentAcc);
console.log('\n savingsAcc type: ', typeof savingAcc);

