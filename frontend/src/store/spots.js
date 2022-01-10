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

const loadOne = (id) => {
    return {
        type: LOAD_ONE,
        id
    }
}

const addOne = (newSpot) => {
    return {
        type: ADD_ONE,
        newSpot
    }
}

export const addSpot = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/spots/host', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    dispatch(addOne(data))
}

export const getOneSpot = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/:spotId')
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
        case LOAD_ONE: {
            if(!state[action.spot.id]){
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                };
                const spotList = newState.list.map(id => newState[id]);
                console.log(spotList)
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
        case ADD_ONE: {
            if (!state[action.newSpot.id]) {
              const newState = {
                ...state,
                [action.newSpot.id]: action.newSpot
              };
              const spotsList = newState.list.map(id => newState[id]);
              spotsList.push(action.newSpot);
            //   newState.list = sortList(spotsList);
              return newState;
            }
            return {
              ...state,
              [action.newSpot.id]: {
                ...state[action.newSpot.id],
                ...action.newSpot,
              }
            };
          }
        default:
            return state;
    }
}
// {1:{my first spot}, 2:{my second spot}}

export default spotsReducer;
