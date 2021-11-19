class Airplane {
    constructor(name, passengers, flightNumber){
        this.name = name
        this.passengers = []
        this.flightNumber = flightNumber
    }
    passengersBoarded(passenger){
        this.passengers.push(passenger)
    }
}

module.exports = Airplane












// const testBag = new Bag(16)
// console.log(testBag.weight)