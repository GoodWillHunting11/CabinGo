import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import './onespot.css'


function OneSpot() {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state.spots[spotId])

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    },[spotId])

    // console.log('users table', oneSpot.User.username)
    return (
        <div className='spot-detail'>
            <h1>{oneSpot?.title}</h1>
            <img className="spot-image" src={oneSpot?.Images[0]?.url} alt="cabin" />
            <h3>Hosted By: {oneSpot?.User?.username}</h3>
            <p>{oneSpot?.description}</p>
            <div id='address-div'> Address:
                <p>{oneSpot?.address}</p>
                <p>{oneSpot?.city}</p>
                <p>{oneSpot?.state}</p>
                <p>{oneSpot?.zipCode}</p>
            </div>
            <ul> Details:
                <p>{`Bathrooms: ${oneSpot?.baths}`}</p>
                <p>{`Bedrooms: ${oneSpot?.beds}`}</p>
                <p>{`Guests: ${oneSpot?.guests}`}</p>
            </ul>
            <ul> Amenities:
                <p>{`Fireplace: ${oneSpot?.Amenities[0]?.fireplace}`}</p>
                <p>{`Hot Tub: ${oneSpot?.Amenities[0]?.hotTub}`}</p>
                <p>{`Kitchen: ${oneSpot?.Amenities[0]?.kitchen}`}</p>
                <p>{`Parking: ${oneSpot?.Amenities[0]?.parking}`}</p>
                <p>{`Pets: ${oneSpot?.Amenities[0]?.pets}`}</p>
                <p>{`BBQ Grill: ${oneSpot?.Amenities[0]?.BBQgrill}`}</p>
                <p>{`Board Games: ${oneSpot?.Amenities[0]?.boardGames}`}</p>
                <p>{`WIFI: ${oneSpot?.Amenities[0]?.wifi}`}</p>
            </ul>
            <h3>{`$${oneSpot?.costPerNight}/Night`}</h3>

        </div>
    )
}

export default OneSpot
