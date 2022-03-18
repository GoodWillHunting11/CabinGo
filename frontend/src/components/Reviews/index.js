import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllReviews, addReview, deleteReview } from "../../store/review";
import { getOneSpot, deleteSpot } from "../../store/spots";
import { Rating } from 'react-simple-star-rating'
import './Reviews.css'
import EditReviewModal from "../../context/EditReviewModal";


function Reviews({spotId, sessionUser}) {
    const reviews = useSelector(state => state?.reviews?.list)
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state?.spots[spotId])
    const history = useHistory()
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(0)
    console.log('reviews user???', reviews)


    useEffect(() => {
        dispatch(getAllReviews(spotId))
        dispatch(getOneSpot(spotId))
    },[spotId, dispatch])

    console.log('---->', reviews)

    const handleDelete = (reviewId) => async (e) => {
        e.preventDefault()
        const data = await dispatch(deleteReview(reviewId));

        if (data && data.message === "Delete Successful") {
          await dispatch(getAllReviews(spotId));
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: sessionUser?.id,
            spotId: +spotId,
            review: body,
            rating: rating/20,
        }

        console.log('payloadddd', payload)

        const newReview = await dispatch(addReview(payload))

        if (newReview) {
            dispatch(getAllReviews(spotId))
            setBody('')
            setRating(0)
            // history.push(`/spots/${spotId}`)
        }
    }

    const handleRating = (e) => {
        setRating(e)
      }

    return (
        <>
            <div className="review-main-container">
                <div className="actual-reviews">
                    {reviews && reviews?.map(review => (
                        <div className="each-review-user">
                            <p>{review?.User?.username}</p>
                            <Rating fillColor={'#bbaadd'} readonly='true' ratingValue={review?.rating * 20} />
                            <p>{review?.review}</p>
                            <button id="post-modal-del" onClick={handleDelete(review?.id)}><i className="fa fa-trash"></i></button>
                            <EditReviewModal reviewId={review?.id} spotId={spotId}/>
                        </div>
                    ))}
                </div>
                <div className="reviews-input-ss">
                    {oneSpot?.userId !== sessionUser?.id &&
                    <>
                        <h3>Leave a Review</h3>
                        <div className='App'>
                            <Rating onClick={handleRating} fillColor={'#bbaadd'} ratingValue={rating} />
                        </div>
                        <div>
                            <input
                            id='input-for-review'
                            type='text'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            />
                            <button
                            onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Reviews
