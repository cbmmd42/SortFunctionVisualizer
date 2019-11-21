import React from 'react';
import SADropdown from './SADropdown';
import NIDropdown from './NIDropdown';
import ITDropdown from './ITDropdown';

class TopBar extends React.Component { 
    callback_SADropdown = (SAType) => {
        this.props.SAcallBack(SAType);
    }
    callback_ITDropdown = (ITType) => {
        this.props.ITcallBack(ITType);
    }
    callback_NIDropdown = (NIType) => {
        this.props.NIcallBack(NIType);
    }    
    render() {
        return(
            <div>
                <SADropdown callBack = {this.callback_SADropdown} props/>                
                <ITDropdown callBack = {this.callback_ITDropdown} props/>
                <NIDropdown callBack = {this.callback_NIDropdown} props/>                
            </div>            
        );
    }
};

export default TopBar;