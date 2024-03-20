import React from "react";
import desktopImg from "../../images/illustration-sign-up-desktop.svg"
import mobileImg from "../../images/illustration-sign-up-mobile.svg"
import ListItem from "../listItem/listItem";

import './signUp.css'

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="info">
                <h2 className="title">Stay updated!</h2>
                <p className="description">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <ListItem text='Product discovery and building what matters'/>
                    <ListItem text='Measuring to ensure updates are a success'/>
                    <ListItem text='And much more!'/>
                </ul>
                <div className="inputs">
                    <div className="messages">
                        <p className="email">Email address</p>
                        <p className="error none"></p>
                    </div>

                    <input className="input-email" type='email' placeholder="email@company.com"></input>
                    <input className="input-submit" type='submit' value='Subscribe to monthly newsletter'></input>
                </div>
            </div>
            <div className="illustrattion">
                <img src={desktopImg} className="desktop" alt="illustration-sign-up"></img>
                <img src={mobileImg} className="mobile" alt="illustration-sign-up"></img>
            </div>
        </div>
    )
}

export default SignUp