import React, { useRef, useEffect } from 'react';
import styles from './Chat.module.css';
import Message from './Message';

const Chat = (props) => {
    const messangeAndRef = useRef(null);

    useEffect(() => {
        scrollToButton()
    }, [props.messages]);

    const scrollToButton = () => {
        messangeAndRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={styles.container}>
            {props.messages.map(obj=><Message key={obj.id} message={obj}/>)}
            <div ref={messangeAndRef}></div>
        </div>
    );
}

export default Chat;
