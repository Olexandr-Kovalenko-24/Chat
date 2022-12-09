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
        userName: 'John Doe',
        imageSrc: './placeholder.jpg'
    });

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
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
    });

    return (
        <UserContext.Provider value={user}>
            <main className={styles.container}>
                {state.error && <div>Ooops! Error happening</div>}
                <DialoList />
                <div className={styles['chat-wrapper']}>
                    <Chat messages={state.messages}/>
                    <MessageArea />
                </div>
            </main>
        </UserContext.Provider>
    );
}

export default Dashboard;
