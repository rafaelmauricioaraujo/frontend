import { Account } from "./Account.js";

export class SavingAcc extends Account {
    constructor(balance, client, agency) {
        super(balance, client, agency)
    }

    withdrawing(amount) {
        const tax = 1.01;
        return this._withdraing(amount, tax);
    }

}