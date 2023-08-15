export function updateDedication(text) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_DEDICATION',
      data: {
        text,
      },
    });
  };
}
