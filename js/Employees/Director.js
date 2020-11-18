import { Employee } from "./User";

import { User } from './User.js';

export class Director extends User {
    constructor(name, salary, sn) {
        super(name, salary, sn);
        this._bonus = 2;
    }
}