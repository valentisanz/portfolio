import React from 'react'
import './Home.scss'
import Image from '../../assets/photo.png'
function Home() {
    return (
        <div className='home-page'>
            <div className='image-container'>
                <img src={Image} />
            </div>
            <div className='info-container'>
                <h2>Name:</h2>
                <h1>Valenti Sanz</h1>
                <h2>Description:</h2>
                <h1>Full Stack Developer</h1>
                <h2>Age:</h2>
                <h1>21 years old</h1>
            </div>
        </div>
    )
}
export default Home