/**  第一种：已知待柯里化的参数个数 */
// function curry(fn,args){
//     let len=fn.length;
//     let firstArgs=args||[]
//     return function(...argsss){
//         let allArgs=firstArgs.concat(argsss)
//       if(allArgs.length===len){
//           return fn.apply(this,allArgs)
//       }else{
//           return curry.call(this,fn,allArgs)
//       }
//     }
// }

// function sumAll(a,b,c){
//     return a+b+c;
// }

// let test=curry(sumAll)

// console.log(test(0)(1)(2))


/** 第二种：未知待柯里化参数个数 ,最后必须在调用一次*/

function curry(...args) {
    return function (...argsNew) {
        if (argsNew.length > 0) {
            args = args.concat(argsNew)
            return curry.apply(this, args)
        } else {
            return args.reduce((pre, cur) => {
                return pre + cur
            })
        }
    }
}

console.log(curry(1)(2)())


/** 分离一个函数参数 */

function curry1(fn) {
    let allArgs = []
    function next(...args) {
        if (args.length > 0) {
            allArgs = [...allArgs, ...args]
            return next
        } else {
            return fn.apply(null, allArgs)
        }
    }
    return next
}
function add(...args) {
    return args.reduce((pre, cur) => pre + cur)
}

const demo=curry1(add)

console.log('------curry1------',demo(1,3)(1,5)(6)())

/* 上边的实现方法是传了空参数的时候，输出结果。怎么去掉这一步呢。
  其实 js在获取值的时候，会隐士依次调用valueOf和toString.当有一个返回的时候，就返回原来的值
*/

function curry2(fn){
  let allArgs=[]
  function next (...args){
    allArgs=[...allArgs,...args]
    return next
  }
  next.toString=function(){
      return fn.apply(null,allArgs)
  }
  return next
}

function add2(...args) {
    return args.reduce((pre, cur) => pre + cur)
}

const demo2=curry2(add2)

console.log('------curry2------',demo2(1,3)(1,10,5)(6))


function curry3(fn){
    let args=[]
    function next(...params){
      args=[...args,...params]
      return next
    }
    next.toString=function(){
      console.log('2222222')
      return fn(...args)
    }
    return next
  }
  
  let add3=curry3(function(...items){
    return items.reduce((prev,cur)=>{return prev+cur},0)
  })
  
//   let res=add(1)(2,3)
  console.log('------curry3------',add3(1,3)(1,10,5)(6))

// 参考文献：https://juejin.im/post/5b561426518825195f499772