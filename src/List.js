import React from 'react';
import './App.css';


var data = require('./dataset.json');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: data};
    this.state.filterList = this.state.data
    this.filterList = this.filterList.bind(this);
  }

  filterList(type) {
    if(type.target.value === 'All') {
      this.setState({
        filterList: this.state.data
      });
    }
    else {
      let list = this.state.data.filter( function (item) {
        return item.type === type.target.value
      });
  
      this.setState({
        filterList: list
      });
    }
  }

  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Type</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01" onChange={this.filterList}>
            <option selected>Choose a type...</option>
            <option value="All">All</option>
            <option value="Fruit">Fruits</option>
            <option value="Vegetable">Vegetables</option>
          </select>
        </div>
        <ul class="list-group">
          {this.state.filterList.map(item => <li class="list-group-item d-flex justify-content-between align-items-center">{item.name}<span class="badge badge-primary badge-pill">{item.stocked_at}</span></li>)}
        </ul>
      </div>
    );
  }
}

export default List;
