 import {csrfFetch, csurf} from './csrf'

const LOAD_ALL = 'spots/LOAD_ALL'
const LOAD_ONE = 'spots/LOAD_ONE'
const ADD_ONE = 'spots/ADD_ONE'

const loadAll = (list) => {
    return {
        type: LOAD_ALL,
        list
    }
}

const loadOne = (spot) => {
    return {
        type: LOAD_ONE,
        spot
    }
}

const addOne = (spot) => {
    return {
        type: ADD_ONE,
        spot
    }
}

export const addSpot = (payload) => async (dispatch) => {
    console.log('payload in thunk', payload)
    const response = await csrfFetch('/api/spots/host', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    })
    const spot = await response.json()
    dispatch(addOne(spot))
    return spot;
}

export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`)

    if(response.ok) {
        const spot = await response.json()
        dispatch(loadOne(spot))
    }
}

export const getAllSpots = () => async (dispatch) => {
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
    console.log('action',action)
    switch (action.type) {
        case LOAD_ALL: {
            const allSpots = {}
            action.list.forEach(spot => {
                allSpots[spot.id] = spot
            });
            return{
                ...allSpots,
                ...state.list,
                list: action.list
            }
        }
        case LOAD_ONE: {
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                };
            return newState;
        }
        case ADD_ONE: {
            if(!state[action.spot.id]){
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                };
                const spotList = newState.list.map(id => newState[id]);
                spotList.push(action.spot);
                newState.list = action.list;
                return newState;
            }
            return {
                ...state,
                [action.spot.id]:{
                    ...state[action.spot.id],
                    ...action.spot
                }
            }
        }
        default:
            return state;
    }
};
// {1:{my first spot}, 2:{my second spot}}

export default spotsReducer;
