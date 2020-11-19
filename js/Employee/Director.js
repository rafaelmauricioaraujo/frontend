import { Employee } from "./Employee.js";
export class Director extends Employee {
    constructor(name, salary, socialNumber) {
        super(name, salary, socialNumber);
        this._bonus = 2;
    }
}