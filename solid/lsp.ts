// una clase abstracta nos sirve para trabajar con herencias
// y que las demás clases que extienden cumplan con los métodos
abstract class Vehicle {
  abstract getNumberOfSeats(): number
}

class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

// Se aplica el princio LSP ya que la función puede tolerar cualquier clase que sea subclase de Vehicle
const printCarSeats = (cars: Vehicle[]) => {
  cars.forEach((car) => {
    console.log(car.constructor.name, car.getNumberOfSeats())
  })
}

const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)]

printCarSeats(cars)
