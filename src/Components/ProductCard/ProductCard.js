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
                <div className="product-type">
                    <div>Type</div>
                    <div>{type}</div>
                </div>
                <div className="product-price">
                    <div>Price</div>
                    <div>{price}</div>
                </div>
                <div className="product-exclusice-price">
                    <div>Price for exclusive members</div>
                    <div>{exclusivePrice}</div>
                </div>
            </div>
        )
    }
}

export default ProductCard;