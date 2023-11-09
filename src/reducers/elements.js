import { SET_ELEMENTS, SET_FAVORITE, SET_LOADING } from "../actions/types";
// const GET_ELEMENTS = "GET:ELEMENTS";
// const GET_ELEMENTS_SUCCESS = "GET_ELEMENTS_SUCCESS";
// const GET_ELEMENTS_ERROR = "GET_ELEMENTS_ERROR";

const initialState = {
    elements: [],
    loading: false,
    error: false
};

// Encargado de saber como se va a actulizar el estado.
export const elementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ELEMENTS: 
            return {...state, elements: action.payload }; //copiar todo lo que ya teníamos en estado actual y reemplazar "elements" por action.payload
        case SET_LOADING:
            return {...state, loading: action.payload };
        case SET_FAVORITE:
            const newElementList = [...state.elements];
            const currentElementIndex = newElementList.findIndex((element) => {
                return element.id === action.payload.elementId
            });
            if (currentElementIndex < 0) {
                return state;
            } 
            newElementList[currentElementIndex].favorite =
           ! newElementList[currentElementIndex].favorite 

            return {...state, elements: newElementList }
            
        default:
            return state;
    }
}

//Usamos el index para identificar que tenemos un elemento en fav
//findIndex: la función va a pasar por cada elemento y va a retornar el index cuando el elemento actual.id