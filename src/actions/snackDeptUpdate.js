export const UPDATE_SNACK_QUANTITY = 'UPDATE_SNACK_QUANTITY';

//action creator (A function that RETURNS an ACTION <---- just an object)
export const snackUpdate = (operator, index) => {
    return { type: UPDATE_SNACK_QUANTITY, payload: {operator, index} }
}
