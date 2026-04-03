import { checkPassword, checkPasswordWithoutRegex } from './PasswordChecker.js';
import { describe, test } from 'node:test';
import * as assert from 'node:assert';

describe('checkPassword', () => {
    const sut = checkPassword; //sut = system under test

    test('throws error if password is not a string', () => {
        assert.throws(() => sut(12345), /Password must be a string/);
    });

    //shows that if you add more context, you will get suitable solutions
    test('throws error if password is not a string and checks the error message', () => {
        assert.throws(() => sut(12345), {message: 'Password must be a string'});
    });

    test('throws error if password is less than 8 characters', () => {
        assert.throws(() => sut('Short1!'), {message: 'Password must be at least 8 characters long'});
    });
    
    
    test('throws error if password does not contain an uppercase letter', () => {
        assert.throws(() => sut('lowercase1!'), {message: 'Password must contain at least one uppercase letter'});
    });

    test('throws error if password does not contain a lowercase letter', () => {
        assert.throws(() => sut('UPPERCASE1!'), {message: 'Password must contain at least one lowercase letter'});
    });


});