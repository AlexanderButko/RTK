import React, {useEffect, useState} from 'react';


import {postJSONAPI} from "../services/PostJSONServer";
import {IPost} from "../models/IPost";
import PostItemPOST from "../components/PostItemPOST/PostItemPOST";
import SButton from "../components/UI/SButton/SButton";
import Modal from "../components/UI/Modal/Modal";
import SInput from "../components/UI/SInput/SInput";
import STextarea from "../components/UI/Stextarea/STextarea";

const PostsJSONServer = () => {

    const [post, setPost] = useState<{title: string, body: string}>({title:'', body:''})
    const [idUpd, setIdUpd] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(false)
    const [buttonVisibility, setButtonVisibility] = useState<{isCreating: boolean, isUpdating: boolean}>({isCreating: false, isUpdating: false})

    const [createPost, {error : createError, isLoading : createIsLoading}] = postJSONAPI.useCreatePostMutation()
    const{data : posts, isLoading, error } = postJSONAPI.useFetchAllPostsQuery(100)

    const [updatePost, {}] = postJSONAPI.useUpdatePostMutation()
    const [deletePost, {}] = postJSONAPI.useDeletePostMutation()


    const creationHandler = () => {
        setVisible(true)
        setButtonVisibility({...buttonVisibility, isUpdating: false, isCreating: true})
    }

    const handler = (post : IPost) => {
        setVisible(true)
        setIdUpd(post.id)
        setButtonVisibility({...buttonVisibility, isUpdating: true, isCreating: false})
    }

    const handleCreate = async () => {
        await createPost({
            id: Date.now(),
            title: post.title,
            body: post.body
        } as IPost)

        setVisible(false)
    }

    const handleUpdate =  (post : IPost) => {

        updatePost({...post, id: idUpd});
        console.log(post)
        setVisible(false)
    }

    const handleDelete= (post : IPost) => {
        deletePost(post)
    }

    useEffect(() => {

        setPost({body: '', title: ''})
    },[!visible])

    return (
        <div className="post-container">

            <Modal
                visible={visible}
                setVisible={setVisible}
            >
                <SInput
                    value = {post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder='Заголовок поста'
                />

                <STextarea
                    value = {post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder='Тело поста'
                />
                {buttonVisibility.isCreating && <SButton onClick={handleCreate}>POST</SButton>}
                {buttonVisibility.isUpdating && <SButton onClick={() => handleUpdate(post as IPost)}>UPDATE</SButton>}

            </Modal>
            
            <SButton onClick={creationHandler}>
                Create new post
            </SButton>
            
            {createError && <h3>{'Post error!'}</h3>}
            {isLoading && <h3>{'Загрузка...'}</h3>}
            {error && <h3>{"Error!"}</h3>}

            {posts && posts.map(post =>
                <PostItemPOST
                    key={post.id}
                    post={post}
                    title = {post.title}
                    body = {post.body}
                    update={handleUpdate}
                    remove={handleDelete}
                    handler={handler}
                />
            )}
        </div>
    );
};

export default PostsJSONServer;