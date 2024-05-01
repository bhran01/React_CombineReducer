import { legacy_createStore } from "redux";
import rootReducer from './reducers/index'

export const storeObj=legacy_createStore(rootReducer)