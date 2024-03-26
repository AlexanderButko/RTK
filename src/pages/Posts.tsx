import React from 'react';
import {postAPI } from "../services/PostService";
import PostItem from "../components/PostItem/PostItem";


const Posts = () => {

    const{data : posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10)

    return (
        <div className="post-container">
            {isLoading && <h3>Загрузка...</h3>}
            {error && <h3>{"Error!"}</h3>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default Posts;