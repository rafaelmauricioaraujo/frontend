import { Client } from './Client.js';
export class Account {
    agency;
    _client;
    #password = 'qweasd';
    _balance = 0;


    set client(newClient) {
        if (newClient instanceof Client) {
            this._client = newClient;
        }
    }

    get client() {
        return this._client;
    }

    withdrawing(amount) {
        if (this._balance >= amount) {
            this._balance -= amount
            return amount;
        } else {
            return 'deined';
        }
    }

    get balance(){
        return this._balance;
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