import pairOfItems from '../objects/pairofitems';

var quickSortSwap = (arr, i, j,outputArray) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    if(arr[i].key != arr[j].key){
      outputArray.push(new pairOfItems(i, j,"swap"));
    } // show every node touched 
  }
  
  var partition = (arr, pivot, left, right, outputArray) => {
    var pivotValue = arr[pivot].value,
       partitionIndex = left;
  
   for(var i = left; i < right; i++){
      if(arr[i].value < pivotValue){
      quickSortSwap(arr, i, partitionIndex,outputArray);
      partitionIndex++;
      } else {
        outputArray.push(new pairOfItems(i, partitionIndex,"touch"));
      }
    }
  quickSortSwap(arr, right, partitionIndex,outputArray);
    return partitionIndex;
  }
  
  var quickSort = (arr, left, right, outputArray) => {
    
    var len = arr.length, 
   pivot,
   partitionIndex;
  
  
  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right,outputArray);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1,outputArray);
   quickSort(arr, partitionIndex + 1, right,outputArray);
  }
  return outputArray;
    
  }

  export default quickSort;