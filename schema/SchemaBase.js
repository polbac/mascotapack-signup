export default class SchemaBase{
    returnNew(ob) {
        return Object.create(
            Object.getPrototypeOf(ob), 
            Object.getOwnPropertyDescriptors(ob) 
          );
    }

    getAsString(value) {
        return value === null ? '' : value
    }

    hasErrors() {
        return Object.entries(this.getErrors()).length > 0
    }

    setValue(name, value) {
        this[name] = value
        return this.returnNew(this)
    }

    getValue(name) {
        return this[name]
    }
}