var assert = require('chai').assert;
var Parking = require('../main/ParkingLot');

describe('Parking Lot tests', function() {

it('when car is parked should return true', function() {
    let parkingLot = new Parking();
    let isPark = parkingLot.carParked("car1","Audi");
    assert.equal(true,isPark);
});

it('when car is unparked should return true', function() {
    let parkingLot = new Parking();
    parkingLot.carParked("car1","Audi");
    let isUnPark = parkingLot.carUnParked("car1")
    assert.equal(true,isUnPark);
});

it('when parking lot is full should return message', function() {
    try {
    let parkingLot = new Parking();
    parkingLot.carParked("car1","Audi");
    parkingLot.carParked("car2","bmw");
    parkingLot.carParked("car3","ford");
    parkingLot.carParked("car4","benz");
    } catch (message) {
    assert.equal(message.message,'parking lot is full');
    }
});

it('when parking lot has space again should return true', function(){
    let parkingLot = new Parking();
    parkingLot.carParked("car1","Audi");
    parkingLot.carParked("car2","bmw");
    parkingLot.carParked("car3","ford");
    let isSpace = parkingLot.carUnParked("car1");
    assert.equal(true,isSpace);

});

});