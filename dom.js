// Watch uptill 23min - Make the title have a black border as the youtuber does
// Now make ADD ITEM bold and chage the font color to greeen


var itenList = document.querySelector("#items");
console.log("current",itenList)
// parentElement
console.log("parentNode=",itenList.parentNode);
itenList.parentNode.style.backgroundColor='red'


//ChildNOdes

console.log("childnodes=",itenList.childNodes);
// lastelementchild
console.log("childnodes=lastElementChild",itenList.lastElementChild)
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild




// Now go head and add HEllo word before Item Lister
var newDiv = document.createElement('div');

var newDivText=document.createTextNode('HEllo word');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



container.insertBefore(newDiv,h1);

// Now go head and add HEllo word before Item 1
var list = document.querySelector(".list-group")
var firstitem = list.firstChild

list.insertBefore(newDiv,firstitem)
// If stuck for long check the hints.

