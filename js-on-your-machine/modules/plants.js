function findPlantById(plants, id) {
    let result = null;
    for (let i = 0; i < plants.length; i++) {
        let plant = plants[i];
        if (plant.id === id) {
            result = plant;
        }
    }
    return result;
}

// main.js line 2
// module.exports = findPlantById; old export command export as FUNCTION

// exporting an OBJECT instead of a FUNCTION
// { givenName to be referenced in the import: actualName in this file }
// no colon so it keeps this name in main.js
// module.exports = { findPlantById };
export default findPlantById;