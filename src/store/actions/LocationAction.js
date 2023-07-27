export function updateLocation({ long, lat, name }) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_LOCATION',
      data: {
        long: long,
        lat: lat,
        name: name,
      },
    });
  };
}
