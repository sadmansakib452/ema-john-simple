import React from 'react';
import './Shop.css';
import data from '../../fakeData/products.json'
import { useState } from 'react';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'



const Shop = () => {


    const [products, setProducts] = useState(data);
    const[cart, setCart] = useState([])

    const handleAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (

        <div className="shop-container">
            <div className="products">
                {
                    products.map(product => <Product 
                        handleAddProduct ={handleAddProduct}
                        product={product}></Product>)
                
                }
            </div>

            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>



    );
};


export default Shop;