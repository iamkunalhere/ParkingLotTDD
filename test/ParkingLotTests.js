var assert = require('chai').assert;
var Parking = require('../main/ParkingLot');

describe('Parking Lot tests', function() {

it('when car is parked should return true', function() {
    let parkingLot = new Parking();
    let car;
    let isPark = parkingLot.carParked(car);
    assert.equal(true,isPark);
});

it('when car is unparked should return false', function() {
    let parkingLot = new Parking();
    let car;
    let isPark = parkingLot.carUnParked(car);
    assert.equal(false,isPark);
});

});