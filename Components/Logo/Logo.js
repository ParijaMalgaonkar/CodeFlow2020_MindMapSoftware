import React from 'react';
import Tilt from 'react-tilt';
import logo from './newlogo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma3 mt0'>
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 85 }} style={{ height: 150, width: 150 }} >
                {/* <div className="Tilt-inner"> <img alt = 'logo 'src={logo} /> </div> */}
            </Tilt>
        </div>

    )
} 

export default Logo; 