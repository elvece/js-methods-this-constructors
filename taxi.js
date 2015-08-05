function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];

}

Taxi.prototype.addPassenger = function(passengerName) {
    this.passengers.push(passengerName);
    return this.passengers;
};

Taxi.prototype.passengerCount = function(){
  if (this.passengers.length === 0){
    return this.passengers;
  }
  else {
    return this.passengers.length;
  }
};



// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
