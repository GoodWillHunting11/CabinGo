import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getAllSpots} from '../../store/spots'
import './spots.css'



function Spots() {
const dispatch = useDispatch()
const allSpots = useSelector(state => state.spots.list)

useEffect(() => {
    dispatch(getAllSpots())
},[])

console.log('all spots',allSpots)
    return (
        <div className="main-container">
            <div className="map">
                <img id='map-image' src='https://photos.smugmug.com/Maps-Vault/State-Park-System-Maps/Oklahoma-State-Park-Maps/i-zChwSH2/0/4a15f55e/L/Beavers_Bend_Broken_Bow_Lake-L.jpg' />
            </div>
            <div className="content-container">
                {allSpots.map(spot => (

                <div className="spots-container">
                    <div className="image-container">
                        <img id='spot-image' crossOrigin="anonymous" key={spot.id} src={spot?.Images[0]?.url}></img>
                    </div>
                    <div className="info">
                        <Link to={`/spots/${spot.id}`}>
                            <h2 key={spot.id}>{spot.title}</h2>
                        </Link>
                        {/* <ul>
                            <li>{spot.Amenities[0].id}</li>
                        </ul> */}
                        {/* {console.log('a spot', spot.Amenities[0])} */}
                        <div className="guest-bed-bath-container">
                            <label id='guests'> Guests:
                                <p key={spot.id}>{spot.guests}</p>
                            </label>
                            <label id='beds'> Beds:
                                <p key={spot.id}>{spot.beds}</p>
                            </label>
                            <label id='baths'> Baths:
                                <p key={spot.id}>{spot.baths}</p>
                            </label>
                        </div>
                        <p key={spot.id}>Cost{spot.costPerNight}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default Spots;
