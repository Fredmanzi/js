
var headTitle = document.getElementById('heading-title');

// headTitle.textContent = 'hello';
// headTitle.innerText = 'kigurube';
// headTitle.innerHTML = '<h3>mukuru wazo</h3>'
// headTitle.style.borderBottom = 'solid 3px black';
// var listItem = document.getElementsByClassName('list_item');
// listItem[1].textContent = 'haha';

// console.log(listItem);


// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].style.backgroundColor = 'yellow';
// }


// var item = document.getElementsByTagName('h5');
// for (let i = 0; i < item.length; i++) {
//     item[i].style.color = 'grey';
//     item[i].style.fontWeight = 'bold';
// }

// var item = document.querySelector('#items');

// console.log(item.children);

// let newdiv = document.createElement('div');
// newdiv.className = 'hello';
// newdiv.id = 'hello1';
// // console.log(newdiv);
// var newdivtext = document.createTextNode('hello wolrd');
// newdiv.appendChild(newdivtext);
// var container = document.querySelector(' .container');
// var h1 = document.querySelector('.head_five');

// container.insertBefore(newdiv, h1);

//eventListner

var btn = document.getElementById('btn');
// btn.addEventListener('click', buttonClick);
// btn.addEventListener('dblclick', buttonClick)
// btn.addEventListener('mousedown', buttonClick)
// var box = document.getElementById('rectangle');
// box.addEventListener('mouseenter', buttonClick)


var textInput = document.querySelector('input[type="text"]');
textInput.addEventListener('keydown', runEvent);
function buttonClick() {
    // document.getElementById('head_five').textContent = 'changed';
    // document.getElementById('heading-title').style.color = 'blue';
    // console.log(e.target);
    // box.style.backgroundColor = 'red';

}
function runEvent(e) {

    var outText = document.getElementById('output');
    outText.innerHTML = '<h3>' + e.target.value + '</h3>';
    console.log(e.target.value);
}