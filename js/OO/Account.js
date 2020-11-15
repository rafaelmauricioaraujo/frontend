import { Client } from './Client.js';
export class Account {
    constructor(balance, client, agency) {
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

    withdrawing(amount) {
        if (this._balance >= amount) {
            this._balance -= amount
            return amount;
        } else {
            return 'deined';
        }
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