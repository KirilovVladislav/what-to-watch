export const emailValidation = (email) => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return null
    }
    if (email.trim() === '') {
        return 'Email is required'
    }
    return 'Please enter a valid email'
}
export const passwordValidation = (password) => {
    if (password.trim() === '') {
        return 'Password is required'
    }
    if (password.length < 8) {
        return 'Password shorter than 8 characters'
    }
    return null
}