import { SET_ELEMENTS } from "./types";

// función que retorna un action (obj que describe el cambio que va a pasar)
export const setElements = (payload) =>  ({
    type: SET_ELEMENTS,
    payload,
})

/*payload: nuevos elements 
    Dato que queremos darle al store para actulizar el estado.
*/
