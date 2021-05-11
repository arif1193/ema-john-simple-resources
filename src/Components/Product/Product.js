import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div>
                <h2>This is Product</h2>
                <h4 className="product-name">{name}</h4>
                <p> <small>By: {seller} </small> </p>
                <h5>Price=${price}</h5>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                    className="mail-button"
                    onClick={ () =>props.handleAddProduct(props.product)}
                     >
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                <br />
                <br />

            </div>
        </div>
    );
};

export default Product;