import { useState } from "react"

import { Link } from "react-router-dom"
import { SWIGGY_LOGO } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [login, setLogin] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={SWIGGY_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <>Online Status: {onlineStatus ? "✅" : "🛑"}</>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => { login === "Login" ? setLogin("Logout") : setLogin("Login") }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header
