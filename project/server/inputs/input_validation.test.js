import {validateUserRegistration} from "./input_validation";

describe('Input Validation', () => {
    test('Valid TestCase', async () => {
      // Test case 1: Valid input
      const validInput = ['username', 'email@example.com', 'Password1!', 'Password1!'];
      await expect(validateUserRegistration(...validInput)).resolves.not.toThrow();
      // Add more test cases for other validation rules
    });
    test('Invalid TestCase, empty username', async () => {
        // Test case 2: Valid input
        const invalidUsername = ['', 'email@example.com', 'Password1!', 'Password1!'];
        await expect(validateUserRegistration(...invalidUsername)).rejects.toThrow("Username cannot be empty");
      });
    
  });