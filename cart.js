function showCart(){
    var section = document.getElementById("cart");
    section.style.visibility = "visible";
}
function closeCart(){
    var section = document.getElementById("cart");
    section.style.visibility = "hidden";
}
function addToCart() {
    var countElement = document.getElementById("count");
    var currentCount = parseInt(countElement.innerHTML);
    countElement.innerHTML = currentCount + 1;
  }
  function showNotification(){
    var section = document.getElementById("order");
    section.style.visibility = "visible";
}
function closeNotification(){
    var section = document.getElementById("order");
    section.style.visibility = "hidden";
}
function changeColor(){

    
        var button = document.getElementById("check");
        
      
        if (button.style.backgroundColor == "rgb(21, 107, 21)") {
          button.style.backgroundColor = "white";
        
        } else {
          button.style.backgroundColor = "rgb(21, 107, 21)";
    
        }
      
    
}