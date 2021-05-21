import React from 'react';
import './ReviewItem';

const ReviewItem = (props) => {
    // console.log(props);
    const { name, quantity, img, key, price} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid green',
        marginBottom:'5px',
        paddingBottom:'5px'

    }
    return (
        <div style={reviewItemStyle} className="review-item">
                 <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 className="product-name">{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p><small>Price: ${price}</small></p>
                    <br />
                    <button onClick= {()=> props.removeProduct(key)} className="main-button">Remove</button>
                    
                </div>

        </div>
    );
};

export default ReviewItem;