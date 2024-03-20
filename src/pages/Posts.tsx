import React from 'react';
import {postAPI } from "../services/PostService";
import PostItem from "../components/PostItem/PostItem";


const Posts = () => {
    //useFetchPostsQuery был создан автоматически RTK Query. В этом вся и фишка - не нужно вручную писать код
    //Хук ожидает аргументом параметр, исп. в запросе (напр. ${id}). В нашем случае query parameter limit (как в axios)

    const{data : posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10)
    //Так же автоматом создается куча полезных полей
    //Нам интересны data(сами данные), ошибка и загрузка. Опять же создано автоматом - не надо тратить время создавать вручную
    return (
        <div className="post-container">
            {isLoading && <h3>Загрузка...</h3>}
            {error && <h3>{"Error!"}</h3>}
            {/*posts && - проверяем, что posts не null и не undefined*/}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default Posts;