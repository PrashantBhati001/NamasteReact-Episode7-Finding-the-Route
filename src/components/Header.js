import { LOGO_URL } from "../config/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

    const [accessbtn,setaccessbtn]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Image not found" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn"  onClick={()=>{
                        accessbtn=="Login" ?setaccessbtn("Logout"):setaccessbtn("Login")
                    }}>{accessbtn}</button>
                </ul>
            </div>

        </div>
    )

}

export default Header


// USEEFFECT HOOK
//If the dependency array is not present then the useeffect is called on every render.
//If the dependency array is empty=[]==>useeffect will be called only once on the first render.
//If the dependency array is not empty=[accessbtn]==>useeffect will be called everytine the accessbtn is updated.


//Few points to be note about usestate
//Always  use usestate inside a component,do not use it outside the function
//Always make sure that the state variable are created on the top of the component.
//Do not use usestate inside a if-else or inside for loops

