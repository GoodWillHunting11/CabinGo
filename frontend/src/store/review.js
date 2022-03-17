import {csrfFetch, csurf} from './csrf'

const LOAD_ALL = 'reviews/LOAD_ALL'
const ADD_ONE = 'reviews/ADD_ONE'
// const LOAD_ONE = 'spots/LOAD_ONE'
// const DELETE_ONE = 'spots/DELETE_ONE';

const addOne = (review) => {
    return {
        type: ADD_ONE,
        review
    }
}


const loadAll = (spotId) => {
    return {
        type: LOAD_ALL,
        list: spotId
    }
}


// const deleteOneSpot = (spotId) => {
//     return {
//         type: DELETE_ONE,
//         spotId
//     }
// }

export const getAllReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`)
    if(response.ok){
        const reviews = await response.json()
        console.log('reviewssss', reviews)
        dispatch(loadAll(reviews))
        return reviews
    }
}

export const newReview = (payload) => async dispatch => {

    const response = await csrfFetch(`/api/reviews/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const newReview = await response.json()

        dispatch(addOne(newReview))
        return newReview
    } else {
        const data = await response.json()
        if (data.errors) {
            return { 'errors': data.errors };
        } else {
            return { 'errors': 'Something went wrong. Please try again.'}
        }
    }
}

const initialState = {
    list: []
 };

const reviewsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_ALL: {
            const allReviews = {}
            action.list.forEach(review => {
                allReviews[review.id] = review
            });
            return {
                ...allReviews,
                ...state.list,
                list: action.list
            }
        }
        case ADD_ONE: {
            newState = { ...state }
            return { ...newState}
        }
        // case DELETE_ONE: {
        //     const newState = { ...state };
        //     delete newState[action.spotId];
        //     return newState;
        // }
        default:
            return state;
    }
};


export default reviewsReducer
