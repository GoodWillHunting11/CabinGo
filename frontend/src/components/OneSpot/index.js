import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";


function OneSpot() {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state.spots[spotId])

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    },[spotId])

        return (
            <div>
                <img src={oneSpot?.Images[0].url} />
                <h2>{oneSpot?.title}</h2>
            </div>
        )
}

export default OneSpot
