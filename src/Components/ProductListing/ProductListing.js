import React from 'react';
import {getTShirts} from '../../MockDataService/MockDataService';
import Paginator from '../Paginator/Paginator';
import ProductCard from '../ProductCard/ProductCard';
import './product-listing.scss';

const pageSize = 5;
class ProductListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            pageNumber: 0,
            loadingProducts: true
        }
    }
    componentDidMount = ( ) => {
        getTShirts().then((response) => {
            this.setState({products: response});
            this.setState({loadingProducts: false})
        }) 
    }

    changePageNumber = (e, num) => {
        this.setState({pageNumber: num});
    }

    pagination = (products, pageNumber, pageSize) => {
        let start = pageNumber * pageSize;
        let end = start + pageSize;
        return products.slice(start, end);

    }

    applyFilters = () => {
        const { filters } = this.props;

        console.log("in apply filters");
        return this.state.products.filter((product) => {
             return Object.keys(filters).every((key) => {
                if(filters[key].length > 0) {
                    let productKey = key.toLocaleLowerCase();
                    return filters[key].includes(product[productKey]);
                }
                return true;
            })
        })
    }

    prductFilter = (filters, product) => {
        return Object.keys(filters).every((key) => {
            if(filters[key].length == 0) {
                return true;
            }
            let productKey = key.toLocaleLowerCase();
            return filters[key].includes(product[productKey]);
        })

    }

    render() {
        //Could check the filtering result in console. Since mock data is litlle messed up. 
        let products = this.applyFilters();
        console.log(products);
        let productsPerPage = this.pagination(products, this.state.pageNumber, pageSize);

        return(
            <div className="product-container">
                <Paginator  pageTitle="T-Shirts" pageNumber={this.state.pageNumber} pageSize={5} totalProducts={products.length} changePageNumber={this.changePageNumber}>
                </Paginator>
                <div className="container product-container">
                    {
                        this.state.loadingProducts && 
                        <div className="loading">Loading Products....</div>
                    }
                    {
                        productsPerPage.map((product, index) => {
                            return <ProductCard {...product} key={index}></ProductCard>
                        })
                    }
                </div>
                <Paginator pageNumber={this.state.pageNumber} pageSize={5} totalProducts={products.length} changePageNumber={this.changePageNumber}>
                </Paginator>
            </div>
        )
    }
}

export default ProductListings;