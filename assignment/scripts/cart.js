console.log('***** Cart Functions *****');
 // Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log("Current basket:",basket);

function addItem(item,full) {

  if(item && full !== true) {
    console.log("Fruit was added:",true);
    basket.push(item);
    console.log("Current basket:",basket);
    return true; //The way I wrote this code, I could delete these three
    // "returns" (true, false, false). The code would run the same. However,
    // while I may have not completed the assignment EXACTLY how you wanted,
    // it still functions exactly as expected and required. 

 } else if (item && full) {
    console.log("Fruit was added:",false);
    console.log("Item not added:",item);
    console.log("Current basket:",basket);
    return false;
 } else {
    console.log("Fruit was added:",false);
    console.log("---undefined value not added to array---");
    return false;  
}
};

addItem("Apple");
addItem( );
addItem("Mango");
addItem("Papaya");
addItem();
addItem("Cherry");

//I had it written previously where the array would return the
// undefined value, but I figured it made more sense to omit it
// because it was giving an inaccurate length of the array.
// I hope that's alright. Otherwise, I put basket.push(item)
// outside and above the if statement, which returned all data
// even if the data was undefined/didn't have a value. 
console.log("---Now to loop through the array---");

function listItems(arr) {
      for(let i=0; i < arr.length; i++) {
        console.log(arr[i]);  
      }
 };
 
listItems(basket);

function empty(arr) {
    arr = [];
    return arr;
 };
 
  console.log(empty(basket)); 
  console.log("Still globally returns",basket);  // End emptying array example 1.

  function empty2(arr) {
    arr = [];
    console.log(arr);
  };
 
empty2(basket);
console.log("Still globally returns",basket);  // End emptying array example 2.

  function empty3(arr) {
      arr.length = 0;
      console.log("NOW the global basket array is",basket);
  };
 empty3(basket); // End emptying array example 3.

 addItem("Apple"); // Called addItem again to test it, this line is not required. 
 
// So, I provided three different methods for emptying the array. The first two empty
// the array, however they create NEW arrays. If I console.log(basket) after the first
// two functions, basket will return with no changes, as shown when I console.log(basket).
// For the third function, setting basket.length to 0 will specifically affect
// the global basket variable without creating a new array. I'm not fully sure
// why this is, and sort of stumbled upon it by accident, but there ya go!

console.log("----Stretch goals below!-----");

const maxItems = 5;
 
function isFull() {
    if(basket.length < maxItems ) {
        console.log("-There are less than",maxItems,"items in the basket: (",basket.length,")");
        return false;
      } else {
        console.log("-Can not add more than",maxItems,"items in the basket: (",basket.length,")");
        return true;
     }
 };

 isFull();
 
console.log("-----break-----");

addItem("Peach",isFull());
addItem("",isFull());
addItem("Kiwi",isFull());
addItem("BatteryAcid",isFull());
addItem("",isFull());
addItem("Coconut",isFull());
addItem("Orange",isFull());
addItem("pineapple",isFull());
addItem("Tomato",isFull());
 
//End of stretch goal 3.
console.log("-----Moving on to last challenge-----")
function removeItem(item) {
    if(basket.indexOf(item) ===-1)  {
        console.log(item,"not found.");
        console.log("Unchanged basket:",basket);
         return null;
    } else {
        console.log(item,"found and removed:");
        console.log("Item removed",basket.splice(basket.indexOf(item),1));
        console.log("Basket with removed item:",basket);
     }
};

removeItem("BatteryAcid");
removeItem("BatteryAcd");
removeItem("");
removeItem("Cucumbers");
removeItem();
removeItem("Apple");

// The code below is not stretch goals or required work, just added for styling purposes.

 function revealAll(event) {
    document.getElementById("YO").style.backgroundColor = "red";
    document.getElementsByTagName("li")[0].style.color = "white";
    document.getElementsByTagName("li")[1].style.color = "white";
    document.getElementsByTagName("li")[2].style.color = "white";
    document.getElementsByTagName("li")[3].style.color = "white";
 };