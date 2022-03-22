import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return(
    <nav>
        <img src="./Platzi_YardSale_Icons/icon_menu.svg " alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src="./Platzi_YardSale_Logo/logo_yard_sale.svg" alt="logo" className="logo"/>        
            <ul>
                <li>
                    <a href="">All</a>
                </li>
                <li>
                    <a href="">Clothes</a>
                </li>
                <li>
                    <a href="">Electronics</a>
                </li>
                <li>
                    <a href="">Fornitures</a>
                </li>
                <li>
                    <a href="">Toys</a>
                </li>
                <li>
                    <a href="">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email">isaacgarcia@gmail.com</li>
                <li className="navbar-shoping-cart">
                    <img src="./Platzi_YardSale_Icons/icon_shopping_cart.svg" alt="shoping cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;