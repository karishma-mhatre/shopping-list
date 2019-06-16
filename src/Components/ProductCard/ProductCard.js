import React from 'react';
import './product-card.scss'

class ProductCard extends React.Component {
    render() {
        let {id, type, title, price, exclusivePrice} = this.props;

        return(
            <div className="product">
                <div className="product-img">
                    <img src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190107214726-1.gif?h=282&amp;w=282" alt={id}></img>
                </div>
                <div className="product-title">{title}</div>
                <div className="container product-type-price">
                    <div className="name">{type}</div>
                    <div className="value">Rs.{price}</div>
                </div>
                <div className="container product-exclusive-price">
                    <div className="name">Price for exclusive members</div>
                    <div className="value">Rs.{exclusivePrice}</div>
                </div>
            </div>
        )
    }
}

export default ProductCard;