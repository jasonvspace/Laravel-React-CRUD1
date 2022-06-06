import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return(
        <nav className="navbar navbarBg">
            <Link className="navbar-brand" to="/">
                <h1>React Laravel CRUD TEST</h1>
            </Link>
        </nav>
    )
}

export default navbar;