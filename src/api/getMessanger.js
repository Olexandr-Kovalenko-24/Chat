const API_BASE = 'https://dummyjson.com/comments';

export const getMessanges = () => {
    return fetch(API_BASE).then(res => res.json())
}