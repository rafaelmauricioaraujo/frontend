export class Account {
    agency;
    client;
    #password = 'qweasd';
    _balance = 0;

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

    transfer(amount, account){
        let transferAmount = this.withdrawing(amount);
        account.deposit(transferAmount);
    }
}