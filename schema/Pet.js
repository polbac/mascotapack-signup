export const PetType = {
    DOG: 'dog',
    CAT: 'cat',
}

export const PetSize = {
    BIG: 'big',
    MEDIUM: 'medium',
    SMALL: 'small',
    TOY: 'toy',
}

export const PetAge = {
    PUPPY: 'puppy',
    ADULT: 'adult',
    SENIOR: 'senior',
}

export const HealthProblems = {
    ALLERGY: 'allergy',
    OBESITY: 'obesity',
    URINARY: 'urinary'
}

export default class Pet {
    uuid = null
    name = null
    type = null
    size = null
    age = null
    health = []
    errors = {
        name: false,
    }

    constructor(uuid, name = null, type = PetType.DOG, size = PetSize.BIG, age = PetAge.PUPPY, health = []) {
        this.uuid = uuid
        this.name = name
        this.type = type
        this.size = size
        this.age = age
        this.health = health
    }

    getUUID() {
        return this.uuid
    }

    getName() {
        return this.getAsString(this.name)
    }

    setName(name) {
        this.name = name
        return this
    }

    getAge() {
        return this.getAsString(this.age)
    }

    setAge(age) {
        this.age = age
        return this
    }

    getSize() {
        return this.getAsString(this.size)
    }

    setSize(size) {
        this.size = size
        return this
    }

    isSize(size) {
        return size === this.size
    }

    getAge() {
        return this.getAsString(this.age)
    }

    setAge(age) {
        this.age = age
        return this
    }

    isAge(age) {
        return age === this.age
    }

    getAsString(value) {
        return value === null ? '' : value
    }

    getType() {
        return this.type
    }

    setType(type) {
        this.type = type
        return this
    }

    addHelathProblem(healthProblem) {
        if (!this.hasHealthProblem(healthProblem)) {
            this.health.push(healthProblem)
        }
        return this
    }

    removeHealthProblem(healthProblem) {
        this.health = this.health.filter(h => h !== healthProblem)
        return this
    }

    hasHealthProblem(healthProblem) {
        return this.health.includes(healthProblem)
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
}