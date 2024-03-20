import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import Photos from "../pages/Photos";
import Posts from "../pages/Posts";
import PostsJSONServer from "../pages/PostsJSONServer";


const AppRouter : FC = () => {
    return (

        <Routes>
            <Route path = "/photos" element={<Photos/>}/>
            <Route path = "/error" element={<Error/>}/>
            <Route path='/' element={<Navigate replace to='/postsJS' />} />
            <Route path='/*' element={<Navigate replace to='/error' />} />
            <Route path='/postsJPH' element={<Posts/>}/>
            <Route path='/postsJS' element={<PostsJSONServer/>}/>
        </Routes>

    );
};

export default AppRouter;