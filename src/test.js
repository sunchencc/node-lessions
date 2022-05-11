/*
 * @Author: sunchen
 * @Date: 2022-04-30 19:45:52
 * @LastEditors: sunchen
 * @LastEditTime: 2022-05-08 10:01:09
 * @Description: www.github.com
 */

// // const people = {
// //   name: 'sunchen',
// //   age: '26',
// //   getName: function() {
// //     setTimeout( function () { console.log(this.name) }, 1000)
// //   },
// //   getAge: () => {
// //     console.log(this.age)
// //   }
// // }

// function foo (num) {
//   console.log('num:', num)
//   this.num++

//   console.log(arguments.callee)
// }

// function foob (num) {
//   console.log('b:', num)
// }

// foo.num = 0

// for (var i = 0; i < 5; i++) {
//   foo(i)
// }

// console.log(foo.num)
// console.log(this.num)
function aa() {
  console.log(this.a)
}
const test = {
  a: 0,
  getA: aa
}

var getA = test.getA

var a = 10
getA()