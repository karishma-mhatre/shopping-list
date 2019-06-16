import React from 'react';
import './styles/common.scss';
import Header from './Components/Header/Header';
import ProductListing from './Components/ProductListing/ProductListing';
import Filter from './Components/Filter/Filter';
import './App.scss'

const filverValue = {
  Type: [],
  Theme: [],
  Genere: []
}
class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      filters: filverValue
    }

  }

  handleFilterChange = (e, selectedFilters) => {
    e.preventDefault();
    console.log("selectedFilters",selectedFilters);
    this.setState({filters: selectedFilters});
  }


  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container content-container">
          <Filter filters={this.state.filters} handleFilterChange={this.handleFilterChange}></Filter>
          <ProductListing filters={this.state.filters}></ProductListing>
        </div>
      </div>
    );
  }
}

export default App;
