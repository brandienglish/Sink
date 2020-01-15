var firstname = 'Brandi';
console.log(firstname);

const states = 50;
console.log(states)

function sayhello() {
    alert('Hello World!');
}

sayhello();

var x = 5;

var z = 4;

var answer = x + z; //adds 5 and 4
console.log(answer)


let friendsArr = [
    {
        name: 'Charles',
        age: '21'
    },
    {
        name: 'Abby',
        age: '27'
    },
    {
        name: 'James',
        age: '18'
    }
]

function checkage(name, age) {
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page")
}

for (let i = 0; i < friendsArr.length; i++) {
   checkage(friendsArr[i].name, friendsArr[i].age);
}

// checkage(friendsArr[0].name, friendsArr[0].age);
// checkage(friendsArr[1].name, friendsArr[1].age);


var arrayVeggies = ['oninons', 'cabbage', 'lettuce', 'corn', 'zucchini'];

for (i = 0; i < 5; i++) {
    console.log(arrayveggies[i]);
}

function getLength(word) {
    return word.length 
}
let wordLength = getLength('hello world')

if (wordLength % 2 === 0) {
 console.log('The world is nice and even!'); 
} else {
    console.log('The World Is Odd')
}

// 4 == '4'
// 4 === '4'
// if (1 = 1) {
//     console.log('duh')
// } else {

// }
// function checkage(name, age) {
//     if (age < 21)
//         alert("Sorry " + name + ", you aren't old enough to view this page")
// }




