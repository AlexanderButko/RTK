import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchPhotos} from "../store/reducers/ActionCreators";
import PhotoItem from "../components/photoItem/PhotoItem";

const Photos = () => {

    const {isLoading, photos, error, } = useAppSelector(state => state.photoReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    return (

        <div className='photo-container'>
            {isLoading
                ? <h1>Loading</h1>
                :photos.map(
                    photo => <PhotoItem key = {photo.id} photo={photo}/>
                )
            }
            {error&&<div>{error.message}</div>}
        </div>
    );
};

export default Photos;