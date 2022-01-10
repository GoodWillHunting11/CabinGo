import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {states} from '../utils'
import {addSpot} from '../../store/spots'
import './spotshost.css'

function SpotsHost() {
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [description, setDescription] = useState('')
    const [costPerNight, setCostPerNight] = useState('')
    const [guests, setGuests] = useState('')
    const [beds, setBeds] = useState('')
    const [baths, setBaths] = useState('')

    const history = useHistory()
    const dispatch = useDispatch();
    const session = useSelector(state => state.session)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userId: session.user.id,
            title,
            country,
            state,
            city,
            address,
            zipCode,
            description,
            costPerNight,
            guests,
            beds,
            baths,
        }

        let createdSpot = await dispatch(addSpot(payload))

        if (createdSpot) {
            history.push(`/spots/${createdSpot.id}`)
        }

    }

    console.log(states)
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
                    <label> Price:
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
                    <label> Bedrooms:
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
                    <button className="host-form" type="submit">Create new Spot</button>
                    <button className="host-form" type="button">Cancel</button>
                </form>
            </div>

        </div>
    )
}

export default SpotsHost;
