import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    user: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>