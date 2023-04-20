// Watch uptill 23min - Make the title have a black border as the youtuber does
// Now make ADD ITEM bold and chage the font color to greeen



var headerTitle = document.getElementById("header-title");

console.log(headerTitle);
// headerTitle.textContent="Hello";

// headerTitle.innerText="Goodbye";

// 

// headerTitle.innerHTML='<h3>Hello</h3>';

headerTitle.style.border='solid 3px black'

var addItem = document.getElementsByClassName("title");
console.log(addItem)
addItem[0].style.fontWeight="bold";
addItem[0].style.color='green';

var items = document.getElementsByClassName('list-group-item');

for (i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}

items[2].style.backgroundColor="green";