import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import FoodsInfo from '../FoodsInfo/FoodsInfo';


const FoodCards = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        console.log(fakeData);
        setFoods(fakeData)
    })
    return (
        <div className="row d-flex justify-content-center mt-5">
            {
                foods.map(food => <FoodsInfo food={food}></FoodsInfo>)
            }
        </div >
    );
};

export default FoodCards;