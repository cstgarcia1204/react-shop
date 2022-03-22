import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

import arrow from '@icons/flechita.svg';

const Checkout = () => {
    return(
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My orders</h1>

            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                    <img src={arrow} alt="arrow"/>
                </div>

                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                    <img src={arrow} alt="arrow"/>
                </div>

                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                    <img src={arrow} alt="arrow"/>
                </div>

                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
            <OrderItem />
        </div>
    </div>
    );
}

export default Checkout;