export function updateColor(color) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_COLOR',
      data: {
        color,
      },
    });
  };
}
