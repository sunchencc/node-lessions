/*
 * @Author: sunchen
 * @Date: 2022-05-11 13:15:25
 * @LastEditors: sunchen
 * @LastEditTime: 2022-05-11 13:20:02
 * @Description: www.github.com
 */
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.adone = true;
exports.bdone = b.done;
console.log('a done');