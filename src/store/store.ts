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
            //Получаем дефолтные middleware, подключенные к RTK (напр. thunk)
            //И добавляем их к store из PostAPI
            getDefaultMiddleware().concat(postAPI.middleware, postJSONAPI.middleware)

    })
}

//Тип корневого редьюсера
export type RootState = ReturnType<typeof rootReducer>
//Тип хранилища
export type AppStore = ReturnType<typeof setupStore>
//Тип диспатча. Определив тип диспатча, мы не сможем задиспатчить те экшны, которые не определили
export type AppDispatch = AppStore['dispatch']



