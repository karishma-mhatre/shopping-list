import React from 'react';
import './pagination.scss';

class Paginator extends React.Component {

    render() {
        let {pageNumber, pageSize, totalProducts, pageTitle} = this.props;
        console.log("totalProducts",totalProducts)
        let totalPages = Math.ceil(totalProducts/pageSize);
        let pages = [];
        for(let i = 0; i<totalPages; i++) {
            pages.push(<button key={i} onClick={(e) => {this.props.changePageNumber(e,i)}} 
                        className={ i===pageNumber? 'btn currrent-page' : "btn"}>{i+1}</button>)
        }

        return(
            <div className="pagination">
                <div className="pagination-title">{pageTitle}</div>
                <div className="pagination-pages">{pages}</div>
            </div>
        )
    }
}

export default Paginator;