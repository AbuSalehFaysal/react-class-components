import React, { Component } from 'react';
import Product from './Product';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            products: [],
            cart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart (product){
        const newCart = [...this.state.cart, product];
        this.setState({cart: newCart});
        console.log(product);
    }
    

    componentDidMount() {
        fetch('https://secure-hollows-18485.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            this.setState({products: data})
        })
    }
    

    render() {
        return (
            <div>
                <h2>Products: {this.state.products.length}</h2>
                <h3>Cart: {this.state.cart.length}</h3>
                {
                    this.state.products.map(product => <Product product={product} handleAddToCart={this.handleAddToCart} ></Product>)
                }
            </div>
        );
    }
}

export default Home;