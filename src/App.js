import React from 'react';
import Row from './components/Row';
import TopBar from './components/TopBar';
import './App.css';

import bubbleSort from './sortingAlgorithms/bubblesort';
import quickSort from './sortingAlgorithms/quicksort';

import Item from './objects/item';

import addClass from './helperfunctions/addclass';
import removeClass from './helperfunctions/removeclass';

var initialArray = []
for(var i = 0; i < 10; i++){
  initialArray.push(new Item(i+1,i));  
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputType: 'numbers', 
      numberOfItems: '10',
      sortAlgorithmType: 'bubble sort', 
      items: initialArray, 
      swapRate: 135, 
      sorting: false
    }; 
  }

  callback_SADropdown = (SAType) => {
    this.setState({sortAlgorithmType: SAType});
  }
  callback_ITDropdown = (ITType) => {
    this.setState({inputType: ITType});
  }
  callback_NIDropdown = (NIType) => {
    this.stopSorting();
    this.setState({numberOfItems: NIType});
    var tempArr = Array(parseInt(NIType));
    for(var i = 0; i < parseInt(NIType); i++){
      tempArr[i] = new Item(i+1,i);
    }
    this.setState({items: tempArr});
    //set sqap rate
      this.setState({swapRate: 2100/tempArr.length});
    
  }  
  
  sort = (e) => {
    e.preventDefault();    
    if(this.state.sorting == true) return;
    var outputArray = [];
    if(this.state.sortAlgorithmType == 'bubble sort'){
      outputArray = bubbleSort(this.state.items, this.state.numberOfItems);
    }else if(this.state.sortAlgorithmType == 'quick sort') {
      outputArray = quickSort(JSON.parse(JSON.stringify(this.state.items)),
       0, this.state.items.length - 1, outputArray);
    }    
    this.renderArray(outputArray) 
  }

  changeItemRandomly = i => {
    if(this.state.sorting == true) return;
    this.setState(state => {
      const items = state.items.map((item, j) => {        
        if (j === i) {          
          item.value = parseInt(Math.random()*this.state.numberOfItems + 1);
          return item;
        } else {return item;}
      });
      return {items};
    });
  };

  swap = (outputArray, graduallySortedItems, i) => {
    var first,second, temp;    
    first = outputArray[i].first;
    second = outputArray[i].second;
    temp = graduallySortedItems[first].value;
    graduallySortedItems[first].value = graduallySortedItems[second].value;
    graduallySortedItems[second].value = temp;
    this.setState({items: graduallySortedItems});          
  }

  stopSorting = (intervalID) => {
    window.clearInterval(intervalID);
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("sortBtn").classList.remove("hidden");
    document.getElementById("nidropdown").disabled = false;
    document.getElementById("myRange").disabled = false;
    this.setState({sorting:false});
    
    setTimeout(() => {
      document.getElementById("stopBtn").disabled = false;
    }, this.state.swapRate*2);
  }

  startSorting = () => {
    document.getElementById("sortBtn").classList.add("hidden"); 
    document.getElementById("stopBtn").classList.remove("hidden"); 
    
    document.getElementById("nidropdown").disabled = true;
    document.getElementById("myRange").disabled = true;

    this.setState({sorting: true});
  }

  renderArray = (outputArray) => {
    if(outputArray.length == 0) return;
    var sortCancledOrFinished = false;
    this.startSorting();

    var graduallySortedItems = this.state.items;
    var i = 0;
    var cash;
    
    var intervalID = setInterval(() => {
      
      if(i == cash){ //if i was already touched swap, remove its class and check to see if rendering is finished
        removeClass(outputArray,i,outputArray[i].css);
        if(outputArray[i].css == "swap"){
          this.swap(outputArray, graduallySortedItems, i);
        }
        i++;
        sortCancledOrFinished = (i === outputArray.length|| this.state.sorting === false);
        if (sortCancledOrFinished) {          
          this.stopSorting(intervalID);
        }
      } else {
        cash = i;
        addClass(outputArray,i,outputArray[i].css);
      }
      if(outputArray.length === i) this.stopSorting(intervalID);
    }, this.state.swapRate);
    
  }

  slidebar = (e) => {
    e.preventDefault();
    this.setState({swapRate: document.getElementById("myRange").value});
    console.log(document.getElementById("myRange").value);
  }

  render() {
    console.log("App Render called");
    //console.log(this.state.items);
    return (
      <div className="App">
        <TopBar SAcallBack = {this.callback_SADropdown} NIcallBack = 
        {this.callback_NIDropdown} ITcallBack = {this.callback_ITDropdown}/>  
        <form>Faster<input type="range" id="myRange" value={this.state.swapRate} min="70" max="200" onChange={this.slidebar}></input>Slower</form>      
        <hr></hr>
        <Row items={this.state.items} CBchangeItem={this.changeItemRandomly}/>

        <p>ctrl+click or ctrl+hover to scramble</p>
        <button id="sortBtn" onClick={ this.sort }>Sort Items </button>
        <button id="stopBtn" className="hidden" onClick={ this.stopSorting }>Stop </button>
        <hr></hr>
        
      </div>
    );
  }
    
  
}

export default App;
