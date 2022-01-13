import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import './home.css'

function Home() {
    const sessionUser = useSelector(state => state.session.user)
    return (
        <div className="home-container">
            <div className="explore-spotss">
                <img id='spots-imagee' src='https://www.wallpaperflare.com/static/518/357/245/landscape-nature-valley-trees-wallpaper.jpg' />
            </div>
            <div className="explore-spots">
                <img id='spots-image' src='https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
                <h1 id='not-sure' className="where-to-go">Not Sure Where To Go?</h1>
                <h1 id='host-cabingo'>Host With CabinGo</h1>
            </div>
            <div className="explore">
                <Link exact to='/spots'>
                    <button id='explore-btn'>Explore</button>
                </Link>
            </div>
            {sessionUser &&
            <div className="become-host">
                <Link exact to='/spots/host'>
                    <button id='become-host-btn'>Become a Host</button>
                </Link>
            </div>
            }
        </div>
    )
}


export default Home;
