import React from 'react';
import './homePage.style.scss'
import Directory from "../../components/directory/directory";

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <Directory />
    </div>
);

export default HomePage;