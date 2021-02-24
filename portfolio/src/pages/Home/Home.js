import React from 'react'
import './Home.scss'
import Image from '../../assets/photo.png'
function Home() {
    return (
        <div className='home-page'>
            <div>
                <img src={Image} />
                <h1>I'm Valenti</h1>
                <p>
                    A Full Stack Developer
            </p>
            </div>


        </div>
    )
}
export default Home