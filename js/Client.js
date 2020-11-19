export class Client {
    constructor(clientName, clientId) {
        this._name = clientName;
        this._id = clientId;
        this._password;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
        
    get id () {
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    set password(password) {
        this._password = password;
    }

    authenticate(password) {
        return this._password == password;
    }
    
}
