import React from 'react';
import './Row.css';
import Square from './Square.js';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items
    };
  }   
  
  render() {
    //console.log("Rows rendered");
    //console.log(this.props.items);
    return (
    <div className="sortTable">         
      {this.props.items.map(number => 
      <Square item={number} CBchangeItem={this.props.CBchangeItem}/>)}
    </div>
      );
  }
  
}

export default Row;

