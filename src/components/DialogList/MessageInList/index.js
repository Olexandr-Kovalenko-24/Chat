import React from 'react';
import styles from './MessageInList.module.css';
import { format } from 'date-fns';

const MessageInList = (props) => {
    const { message: { id, body, postId, date, user: {username, imageSrc} } } = props;
    
    const messageDate = date ? date : new Date();
    const imgSrc = imageSrc ? imageSrc : './avatar.webp';
    
    return (
        <section className={styles['message-wrapper']}>
            <img src={imgSrc} className={styles['message-author-image']} />
            <div className={styles['text-wrapper']}>
                <span className={styles['username']}>{username}</span>
                <span className={styles['message-body']}>{body}</span>
                <span className={styles['message-date']}>{format(messageDate, 'hh:mm')}</span>
            </div>
        </section>
    );
}

export default MessageInList;