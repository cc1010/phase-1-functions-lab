// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42) {
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    }
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)  * 264
  }

function distanceTravelledInFeet(street1, street2) {
    return street2 > street1 ? (street2 - street1) * 264 : (street1 - street2) * 264
}


function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination)

    if (totalFeet > 2500) {
        return 'cannot travel that far'
    } else if (totalFeet > 2000) {
        return 25
    } else if (totalFeet > 400) {
        return (totalFeet - 400) * 0.02
    } else {
        return 0
    }
}