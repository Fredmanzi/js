var form = document.getElementById('addform');
var listItem = document.getElementById('items');

listItem.addEventListener('click', removeItem)

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1);
    // get input value
    var newItem = document.getElementById('item').value;
    //create new element
    var li = document.createElement('li');
    li.className = 'list_item';
    //add textnode with input value
    var textValue = document.createTextNode(newItem);
    li.appendChild(textValue);
    //create delete button

    var deletebtn = document.createElement('button');
    deletebtn.className = 'closebtn';
    deletebtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletebtn);
    listItem.appendChild(li);


}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('closebtn')) {
        console.log(1);

        if (confirm('are you sure')) {
            var li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }

}