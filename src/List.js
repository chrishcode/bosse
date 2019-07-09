import React from 'react';
import './App.css';


var data = require('./dataset.json');

function List() {
  let fruits = data.filter( function (item) {
    return item.type === 'Fruit'
  });

  let vegetables = data.filter( function (item) {
    return item.type === 'Vegetable'
  });

  console.log(fruits);
  console.log(vegetables);
  return (
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Type</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose a type...</option>
          <option value="1">All</option>
          <option value="2">Fruits</option>
          <option value="3">Vegetables</option>
        </select>
      </div>
      {/* {if()} */}
      <ul class="list-group">
        {data.map(item => <li class="list-group-item d-flex justify-content-between align-items-center">{item.name}<span class="badge badge-primary badge-pill">{item.stocked_at}</span></li>)}
      </ul>
    </div>
  );
}

export default List;
