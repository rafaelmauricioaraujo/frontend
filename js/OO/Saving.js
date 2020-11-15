export class Saving {
    constructor(initialValue, client, agency) {
        this._amount = initialValue;
        this._client = client;
        this._agency = agency;
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