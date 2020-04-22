//  参考文章  https://juejin.im/post/5931561fa22b9d0058c5b87d
/** 描述：对于可能连续执行的事件，要控制频率，固定在事件触发n秒后在执行，如果n秒内又触发了该事件，则重新计时。 */


//  第一版，  问题：不能接受参数，不能保证this的指向一致；
function debounce(fn, wait) {
    let timer = ''
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, wait)
    }
}


//  第二版

function deounce(fn, wait) {
    let timer = '';
    return function () {
        let agrs = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, agrs)
        }, wait)
    }
}



// 第三版： 需求变动，希望进来先执行一次，然后等待停止触发n秒后再次执行；

function debounce(fn, wait, immediate) {
    let timer
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        if (immediate) {
            let callNow = !timer    //如果执行过，timer一定有值，本次就不立即执行
            timer = setTimeout(function () {
                timeout = null
            }, wait)
            if (callNow) {
                fn.apply(context, args)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, wait)
        }
    }
}

// 可以取消的防抖

function debounce(fn,wait,immediate){
    let timer;
    let debounced=function(){
        let context=this;
        let args=arguments;
        clearTimeout(timer);
        if(immediate){
            let callNow=!timer;
            timer=setTimeout(function(){
                    timer=null
            },wait)
            if(callNow){
                fn.apply(context,args)
            }
        }else{
            setTimeout(()=>{
                fn.apply(context,args)
            },wait)
        }
    }
    debounced.cancel=()=>{
        clearTimeout(timer);
        timer=null
    }

    return debounced
}
