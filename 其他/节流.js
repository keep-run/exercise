/**原理： 指定时间内，函数只会执行一次 */


// 普通版
function throttle(fn, wait) {
    let timer
    return function () {
        let context = this;
        let args = arguments
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args)
            }, wait)
        }
    }
}



 const throttle = (fn, time, immedate) => {
    let timer;
    return function (...args) {
      const _this = this;
      if (!timer) {
        if (immedate) {
          fn.apply(_this, args);
          timer = setTimeout(() => {
            timer = null;
          }, time);
        } else {
          timer = setTimeout(() => {
            timer = null;
            fn.apply(_this, args);
          }, time);
        }
      }
    };
  }
// 立即执行一次。再去定时
function throttle(fn, wait, immediate) {
    let timer
    return function () {
        let context = this;
        let args = arguments
        if(!timer){
            if(immediate){
                fn.apply(context,args)
                timer=setTimeout(()=>{timer=null},wait)
            }else{
             timer=setTimeout(()=>{
                  timer=null
                  fn.apply(context.args)
             },wait)
            }
        }
    }
}
