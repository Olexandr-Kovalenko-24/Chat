import React from 'react';
import styles from './Message.module.css';
import { format } from 'date-fns';
import cx from 'classnames';

const Message = (props) => {
    const { message: { id, body, postId, date, user: {username, imageSrc} } } = props;
    
    const imgSrc = imageSrc ? imageSrc : './avatar.webp';
    const messageDate = date ? date : new Date();

    const cn = cx({
        [styles['message-wrapper']]: body,
        [styles['user-message-wrapper']]: username === 'John Doe'
    })
    
    return (
        <section className={cn}>
            <img src={imgSrc} className={styles['message-author-image']} />
            <div className={styles['text-wrapper']}>
                <span className={styles['username']}>{username}</span>
                <span className={styles['message-body']}>{body}</span>
                <span className={styles['message-date']}>{format(messageDate, 'hh:mm')}</span>
            </div>
        </section>
    );
}

export default Message;
