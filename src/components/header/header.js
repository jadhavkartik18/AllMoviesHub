import React from 'react';
import "./header.css"

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeft'>
               <Link to ="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img></Link>
               <Link to ="/movies/popular" style={{textDecoration:"none"}}><span>Popular Movies</span></Link>
               <Link to ="/movies/top_rated"style={{textDecoration:"none"}}><span>Top Rated Movies</span></Link>
               <Link to ="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcoming Movies</span></Link>
            </div>
            
        </div>
    );
};

export default Header;