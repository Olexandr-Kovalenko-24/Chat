import React, { useEffect, useReducer, useState } from 'react';
import DialoList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css';
import { getMessanges } from '../../api/getMessanger';
import UserContext from '../../contexts/UserContext';
import {reducer} from '../../reducers'

const Dashboard = () => {

    const [user, setUser] = useState({
        id: 1,
        username: 'John Doe',
        imageSrc: './placeholder.jpg'
    });

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null,
        answer: []
    });

    useEffect(() => {
        getMessanges()
        .then(data=>{
            const action = {
                type: 'DATA_LOAD_SUCCESS',
                data
            }
            dispatch(action);
        })
        .catch(error=>{
            const action = {
                type: 'DATA_LOAD_ERROR',
                error
            }
            dispatch(action)
        })
    },[]);

    const addNewMessage = (data) => {
        const action = {
            type: 'SEND_MESSAGE',
            message: {
                body: data,
                user
        }}
        dispatch(action);
    }

    return (
        <UserContext.Provider value={user}>
            <main className={styles.container}>
                {state.error && <div>Ooops! Error happening</div>}
                <DialoList />
                <div className={styles['chat-wrapper']}>
                    <Chat messages={state.messages}/>
                    <MessageArea sendMessage={addNewMessage}/>
                </div>
            </main>
        </UserContext.Provider>
    );
}

export default Dashboard;
