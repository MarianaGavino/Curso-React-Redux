import { getElementDetails } from "../api";
import { SET_ELEMENTS } from "./types";

// función que retorna un action (obj que describe el cambio que va a pasar)
export const setElements = (payload) =>  ({
    type: SET_ELEMENTS,
    payload,
})

/*payload: nuevos elements 
    Dato que queremos darle al store para actulizar el estado.
*/

//Redux Thunk
//Función que retorna otra función
//El dispatch va a ser como el next, permitiendo que el action llegue al reducer
export const getElementsWithDetails = 
    (elements = []) =>
    async (dispatch) => {
        const elementsDetailed = await Promise.all(
            elements.map(element =>
            getElementDetails(element))
        );
    dispatch(setElements(elementsDetailed));
};