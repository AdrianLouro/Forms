export default class Rule {

    constructor(id, test) {
        this._id = id;
        this._test = test;
    }

    get id() {
        return this._id;
    }

    get test() {
        return this._test;
    }

    test(value) {
        return this._test(value);
    }

}
