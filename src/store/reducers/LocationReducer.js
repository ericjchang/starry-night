const defaultState = {
  long: 10,
  lat: 10,
  name: 'Sample Location',
};

const Location = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        name: action.data.name,
        long: action.data.long,
        lat: action.data.lat,
      };
    default:
      return state;
  }
};

export default Location;
