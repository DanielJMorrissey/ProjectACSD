import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    //business logic JS goes here if needed...


    //RETURN the JSX below to the UI  
    return (
        <div className="navFlex">
            <Link className="link" to="/">Home</Link> |
            <Link className="link" to="/videos">Videos</Link> |
            <Link className="link" to="/setlists">Setlists</Link> |
            <Link className="link" to="/contact">Contact</Link>

        </div>
    )
}
export default Navbar