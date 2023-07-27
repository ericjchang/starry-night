const initialState = {
  day: '',
  month: '',
  year: '',
};

const datePickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DAY':
      return {
        ...state,
        day: action.payload,
      };
    case 'UPDATE_MONTH':
      return {
        ...state,
        month: action.payload,
      };
    case 'UPDATE_YEAR':
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
};

export default datePickerReducer;
