import { Employee } from "./Employee";

import { Employee } from './Employee.js'
export class Director extends Employee {
    constructor(name, salary, sn){
        super(name, salary, sn);
        this._bonus = 2;
    }
}