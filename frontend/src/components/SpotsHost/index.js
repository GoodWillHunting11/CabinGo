import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {states} from '../utils'
import {addSpot} from '../../store/spots'

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
        <div>
            <h1>Cabin Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Cabin Name"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
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
                <input
                    type='text'
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Cost Per Night"
                    value={costPerNight}
                    onChange={e => setCostPerNight(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Guests"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                />
                 <input
                    type='number'
                    placeholder="Beds"
                    value={beds}
                    onChange={e => setBeds(e.target.value)}
                />
                 <input
                    type='number'
                    placeholder="Baths"
                    value={baths}
                    onChange={e => setBaths(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SpotsHost
