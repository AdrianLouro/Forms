import Input from '../src/input';
import Rule from '../src/rule';

describe('Input', () => {

    it('should return id when calling getter', () => {
        const input = new Input('name', '');
        expect(input.id).toBe('name');
    });

    it('should return value when calling getter', () => {
        const input = new Input('name', 'John Doe');
        expect(input.value).toBe('John Doe');
    });

    it('should return rules when calling getter', () => {
        const rules = [
            new Rule('NOT_NULL', (value) => true),
            new Rule('GREATER_THAN_10', (value) => true)
        ];
        const input = new Input('name', 'John Doe', rules);
        expect(input.rules).toHaveLength(2);
    });

    it('should replace rules with same id', () => {
        const input = new Input('name', 'John Doe');
        const function1 = (value) => true;
        const function2 = (value) => false;
        input.addRules([
            new Rule('NOT_NULL', function1),
            new Rule('NOT_NULL', function2),
            new Rule('GREATER_THAN_10', function1)
        ]);
        expect(input.rules).toHaveLength(2);
        // TODO: HOW TO COMPARE FUNCTIONS BY REFERENCE
        // expect(input.rules[0].test).toBe(function2);
    });

    it('should replace a rule with existing rule id', () => {
        const input = new Input('name', 'John Doe');
        input.addRule(new Rule('NOT_NULL', (value) => true));
        input.addRule(new Rule('NOT_NULL', (value) => true));
        input.addRule(new Rule('GREATER_THAN_10', (value) => true));
        expect(input.rules).toHaveLength(2);
    });

});