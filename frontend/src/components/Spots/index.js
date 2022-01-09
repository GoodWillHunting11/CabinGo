import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {getAllSpots} from '../../store/spots'



function Spots() {
const dispatch = useDispatch()
const allSpots = useSelector(state => state.spots.list)

useEffect(() => {
    dispatch(getAllSpots())
},[])

    return (
        <div>
            <h1>All Cabins</h1>
            {allSpots.map(spot => (
              <div>
                <h2 key={spot.id}>{spot.title}</h2>
                <img key={spot.id} src={spot.Images[0].url} />
                <h3 key={spot.id}>{spot.description}</h3>
                <h3 key={spot.id}>{spot.costPerNight}</h3>
              </div>
            ))}
        </div>
    )
}


export default Spots;
