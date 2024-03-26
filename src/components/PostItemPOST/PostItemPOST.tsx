import React, {FC, useState} from 'react';
import {IPost} from "../../models/IPost";
import styles from './PostItemPOST.module.css'
import SButton from "../UI/SButton/SButton";
import SInput from "../UI/SInput/SInput";
import STextarea from "../UI/Stextarea/STextarea";
import Modal from "../UI/Modal/Modal";

interface PostItemPOSTProps {
    post : IPost;
    remove : (post : IPost) => void
    update : (post : IPost) => void,
    title : string,
    body : string
    handler: (post : IPost) => void
}

const PostItemPOST : FC<PostItemPOSTProps> = ({post, remove, update, title, body, handler }) => {


    const handleRemove = () =>{
        remove(post)
    }

    const handleUpdate = () =>{

        handler(post)
    }

    return (
        <div className={styles.post_item}>

            <h3>{post.title}</h3>

            <div className={styles.container}>
                <div className={styles.post_body}>{post.body}</div>
                <div>
                    <SButton onClick={handleRemove}>DELETE</SButton>
                    <SButton onClick={handleUpdate}>UPDATE</SButton>
                </div>

            </div>

        </div>
    );
};

export default PostItemPOST;