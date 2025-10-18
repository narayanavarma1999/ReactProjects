import { useState } from "react"

import { Link } from "react-router-dom"
import { SWIGGY_LOGO } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [login, setLogin] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className="flex justify-between bg-green-200">
            <div className="bg-green-200">
                <img className="w-48 shadow-2xl" src={SWIGGY_LOGO} />
            </div>
            <div>
                <ul className="flex justify-between m-16 gap-10">
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
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button onClick={() => { login === "Login" ? setLogin("Logout") : setLogin("Login") }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header
