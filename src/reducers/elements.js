import { fromJS } from "immutable";
import { SET_ELEMENTS, SET_FAVORITE, SET_LOADING } from "../actions/types";

const initialState = fromJS({
  elements: [],
  loading: false,
});

// Encargado de saber como se va a actulizar el estado.
export const elementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ELEMENTS:
      //  return {...state, elements: action.payload }; //copiar todo lo que ya teníamos en estado actual y reemplazar "elements" por action.payload
      return state.setIn(['elements'], fromJS(action.payload));
    case SET_FAVORITE:
      // const newElementList = [...state.elements]; //se quitala copia porque immutable se encarga de hacerlo
      const currentElementIndex = state.get('elements').findIndex((element) => {
        return element.get("id") === action.payload.elementId;
      });
      if (currentElementIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn([
        "elements",
        currentElementIndex,
        "favorite",
      ]);

      return state.setIn(
        ["elements", currentElementIndex, "favorite"],
        !isFavorite
      );

      case SET_LOADING:
        //  return {...state, loading: action.payload };
        return state.setIn(["loading"], action.payload);
    default:
      return state;
  }
};

//Usamos el index para identificar que tenemos un elemento en fav
//findIndex: la función va a pasar por cada elemento y va a retornar el index cuando el elemento actual.id
