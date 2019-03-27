import Rule from '../src/rule';
import Error from '../src/error';


describe('Rule', () => {

    it('should return id when calling getter', () => {
        const rule = new Rule('SHOULD_NOT_BE_NULL_OR_EMPTY', (value) => true);
        expect(rule.id).toBe('SHOULD_NOT_BE_NULL_OR_EMPTY');
    });

    // TODO: HOW TO COMPARE FUNCTIONS BY REFERENCE
    // it('should return rule when calling getter', () => {
    //     const test = (value) => true;
    //     const rule = new Rule('SHOULD_NOT_BE_NULL_OR_EMPTY', test);
    //     expect(rule.test.toString()).toBe(test.toString());
    // });

    it('should return true when test is valid', () => {
        const rule = new Rule('SHOULD_NOT_BE_NULL_OR_EMPTY', (value) => true);
        expect(rule.test('true')).toBeTruthy();
    });

    it('should return an error when test is invalid', () => {
        const rule = new Rule('SHOULD_NOT_BE_NULL_OR_EMPTY', (value) => !!value || new Error('SHOULD_NOT_BE_EMPTY', 'The field should not be empty'));
        expect(rule.test('')).toBeInstanceOf(Error);
        expect(rule.test('').message).toBe('The field should not be empty');
    });

});