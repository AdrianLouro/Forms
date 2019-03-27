export default class Form {

    constructor(inputs = []) {
        this._inputs = inputs;
    }

    addInput(input) {
        this._inputs.push(input);
    }

    removeInput(input) {
        this._inputs = this._inputs.filter(currentInput => currentInput.id !== input.id);
    }

    isValid() {
        return this._inputs.reduce(errors, input => errors += input.errors.length, 0) === 0;
    }


}
