import React from 'react';
import '../App.css';

class ITDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'numbers'};
    
        this.handleChange = this.handleChange.bind(this);        
      }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callBack(event.target.value);
    }

    render() {
        return(            
            <div>
                <label>Input Type </label>
                    <select id="itdropdown" value = {this.state.value} onChange = {this.handleChange}>
                        
                        <option value = "numbers">numbers</option>
                    </select>
            </div>            
        );
    }
};
//<option value = "text">text</option>
export default ITDropdown;