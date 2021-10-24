// let p1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('response')
//     }, 2000);
// });

// p1.then ((response) => {
//     console.log('firste');
//     return response
// });

// p1.then ((response) => {
//     console.log('second');
//     return response
// });

// let myResolve = new Promise((resolve, reject) => {
//     fetch('http://m2.unimix.pro/pub/ajax.php')
//     .then(data =>{
//         resolve(data.text());
//         })
//     });
//       myResolve.then(data => {
//           console.log(data);
//           let obj = JSON.parse(data)
//           console.log(obj);
//           console.log(JSON.stringify(obj));
//       });

// let get_request = fetch ('http://m2.unimix.pro/pub/ajax.php?search=task1&name=vasya', {
//     method: 'GET'
// });

// let post_request = fetch('http://m2.unimix.pro/pub/ajax_post.php', {
//     method: 'POST',
//     body: JSON.stringify({
//         search: 'task1',
//         name: 'vasya',
//     })
// });

// post_request
// .then((response) => {
//     return response.text();
// })
// .then((data) => {
//     console.log(data);
// });

// import 'regenerator-runtime/runtime'
// async function f() {
//     console.log(1);
//     let response = await fetch('http://m2.unimix.pro/pub/ajax.php?search=task1&name=vasya', 
//     method: 'GET'
// });
// console.log(await response.json());
// }

// f()