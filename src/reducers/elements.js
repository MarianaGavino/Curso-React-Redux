import { SET_ELEMENTS } from "../actions/types";

const initialState = {
    elements: [],
};

// Encargado de saber como se va a actulizar el estado.
export const elementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ELEMENTS: 
            return {...state, elements: action.payload }; //copiar todo lo que ya teníamos en estado actual y reemplazar "elements" por action.payload
        default:
            return state;
    }
}