// Define a helper function that converts DD to DMS
export const toDMS = (dd, compass) => {
  var degrees = Math.floor(dd);
  var minutesFloat = (dd - degrees) * 60;
  var minutes = Math.floor(minutesFloat);
  var seconds = Math.floor((minutesFloat - minutes) * 60);

  var compassPoint = '';
  if (compass === 'lat') {
    compassPoint = degrees >= 0 ? 'N' : 'S';
  } else if (compass === 'lon') {
    compassPoint = degrees >= 0 ? 'E' : 'W';
  }

  return `${Math.abs(degrees)}° ${minutes}' ${seconds}'' ${compassPoint}`;
};
