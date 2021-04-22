import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <h3>Product: {this.props.product.name}</h3>
                <button onClick={() => this.props.handleAddToCart(this.props.product)}>Add</button>
            </div>
        );
    }
}

export default Product;