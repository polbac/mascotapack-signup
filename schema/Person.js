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
        this.email = type
        this.phone = size
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

    validate() {
        this.errors = {
            name: !this.isNameValid()
        }
    }

    getErrors() {
        return this.errors
    }

    getAsString(value) {
        return value === null ? '' : value
    }
}