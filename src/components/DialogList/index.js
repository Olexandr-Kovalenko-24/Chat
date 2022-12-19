import React from 'react';
import styles from './DialogList.module.css';
import MessageInList from './MessageInList';

const DialoList = (props) => {
    return (
        <div className={styles.container}>
            {props.messages.map(obj=><MessageInList key={obj.id} message={obj}/>)}
        </div>
    );
}

export default DialoList;
