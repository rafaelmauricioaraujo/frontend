import { Account } from "./Account.js";

export class SavingAcc extends Account {
    constructor(balance, client, agency) {
        super(balance, client, agency)
    }
}