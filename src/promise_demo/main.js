/*
 * @Author: sunchen
 * @Date: 2022-05-11 15:03:21
 * @LastEditors: sunchen
 * @LastEditTime: 2022-05-11 15:57:11
 * @Description: www.github.com
 */

// const promiseA = new Promise((resolve, reject) => {
//     console.log('promiseA', 1)
//     resolve({'name': 'sunchen'})
//     console.log('promiseA', 2)
// })

// const promiseB =  (data) => {
//     return new Promise((resolve, reject) => {
//         console.log('promiseB', data)
//         console.log('promiseB', 2)
//         resolve({'name': 'sunchen'})
//         console.log('promiseB', 3)
//     })
// }

// promiseA
// .then(promiseB)
// .catch(e => console.log(e))

// 2 -3 - 5 - 4 - 1
// setTimeout(function() {
//     console.log(1)
//   }, 0);
// new Promise(function executor(resolve) {
// console.log(2);
// for( var i=0 ; i<10000 ; i++ ) {
//     i == 9999 && resolve();
// }
// console.log(3);
// }).then(function() {
// console.log(4);
// });
// console.log(5);

// for (var i = 0; i < 5; i++) {
//     setTimeout((function(i) {
//       console.log(i);
//     })(i), i * 1000);
//   }

const { rejects } = require('assert');
const EventEmitter = require('events');
const { resolve } = require('path');

let emitter = new EventEmitter();

// emitter.on('myEvent', () => {
//   console.log('hi 1');
// });

// emitter.on('myEvent', () => {
//   console.log('hi 2');
// });

// emitter.emit('myEvent');

// emitter.on('myEvent', function sth () {
//     emitter.on('myEvent', sth);
//     console.log('hi');
//   });
  
// emitter.emit('myEvent');

/** 如何实现一个异步的 reduce? (注:不是异步完了之后同步 reduce) */

// const arr = [1, 2, 3, 4, 5, 6]

// const data = arr.reduce((pre, curr) => {
//     console.log(pre, curr)
//     pre[curr] = `${curr}v`
//     return pre
// }, {})
// console.log(data)

async function asyncReduce (arr, func, obj) {
   
    const promiseZero = new Promise((resolve, reject) => {
        resolve(func(obj, arr[0]))
    })
    
    for (let i = 1; i < arr.length; i++) {
        promiseZero.then((data) => new Promise((resolve, reject) => {
            resolve(func(data, arr[i]))
        }))
    }

    return promiseZero
}

async function main () {
    const arr = [1, 2, 3, 4, 5, 6]
    const func = (pre, curr) => {
        pre[curr] = `${curr}v`
        return pre
    }
    console.log(await asyncReduce(arr, func, {}))
}

main()
