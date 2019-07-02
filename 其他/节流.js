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


// 立即执行一次。再去定时
function throttle(fn, wait, immediate) {
    let timer
    return function () {
        let context = this;
        let args = arguments
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) {
                fn.apply(context, args)
            }
        } else {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;
                    fn.apply(context, args)
                }, wait)
            }
        }
    }
}