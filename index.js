function distanceFromHqInBlocks(pickUpBlock) {
    if (pickUpBlock <= 42) {
    return (42-pickUpBlock);
    } else {
        return (pickUpBlock-42);
    }
}

function distanceFromHqInFeet(pickUpBlock) {
    const value1 = distanceFromHqInBlocks(pickUpBlock);
    const value2 = value1 * 264;
    return value2;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start-destination)*264;
    } else {
        return (destination-start)*264
    }
}

function calculatesFarePrice(start, destination) {
    const value3 = distanceTravelledInFeet(start, destination);
    if (value3 <= 400) {
        return 0;
    } else if (value3 <= 2000) {
        return (value3-400)*0.02;
    } else if (value3 < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
  }
