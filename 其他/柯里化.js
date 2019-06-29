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

function curry(...args){
    return function(...argsNew){
          if(argsNew.length>0){
              args=args.concat(argsNew)
              return curry.apply(this,args)
          }else{
              return args.reduce((pre,cur)=>{
                  return pre+cur
              })
          }
    }
}

console.log(curry(1)(2)())
