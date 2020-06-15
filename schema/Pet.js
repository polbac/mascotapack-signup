export default class Pet {
    uuid = null
    name = null
    type = null
    size = null
    age = null
    health = null

    constructor(uuid, name = null, type = null, size = null, age = null, health = null) {
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

    getAsString(value) {
        return value === null ? '' : value
    }
}