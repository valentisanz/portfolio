import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiAlignLeft } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import SideButton from '../ButtonMac/SideButton'
import './NavBar.scss'

export default function NavBar(props) {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars' onClick={showSidebar}>
                    <BiAlignLeft />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='nav-link'>
                            <CgClose />
                        </Link>
                    </li>

                    <li className='nav-link'>
                        <SideButton link='Home' />
                    </li>
                    <li className='nav-link'>
                        <SideButton link='About' />

                    </li>
                </ul>
            </nav>
        </>
    )
}
