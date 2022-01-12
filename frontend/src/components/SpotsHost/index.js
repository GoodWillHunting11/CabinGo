import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { states } from '../utils.js'
import { addSpot } from "../../store/spots"
import "./spotshost.css"

function SpotsHost() {
    const history = useHistory()
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)



    const [title, setTitle] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState(111111)
    const [description, setDescription] = useState("")
    const [costPerNight, setCostPerNight] = useState(1)
    const [guests, setGuests] = useState("")
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")
    const [url, setUrl] = useState("")
    const [kitchen, setKitchen] = useState(false);
    const [BBQgrill, setBBQgrill] = useState(false);
    const [fireplace, setFireplace] = useState(false);
    const [parking, setParking] = useState(false);
    const [boardGames, setBoardGames] = useState(false);
    const [hotTub, setHotTub] = useState(false);
    const [pets, setPets] = useState(false);
    const [wifi, setWifi] = useState(false)
    const [errorValidations, setErrorValidations] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
         amenities: {
             kitchen,
             BBQgrill,
             fireplace,
             parking,
             hotTub,
             pets,
             wifi,
             boardGames,

         },
         image: {
            url
         },
         spots:{
          userId: session.user.id,
          address,
          city,
          state,
          country,
          title,
          description,
          costPerNight,
          zipCode,
          guests,
          beds,
          baths
         }
        }

        let createdSpot;
        try {
            createdSpot = await dispatch(addSpot(payload));
        } catch (error) {
            throw new Error("This did not work!!")
        }
        if (createdSpot) {
            history.push(`/spots/${createdSpot.id.id}`);
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

    };

    useEffect(() => {
        const errors = []
        if(title?.length === 0) errors.push('Please provide a title')
        if(address?.length === 0) errors.push('Please provide an address')
        if(city?.length === 0) errors.push('Please provide a city')
        if(country?.length === 0) errors.push('Please provide a country')
        if(description?.length === 0) errors.push('Please provide a description')
        if(costPerNight === '0') errors.push('Please provide a cost per night')
        if(guests <='0') errors.push('Please provide number of guests')
        if(beds <= '0') errors.push('Please provide number of beds')
        if(baths <= '0') errors.push('Please provide number of baths')
        if(zipCode?.length < 5) errors.push('Please provide a valid zip code')
        if(state === 'Select A State') errors.push('Please choose a state')
        if (!url?.includes("http" || 'https')) errors.push("Must provide a valid photo.")
        setErrorValidations(errors)
    },[title, address, city, country, description, costPerNight, guests, beds, baths, zipCode, state, url])

    return (
        <div id="form-container">
            <h1>Host Form</h1>
            <div id="host-form" >
                <ul>
                {errorValidations?.map(error => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label> Spot Name:
                        <input
                            type='text'
                            placeholder="Spot Name"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <label> Country:
                        <input
                            type='text'
                            placeholder="Country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            />
                    </label>
                    <label id="select"> State:
                        <select
                            type='text'
                            placeholder="State"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            >
                            {states.map(state => (
                                <option key={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label> City:
                        <input
                            type='text'
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </label>
                    <label> Address:
                        <input
                            type='text'
                            placeholder="Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </label>
                    <label> Zip Code:
                        <input
                            type='number'
                            placeholder="Zip Code"
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                        />
                    </label>
                    <label> Description:
                        <input
                            type='text'
                            placeholder="Description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </label>
                    <label> Cost Per Night:
                        <input
                            type='number'
                            placeholder="Cost Per Night"
                            value={costPerNight}
                            onChange={e => setCostPerNight(e.target.value)}
                        />
                    </label>
                    <label> Guests:
                        <input
                            type='number'
                            placeholder="Guests"
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                        />
                    </label>
                    <label> Beds:
                        <input
                            type='number'
                            placeholder="Bedrooms"
                            value={beds}
                            onChange={e => setBeds(e.target.value)}
                        />
                    </label>
                    <label> Bathrooms:
                        <input
                            type='number'
                            placeholder="Bathrooms"
                            value={baths}
                            onChange={e => setBaths(e.target.value)}
                        />
                    </label>
                    <label> Image url:
                        <input
                            type='string'
                            placeholder="image url"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                    </label>
                    <label htmlFor="kitchen">Kitchen:
                    <input
                        id="kitchen"
                        type="checkbox"
                        checked={kitchen}
                        onChange={(e) => setKitchen(!kitchen)}
                    />
                    </label>
                    <label htmlFor="BBQgrill">BBQ Grill:
                        <input
                            id="BBQgrill"
                            type="checkbox"
                            checked={BBQgrill}
                            onChange={(e) => setBBQgrill(!BBQgrill)}
                        />
                    </label>
                    <label htmlFor="fireplace">Fire Place:
                        <input
                            id="fireplace"
                            type="checkbox"
                            checked={fireplace}
                            onChange={(e) => setFireplace(!fireplace)}
                        />
                    </label>
                    <label htmlFor="parking">Parking:
                        <input
                            id="parking"
                            type="checkbox"
                            checked={parking}
                            onChange={(e) => setParking(!parking)}
                        />
                    </label>
                    <label htmlFor="boardGames">Board Games:
                        <input
                            id="boardGames"
                            type="checkbox"
                            checked={boardGames}
                            onChange={(e) => setBoardGames(!boardGames)}
                        />
                    </label>
                    <label htmlFor="hotTub">Hot Tub:
                        <input
                            id="hotTub"
                            type="checkbox"
                            checked={hotTub}
                            onChange={(e) => setHotTub(!hotTub)}
                        />
                    </label>
                    <label htmlFor="pets">Pets:
                        <input
                            id="pets"
                            type="checkbox"
                            checked={pets}
                            onChange={(e) => setPets(!pets)}
                        />
                    </label>
                    <label htmlFor="wifi">WIFI:
                        <input
                            id="wifi"
                            type="checkbox"
                            checked={wifi}
                            onChange={(e) => setWifi(!wifi)}
                        />
                    </label>
                    <button className="host-form" disabled={errorValidations?.length > 0} type="submit">Create new Spot</button>
                    <a href="/">
                        Cancel
                    </a>
                </form>
            </div>
        </div>
    )
}

export default SpotsHost;
