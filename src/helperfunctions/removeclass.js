
var removeClass = (outputArray,x,classname) => {
    
    if(document.getElementById(outputArray[x].first).classList.contains(classname)){
      document.getElementById(outputArray[x].first).classList.remove(classname);
    } 
  
    if(document.getElementById(outputArray[x].second).classList.contains(classname)){
      document.getElementById(outputArray[x].second).classList.remove(classname);
    } 
}

export default removeClass;