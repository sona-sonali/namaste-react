import { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [bttnName, setBttnName] = useState('Log In')
    console.log("header rendered")

    // useEffect(() => {
    //     console.log("Use Effect called")
    // }, [bttnName]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='Food Delivering App'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                       <Link to={"/"}>Home</Link> 
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link> 
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
                <button className="login-button" onClick={() => bttnName==='Log In'? setBttnName('Log Out') : setBttnName('Log In')}>{bttnName}</button>
            </div>
        </div>
    )
}

export default Header