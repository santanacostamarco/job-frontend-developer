function searchVideo (query) {
    return {
        type: 'SET_QUERY',
        payload: query
    }
}

export default searchVideo