import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {

    cartItems = [
        { Itemname: "Laptop", Price: 65000 },
        { Itemname: "Mobile Phone", Price: 25000 },
        { Itemname: "Headphones", Price: 3000 },
        { Itemname: "Smart Watch", Price: 5000 },
        { Itemname: "Keyboard", Price: 1500 }
    ];

    render() {
        return (
            <div>
                <h1>Online Shopping</h1>

                {
                    this.cartItems.map((item, index) => (
                        <Cart
                            key={index}
                            Itemname={item.Itemname}
                            Price={item.Price}
                        />
                    ))
                }

            </div>
        );
    }
}

export default OnlineShopping;