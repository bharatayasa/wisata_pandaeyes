import React from 'react'
import { navLinks } from '../../utils/navlinks'
import { Link } from "react-scroll";

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        {navLinks.map((link) => (
                            <div key={link.id} className='nav-link px-5 py-2 btn-ghost rounded-md'>
                                <Link to={link.path}
                                    className={({ isActive, isExact, isPending }) =>
                                        isPending ? "pending" : (isActive || isExact) ? "active" : ""} end>
                                    {link.text}
                                </Link>
                            </div>
                        ))}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Logo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link) => (
                            <div key={link.id} className='px-5 py-2 btn-ghost rounded-md'>
                                <div>
                                    <Link to={link.path}
                                        className={({ isActive, isExact, isPending }) =>
                                            isPending ? "pending" : (isActive || isExact) ? "active" : ""} end>
                                        {link.text}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
