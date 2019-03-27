export default class Error {

    constructor(id, message) {
        this._id = id;
        this._message = message;
    }

    get id() {
        return this._id;
    }

    get message() {
        return this._message;
    }
    
}
