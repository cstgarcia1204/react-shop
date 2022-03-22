import React from 'react';
import '@styles/ProductInfo.scss';

import btAddToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return(
    <>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        <div className="ProductInfo">
            <p>$35,00</p>
            <p>Bike</p>
            <p>Bicycles have five main features: the motor, the frame, the wheels, the saddle, and the handlebars.
            The handlebars of a bicycle are the main point of steering and can vary from bike to bike depending of what the purpose of the bike is.
            Racing bikes and mountain bikes vary in the shapes of their handlebars with a racing bike having curved down handlebars like the horns 
            of a mountain goat. Most importantly on the handlebars is a small little bell. Cyclists will ring their bell to alert others of their approach.
            And of course, a little bell will bring attention to the wonderful, well to do, environmentally conscious people who ring them. 
            </p>
            <button className="primary-button add-to-cart-button">
                <img src={btAddToCart} alt="add to cart" />
                Add to cart
            </button>
        </div>
    </>
    );
}

export default ProductInfo;