export default class Filters {
  constructor() {
    this.age = null;
    this.type = null;
    this.size = null;
    this.healths = [];
    this.sex = null;
    this.bit = null;
  }

  setAge(age) {
    this.setFilter('age', age);
    return this;
  }

  setType(type) {
    this.setFilter('type', type);
    return this;
  }

  addHealth(health) {
    const healths = this.getProperty('health');
    healths.push(health);
    this.setFilter('healths', healths);
    return this;
  }

  removeHealth(health) {
    const healths = this.getProperty('health');
    this.setFilter('healths', healths.filter((h) => h !== health));
    return this;
  }

  setSex(sex) {
    this.setFilter('sex', sex);
    return this;
  }

  setBit(bit) {
    this.setFilter('bit', bit);
    return this;
  }

  setFilter(prop, value) {
    this[prop] = value;
  }

  getProperty(prop) {
    return this[prop];
  }
}
