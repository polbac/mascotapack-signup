export const PetType = {
  DOG: 'Perro',
  CAT: 'Gato',
};

export const PetSize = {
  BIG: 'Large',
  MEDIUM: 'Medium',
  SMALL: 'Small',
  TOY: 'Toy',
};

export const PetAge = {
  PUPPY: 'Cachorro',
  ADULT: 'Adulto',
  SENIOR: 'Sennior',
};

export const HealthProblems = {
  ALLERGY: 'Hipoalergenico',
  OBESITY: 'SobrePeso',
  URINARY: 'Urinario',
  RENAL: 'Renal',
  STERIL: 'Esterelizado',
  GASTRO: 'Gastrointestinal',
};

export const Sex = {
  FEMALE: 'Hembra',
  MALE: 'Macho',
};

export const Bit = {
  SMALL: 'Pequena',
  BIG: 'Grande',
};

export default class Pet {
  constructor(uuid, name = null, type = PetType.DOG, size = PetSize.BIG, age = PetAge.PUPPY, health = [], sex = Sex.MALE, bit = Bit.BIG) {
    this.uuid = uuid;
    this.name = name;
    this.type = type;
    this.size = size;
    this.age = age;
    this.health = health;
    this.sex = sex;
    this.bit = bit;
    this.errors = {};
  }

  getUUID() {
    return this.uuid;
  }

  getName() {
    return this.getAsString(this.name);
  }

  setName(name) {
    this.name = name;
    return this;
  }

  getAge() {
    return this.getAsString(this.age);
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  getSize() {
    return this.getAsString(this.size);
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  getSex() {
    return this.getAsString(this.sex);
  }

  setSex(sex) {
    this.sex = sex;
    return this;
  }

  getBit() {
    return this.getAsString(this.bit);
  }

  setBit(bit) {
    this.bit = bit;
    return this;
  }

  isSize(size) {
    return size === this.size;
  }

  isAge(age) {
    return age === this.age;
  }

  getAsString(value) {
    return value === null ? '' : value;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  addHelathProblem(healthProblem) {
    if (!this.hasHealthProblem(healthProblem)) {
      this.health.push(healthProblem);
    }
    return this;
  }

  removeHealthProblem(healthProblem) {
    this.health = this.health.filter((h) => h !== healthProblem);
    return this;
  }

  hasHealthProblem(healthProblem) {
    return this.health.includes(healthProblem);
  }

  isFullfilled() {
    return this.isNameValid();
  }

  isNameValid() {
    return this.getName().length >= 2;
  }

  validate() {
    this.errors = {
      name: !this.isNameValid(),
    };
  }

  getErrors() {
    return this.errors;
  }
}
