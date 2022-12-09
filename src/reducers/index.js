export const reducer = (state, action) => {
    switch(action.type) {
        case 'DATA_LOAD_SUCCESS': {
            const {data: {comments}} = action;
            const newState = {
                ...state,
                messages: comments
            }
            return newState;
        }
        case 'DATA_LOAD_ERROR': {
            const {error} = action;
            return {
                ...state,
                error
            }
        }
        default: {
            return state
        }
    }
}