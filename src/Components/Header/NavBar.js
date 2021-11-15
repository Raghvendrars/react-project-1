import React from 'react'
import './nav.css'
// import Fingerprint from "@bit/mui-org.material-ui-icons.fingerprint";
import {FaFingerprint} from "react-icons/fa"



export const NavBar = () => {
    return (
<nav className="navbar"> 
<div className="container">
        {/* <div className="row"> */}

    <div className="col xl-6 " id="home">
  <FaFingerprint className="finger" />
        <h4 className="name">Ansh</h4>
    </div>
    <div className="col xl-6 nav-links">
    <ul className="navbar-links" id="links">
        <li className="nav-item"> <a className="item">Home</a> </li>
        <li className="nav-item"><a className="item">Product</a></li>
        <li className="nav-item"><a className="item">Services</a></li>

    </ul>
    </div>
        {/* </div> */}

</div>
</nav>

    )
}
