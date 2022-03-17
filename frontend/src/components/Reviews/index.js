import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllReviews, newReview } from "../../store/review";
import { getOneSpot, deleteSpot } from "../../store/spots";
import { Rating } from 'react-simple-star-rating'


function Reviews({spotId, sessionUser}) {
    const reviews = useSelector(state => state?.reviews?.list)
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state?.spots[spotId])
    const history = useHistory()
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(0)


    useEffect(() => {
        dispatch(getAllReviews(spotId))
        dispatch(getOneSpot(spotId))
    },[spotId, dispatch])

    console.log('---->', reviews)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: sessionUser?.id,
            spotId: +spotId,
            review: body,
            rating,
        }

        console.log('payloadddd', payload)

        const addReview = await dispatch(newReview(payload))

        if (addReview) {
            dispatch(getAllReviews(spotId))
            setBody('')
            setRating(0)
            // history.push(`/spots/${spotId}`)
        }
    }

    const handleRating = (e) => {
        setRating(e / 20)
      }

    return (
        <>
            <div>
                {reviews && reviews?.map(review => (
                    <div>
                        <p>{review?.review}</p>
                        <p>{review?.rating}</p>
                    </div>
                ))}
                {oneSpot?.userId !== sessionUser?.id &&
                  <>
                    <div>
                        <input
                        type='text'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder='Leave a Review'
                        />
                        <button
                        onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <div className='App'>
                        <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                    </div>
                  </>}
            </div>
        </>
    )
}

export default Reviews
