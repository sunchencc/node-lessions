/*
 * @Author: sunchen
 * @Date: 2022-03-27 19:41:26
 * @LastEditors: sunchen
 * @LastEditTime: 2022-04-08 20:00:33
 * @Description: www.github.com
 */
const dns = require('dns')

dns.lookup('www.baidu.com', function(err, address, family) {  
    console.log(address);  
});  

