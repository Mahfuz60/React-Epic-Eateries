import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardColumns, CardDeck, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FoodsInfo = (props) => {
    const { foodName, image, price } = props.food
    // const cardStyle = {
    //     margin: "20px",
    //     float: 'left'
    // }
    const history = useHistory()
    const handleOrder = (foodName) => {
        history.push(`/confirm/${foodName}`)
    }
    return (
        <div className="card m-5 col-md-2  col-sm-4 ">
            <div className="row ">
                <div class="card">
                    <img style={{ height: "200px" }} class=" img-fluid" src={image} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Food Name : {foodName}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <h5>Price : {price} $</h5>
                    </div>
                    <button onClick={() => handleOrder(foodName)} className="btn btn-secondary btn-lg m-3"><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>

                </div>
            </div>
        </div>

    );
};

export default FoodsInfo;