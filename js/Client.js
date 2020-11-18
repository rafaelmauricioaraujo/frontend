export class Client {
    _name;
    _id;

    get name() {
        return this._name;
    }
        
    get id () {
        return this._id;
    }
    
    constructor(clientName, clientId) {
        this._name = clientName;
        this._id = clientId;
    }
}
