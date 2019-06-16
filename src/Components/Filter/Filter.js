import React from 'react';
import './filter.scss';

const Type = ["T-Shirt", "Full TShirts"]
const Theme = ["Aladin", "Newton", "Teenage Mutant Nimja"]
const Genere = ["Thanos", "Spider"]


class Filters extends React.Component {
    selectedFilters = {}
    check = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let checked = e.target.checked;
        let index = this.selectedFilters[name].indexOf(value)
        
        if(index >= 0 && !checked){
            this.selectedFilters[name].splice(index, 1);
        }else if(index<0 && checked) {
            this.selectedFilters[name].push(value);
        }

        console.log(this.selectedFilters);
    }
     
    render() {
        this.selectedFilters = this.props.filters;
        return (
            <div className="filter-container">
                <div className="filter">
                    <div className="filter-title">Products</div>
                    {
                        Type.map((product, index) => {
                            return <div key={index}><input type="checkbox" name="Type" value={product} defaultChecked={this.selectedFilters.Type.includes(product)}
                                    onChange={(e) => {this.check(e)}}></input>
                                    <label>{product}</label>
                                    </div>
                        })
                    }
                </div>
                <div>
                    <div>Themes</div>
                    {
                        Theme.map((theme, index) => {
                            return <div key={index}><input type="checkbox" name="Theme" value={theme} defaultChecked={this.selectedFilters.Theme.includes(theme)}
                                    onChange={(e) => {this.check(e)}}></input>
                                    <label>{theme}</label>
                                    </div>
                        })
                    }
                </div>
                <div>
                    <div>Generes</div>
                    {
                        Genere.map((genere, index) => {
                            return <div key={index}><input type="checkbox" name="Genere" value={genere} defaultChecked={this.selectedFilters.Genere.includes(genere)}
                                    onChange={(e) => {this.check(e)}}></input>
                                    <label>{genere}</label>
                                    </div>
                        })
                    }
                </div>
                <div>
                    <button onClick={(e) => {this.props.handleFilterChange(e, this.selectedFilters)}}>Apply</button>
                </div>
            </div>
          );
    }
}

export default Filters;
