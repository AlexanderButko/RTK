import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

export const postJSONAPI = createApi({
    reducerPath : 'postJSONAPI',
    baseQuery : fetchBaseQuery({baseUrl : ' http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({

        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),

            providesTags: result => ['Post']
        }),

        createPost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: '/posts',
                method: 'POST',
                body: post
            }),

            invalidatesTags: result => ['Post']
        }),

        updatePost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),

            invalidatesTags: result => ['Post']
        }),

        deletePost: builder.mutation<IPost, IPost>({
            query: (post)=> ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),

            invalidatesTags: result => ['Post']
        }),
    })
})
