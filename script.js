var productList = [{
    "title": "Brown eggs",
    "type": "dairy",
    "price": 28.1,
    "rating": 4
    }, {
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "price": 29.45,
    "rating": 4
    }, {
    "title": "Asparagus",
    "type": "vegetable",
    "price": 18.95,
    "rating": 3
    }, {
    "title": "Green smoothie",
    "type": "dairy",
    "price": 17.68,
    "rating": 4
}]

var cartList = [];

var table = document.getElementById("myList");
var cartListTable = document.getElementById("myCart");

window.onload = function WindowLoad(event) {
    // To Load data in Product List
    var rowCount = table.rows.length;
    for (var i = 0, l = productList.length; i < l; i++) {
        var obj = productList[i];
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= obj.title;
        row.insertCell(1).innerHTML= obj.type; 
        row.insertCell(2).innerHTML= obj.price; 
        row.insertCell(3).innerHTML= obj.rating;
        row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Add to Cart" onClick="Javacsript:addToCart(this)">';
    }
}

function addRow() {
    // Adds new row in existing product list
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= (document.getElementById("title")).value;
    row.insertCell(1).innerHTML= (document.getElementById("type")).value; 
    row.insertCell(2).innerHTML= (document.getElementById("price")).value; 
    row.insertCell(3).innerHTML= (document.getElementById("rating")).value; 
    row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Add to Cart" onClick="Javacsript:addToCart(this)">';
    productList.push({
        "title": (document.getElementById("title")).value,
        "type": (document.getElementById("type")).value,
        "price": (document.getElementById("price")).value,
        "rating": (document.getElementById("rating")).value
    })
}


function addToCart(obj){
  // Adds products to cart
  var selectedElement = obj.parentNode.parentNode;
  cartList.push({
    "title": selectedElement.childNodes[0].innerHTML,
    "type": selectedElement.childNodes[1].innerHTML,
    "price": selectedElement.childNodes[2].innerHTML,
    "rating": selectedElement.childNodes[3].innerHTML
});
  
  addRowToCartTable(cartList);
}


function addRowToCartTable(obj){
  // Displays list of products available in cart
    var rowCount = cartListTable.rows.length;
    for (var i = 0, l = obj.length; i < l; i++) {
        var val = obj[i];
        var row = cartListTable.insertRow(rowCount);
        row.insertCell(0).innerHTML= val.title;
        row.insertCell(1).innerHTML= val.type; 
        row.insertCell(2).innerHTML= val.price; 
        row.insertCell(3).innerHTML= val.rating;
        row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Remove" onClick="Javacsript:removeFromCart(this)">'; 
    }
}


function removeFromCart(obj){
    // Delete row from Cart List
    var index = obj.parentNode.parentNode.rowIndex;
    cartListTable.deleteRow(index);
}

function deleteRow(obj) {
    // Delete row from Product List
    var index = obj.parentNode.parentNode.rowIndex;
    table.deleteRow(index);
}

function sortByTitle() {
    //Sorts all rows in Product List based on 'title'
    var sortedObjs = _.sortBy( productList, 'title' );
    productList = [];
    productList = sortedObjs;
    document.getElementById("myList").innerHTML = ""; 
    var rowCount = table.rows.length;
    for (var i = 0, l = sortedObjs.length; i < l; i++) {
        var obj = sortedObjs[i];
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= obj.title;
        row.insertCell(1).innerHTML= obj.type; 
        row.insertCell(2).innerHTML= obj.price; 
        row.insertCell(3).innerHTML= obj.rating;
        row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Add to Cart" onClick="Javacsript:addToCart(this)">';
        rowCount ++;
    }  
}


function sortByPrice() {
    //Sorts all rows in Product List based on 'price'
    var sortedObjs = _.sortBy( productList, 'price' );
    productList = [];
    productList = sortedObjs;
    document.getElementById("myList").innerHTML = ""; 
    var rowCount = table.rows.length;
    for (var i = 0, l = sortedObjs.length; i < l; i++) {
        var obj = sortedObjs[i];
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= obj.title;
        row.insertCell(1).innerHTML= obj.type; 
        row.insertCell(2).innerHTML= obj.price; 
        row.insertCell(3).innerHTML= obj.rating;
        row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Add to Cart" onClick="Javacsript:addToCart(this)">';
        rowCount ++;
    }  
}

function sortByRating() {
    //Sorts all rows in Product List based on 'rating'
    var sortedObjs = _.sortBy( productList, 'rating' );
    productList = [];
    productList = sortedObjs;
    document.getElementById("myList").innerHTML = ""; 
    var rowCount = table.rows.length;
    for (var i = 0, l = sortedObjs.length; i < l; i++) {
        var obj = sortedObjs[i];
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= obj.title;
        row.insertCell(1).innerHTML= obj.type; 
        row.insertCell(2).innerHTML= obj.price; 
        row.insertCell(3).innerHTML= obj.rating;
        row.insertCell(4).innerHTML= '<input type="button" class="button" value = "Add to Cart" onClick="Javacsript:addToCart(this)">';
        rowCount ++;
    }  
}