export class Client {
    _name;
    _id;

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get id () {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }
}
