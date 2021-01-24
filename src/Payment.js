import React from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider.js"
import  CheckoutProduct from "./CheckoutProduct.js"
import "./Payment.css"
import {Link} from "react-router-dom"

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    console.log(basket)
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    checkout (<Link to = "/checkout">{basket.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                

                    <div className="payment__address">
                        <p>{user ? user.email : 'Hello Guest'}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>    
                    </div>

                    <div className="payment__items">
                        {  
                            basket.map(item => {
                                return <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            })
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe magic will go */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
