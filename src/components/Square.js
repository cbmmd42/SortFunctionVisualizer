import React from 'react';
import './Square.css';
import Event from 'events';



class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.item,
        };
    }


    myfunction = (event) => {
        //console.log("Its Working");
        //event.preventDefault();
        if(event.ctrlKey){
            this.props.CBchangeItem(this.props.item.key);
            //console.log(event.button);
        }
        
    }

    render() {
        this.state.value = this.props.item;
        //console.log("square rerendered");
        return(
            <div className="wraperDiv">
                <div onMouseDown={this.myfunction} onMouseMove={this.myfunction} className="sortItem" id={this.props.item.key} >
                    
                        <p className="sortItemText noSelect">{this.props.item.value}</p>      
                    </div>
                                          
                </div>        
        );
    }
}

export default Square;