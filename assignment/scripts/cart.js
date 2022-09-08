console.log('***** Cart Functions *****');
 // Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    

if(item) {
    console.log("Fruit was added:",true);
    basket.push(item);

 } else {
    console.log("Fruit was added:",false);
    console.log("---undefined value not added to array---")
    
}
console.log("Current basket:",basket);

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
    console.log(arr);
}

empty(basket);