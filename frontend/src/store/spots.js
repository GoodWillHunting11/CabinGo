import {csrfFetch, csurf} from './csrf'

const LOAD_ALL = 'spots/LOAD_ALL'

const loadAll = (list) => {
    return {
        type: LOAD_ALL,
        list
    }
}

export const getAllSpots = () => async(dispatch) => {
    const response = await csrfFetch('/api/spots')
    if(response.ok){
        const spots = await response.json()
        console.log('thunk', spots)
        dispatch(loadAll(spots))
    }
}

const initialState = {
   list: []
};

const spotsReducer = (state = initialState, action) => {
    console.log('action list', action)
    switch(action.type) {
        case LOAD_ALL:  {
           const allSpots = {}
           action.list.forEach(spot => {
                allSpots[spot.id] = spot
                console.log('all Spots with Images', allSpots)
           });
           return {
               ...state,
               ...allSpots,
               list: action.list
           }
        }
        default:
            return state;
    }
}
// {1:{my first spot}, 2:{my second spot}}

export default spotsReducer;
