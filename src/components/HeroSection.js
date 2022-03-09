import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection(props) {
    return (
        <div className='hero-container'>
            <img className='img' src={props.image} alt="engagement"></img>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
}

export default HeroSection;
