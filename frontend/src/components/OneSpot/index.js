import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { getOneSpot, deleteSpot } from "../../store/spots";
import './onespot.css'


function OneSpot() {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state.spots[spotId])
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    },[spotId])


    const deleteBtn = async (e) => {
        e.preventDefault()
        let deleteSpotRes;
        try {
            deleteSpotRes = await dispatch(deleteSpot(oneSpot,spotId));
            console.log(deleteSpotRes)
        } catch (error) {
            throw new Error("Error - Resource not found")
        }
        if (deleteSpotRes.message === "Delete Successful") {
            history.push("/spots")
        }
    }

    return (
        <div className='spot-detail'>
            <h1>{oneSpot?.title}</h1>
            <img className="spot-image" src={oneSpot?.Images[0]?.url} alt="cabin" />
            {sessionUser?.id === oneSpot?.userId &&
                <>
                    <Link to={`/spots/${spotId}/host`}>Edit Spot</Link>
                    <button onClick={deleteBtn}>Delete</button>
                </>
            }
            <h3>Hosted By: {oneSpot?.User?.username}</h3>
            <p>{oneSpot?.description}</p>
            <div id='address-div'> Address:
                <p>{oneSpot?.address}</p>
                <p>{oneSpot?.city}</p>
                <p>{oneSpot?.state}</p>
                <p>{oneSpot?.zipCode}</p>
            </div>
            <div> Details:
                <p>{`Bathrooms: ${oneSpot?.baths}`}</p>
                <p>{`Bedrooms: ${oneSpot?.beds}`}</p>
                <p>{`Guests: ${oneSpot?.guests}`}</p>
            </div>
            <div> Amenities:
                <p>{`Fireplace: ${oneSpot?.Amenities[0]?.fireplace}`}</p>
                <p>{`Hot Tub: ${oneSpot?.Amenities[0]?.hotTub}`}</p>
                <p>{`Kitchen: ${oneSpot?.Amenities[0]?.kitchen}`}</p>
                <p>{`Parking: ${oneSpot?.Amenities[0]?.parking}`}</p>
                <p>{`Pets: ${oneSpot?.Amenities[0]?.pets}`}</p>
                <p>{`BBQ Grill: ${oneSpot?.Amenities[0]?.BBQgrill}`}</p>
                <p>{`Board Games: ${oneSpot?.Amenities[0]?.boardGames}`}</p>
                <p>{`WIFI: ${oneSpot?.Amenities[0]?.wifi}`}</p>
            </div>
            <h3>{`$${oneSpot?.costPerNight}/Night`}</h3>

        </div>
    )
}

export default OneSpot
