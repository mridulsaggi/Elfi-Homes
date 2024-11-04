import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/gettheleads">Leads</Link></li>
                    <li><Link to="/extractdata">Extract</Link></li>
                    <li><Link to="/addlead">AddLead</Link></li>
                    <li><Link to="/addlead">Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CRM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-serif font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/gettheleads">Leads</Link></li>
                    <li><Link to="/extractdata">Extract</Link></li>
                    <li><Link to="/addlead">AddLead</Link></li>
                    <li><Link to="/addlead">Contact</Link></li>
                    
                    
                </ul>
            </div>
                <div className="navbar-end absolute right-[8rem]">
                    <Link to="/login" className="btn btn-primary text-white font-bold w-[7rem] mx-2">Login</Link>
                    <Link to="/signup" className="btn btn-primary text-white font-bold w-[7rem] mx-2">Signup</Link>
                </div>
            
            <div className="flex-none navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                src="https://www.elfihomes.com/ElfiLogoNav.svg"
                                 />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
