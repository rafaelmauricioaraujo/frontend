import { Manager } from './Employees/Manager.js';
import { Director } from './Employees/Director.js';

const manager = new Manager('Rafael', 5000, 1111);
manager.password(123);

const director = new Director('Araujo', 10000, 2222);
director.password(456);

const authenticated = AuthSystem.login(manager, 123);
console.log(authenticated);

