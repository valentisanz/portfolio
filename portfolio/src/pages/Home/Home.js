import React from 'react'
import './Home.scss'
import Image from '../../assets/photo.png'
import { Fade, Flip } from "react-awesome-reveal";

function Home() {
    return (
        <div className='home-page'>
            <div className='info-container'>
                <Flip triggerOnce>
                    <img src={Image} />
                </Flip>
                <Fade triggerOnce delay={1000} >
                    <h3>Welcome! My name is</h3>
                    <h1>Valenti Sanz</h1>
                    <h3>I'm a Full Stack Developer</h3>
                </Fade>

            </div>
        </div>
    )
}
export default Home