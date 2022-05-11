/*
 * @Author: sunchen
 * @Date: 2022-04-30 19:55:20
 * @LastEditors: sunchen
 * @LastEditTime: 2022-04-30 20:19:29
 * @Description: www.github.com
 */
const http = require('node:http')
const { AsyncLocalStorage, AsyncResource } = require('node:async_hooks')
const { v4: uuidv4 } = require('uuid');

const asyncLocalStorage = new AsyncLocalStorage()

// function logWithId (msg) {
//     const id = asyncLocalStorage.getStore()
//     console.log(`${id !== undefined ? id : '-'}:`, msg)
// }

// http.createServer((req, res) => {
//     asyncLocalStorage.run(uuidv4(), () => {
//         logWithId('start')
//         setTimeout(() => {
//             logWithId('finish')
//             res.end();
//         }, Math.random() * 1000)
//     })
// }).listen(3000)

// http.get('http://sunchen:3000')
// http.get('http://sunchen:3000')

const store = { id: 1 };
// Replaces previous store with the given store object
asyncLocalStorage.enterWith(store);
const data = asyncLocalStorage.getStore(); // Returns the store object
console.log(data)
