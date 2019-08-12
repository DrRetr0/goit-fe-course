// "use strict";
// let userList = ['car', 'dog', 'cat'];
// let cat = userList[5];
// console.log(`Item name is ${cat}`);
// userList[5] = 5;
// userList[2] = 'mouse';

// console.log(`Amount of users ${userList.length}`);

// userList = ['Bob Dilan', 'Jon Week', 'Tony Stark'];

// for (let i = 0; i < userList.length; i += 1) {
//     console.log(`${i + 1}) User name is ${userList[i]}`);
// }

// for (const user of userList) {
//     console.log(`User name is ${user}`);
// }

// search for user

// for (const user of userList) {
//     if (user === 'Jon Week') {
//         console.log(`Found user ${user}`);
//         break;
//     }
//     console.log(`User name is ${user}`);
// }

// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numberList) {
//     if (number % 2 === 0) {
//         console.log(`Numer is ${number}`);
//         continue;
//     }
//     console.log('Number ${number');
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//         console.log(`Array item[${i}][${j}] = ${matrix[i][j]}`)
//     }
// }

// const article = 'I need your clothes, boots and motocycle';
// const wordsArray = article.split(' ');
// const outputString = wordsArray.join('_');
// console.log(wordsArray.indexOf('boots'));
// console.log(outputString);

// console.log(userList);

// userList.push('super user');

// // console.log(userList);

// // console.log(userList.pop());

// const newArray = userList.splice(1,3);
// console.log(newArray, userList);
// const article = 'need your clothes, boots and motocycle';
// const foo = article.slice(0, 1).toUpperCase() + article.slice(1);

// console.log(foo);

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const user = prompt('enter userName');

if ( true === logins.includes(user)) {
    alert('user already exist');
} else { 
    logins.push(user);
    alert('user was added');
}

console.log(logins);