import {combineReducers, configureStore} from "@reduxjs/toolkit";
import photoReducer from './reducers/PhotoSlice'
import {postAPI} from "../services/PostService";
import {postJSONAPI} from "../services/PostJSONServer";

export const rootReducer = combineReducers({
    photoReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [postJSONAPI.reducerPath]: postJSONAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer : rootReducer,
        //Добавление middleware.
        middleware: (getDefaultMiddleware) =>

            getDefaultMiddleware().concat(postAPI.middleware, postJSONAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



