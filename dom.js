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

// Add a new li element without the same class Name
// And try editing it with getelementsbyclassname and then by getelementbytagname
var li= document.getElementsByTagName("li");

var lie=document.getElementsByClassName("list-r");

lie[0].innerText="hi";
li[4].innerText="H1"
// Queryselector
// Make the 2nd item have green background color
// Make the 3rd item invisible


var item2 = document.querySelector('.list-group-item:nth-child(2)');

item2.style.backgroundColor="green";

var item3 = document.querySelector('.list-group-item:nth-child(3)');
item3.style.opacity="0";




//QueryslectorAll
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL

var items = document.querySelectorAll('.list-group-item');

items[1].style.color='green';

var odd = document.querySelectorAll("li:nth-child(odd)");

 for(i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="#0f0";
}
