export const validators = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  password: (value) => {
    return value && value.length >= 6;
  },
  required: (value) => {
    return value && value.trim().length > 0;
  },
  name: (value) => {
    return value && value.trim().length >= 2;
  },
  phone: (value) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/;
    return phoneRegex.test(value);
  }
};

export const getFieldValidation = (value, type) => {
  const validator = validators[type];
  if (!validator) return { isValid: true };
  return { isValid: validator(value) };
};
