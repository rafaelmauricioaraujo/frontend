import { Employee } from "./User";


import { User } from './User.js';

export class Manager extends User {
    constructor(name, salary, sn) {
        super(name, salary, sn);
        this._bonus = 1.1;
    }
}