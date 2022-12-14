import CONSTANTS from '../constants';
const {ACTIONS} = CONSTANTS;

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.DATA_LOAD_SUCCESS: {
            const {data: {comments}} = action;
            const newState = {
                ...state,
                messages: comments
            }
            return newState;
        }
        case ACTIONS.DATA_LOAD_ERROR: {
            const {error} = action;
            return {
                ...state,
                error
            }
        }
        case ACTIONS.SEND_MESSAGE:{
            const {message: {body, user}} = action;
            const newArrayMessage = [...state.messages, {
                body,
                user,
                id: (state.messages.length+1)
            }];
            return {
                ...state,
                messages: newArrayMessage
            }
        }
        default: {
            return state
        }
    }
}