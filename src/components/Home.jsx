import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import './Home.css';

function Home() {
    const image = "https://img.freepik.com/free-photo/delicious-cheese-bread-assortment_23-2149042462.jpg";
    const caption = "Keeping your assets safe for over one decades";

    return (
        <>
            <Navbar />
            <div className='home'>
                <div className="single-image-container">
                    <img src={image} alt="Home" />
                    <div className="caption">{caption}</div>
                    <Link to='prod' className="button-over-caption">Explore Our Solutions</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
