function getCarColor(car) {
  try {
    if (!car) throw new Error("Color unknown");
  } catch (error) {
    return error.message;
  }
  return car.color;
}

//do not remove
module.exports = getCarColor;
