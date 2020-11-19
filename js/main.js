import { Client } from './Client.js';
import { Manager } from './Employee/Manager.js';
import { Director } from './Employee/Director.js';
import { ByteBank } from './ByteBank.js';

const manager = new Manager('Rafael', 1000, 123345);
manager.password = '1233456';

const director = new Director('Araujo', 50000, 678890);
director.password = 'qwert';

const login = ByteBank.login(manager, '1233456');

console.log('manager login: ', login);