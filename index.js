//Define a constructor
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //Add method getDescription
  getDescription() {
    return `make ${this.make}, model ${this.model}, year ${this.model}`;
  }
}
// create a ElectricCar subclass
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return `make: ${this.make}, model: ${this.model}, year: ${this.model}, range: ${this.range}`;
  }
}
// print string
const carInfo = new ElectricCar("Tesla", "Model S", "2019", "300");
console.log(carInfo.getDescription());
