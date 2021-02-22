import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './SideButton.scss'
export default function ButtonMac({ link }) {
    const actualPage = window.location.href.split('/').pop() || 'home'

    const [activeItem, setActiveItem] = useState('uwu')
    const handleItemClick = (name) => {
        setActiveItem(name)
        console.log(link)
    }
    return (
        <Link
            name={link}
            className={activeItem === link ? 'active' : ''}
            className='button'
            onClick={handleItemClick}
            to={'/' + link}>
            {link}
        </Link>
    )
}
