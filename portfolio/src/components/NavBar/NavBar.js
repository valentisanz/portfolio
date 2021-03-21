import React, { useState } from 'react'
import NavButton from '../NavButton/NavButton'
import './NavBar.scss'

export default function NavBar(props) {
    const [activeButton, setActiveButton] = useState({ 'home': false, 'about': false, 'contact': false })
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav>
            <div className='menu-bar'>
                <NavButton link='home' activeButton />
                <NavButton link='about' activeButton />
                <NavButton link='contact' activeButton />
            </div>
        </nav>
    )
}
