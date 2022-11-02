import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const total = props.cart.reduce( (total,product)=> total+product.price,0);
    let tax = 0;

    let shipping =0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    tax = (total*0.1).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {props.cart.length}</p>
            <p>Shipping: {shipping}</p>
            <p>Total before tax: {total}</p>
            <p>Estimated tax: {tax}</p>
            <p>Order Total: {grandTotal}</p>

        </div>
    );
};

export default Cart;