import { combineReducers } from 'redux'

import search from './search'

const reducers = combineReducers({
    query: search
})

export default reducers