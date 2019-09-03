const INITIAL_STATE = {
    query: null,
    videos: null
}

function search (state = INITIAL_STATE, action) {
    if ( action === 'SET_QUERY' ) {
        return {
            ...state,
            query: action.payload
        }
    }

    return state
}

export default search