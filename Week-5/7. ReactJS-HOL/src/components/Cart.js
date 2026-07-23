import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.Itemname}</h3>
                <p>Price: ₹{this.props.Price}</p>
                <hr />
            </div>
        );
    }
}

export default Cart;