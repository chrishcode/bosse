import React from 'react';
import './App.css';
var moment = require('moment');
moment().format();

var data = require('./dataset.json');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: data};
    this.state.filterList = this.state.data
    this.filterList = this.filterList.bind(this);
    this.sortList = this.sortList.bind(this);
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

  sortList(option) {
    if(option.target.value === 'Latest') {
      let latest = this.state.filterList.sort((a, b) => (a.stocked_at > b.stocked_at) ? -1 : 1)
      this.setState({ state: this.state });
    }
    else if(option.target.value === 'Longest') {
      this.state.filterList.sort((a, b) => (a.stocked_at > b.stocked_at) ? 1 : -1)
      this.setState({ state: this.state });
    }
  }

  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect01" onChange={this.filterList}>
            <option selected value="All">All</option>
            <option value="Fruit">Fruits</option>
            <option value="Vegetable">Vegetables</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect01" onChange={this.sortList}>
            <option selected value="Latest">Latest</option>
            <option value="Longest">Longest in stock</option>
          </select>
        </div>

        <ul class="list-group">
          {this.state.filterList.map(item => <li class="list-group-item d-flex justify-content-between align-items-center">{item.name}<span class="badge badge-primary badge-pill">{moment(item.stocked_at).startOf('hour').fromNow()}</span></li>)}
        </ul>
      </div>
    );
  }
}

export default List;
