export class Employee {
    constructor(name, salary, sn) {
        this._name = name;
        this._salary = salary;
        this._sn = sn;
        this._bonus = 1;
        this._password;
    }

    set password(pwd) {
        this._password = pwd;
    }

    get password() {
        return this._password;
    }
}