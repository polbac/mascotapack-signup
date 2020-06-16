import emailValidator from 'email-validator'

export default class Pet {
    name = ''
    email = ''
    phone = ''

    errors = {
        name: false,
        email: false,
        phone: false,
    }

    constructor(name = '', email = '', phone = '') {
        this.name = name
        this.email = email
        this.phone = phone
    }

    getName() {
        return this.getAsString(this.name)
    }

    setName(name) {
        this.name = name
        return this
    }

    getEmail() {
        return this.getAsString(this.email)
    }

    setEmail(email) {
        this.email = email
        return this
    }

    getPhone() {
        return this.getAsString(this.phone)
    }

    setPhone(phone) {
        this.phone = phone
        return this
    }

    isFullfilled() {
        return this.isNameValid()
    }

    isNameValid() {
        return this.getName().length >= 2
    }

    isEmailValid() {
        return emailValidator.validate(this.email)
    }

    validate() {
        this.errors = {
            name: !this.isNameValid(),
            email: !this.isEmailValid(),
            phone: !this.isNameValid(),
        }
    }

    getErrors() {
        return this.errors
    }

    getAsString(value) {
        return value === null ? '' : value
    }

    areAllFullfilled() {
        return !this.errors.name &&
            !this.errors.email &&
            !this.errors.phone
    }

}