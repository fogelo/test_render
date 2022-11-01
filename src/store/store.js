import {combineReducers} from "redux";
import {appReducer} from "./app_reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    app: appReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
