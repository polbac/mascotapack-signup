import emailValidator from 'email-validator';

import SchemaBase from './SchemaBase';

export default class Person extends SchemaBase {
  constructor(name = '', email = '', phone = '') {
    super();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.errors = {};
  }

  getName() {
    return this.getAsString(this.name);
  }

  setName(name) {
    this.name = name;
    return this.returnNew(this);
  }

  getEmail() {
    return this.getAsString(this.email);
  }

  setEmail(email) {
    this.email = email;
    return this.returnNew(this);
  }

  getPhone() {
    return this.getAsString(this.phone);
  }

  setPhone(phone) {
    this.phone = phone;
    return this.returnNew(this);
  }

  isNameValid() {
    return this.getName().length >= 2;
  }

  isEmailValid() {
    return emailValidator.validate(this.email);
  }

  isValid() {
    return this.isNameValid()
            && this.isEmailValid()
            && this.isPhoneValid();
  }

  isPhoneValid() {
    console.log(this.getPhone().match(/\d/g));
    if (this.getPhone().match(/\d/g) === null) return false;
    return this.getPhone().match(/\d/g).length === 10;
  }

  validate() {
    this.errors = {
      name: !this.isNameValid(),
      email: !this.isEmailValid(),
      phone: !this.isPhoneValid(),
    };
    return this.returnNew(this);
  }

  getErrors() {
    return this.errors;
  }

  isFullfilled() {
    return this.name !== ''
            && this.email !== ''
            && this.phone !== '';
  }
}
