import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png.webp"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../slices/darkSlice'
const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.dark.theme)
    return (
        <header className={theme}>
            <div className="container">
                <div className=" header flex justify-between ">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav>
                        <ul className='flex gap-4'>
                            <li><Link to=" ">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to=""></Link></li>
                            <li><button onClick={() => dispatch(toggleTheme())}>Dark/light</button></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>)
}

export default Header