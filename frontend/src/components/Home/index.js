import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="explore-spots">
                <img id='spots-imagee' src='https://static.wixstatic.com/media/73107d_e47fade9bd9c42068e06c481d3b318d1~mv2.jpg/v1/fit/w_1000%2Ch_667%2Cal_c%2Cq_80/file.jpg' />
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
