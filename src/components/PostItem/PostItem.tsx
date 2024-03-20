import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './PostItem.module.css'

interface PostItemProps {
    post : IPost;

}

const PostItem : FC<PostItemProps> = ({post }) => {
    return (
        <div className={styles.post_item}>
            <h3>{post.id}.{post.title}</h3>
            <div>{post.body}</div>

        </div>
    );
};

export default PostItem;