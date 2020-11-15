import { Account } from './Account.js';

export class CurrentAcc extends Account {
    static #count = 0;
    constructor(client, agency) {
        super(0, client, agency);
        CurrentAcc.#count ++;
    }
}