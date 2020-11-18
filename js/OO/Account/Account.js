import { Client } from '../Client.js';
export class Account {
    constructor(balance, client, agency) {

        if (this.constructor == Account) {
            throw new Error('Account is a abstract class, do not create instances');
        }

        this._balance = balance;
        this._client = client;
        this._agency = agency;
    }

    get client() {
        return this._client;
    }
    
    set client(newClient) {
        if (newClient instanceof Client) {
            this._client = newClient;
        }
    }
    get agency() {
        return this._client;
    }

    set agency(agency) {
        this._agency = agency;
    }

    get balance(){
        return this._balance;
    }

    withdrawing() {
        throw new Error('withdrawing method not implemented');
    }

    _withdraing(amount, tax) {
        if (this._balance >= amount * tax) {
            this._balance -= amount * tax;
            return amount;
        }
        return 0;
    }

    deposit(amount) {
        if (amount <= 0) return
        this._balance += amount;
    }

    transfer(amount, account) {
        let transferAmount = this.withdrawing(amount);
        account.deposit(transferAmount);
    }

}