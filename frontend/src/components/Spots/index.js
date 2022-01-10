import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {getAllSpots} from '../../store/spots'
import './spots.css'



function Spots() {
const dispatch = useDispatch()
const allSpots = useSelector(state => state.spots.list)

useEffect(() => {
    dispatch(getAllSpots())
},[])

    return (
        <div className="main-container">
            <div className="map">
                <img id='map-image' src='https://photos.smugmug.com/Maps-Vault/State-Park-System-Maps/Oklahoma-State-Park-Maps/i-zChwSH2/0/4a15f55e/L/Beavers_Bend_Broken_Bow_Lake-L.jpg' />
            </div>
            <div className="content-container">
                {allSpots.map(spot => (
                <div className="spots-container">
                    <div className="image-container">
                        <img id='spot-image' key={spot.id} src={spot.Images[0].url} />
                    </div>
                    <div className="info">
                        <Link to={`/spots/${spot.id}`}>
                            <h2 key={spot.id}>{spot.title}</h2>
                        </Link>
                        <p key={spot.id}>Description: {spot.description}</p>
                        <p key={spot.id}>Cost{spot.costPerNight}</p>
                        <p key={spot.id}>{spot.address}</p>
                        <p key={spot.id}>{spot.city}</p>
                        <p key={spot.id}>{spot.state}</p>
                        <p key={spot.id}>{spot.zipCode}</p>
                        <p key={spot.id}>{spot.guests}</p>
                        <p key={spot.id}>{spot.beds}</p>
                        <p key={spot.id}>{spot.baths}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default Spots;
