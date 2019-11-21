import pairOfItems from '../objects/pairofitems';

var bubbleSort = (items,numberOfItems) => {
    //e.preventDefault();
    var outputArray = [];
    var swapp;
    var numberOfItems = parseInt(numberOfItems) - 1;
    
    var x = JSON.parse(JSON.stringify(items));    
    //console.log(x.map((item)=> {return item.value}));
    //console.log(graduallySortedItems.map((item)=> {return item.value}));
    do {
        swapp = false;
        for (var i=0; i < numberOfItems; i++) {
            if (x[i].value < x[i+1].value) {
              //console.log(x[i].key + " " + x[i+1].key);
              outputArray.push(new pairOfItems(x[i].key, x[i+1].key,"swap"));
               var temp = x[i].value;
               x[i].value = x[i+1].value;
               x[i+1].value = temp;
               swapp = true;
            }else {
              outputArray.push(new pairOfItems(x[i].key, x[i+1].key,"touch"));
            }
        }
    } while (swapp);
    return outputArray;
}

export default bubbleSort;