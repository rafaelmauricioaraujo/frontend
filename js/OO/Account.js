import { Client } from './Client.js';
export class Account {
    _agency;
    _client;
    _balance = 0;
    #password = 'qweasd';

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

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
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