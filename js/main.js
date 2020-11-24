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

const GLOBALBOX = (function () {
    console.log('less is more');

    let box = {};

    box.queue = [];

    box.addItem = function(car) {
        return box.queue.push(car);
    }

    box.getItem = function() {
        return box.queue.join('-');
    }

    return {
        add: box.addItem,
        get: box.getItem
    }
})();

GLOBALBOX.add('Gol');
GLOBALBOX.add('Celta');
GLOBALBOX.add('Onix');

console.log(GLOBALBOX.get());