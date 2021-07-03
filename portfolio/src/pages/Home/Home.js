import React, { useState, useEffect } from 'react'
import './Home.scss'
import Image from '../../assets/photo.png'

function Home() {
    const [actualPage, setActualPage]=useState('home')

    function goTo(page){
        setActualPage(page)
    }
    
    return (
        <div className='home-page'>
            <div className='container'>
                <div className='sidebar'>
                    <img className="photo" src={Image} />
                    <h2 className='name'>Valenti Sanz</h2>
                    <p className='age'>21 years old</p>
                    <div className='pages'>
                        <button onClick={() => goTo('home')}>Home</button>
                        <button onClick={() => goTo('about')}>About</button>
                    </div>
                </div>
                <div className='content'>
                    {actualPage === 'home' &&
                        <div className='home'>
                            <h1>Home</h1>
                        </div>
                    }
                    {actualPage === 'about' &&
                        <div className='about'>
                            <h1>About</h1>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default Home