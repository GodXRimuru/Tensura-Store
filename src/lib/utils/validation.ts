/**
 * Form validation utilities
 * Provides common validation functions for forms and inputs
 */

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
 */
export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validate phone number
 * Supports international format
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate URL format
 */
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate ZIP code (US format)
 */
export const validateZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

/**
 * Check if string is not empty
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Check if string length is within range
 */
export const validateLength = (value: string, min: number, max: number): boolean => {
  return value.length >= min && value.length <= max;
};

/**
 * Validate credit card number (Luhn algorithm)
 */
export const validateCreditCard = (cardNumber: string): boolean => {
  const sanitized = cardNumber.replace(/\D/g, '');
  if (sanitized.length < 13 || sanitized.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validate form data object
 */
export const validateForm = (data: Record<string, unknown>, rules: Record<string, (value: unknown) => boolean>): Record<string, boolean> => {
  const errors: Record<string, boolean> = {};

  Object.entries(rules).forEach(([field, validate]) => {
    if (!validate(data[field])) {
      errors[field] = true;
    }
  });

  return errors;
};
