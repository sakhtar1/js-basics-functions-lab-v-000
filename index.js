// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42){
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(feet) {
  var x = distanceFromHqInBlocks(feet)
  if (x){
    return x * 264;
  }
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    var y = start - end;
    return y * 264;
  } else {
    var x = end - start;
    return x * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
