import { Account } from './Account.js';

export class CurrentAcc extends Account {
    static #count = 0;
    constructor(client, agency) {
        super(0, client, agency);
        CurrentAcc.#count ++;
    }

    withdrawing(amount) {
        const tax = 1.1;
        return this._withdraing(amount, tax);
    }
}