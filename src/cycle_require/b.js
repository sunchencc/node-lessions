/*
 * @Author: sunchen
 * @Date: 2022-05-11 13:15:30
 * @LastEditors: sunchen
 * @LastEditTime: 2022-05-11 13:15:38
 * @Description: www.github.com
 */
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');