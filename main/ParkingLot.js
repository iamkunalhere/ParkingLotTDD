var parkingLotOwner = require('../main/ParkingLotOwner');
var airportSecurityPersonal = require('./AirportSecuityPersonal');
class ParkingLot {
    
    constructor(){
        this.counter = 0;
        this.parkingLotCapacity = 3;
    }
   
carParked(carNumber,carName) {
    if(this.isParkingLotFull()) {
        throw new Error('parking lot is full');
    }
    this.parkingLot = new Map();
    this.parkingLot.set(carNumber,carName);
    this.counter++;
    if (this.counter < this.parkingLotCapacity) {
        let parkingOwner = new parkingLotOwner();
        parkingOwner.parkingSpaceAvailable();
    }
    return true;
}

isParkingLotFull() {
    if (this.counter == this.parkingLotCapacity) {
        let parkingOwner = new parkingLotOwner();
        let airportsecurity = new airportSecurityPersonal();
        parkingOwner.parkingLotIsFull();
        airportsecurity.parkingLotIsFull();
        return true;
    }
    return false;
}

carUnParked(carNumber) {
    return this.parkingLot.delete(carNumber);
}
}

module.exports = ParkingLot;