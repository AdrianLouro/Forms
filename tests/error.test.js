import Error from '../src/error';

describe('Error', () => {

    it('should return error message when calling getter', () => {
        const error = new Error('SHOULD_NOT_BE_NULL', 'This field should no be null');
        expect(error.message).toBe('This field should no be null');
    });

    it('should return id when calling getter', () => {
        const error = new Error('SHOULD_NOT_BE_NULL', 'This field should no be null');
        expect(error.id).toBe('SHOULD_NOT_BE_NULL');
    });

});