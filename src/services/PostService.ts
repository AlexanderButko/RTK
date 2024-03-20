//Важно импортировать fetchBaseQuery именно с @reduxjs/toolkit/query/react, не @reduxjs/toolkit/query
//Иначе автоматом кастомные хуки не создадутся (см. документацию на RTK Query)

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

//RTK QUERY
export const postAPI = createApi({
    reducerPath : 'postAPI',//Некий ключ, однозначно определяющий текущий сервис
    //Базовый URL на который сервис отправляет запросы
    baseQuery : fetchBaseQuery({baseUrl : 'https://jsonplaceholder.typicode.com/'}),
    //Все эндпоинты, на которые отправляются запросы
    endpoints: (builder) => ({
        //.query() предназаначен для получения данных от сервера
        //.mutation() для их изменения (POST, PUT)
        //Первый аргумент - тип который подгружаем, второй - тип, который ожидает на вход хук
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit: number = 10) => ({
                url: '/posts', // Указываем эндпоинты относительно базового адреса
                params: {
                    _limit: limit
                }
            })

        })
        //
    })
})
