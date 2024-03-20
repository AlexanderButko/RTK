import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

//Создание отдельного сервиса для JSON-Server (эмуляция загрузки постов на сервак)
export const postJSONAPI = createApi({
    reducerPath : 'postJSONAPI',//Некий ключ, однозначно определяющий текущий сервис
    //ОБРАТИ ВНИМАНИЕ! В этом сервисе изменен URL на localhost
    baseQuery : fetchBaseQuery({baseUrl : ' http://localhost:5000'}),
    //Теги, исп. в сервисе (как элемент массива можем указать и другие, напр 'User'
    tagTypes: ['Post'],
    //Все эндпоинты, на которые отправляются запросы
    endpoints: (builder) => ({


        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts', // Указываем эндпоинты относительно базового адреса
                params: {
                    _limit: limit
                }
            }),
            //Таким образом указываем, что этот эндпоинт работает с тегом Post
            //и обеспечивает загрузку данных
            providesTags: result => ['Post']
        }),
        //.mutation() для их изменения (POST, PUT)
        //В кач-ве дженерика тип объекта который нам вернется и тип объекта, который мы ожидаем аргументом
        createPost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: '/posts', // Указываем эндпоинты относительно базового адреса
                //Все типы, кроме get запроса  нужно указывать явно
                method: 'POST',
                //Сам передаваемый объект
                body: post
            }),
            //А так указываем, что при создании поста данные, загружаемые под таким тегом
            //становятся неактуальными и их нужно загрузить заново
            invalidatesTags: result => ['Post']
        }),
        //Эндпоинт обновления поста
        updatePost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: `/posts/${post.id}`, // Для обновления поста передаем его id
                //Все типы, кроме get запроса  нужно указывать явно
                method: 'PUT',
                //Сам передаваемый объект
                body: post
            }),
            //А так указываем, что при обновлении поста данные, загружаемые под таким тегом
            //становятся неактуальными и их нужно загрузить заново
            invalidatesTags: result => ['Post']
        }),
        //Эндпоинт удаления поста
        deletePost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: `/posts/${post.id}`, // Для удаления поста передаем его id
                //Все типы, кроме get запроса  нужно указывать явно
                method: 'DELETE',
                //Сам передаваемый объект
                body: post
            }),
            //А так указываем, что при удалении поста данные, загружаемые под таким тегом
            //становятся неактуальными и их нужно загрузить заново
            invalidatesTags: result => ['Post']
        }),
    })
})
