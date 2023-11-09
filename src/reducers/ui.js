import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
  loading: false,
});

// Encargado de saber como se va a actulizar el estado.
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      //  return {...state, loading: action.payload };
      return state.setIn(["loading"], action.payload);
    default:
      return state;
  }
};
