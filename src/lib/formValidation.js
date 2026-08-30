const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[\d+\-\s()]+$/;

export function validateEmail(email) {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return 'Email is required.';
  }

  if (!emailPattern.test(trimmedEmail)) {
    return 'Please enter a valid email address.';
  }

  return '';
}

export function validatePhone(phone) {
  const trimmedPhone = phone.trim();
  const digitsOnly = trimmedPhone.replace(/\D/g, '');

  if (!trimmedPhone) {
    return 'Phone number is required.';
  }

  if (!phonePattern.test(trimmedPhone)) {
    return 'Phone number can only contain digits, spaces, +, -, and parentheses.';
  }

  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return 'Please enter a valid phone number.';
  }

  return '';
}
