import { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {
    const [bttnName, setBttnName] = useState('Log In')
    console.log("header rendered")
    const onlineStatus = useOnlineStatus(true)

    // useEffect(() => {
    //     console.log("Use Effect called")
    // }, [bttnName]);

    return (
        <div className='flex justify-between bg-sky-300 shadow-lg'>
            <div className='w-56'>
                <img className='logo' src={LOGO_URL} alt='Food Delivering App'/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                       <Link to={"/"}>Home</Link> 
                    </li>
                    <li className="px-4">
                       <Link to={"/grocery"}>Grocery</Link> 
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}>About Us</Link> 
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login-button" onClick={() => bttnName==='Log In'? setBttnName('Log Out') : setBttnName('Log In')}>{bttnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header