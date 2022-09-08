console.log('***** Cart Functions *****');
 // Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    console.log("Current basket:",basket);


if(item) {
    console.log("Fruit was added:",true);
    basket.push(item);

 } else {
    console.log("Fruit was added:",false);
    console.log("---undefined value not added to array---")
    
}

};

addItem("Apple");
addItem( );
addItem("Mango");
addItem("Papaya");
addItem();
addItem("Cherry");

console.log("Current basket:",basket);

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
 }
 
  console.log(empty(basket)); 
  console.log("Still globally returns",basket);

 // End emptying array example 1.

  function empty2(arr) {
    arr = [];
    console.log(arr);
  }
 
empty2(basket);
console.log("Still globally returns",basket);
 
 // End emptying array example 2.
  function empty3(arr) {
      arr.length = 0;
      console.log("NOW the global basket array is",basket);
  }
 empty3(basket);
 // End emptying array example 3.
 addItem("Apple"); // Called addItem again to test it. 

 console.log(basket);

// So, I provided three different methods for emptying the array. The first two empty
// the array, however they create NEW arrays. If I console.log(basket) after the first
// two functions, basket will return with no changes, as shown when I console.log(basket).
// For the third function, setting basket.length to 0 will specifically affect
// the global basket variable without creating a new array. I'm not fully sure
// why this is, and sort of stumbled upon it by accident, but there ya go!

