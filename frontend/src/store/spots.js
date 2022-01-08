import {csurf} from './csrf'

const LOAD_ALL = 'spots/GET_ALL'

const getAll = (spots) => {
    return {
        type: LOAD_ALL,
        spots
    }
}


const initialState = {
   list: [spots]
};

const spotsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL:
            const newState = {...state}
            newState.user = action.payload
            return newState
        default:
            return state;
    }
}


export default spotsReducer;
