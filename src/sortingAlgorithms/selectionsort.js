import pairOfItems from '../objects/pairofitems';

function selectionSort(items){
    var outputArray = [];
    var arr = [];
    
    arr = JSON.parse(JSON.stringify(items));
        
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var j = i+1; j<len; j++){
        if(arr[j].value < arr[minIdx].value){
            minIdx = j;
        }
        outputArray.push(new pairOfItems(i, j,"touch"));         
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      outputArray.push(new pairOfItems(i, minIdx,"swap"));      
    }
    return outputArray;
  }

export default selectionSort;