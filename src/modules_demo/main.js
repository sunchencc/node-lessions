const path =require('node:path')
const fs = require('node:fs')
const vm = require('node:vm')
Module.caches= {}

const { b } = Require('./b.js')
const a = Require('./a.json')
console.log(b)
console.log(a)

function Require(modulePath) {

    // 获取模块绝对路径
    const absolutePath = path.resolve(modulePath)
    // 判断是否已经存在缓存
    console.log(Module.toString())
    if (Module.caches[absolutePath]) {
        console.log('already exist cache..')
        return Module.caches[absolutePath].exports
    }
    // 声明一个 Module
    const module = new Module(absolutePath)
    Module.caches[absolutePath] = module
    // 加载 Module
    loadModule(module)
    // 返回 module.exports
    return module.exports
}

function Module (id) {
    this.id = id
    this.exports = {}
}


function loadModule (module) {
    const extname = path.extname(module.id)

    // 对 js 文件的处理
    function jsParse () {
        // 所有的 module 内容都应该被包含在方法中
        const commonFuncContent = [
            '(function t(exports, module, Require, __dirname, __filename){',
            '})'
        ]
        const moduleContent = fs.readFileSync(module.id, 'utf-8')
        const completeContent = commonFuncContent[0] + moduleContent + commonFuncContent[1]
        // 执行，获得可执行的 module 函数
        const moduleFunc = vm.runInThisContext(completeContent)
        moduleFunc.call(module.exports, module.exports, module, Require, __dirname, __filename)
    }

    // 对 json 文件的处理
    function jsonParse () {
        const moduleContent = fs.readFileSync(module.id, 'utf-8')
        module.exports = JSON.parse(moduleContent)
    }

    const funcMap = {
        '.js': jsParse,
        '.json': jsonParse
    }

    return funcMap[extname]()
}