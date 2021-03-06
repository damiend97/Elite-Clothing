import React, { Component } from 'react';
import AddToCart from './AddToCart';

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showAddComp: false
        }
    }

    showAddComp = () => {
        this.setState({
            showAddComp: true
        })
    }

    exitAddComp = () => {
        this.setState({
            showAddComp: false
        })
    }

    render() {
        if (this.state.showAddComp) {
            return (
                <div>
                    <AddToCart handleComError={this.props.handleComError} products={this.props.products} cartData={this.props.cartData} changeMessage={this.props.changeMessage} addToCart={this.props.addToCart} id={this.props.id} name={this.props.name} image={this.props.image} pKey={this.props.pKey} exitAddComp={this.exitAddComp} price={this.props.price} exitComp={this.exitAddComp}></AddToCart>
                    <div className="product-details">
                        <div>
                            <div className="product-name">{this.props.name}</div>
                            <div className="product-price">${this.props.price.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div onClick={this.showAddComp} className={`product-container ${this.props.image}`}></div>
                    
                    <div className="product-details">
                        <div>
                            <div className="product-name">{this.props.name}</div>
                            <div className="product-price">${this.props.price.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Product;