

/**func.apply(thisArg, [argsArray])
 * thisArg:func运行时的this值，设置为null或者undefined的时候，会自动替换为全局对象；
 * argsArray：数组或者类数组对象，作为参数传给func函数。如果设置为null或者undefined则表示不需要传输任何参数；
 */


// 第一版： 

const foo = {
    value: 2
}

function bar() {
    return this.value
}

Function.prototype.bind1 = function (thisArg) {
    let self = this;  //这里的this就是一个函数
    return function () {
        return self.apply(thisArg)
    }
}

let test = bar.bind1(foo)

console.log(test())


// 第二版： 支持传递参数

Function.prototype.bind2 = function (...args) {
    let self = this;  //这里的this就是一个函数
    let context = args.shift();
    return function (...args1) {
        return self.apply(context, [...args, ...args1])
    }
}

function bar2(name, age) {
    console.log("value:", this.value)
    console.log("name:", name)
    console.log("age:", age)
}

let test2 = bar2.bind2(foo, 'wang')
test2('23')

// 第三版： 当绑定后的函数，作为构造函数时，之前的绑定的this将失效

Function.prototype.bind3 = function (...args) {
    let self = this;
    let context = args.shift();
    let fBound = function (...arg1) {
        return self.apply(this instanceof fBound ? this : context, [...args, ...arg1])
    }
    fBound.prototype = this.prototype  // 实例可以继承原函数原型中的值
    return fBound
}
function bar3(name, age) {
    console.log("第三版 value:", this.value)
    console.log("第三版 name:", name)
    console.log("第三版 age:", age)
}

let test3 = bar3.bind3(foo, 'wang')
new test3('23')