import React from 'react';
import '../App.css';

class SADropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'bubble sort'};    
        this.handleChange = this.handleChange.bind(this);        
      }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callBack(event.target.value);
    }

    render() {
        return(            
            <div>
                <label>Sorting Algorithm </label>
                    <select id="sadropdown" value = {this.state.value} onChange = {this.handleChange}>
                        <option value = "bubble sort">Bubble Sort</option>
                        <option value = "quick sort">Quick Sort</option> 
                        <option value = "selection sort">Selection Sort</option>                    
                    </select>         
            </div>            
        );
    }
};

//   

export default SADropdown;