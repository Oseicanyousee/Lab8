// var myShoppingList = {
// 	groceries:[
// {
// 	name: "eggs",
// 	price: "$3.50"
// },
// {
// 	name: "milk",
// 	price: "$4.00"
// },
// {
// 	name: "spinach",
// 	price: "$3.00/lb"
// },

// ]

var myShoppingList = [
{
	item: "eggs",
	price: 3.50,
	quantity: 4
},
{
	item: "milk",
	price: 4.00,
	quantity: 3
},
{
	item: "spinach",
	price: 3.00,
	quantity:1
}

]

var total = 0;



// console.log(myShoppingList[0].item + myShoppingList[0].price + myShoppingList[1].item + myShoppingList[1].price + myShoppingList[2].item + myShoppingList[2].price);

//FOR LOOP METHOD!//
// for(var i = 0; i< myShoppingList.length; i++) {

// console.log(myShoppingList[i].item + myShoppingList[i].price); 
// total+=myShoppingList[i].price;
	
// }

// console.log(total);


myShoppingList.forEach( function(stuff){
	console.log(stuff.item + "-" + stuff.price);
	total+=stuff.price*stuff.quantity;
});

console.log("$" + total + ".00");

for (var i=0; i<myShoppingList.length; i++){
// Created elements used on HTML doc. 
// Listed as rows and columns because we're adding these to a table. 
var listRow=document.createElement("tr");
var colPrice=document.createElement("td");
var colItem=document.createElement("td");
var colQuantity=document.createElement("td");
var colTotals=document.createElement("td");

// Adding data to elements used on HTML doc
colItem.innerText=myShoppingList[i].item;
colPrice.innerText=myShoppingList[i].price; 
colQuantity.innerText=myShoppingList[i].quantity;
colTotals.innerText=total;

// Method to document object on the list
listRow.appendChild(colItem);
listRow.appendChild(colPrice);
listRow.appendChild(colQuantity);


var Receipt=document.getElementById('Receipt');
Receipt.appendChild(listRow);
}

var Totals=document.getElementById("foot")
	Totals.appendChild(colTotals);

	function addItem(){
		var textitem=document.getElementById("textitem").value;
		var textprice=document.getElementById("textprice").value;
		var textquantity=document.getElementById("textquantity").value;
// Used to create the table row
		var listRow=document.createElement("tr");
		var colPrice=document.createElement("td");
		var colItem=document.createElement("td");
		var colQuantity=document.createElement("td");
		var colTotals=document.createElement("td");
// Used to place data in the table
		colItem.innerText=mnewItem;
		colPrice.innerText=newPrice; 
		colQuantity.innerText=newQuantity;
// Appending - adding the information to the end of - the list
		listRow.appendChild(colItem);
		listRow.appendChild(colPrice);
		listRow.appendChild(colQuantity);


	}
// var myShoppingList = [
// {
// 	item: "eggs",
// 	price: "$3.50"
// },
// {
// 	item: "milk",
// 	price: "$4.00"
// },
// {
// 	item: "spinach",
// 	price: "$3.00/lb"
// }

// ]

// // console.log(myShoppingList[0].item + myShoppingList[0].price + myShoppingList[1].item + myShoppingList[1].price + myShoppingList[2].item + myShoppingList[2].price);
// for(var i = 0; i< myShoppingList.length; i++ )
// 	console.log(myShoppingList[i].item + myShoppingList[i].price); 

// myShoppingList.forEach(function post(groceries[0] + groceries[1] + groceries[2] {
// console.log(myShoppingList);
// }

// groceries.forEach(currentValue[0],[1],[2]);
// console.log(groceries);