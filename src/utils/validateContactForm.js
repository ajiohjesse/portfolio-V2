import validString from './stringValidator'

export function validateContactForm({ name, email, message }) {
  if (validString.isEmpty(name)) {
    return { validated: false, message: 'Name is required' }
  }

  if (validString.isEmpty(email)) {
    return { validated: false, message: 'Email is required' }
  }

  if (validString.isEmpty(message)) {
    return { validated: false, message: 'Message is required' }
  }

  if (!validString.hasAlphabet(name)) {
    return { validated: false, message: 'Wrong name format' }
  }

  if (!validString.isEmail(email)) {
    return { validated: false, message: 'Wrong email format' }
  }

  return { validated: true, message: null }
}
