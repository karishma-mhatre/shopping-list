import React from 'react';
import banner from '../../assets/catban-420190517165547.webp';
import './banner.scss';

function Banner(){
    return (
        <div className="banner">
            <img src={banner}></img>
        </div>
    )
}

export default Banner;