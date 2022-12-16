const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    if (this.vacantSpaces === 0) {
      this.queue.enqueue(licensePlateNumber);
    } else {
      this.spaces[this.firstEmptyIndex] = licensePlateNumber;
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    const indexOfParkingLot = this.spaces.findIndex(
      (ele) => ele === licensePlateNumber
    );
    if (indexOfParkingLot !== -1) {
      this.spaces[indexOfParkingLot] = "vacant";
      this.revenue += this.rate;
      while (this.vacantSpaces > 0 && this.queue.first) {
        this.enter(this.queue.first.value);
        this.queue.dequeue();
      }
      return;
    }
    if (this.queue.first && this.queue.first.value === licensePlateNumber) {
      this.queue.dequeue();
    } else {
      this.queue.remove((node) => node.value === licensePlateNumber);
    }
  }

  get firstEmptyIndex() {
    return this.spaces.findIndex((ele) => ele === "vacant");
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
