import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { states } from '../utils.js'
import { editSpot } from "../../store/spots"
import { getOneSpot } from '../../store/spots'

function SpotsHostEdit() {
    const history = useHistory('')
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)
    const {spotId} = useParams()
    const spotInfo = useSelector(state => state.spots[spotId])
    const [title, setTitle] = useState(spotInfo?.title)
    const [country, setCountry] = useState(spotInfo?.country)
    const [state, setState] = useState(spotInfo?.state)
    const [city, setCity] = useState(spotInfo?.city)
    const [address, setAddress] = useState(spotInfo?.address)
    const [zipCode, setZipCode] = useState(spotInfo?.zipCode)
    const [description, setDescription] = useState(spotInfo?.description)
    const [costPerNight, setCostPerNight] = useState(spotInfo?.costPerNight)
    const [guests, setGuests] = useState(spotInfo?.guests)
    const [beds, setBeds] = useState(spotInfo?.beds)
    const [baths, setBaths] = useState(spotInfo?.baths)
    const [url, setUrl] = useState(spotInfo?.Images[0].url)
    const [kitchen, setKitchen] = useState(spotInfo?.Amenities[0].kitchen);
    const [BBQgrill, setBBQgrill] = useState(spotInfo?.Amenities[0].BBQgrill);
    const [fireplace, setFireplace] = useState(spotInfo?.Amenities[0].fireplace);
    const [parking, setParking] = useState(spotInfo?.Amenities[0].parking);
    const [boardGames, setBoardGames] = useState(spotInfo?.Amenities[0].boardGames);
    const [hotTub, setHotTub] = useState(spotInfo?.Amenities[0].hotTub);
    const [pets, setPets] = useState(spotInfo?.Amenities[0].pets)
    const [wifi, setWifi] = useState(spotInfo?.Amenities[0].wifi)

    useEffect(() => {
        dispatch(getOneSpot(spotId))
        if (title) localStorage.setItem("title", spotInfo?.title)
        if (country) localStorage.setItem('country', spotInfo?.country)
        if (state) localStorage.setItem('state', spotInfo?.state)
        if (city) localStorage.setItem('city', spotInfo?.city)
        if (address) localStorage.setItem('address', spotInfo?.address)
        if (zipCode) localStorage.setItem('zipCode', spotInfo?.zipCode)
        if (description) localStorage.setItem('description', spotInfo?.description)
        if (costPerNight) localStorage.setItem('costPerNight', spotInfo?.costPerNight)
        if (guests) localStorage.setItem('guests', spotInfo?.guests)
        if (beds) localStorage.setItem('beds', spotInfo?.beds)
        if (baths) localStorage.setItem('baths', spotInfo?.baths)
        if (url) localStorage.setItem('url', spotInfo?.Images[0].url)
        if (kitchen) localStorage.setItem('kitchen', spotInfo?.Amenities[0].kitchen)
        if (BBQgrill) localStorage.setItem('BBQgrill', spotInfo?.Amenities[0].BBQgrill)
        if (fireplace) localStorage.setItem('fireplace', spotInfo?.Amenities[0].fireplace)
        if (parking) localStorage.setItem('parking', spotInfo?.Amenities[0].parking)
        if (boardGames) localStorage.setItem('boardGames', spotInfo?.Amenities[0].boardGames)
        if (hotTub) localStorage.setItem('hotTub', spotInfo?.Amenities[0].hotTub)
        if (pets) localStorage.setItem('pets', spotInfo?.Amenities[0].pets)
        if (wifi) localStorage.setItem('wifi', spotInfo?.Amenities[0].wifi)
    }, [])

    useEffect(() => {

        dispatch(getOneSpot(spotId))

        const localTitle = localStorage.getItem("title")
        const localCountry = localStorage.getItem('country')
        const localState = localStorage.getItem('state')
        const localCity = localStorage.getItem('city')
        const localAddress = localStorage.getItem('address')
        const localZipCode = localStorage.getItem('zipCode')
        const localDescription = localStorage.getItem('description')
        const localCostPerNight = localStorage.getItem('costPerNight')
        const localGuests = localStorage.getItem('guests')
        const localBeds = localStorage.getItem('beds')
        const localBaths = localStorage.getItem('baths')
        const localUrl = localStorage.getItem('url')
        const localKitchen = localStorage.getItem('kitchen')
        const localBBQgrill = localStorage.getItem('BBQgrill')
        const localFireplace = localStorage.getItem('fireplace')
        const localParking = localStorage.getItem('parking')
        const localBoardGames = localStorage.getItem('boardGames')
        const localHotTub = localStorage.getItem('hotTub')
        const localPets = localStorage.getItem('pets')
        const localWifi = localStorage.getItem('wifi')

        setTitle(localTitle)
        setCountry(localCountry)
        setState(localState)
        setCity(localCity)
        setAddress(localAddress)
        setZipCode(localZipCode)
        setDescription(localDescription)
        setCostPerNight(localCostPerNight)
        setGuests(localGuests)
        setBeds(localBeds)
        setBaths(localBaths)
        setUrl(localUrl)
        setKitchen(localKitchen === 'true'? true : false)
        setBBQgrill(localBBQgrill === 'true'? true : false)
        setFireplace(localFireplace === 'true'? true : false)
        setParking(localParking === 'true'? true : false)
        setBoardGames(localBoardGames === 'true'? true : false)
        setHotTub(localHotTub === 'true'? true : false)
        setPets(localPets === 'true'? true : false)
        setWifi(localWifi === 'true'? true : false)
        
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
         amenities: {
             id: spotInfo?.Amenities[0]?.id,
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
            id: spotInfo?.Images[0]?.id,
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


        let editedSpot;
        try {
            editedSpot = await dispatch(editSpot(payload, spotId));
        } catch (error) {
            throw new Error("This did not work!!")
        }
        if (editedSpot) {
            history.push(`/spots/${editedSpot.id.id}`);
            localStorage.clear()
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

    };

    return (
        <div id="form-container">
            <h1>Host Form</h1>
            <div id="host-form" >
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
                    <button className="host-form" type="submit">Create new Spot</button>
                    <a href="/">
                        Cancel
                    </a>
                </form>
            </div>

        </div>
    )
}

export default SpotsHostEdit;
