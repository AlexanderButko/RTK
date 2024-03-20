import React, {useState} from 'react';
import SInput from "./UI/SInput/SInput";
import SButton from "./UI/SButton/SButton";
import {IPost} from "../models/IPost";


interface IPostFormProps {
    buttonText: string,
    handle: (post: IPost) => void
}

const PostForm = (props : IPostFormProps) => {
    const [post, setPost] = useState({title : '', body : ''});

    const postAddition = () => {

        const newPost = {
            ...post,
            id: Date.now()
        };
        props.handle(newPost);
        setPost({title: '', body: '' });
    }

    return (
        <div>
                <SInput
                    onChange = { e => setPost({...post, title : e.target.value})}
                    placeholder = 'Заголовок'
                    value = {post.title}
                />
                <SInput
                    onChange = { e => setPost({...post, body : e.target.value})}
                    placeholder = 'Тело поста'
                    value = {post.body}
                />
                <SButton onClick={() => postAddition} >{props.buttonText}</SButton>
        </div>
    );
};

export default PostForm;