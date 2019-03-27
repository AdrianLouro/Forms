import Error from './error';

export default class Input {

    constructor(id, value, rules = []) {
        this._id = id;
        this._value = value;
        this._rules = rules;
        this._errors = [];
    }

    get id() {
        return this._id;
    }

    get value() {
        return this._value;
    }

    get rules() {
        return this._rules;
    }

    get errors() {
        return this._errors;
    }

    addRules(rules) {
        rules.forEach(rule => {
            this.addRule(rule);
        });
    }

    addRule(rule) {
        const ruleIndex = this._rules.findIndex(currentRule => currentRule.id === rule.id)
        if (ruleIndex === -1) {
            this._rules.push(rule);
        } else {
            this._rules[ruleIndex] = rule;
        }
    }

    removeRule(id) {
        this._rules.filter(rule => rule.id !== id);
    }

    clearRules() {
        this._rules = [];
    }

    validate() {
        this.clearErrors();
        this._rules.forEach(rule => {
            const error = rule.test(this._value)
            if (error instanceof Error) {
                this.addError(error);
            }
        });

        return this.isValid();
    }

    isValid() {
        return this._errors.length === 0;
    }

    addError(error) {
        if (!this._errors.find(currentError => currentError.id === error.id)) {
            this._errors.push(error);
        }
    }

    clearErrors() {
        this._errors = [];
    }

}