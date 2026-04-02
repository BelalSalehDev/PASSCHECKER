/**
 * Validates a password using regular expressions.
 * 
 * Checks that the password meets all security requirements:
 * - At least 8 characters long
 * - Contains at least one uppercase letter (A-Z)
 * - Contains at least one lowercase letter (a-z)
 * - Contains at least one digit (0-9)
 * - Contains at least one special character (!@#$%^&*(),.?":{}|<>)
 * 
 * @param {string} password - The password to validate
 * @returns {boolean} true if the password meets all requirements
 * @throws {Error} If password is not a string or fails any validation requirement
 * 
 * @example
 * checkPassword('MySecurePass123!')  // returns true
 * checkPassword('weak')              // throws Error
 */
export function checkPassword(password) {
    var minLength = 8;
    if(typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if(password.length < minLength) {
        throw new Error(`Password must be at least ${minLength} characters long`);
    }
    if(!password.match(/[A-Z]/)) {
        throw new Error('Password must contain at least one uppercase letter');
    }
    if(!password.match(/[a-z]/)) {
        throw new Error('Password must contain at least one lowercase letter');
    }
    if(!password.match(/\d/)) {
        throw new Error('Password must contain at least one digit');
    }
    if(!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        throw new Error('Password must contain at least one special character');
    }
    return true;
}

/**
 * Validates a password without using regular expressions.
 * 
 * Checks that the password meets all security requirements using character iteration:
 * - At least 8 characters long
 * - Contains at least one uppercase letter (A-Z)
 * - Contains at least one lowercase letter (a-z)
 * - Contains at least one digit (0-9)
 * - Contains at least one special character (!@#$%^&*(),.?":{}|<>)
 * 
 * @param {string} password - The password to validate
 * @returns {boolean} true if the password meets all requirements
 * @throws {Error} If password is not a string or fails any validation requirement
 * 
 * @example
 * checkPasswordWithoutRegex('SecurePass456@')  // returns true
 * checkPasswordWithoutRegex('short')           // throws Error
 */
export function checkPasswordWithoutRegex(password) {
    var minLength = 8;
    var specialChars = '!@#$%^&*(),.?":{}|<>';
    
    if(typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if(password.length < minLength) {
        throw new Error(`Password must be at least ${minLength} characters long`);
    }
    if(!password.split('').some(char => char === char.toUpperCase() && char !== char.toLowerCase())) {
        throw new Error('Password must contain at least one uppercase letter');
    }
    if(!password.split('').some(char => char === char.toLowerCase() && char !== char.toUpperCase())) {
        throw new Error('Password must contain at least one lowercase letter');
    }
    if(!password.split('').some(char => char >= '0' && char <= '9')) {
        throw new Error('Password must contain at least one digit');
    }
    if(!password.split('').some(char => specialChars.includes(char))) {
        throw new Error('Password must contain at least one special character');
    }
    return true;
}
