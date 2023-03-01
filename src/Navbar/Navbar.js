import React, {useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Search from './SearchBar'; 


function Navbar() {




    return (
        <div className = "navbar">
            <div style={{position: 'absolute', margin: '10px'}}> 
                <Search /> 

            </div>
            
        </div>
    )
}

export default Navbar
