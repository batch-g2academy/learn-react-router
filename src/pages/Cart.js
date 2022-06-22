import React, { useState } from 'react';

const Cart = (props) => {
    const { cart } = props;
    
    return (
        <div>
            <h1>Halaman Cart</h1>
            <h1>List cart</h1>
            <ul>
                { cart.map((item, index) => (
                    <li key={index}>{item.title} - {item.year}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
