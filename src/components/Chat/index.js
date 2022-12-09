import React from 'react';
import styles from './Chat.module.css';
import Message from './Message';

const Chat = (props) => {
    return (
        <div className={styles.container}>
            {props.messages.map(obj=><Message  message={obj}/>)}
        </div>
    );
}

export default Chat;
