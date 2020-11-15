import { Account } from './Account.js';

export class CurrentAcc extends Account {
    static #count = 0;
    constructor(client, agency) {
        super(0, client, agency);
        CurrentAcc.#count ++;
    }

    withdrawing(amount) {
        const tax = 1.1;
        amount = amount * tax;
        if (this._balance >= amount) {
            this._balance -= amount
            return amount;
        } else {
            return 'deined';
        }
    }
}