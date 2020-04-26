var parkingLotOwner = require('../main/ParkingLotOwner');

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
    return true;
}

isParkingLotFull() {
    if (this.counter == this.parkingLotCapacity) {
        let Owner = new parkingLotOwner();
        Owner.parkingLotIsFull();
        return true;
    }
    return false;
}

carUnParked(carNumber) {
    return this.parkingLot.delete(carNumber);
}
}

module.exports = ParkingLot;