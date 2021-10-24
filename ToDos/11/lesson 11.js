// console.log(1);

// console.log(2);

// setTimeout(() => {
//     console.log(3);   
// }, 2000);

// console.log(4);

// function printNumbers(from, to) {
//     let start = from;
//     let timerId = setInterval(() => {
//         console.warn(start++);
//         if (start > to) {
//             clearInterval(timerId)
//         }
//     }, 1000);

// }
// printNumbers(10, 15);

// let counter = new Promise(function (resolve, reject) {
//     console.log(1);
//     setTimeout(() => {
//         resolve(1)
//     }, 5000);

//     reject('was error');

//     console.log(2);

// })

// // console.log(counter);

// counter.then(function (r) {
//     console.log('then был вызван');
//     return 1;
// })

// .catch(function (error) {
//     console.error(error);
//     console.log(counter);
// })

// .finally(() => {
//     console.log('Я всегда буду вызыватся');
// })

// let promise = fetch('http://m2.unimix.pro/pub/ajax.php')

// promise.then(function (response) {
//     return response.text();
// })
// .then(function (answer) {
//     console.log(answer);
// })
// .catch(function (error) {
//     console.log('catch');
//     console.log(error);
// })

// let promises = [
//     fetch('http://m2.unimix.pro/pub/ajax.php'),
//     fetch('http://m2.unimix.pro/pub/ajax.php'),
//     fetch('http://m2.unimix.pro/pub/ajax.php'),
//     fetch('http://m2.unimix.pro/pub/ajax.php'),
//     Promise.resolve('new value')
// ]

// promise.all(promises).then(
//     function (reponses) {
//         console.log(responses);
//     }
// )

