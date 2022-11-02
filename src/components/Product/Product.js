import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    const { name, img, seller, price, stock,features} = props.product;
    
    
    
    return (
        <div className="item">

            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="product-body">

                <div className="item-header">
                    <h4 className="item-header">{name}</h4>
                    <small>by: {seller}</small>
                </div>

                <div className="product-description">
                    <div className="half-width">
                        <h4>${price}</h4>
                        <small>only {stock} left in stock - order soon</small><br />
                        <button className="cart-btn"
                        onClick={()=>props.handleAddProduct(props.product)}
                        ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="half-width">
                        <h4>Features</h4>
                        <p>
                          

                                { 
                                features.map(feature => 
                                    <small>
                                        <li>{feature.description +': '+ feature.value}</li>
                                    </small>)
                                
                                }
                          
                        </p>
                    </div>
                </div>
            </div>

        </div>



    );
};




export default Product;