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

    return (
        <div className="main-container">
            <div className="map">
                <img id='map-image' src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fr1.ilikewallpaper.net%2Fiphone-wallpapers%2Fdownload%2F78803%2FDo-not-disturb-iphone-wallpaper-ilikewallpaper_com.jpg' />
            </div>
            <div className="content-container">
                {allSpots?.map(spot => (

                <div key={spot.id} className="spots-container">
                    <div className="image-container">
                        <img id='spot-image' key={spot?.id} src={spot?.Images[0]?.url}></img>
                    </div>
                    <div className="info">
                        <div className="left-info-all">
                            <Link to={`/spots/${spot?.id}`}>
                                <h2 id='all-spots-title' key={spot?.id}>{spot?.title}</h2>
                            </Link>
                            <div className="line-div"></div>
                            <div className="guest-bed-bath-container">
                                <div className="style-b-b-g">
                                    <p key={spot?.id}>{spot?.guests}</p>
                                    <p id='guests'>{(spot?.guests > 1 ? 'guests' : 'guest')}</p>
                                    <span className="bullet-point-all-spots">∙</span>
                                </div>
                                <div className="style-b-b-g">
                                    <p key={spot?.id}>{`${spot?.beds}`}</p>
                                    <p id='beds'>{(spot?.beds > 1 ? 'bedrooms' : 'bedroom')}</p>
                                    <span className="bullet-point-all-spots-beds">∙</span>
                                </div>
                                <div className="style-b-b-g">
                                    <p key={spot?.id}>{spot?.baths}</p>
                                    <p id='baths'>{(spot?.baths > 1 ? 'baths' : 'bath')}</p>
                                </div>
                            </div>
                            <div className="amenities-container-all">
                                <p id='amenities-all'>
                                 {(spot?.Amenities[0]?.parking) ? 'parking ∙ '  : (spot?.Amenities[0]?.fireplace) ? 'fireplace ∙ ' : ''}
                                 {(spot?.Amenities[0]?.wifi) ? 'wifi ∙ ' : (spot?.Amenities[0]?.boardGames) ? 'board games ∙ ' : ''}
                                 {(spot?.Amenities[0]?.pets) ? 'pets ∙ ' : (spot?.Amenities[0]?.BBQgrill) ? 'BBQ grill ∙ ' : ''}
                                 {(spot?.Amenities[0]?.hotTub) ? 'hot tub' : (spot?.Amenities[0]?.kitchen) ? 'kitchen' : ''}</p>
                            </div>
                        </div>
                        <div className="right-info-all">
                            <div className="outer-div-csp-all-spots">
                                <div className="cost-per-night-all-spots">
                                    <h3 key={spot?.id}>${spot?.costPerNight}/night</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default Spots;
