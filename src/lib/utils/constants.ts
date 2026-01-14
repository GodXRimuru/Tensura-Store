/**
 * Application Constants
 * Centralized location for all constant values used throughout the application
 */

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
  USERS: '/users',
  PRODUCTS: '/products',
  ORDERS: '/orders',
  CART: '/cart',
  AUTH: '/auth',
  REVIEWS: '/reviews',
} as const;

/**
 * API Request Timeout (in milliseconds)
 */
export const API_TIMEOUT = 30000;

/**
 * Product Categories
 */
export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Books',
  'Home & Garden',
  'Sports',
  'Toys',
  'Beauty',
  'Other',
] as const;

/**
 * Order Status
 */
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

/**
 * Sort Options
 */
export const SORT_OPTIONS = {
  PRICE_LOW_HIGH: 'price-asc',
  PRICE_HIGH_LOW: 'price-desc',
  NEWEST: 'newest',
  RATING: 'rating',
  POPULARITY: 'popularity',
} as const;

/**
 * Pagination
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

/**
 * Currency
 */
export const CURRENCY = {
  SYMBOL: '$',
  CODE: 'USD',
  DECIMAL_PLACES: 2,
} as const;

/**
 * Validation Rules
 */
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 32,
  PRODUCT_NAME_MAX_LENGTH: 255,
  PRODUCT_DESCRIPTION_MAX_LENGTH: 5000,
  REVIEW_MAX_LENGTH: 1000,
} as const;

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_URL: 'Please enter a valid URL',
  INVALID_ZIP: 'Please enter a valid ZIP code',
  FIELD_REQUIRED: 'This field is required',
  INVALID_CREDIT_CARD: 'Please enter a valid credit card number',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  INTERNAL_SERVER_ERROR: 'An error occurred. Please try again later',
  NETWORK_ERROR: 'Network error. Please check your connection',
} as const;

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  ORDER_PLACED: 'Your order has been placed successfully',
  PRODUCT_ADDED_TO_CART: 'Product added to cart',
  PRODUCT_REMOVED_FROM_CART: 'Product removed from cart',
  REVIEW_SUBMITTED: 'Your review has been submitted',
  PROFILE_UPDATED: 'Your profile has been updated',
  PASSWORD_CHANGED: 'Your password has been changed',
} as const;

/**
 * Local Storage Keys
 */
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_PREFERENCES: 'user_preferences',
  CART_DATA: 'cart_data',
  THEME: 'theme',
} as const;

/**
 * Regex Patterns
 */
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  PHONE: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
} as const;
