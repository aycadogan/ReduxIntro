import { UPDATE_SNACK_QUANTITY } from "../actions/snackDeptUpdate";

const initState = {
    snackData: [
        { food: 'Doritos', quantity: 10 },
        { food: 'Jagabee', quantity: 8 },
        { food: 'Haribo', quantity: 16 },
        { food: 'Calbee', quantity: 5 },
        { food: 'M&Ms', quantity: 2 },
    ]
}

export const snackReducer = (state = initState, action) => {

    //const {type, payload} = action

    switch (action.type) {

        case UPDATE_SNACK_QUANTITY:
            //console.log(action.payload)
            const newSnackState = [...state.snackData]

            if(action.payload.operator === '+'){
                newSnackState[action.payload.index].quantity++
            } else if (action.payload.operator === '-'){
                newSnackState[action.payload.index].quantity--
            }

            return {...state, snackData: newSnackState}
    
        default:
            return state;
    }
}