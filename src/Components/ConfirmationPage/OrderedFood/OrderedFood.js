import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import Appbar from '../../HomePage/Appbar/Appbar';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json'
import { UserContext } from '../../../App';
import Swal from 'sweetalert2';
import './OrderedFood.css'

const OrderedFood = () => {
    const { foodName } = useParams();

    const order = fakeData.find(food => food.foodName === foodName)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [orderedFood, setOrderedFood] = useState([])

    const confirm = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure to Order this food?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Order it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Ordered!',
                    'Your food has been Successfully ordered.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your order has been Cancelled',
                    'error'
                )
            }
        })
    }




    return (
        <div>
            <Appbar></Appbar>
            <div className="row d-flex  m-5 p-5">
                <div className="col-md-6" >
                    <div style={{ marginTop: "100px" }}>
                        <Card>
                            <Card.Img variant="top" src={order && order.image} />
                            <Card.Body>
                                <Card.Title>Food Name : {order && order.foodName}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Title>Food Price : {order && order.price} $</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div style={{ marginTop: "100px" }} id="booking-area" className="booking-form ">
                        <div className="input-group">
                            <label for="">Pick From</label>
                            <input className="inp-style" type="text" name="" placeholder="Mirpur" />
                        </div>
                        <div className="input-group">
                            <label for="">Pick To</label>
                            <input className="inp-style" type="text" name="" placeholder="Dhanmondi" />
                        </div>
                        <div className="inputs">
                            <div className="input-group">
                                <label for="">Booking Date</label>
                                <input className="inp-style" type="date" name="" />
                            </div>
                        </div>
                        <Button onClick={confirm} variant="secondary">Confirm Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderedFood;