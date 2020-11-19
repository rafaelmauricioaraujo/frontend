import { Employee } from "./Employee.js";
export class Manager extends Employee {
    constructor(name, salary, socialNumber) {
        super(name, salary, socialNumber);
        this._bonus = 1.1;
    }
}