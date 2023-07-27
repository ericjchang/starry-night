const defaultState = {
  color: '#000000',
};

const Design = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR':
      return {
        color: action.data.color,
      };
    default:
      return state;
  }
};

export default Design;
