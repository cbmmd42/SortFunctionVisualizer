
var addClass = (outputArray,x,classname) => {  

    document.getElementById(outputArray[x].first).classList.add(classname);  
    document.getElementById(outputArray[x].second).classList.add(classname);

}

export default addClass;