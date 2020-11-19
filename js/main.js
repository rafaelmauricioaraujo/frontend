import { Manager } from './Employee/Manager.js';
import { Director } from './Employee/Director.js';

const manager = new Manager('Rafael', 1000, 123345);
const diretor = new Director('Araujo', 50000, 678890);

console.log('manager: ', manager);
console.log('director: ', diretor);