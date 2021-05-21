import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import  fakeData from '../../fakeData';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import funnyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderedPlaced, setOrderedPlaced] =useState(false)

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderedPlaced(true);
        processOrder();
    }
    

    const removeProduct = (productKey) =>{
            //    console.log('remove product', productKey);    
               const newCart = cart.filter(pd => pd.key !== productKey); 
               setCart(newCart);     
               removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts)
        // console.log(cartProducts);
    },[]);

    let thankyou; 
    if(orderedPlaced){
        thankyou = <img style={{height:"300px"}} src={funnyImage} alt="" />
    }
    return (
        <div className="twin-container"> 
            <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItem>)
                    }
                    {
                        thankyou
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;