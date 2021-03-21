import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavButton.scss'
export default function NavButton({ link, activeButton }) {
    const [activeItem, setActiveItem] = useState('')
    const handleItemClick = ({ name }) => setActiveItem(name)
    return (
        <Link
            name={link}
            className='button slide_right'
            onClick={handleItemClick}
            to={'/' + link}>
            <span >
                {link}
            </span>
        </Link>


    )
}
