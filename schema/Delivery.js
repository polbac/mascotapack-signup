import SchemaBase from './SchemaBase';

export default class Delivery extends SchemaBase {
  constructor(street = '', floor = '', number = '', neighbourhood = '', extra = '') {
    super();
    this.street = street;
    this.floor = floor;
    this.number = number;
    this.neighbourhood = neighbourhood;
    this.extra = extra;
    this.errors = {};
  }

  isStreetValid() {
    return this.getValue('street').length >= 2;
  }

  isFloorValid() {
    return this.getValue('floor').length >= 1;
  }

  isNeighbourhoodValid() {
    return this.getValue('neighbourhood') !== '';
  }

  isNumberValid() {
    return this.getValue('number') !== '';
  }

  isValid() {
    return this.isStreetValid()
            && this.isFloorValid()
            && this.isNeighbourhoodValid()
            && this.isNumberValid();
  }

  validate() {
    this.errors = {
      street: !this.isStreetValid(),
      floor: !this.isFloorValid(),
      street: !this.isStreetValid(),
      neighbourhood: !this.isNeighbourhoodValid(),
    };

    return this.returnNew(this);
  }

  getErrors() {
    return this.errors;
  }

  isFullfilled() {
    return this.street !== ''
            && this.floor !== ''
            && this.number !== ''
            && this.neighbourhood !== '';
  }
}
