import React, { useState, useEffect } from 'react'
import './Main.scss'
import Image from '../../assets/photo.png'
import Home from '../Home/Home'
import moment from 'moment'
import {FaReact, FaHome, FaUser} from 'react-icons/fa'
import {BiCoffeeTogo} from 'react-icons/bi'

function Main() {
    const [actualPage, setActualPage]=useState('home')
    const yearsOld = moment().diff('1999-09-14', 'years');

    return (
        <div className='main-page'>
            <div className='container'>
                <div className='sidebar'>
                    <img className="photo" src={Image} />
                    <h2 className='name'>Valenti Sanz</h2>
                    <p className='age'>{`${yearsOld} years old`}</p>
                    <div className='pages'>
                        <button className="noselect" onClick={() => setActualPage('home')}><span class='text'>Home</span><span class="icon"><FaHome /></span></button>
                        <button className="noselect active" onClick={() => setActualPage('about')}><span class='text'>About me</span><span class="icon"><FaUser /></span></button>
                    </div>
                    <div className='made-with'>
                        <span>Made with</span>
                        <FaReact/>
                        <span>{'&'}</span>
                        <BiCoffeeTogo/>

                    </div>
                </div>
                <div className='content'>
                    {actualPage === 'home' &&
                        <Home/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Main