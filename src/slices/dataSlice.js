import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getElementDetails, getElements } from '../api';
import { setLoading } from './uiSlice';
//import { getElementsWithDetails } from '../actions';

const initialState = {
    elements: [],
}

export const fetchElementsWithDetails = createAsyncThunk(
    'data/fetchElementsWithDetails',                        //Nombre de la acción del Thunk
    async (_, {dispatch}) => {                              //Callback que se ejecutará al disparar la acción. _ :Vacío porque no tenemos parámetros
        dispatch(setLoading(true));

        const elementsRes = await getElements();            //Obtenemos la lista de elementos
        const elementsDetailed = await Promise.all(
            elementsRes.map(element =>
            getElementDetails(element))
        );
        dispatch(setElements(elementsDetailed));
        dispatch(setLoading(false));

    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setElements: (state, action) => {
            state.elements = action.payload;
        },
        setFavorite: (state, action) => {
            const currentElementIndex = state.elements.findIndex((element) => { //Obtenemos el current element index
                return element.id === action.payload.elementId;
              });
            if (currentElementIndex >= 0) {                                         //Vemos que sea un index válido
                const isFavorite = state.elements[currentElementIndex].favorite;    //Obtenemos el valor de la propiedad favorito del elemento

                state.elements[currentElementIndex].favorite = !isFavorite
            }
        }
    },
})

export const {setFavorite, setElements} = dataSlice.actions;

export default dataSlice.reducer;