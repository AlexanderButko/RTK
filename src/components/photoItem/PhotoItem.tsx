import React, {FC, useState} from 'react';
import {IPhoto} from "../../models/IPhoto";
import styles from './PhotoItem.module.css'

interface PhotoItemProps{
    photo: IPhoto;
}

const PhotoItem : FC<PhotoItemProps> = ({photo}) => {

    let [visible, setVisible] =useState<boolean>(false);

    return (
        <div className={styles.container}>
            <div className={styles.title}>{photo.id}.{photo.title}</div>
            <img className={styles.pictureThumbnail}
                 src={photo.thumbnailUrl}
                 onClick={() => setVisible(true)}
                 alt={photo.title}
            />

            <div
                className={visible? styles.pictureFullPhotoContainer : styles.pictureHide}
                onClick={() => setVisible(false)}
            >
                <img className={styles.pictureFull}
                     src={photo.url}
                     alt={photo.title}
                />
            </div>

        </div>
    );
};

export default PhotoItem;