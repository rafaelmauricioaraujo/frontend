export class Employee {
    constructor(name, salary, socialNumber) {
        this._name = name;
        this._salary = salary;
        this._socialNumber = socialNumber;

        this._bonus = 1;
        this._password;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

}