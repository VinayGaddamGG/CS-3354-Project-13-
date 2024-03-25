import {validateUserRegistration} from "./input_validation";

describe('Input Validation', () => {
    test('Validate User Registration', async () => {
      // Test case 1: Valid input
      const validInput = ['username', 'email@example.com', 'Password1!', 'Password1!'];
      await expect(validateUserRegistration(...validInput)).resolves.not.toThrow();
  
      // Test case 2: Invalid username (empty)
      const invalidUsername = ['', 'email@example.com', 'Password1!', 'Password1!'];
      await expect(validateUserRegistration(...invalidUsername)).rejects.toThrow("Username cannot be empty");
  
      // Add more test cases for other validation rules
    });
  });