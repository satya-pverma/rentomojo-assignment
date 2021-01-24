import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

import './Nav.css'




export const Nav = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [cname, setcName] = useState("");
    const [filter, setFilter] = useState([]);
    const searchModal = useRef(null);
    const [search, setSearch] = useState("");
    const [userDetails, setUserDetails] = useState([]);







    return (
        <div className="container" style={{ marginBottom: "20px" }} >
            <nav className="navbar" style={{ width: "100%" }}>
                <div className="nav-wrapper white">

                    <ul id="nav-mobile " className="container" >
                        <li>
                            <h4 style={{ fontFamily: "font-family: 'Hanalei', cursive;", color: "#DB0410" }}>Rento</h4>
                        </li>
                        <Link to='/'><li style={{ color: "black", float: "right" }}>
                            Home
                       </li></Link>




                    </ul>

                </div>
            </nav>

        </div>
    )
}
export default Nav
