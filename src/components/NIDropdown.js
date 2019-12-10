import React from 'react';
import '../App.css';

class NIDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '10'};    
        this.handleChange = this.handleChange.bind(this);      
      }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callBack(event.target.value);
    }

    render() {
        return(            
            <div>
                <label>Input Quantity </label>
                    <select id="nidropdown" value = {this.state.value} onChange = {this.handleChange}>
                        <option value = "2">2</option>
                        <option value = "5">5</option>
                        <option value = "10">10</option>
                        <option value = "20">20</option>
                        <option value = "30">30</option>
                    </select>
            </div>            
        );
    }
};

export default NIDropdown;