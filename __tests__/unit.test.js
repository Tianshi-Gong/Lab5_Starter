// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Tests for isPhoneNumber
test('should return true for valid phone number with area code', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('should return true for valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('should return false for incomplete phone number', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

test('should return false for phone number with letters', () => {
  expect(isPhoneNumber('123-456-ABCD')).toBe(false);
});


// Tests for isEmail
test('should return true for a valid email', () => {
  expect(isEmail('tgong@ucsd.edu')).toBe(true);
});

test('should return true for a valid email with underscore', () => {
  expect(isEmail('tgong@ucsd.edu')).toBe(true);
});

test('should return false for email without @ symbol', () => {
  expect(isEmail('tgongucsd.edu')).toBe(false);
});

test('should return false for email without domain', () => {
  expect(isEmail('tgong@.edu')).toBe(false);
});


// Tests for isStrongPassword
test('should return true for valid strong password', () => {
  expect(isStrongPassword('grHBhd34d34f2')).toBe(true);
});

test('should return true for another valid strong password', () => {
  expect(isStrongPassword('Abc_123')).toBe(true);
});

test('should return false for short password', () => {
  expect(isStrongPassword('Abc')).toBe(false);
});

test('should return false for password starting with number', () => {
  expect(isStrongPassword('123Abcd')).toBe(false);
});


// Tests for isDate
test('should return true for a valid date format', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('should return true for another valid date format', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('should return false for invalid date format with wrong delimiter', () => {
  expect(isDate('12-31-2024')).toBe(false);
});

test('should return false for invalid date format with letters', () => {
  expect(isDate('Dec 31 2024')).toBe(false);
});


// Tests for isHexColor
test('should return true for a valid 3 character hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('should return true for a valid 6 character hex color', () => {
  expect(isHexColor('#FFAACC')).toBe(true);
});

test('should return false for symbol in the hex color', () => {
  expect(isHexColor('FFAA??')).toBe(false);
});

test('should return false for an invalid hex color', () => {
  expect(isHexColor('#GHIJKL')).toBe(false);
});

