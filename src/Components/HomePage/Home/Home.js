import React from 'react';
import { Navbar } from 'react-bootstrap';
import Appbar from '../Appbar/Appbar';
import FoodCards from '../FoodCards/FoodCards';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <Appbar></Appbar>
            <FoodCards></FoodCards>
        </div>
    );
};

export default Home;