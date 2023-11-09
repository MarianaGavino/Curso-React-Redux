import { combineReducers } from "redux-immutable";
import { elementsReducer } from "./elements";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
    data: elementsReducer,
    ui: uiReducer,
});

export default rootReducer;