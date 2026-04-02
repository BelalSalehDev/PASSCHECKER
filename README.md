# Password Checker Module

A JavaScript utility module that validates passwords based on security requirements.

## Overview

This module provides two functions to validate passwords with the same set of requirements, offering flexibility in implementation approach (with or without regex).

## Password Requirements

All passwords must meet the following criteria:

- **Minimum Length**: At least 8 characters
- **Uppercase Letter**: At least one uppercase letter (A-Z)
- **Lowercase Letter**: At least one lowercase letter (a-z)
- **Digit**: At least one numeric digit (0-9)
- **Special Character**: At least one special character from: `!@#$%^&*(),.?":{}|<>`

## Functions

### `checkPassword(password)`

Validates a password using regular expressions.

**Parameters:**
- `password` (string): The password to validate

**Returns:**
- `true` if the password meets all requirements

**Throws:**
- `Error` if password is not a string
- `Error` if password fails any validation requirement

**Example:**
```javascript
import { checkPassword } from './PasswordChecker.js';

try {
    checkPassword('MySecurePass123!');  // ✓ Valid
    console.log('Password is valid');
} catch (error) {
    console.error(error.message);
}
```

### `checkPasswordWithoutRegex(password)`

Validates a password without using regular expressions, using character iteration and string methods instead.

**Parameters:**
- `password` (string): The password to validate

**Returns:**
- `true` if the password meets all requirements

**Throws:**
- `Error` if password is not a string
- `Error` if password fails any validation requirement

**Example:**
```javascript
import { checkPasswordWithoutRegex } from './PasswordChecker.js';

try {
    checkPasswordWithoutRegex('SecurePass456@');  // ✓ Valid
    console.log('Password is valid');
} catch (error) {
    console.error(error.message);
}
```

## Error Messages

The functions throw specific error messages for each validation failure:

| Validation | Error Message |
|-----------|---------------|
| Type check | `"Password must be a string"` |
| Length | `"Password must be at least 8 characters long"` |
| Uppercase | `"Password must contain at least one uppercase letter"` |
| Lowercase | `"Password must contain at least one lowercase letter"` |
| Digit | `"Password must contain at least one digit"` |
| Special char | `"Password must contain at least one special character"` |

## Usage Examples

### Valid Passwords

```javascript
checkPassword('MyPass123!');     // ✓
checkPassword('SecurePass456@'); // ✓
checkPassword('aB3#cDeFg');      // ✓
```

### Invalid Passwords

```javascript
checkPassword('short');                    // ✗ Too short
checkPassword('nouppercase123!');         // ✗ Missing uppercase
checkPassword('NOLOWERCASE123!');         // ✗ Missing lowercase
checkPassword('NoSpecial123');             // ✗ Missing special character
checkPassword('NoDigits!@#$');            // ✗ Missing digit
```

## Implementation Differences

### `checkPassword` (Regex-based)
- **Pros**: Concise, efficient for multiple patterns, more readable
- **Cons**: Requires regex knowledge, slightly overhead for multiple tests per string

### `checkPasswordWithoutRegex` (Iteration-based)
- **Pros**: No regex needed, explicit character checking logic, educational
- **Cons**: More verbose code, potentially slower for large character sets

Choose based on your performance requirements or coding style preference.

## Notes

- Both functions validate passwords in the same way and have identical error messages
- The special characters set is fixed and cannot be customized
- Passwords are case-sensitive
- Unicode characters are supported for uppercase/lowercase detection

