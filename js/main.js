import { Client } from './Client.js';
import { Manager } from './Employee/Manager.js';
import { Director } from './Employee/Director.js';
import { ByteBank } from './ByteBank.js';

const manager = new Manager('Rafael', 1000, 123345);
manager.password = '123';

const director = new Director('Araujo', 50000, 678890);
director.password = 'asd';

const client = new Client('Mauricio', 888);
client.password = 'fgh';

const login = ByteBank.login(client, 'fgh');
console.log('login: ', login);