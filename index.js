
// Write your solution in this file! 

//Global array
const burgers = ["Hamburger","Cheeseburger"];
 //Global drink

  let featuredDrink = "Strawberry Milkshake"; 

//Function that adds a new burger 

  function addBurger(){
     //function-scoped variable 
    const newBurger = "Flatburger";
    
     //Add to the burgers array 
     burgers.push(newBurger);
     
if(true) {const anotherNewBurger = 'Maple Bacon Burger'; burgers.push(anotherNewBurger)}; } 

function changeFeaturedDrink(){ 
    featuredDrink = "The JavaShake"; }