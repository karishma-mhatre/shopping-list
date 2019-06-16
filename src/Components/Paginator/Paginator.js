import React from 'react';
import './pagination.scss';

class Paginator extends React.Component {

    render() {
        let {pageNumber, pageSize, totalProducts} = this.props;
        console.log("totalProducts",totalProducts)
        let totalPages = Math.ceil(totalProducts/pageSize);
        let pages = [];
        for(let i = 0; i<totalPages; i++) {
            pages.push(<button key={i} onClick={(e) => {this.props.changePageNumber(e,i)}} 
                        className={ i===pageNumber? 'currrent-page' : ""}>{i+1}</button>)
        }

        return(
            <div className="pagination">
                {pages}
            </div>
        )
    }
}

export default Paginator;