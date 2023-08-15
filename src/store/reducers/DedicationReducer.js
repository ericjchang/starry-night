const defaultState = {
  text: 'Sample Dedication',
};

const Dedication = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DEDICATION':
      return {
        text: action.data.text,
      };
    default:
      return state;
  }
};

export default Dedication;
