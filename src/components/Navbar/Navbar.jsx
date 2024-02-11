import React, { useState, useRef } from 'react'
import logo from "../../assets/movix-logo.svg"
import "./Navbar.scss"
import { Link, useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [search, setSearch] = useState("")
    const [showMobileLinks, setShowMobileLinks] = useState(false)
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false)
    const searchRef = useRef(null)



    const handleSearch = e => {
        if (e.key == "Enter" && search != "") {
            navigate(`/search/${search}`)
            setSearch("")
            setShowSearch(false)
        }
    }


    return (
        <nav>
            <div className="logo" onClick={() => navigate("/")}>
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <div className="search">
                    <input value={search} onKeyUp={(e) => handleSearch(e)} onChange={(e) => setSearch(e.target.value)} ref={searchRef} className={showSearch ? "show" : ""} type="text" name="" id="" placeholder='search..' />
                    {
                        showSearch ? <FaXmark className='cross' onClick={() => setShowSearch(false)} /> : <IoSearch onClick={() => { setShowSearch(true); searchRef.current.focus() }} />
                    }


                </div>
                <Link to={`/explore/action`}>Action</Link>
                <Link to={`/explore/comedy`}>Comedy</Link>
                {
                    showMobileLinks ? <FaXmark className='baricon' onClick={() => setShowMobileLinks(false)} /> : <FaBarsStaggered onClick={() => setShowMobileLinks(true)}
                        className='baricon' />
                }
            </div>

            <div className={showMobileLinks ? "mobile-links show" : "mobile-links"}>
                <Link onClick={() => setShowMobileLinks(false)} to={`/explore/action`}>Action</Link>
                <Link onClick={() => setShowMobileLinks(false)} to={`/explore/comedy`}>Comedy</Link>
            </div>
        </nav>
    )
}

export default Navbar
