import React, { useEffect } from "react";
import './SpotMap.css'


const SpotMap = ({oneSpot}) => {
    let environment = 'AIzaSyBSTJdNRbbb3l-tDELReRQ0O7ibW6BUGOU'
    return (
        <iframe
            className='embed-map'
            title='location-map'
            src={`https://www.google.com/maps/embed/v1/place?key=${environment}
            &q=${oneSpot?.address},${oneSpot?.city}+${oneSpot?.state}`}>
        </iframe>
    )


}


export default SpotMap
