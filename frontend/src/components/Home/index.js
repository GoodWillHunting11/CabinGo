import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="explore-spots">
                <img id='spots-imagee' src='https://www.wallpaperflare.com/static/518/357/245/landscape-nature-valley-trees-wallpaper.jpg' />
            </div>
            <div className="explore">
                <a href='/spots'>
                    <button id='explore-btn'>Explore</button>
                </a>
            </div>
        </div>
    )
}


export default Home;
