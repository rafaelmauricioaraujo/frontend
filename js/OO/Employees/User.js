export class User {
    constructor(name, salary, sn) {
        this._name = name;
        this._salary = salary;
        this._sn = sn;
        this._bonus = 1;
        this._password = null;
    }

    set password(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }
}