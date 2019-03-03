import immutable from 'immutable'
import { enGB } from '../lang'

const initState = {
    data: immutable.fromJS(enGB), 
    keyTranslate: 'enGB'
}

function reducer(state = initState, action) {
    switch(action.type) {
        default:
            return state;
    
    }
    return state;
}

module.exports = reducer;
