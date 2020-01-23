let groceryList = [];

var list = document.getElementById('gList');
var addBtn = document.getElementById('addItem');
var item = document.getElementById('userInput');

addBtn.addEventListener('click', addToGroceryList);

function addToGroceryList(){
    groceryList.push(item.value);   

    var text = "<ul>";
    groceryList.forEach(addItemInUI);
    text += "</ul>"

    function addItemInUI(value) {
    text += "<li>" + value + "</li>";
    }
    
    list.innerHTML = text;
}











console.log(groceryList)
// document.getElementById("gList").innerHTML = groceryList;










