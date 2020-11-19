import { Employee } from "./Employee";
import { Employee } from './Employee.js';

export class Manager extends Employee {
    constructor(name, salary, sn) {
        super(name, salary, sn);
        this._bonus = 1.1;
    }
}