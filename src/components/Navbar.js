import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    //business logic JS goes here if needed...


    //RETURN the JSX below to the UI  
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/videos">Videos</Link> |
            <Link to="/setlists">Setlists</Link> |
            <Link to="/contact">Contact</Link>

        </div>
    )
}
export default Navbar