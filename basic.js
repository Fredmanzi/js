const todos = [
    {
        id: 1,
        text: 'checking the server room',
        isComplited: true,

    },
    {
        id: 2,
        text: 'learning javascript',
        isComplited: true,

    },
    {
        id: 1,
        text: 'taking break first',
        isComplited: true,

    },
    {
        id: 1,
        text: 'checking the server room',
        isComplited: true,

    }
]

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// todos.forEach((todo) => {
//     console.log(todo.id)
// })

// let todoText = todos.map((todo) => {
//     console.log(todo.text);
// })


// let todoisComplited = todos.filter((todo) => {
//     return todo.isComplited
// })
// console.log(todoisComplited);
// let x = 10;
// if (x === 10) {
//     console.log('x is  equal to 10');
// } else {
//     console.log('x is not equal 10');
// }

//ternary operators

// let age = 10;

// let canDrink = age > 18 ? 'you can go in the bar' : 'you cant go in the bar';

// console.log(canDrink);

const color = 'red';

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not red or blue');
}