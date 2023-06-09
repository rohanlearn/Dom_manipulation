var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

form.addEventListener('submit',additem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function additem(event){
    event.preventDefault();
    var newItem = document.getElementById("item").value;
    var newDes = "   "+document.getElementById("desciption").value;

    var li = document.createElement('li')
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    

    var delButton = document.createElement('button');
    delButton.className='btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
    li.appendChild(document.createElement("br"))
    li.appendChild(document.createTextNode(newDes));
    

    itemList.appendChild(li);
    var ipaut = document.getElementById('item');
    
    ipaut.value="Item "

    var Des = document.getElementById("desciption");
    Des.value=""

    

}

function removeItem(event){
    if (event.target.classList.contains('delete')){
        if (confirm('Are You Sure?')){
            var li= event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemdesc = item.lastChild.textContent
        var itemName = item.firstChild.textContent;
        itemName=itemName+itemdesc
        console.log(itemName.toLowerCase(),text,itemName.toLowerCase().indexOf(text))
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }

    })
}