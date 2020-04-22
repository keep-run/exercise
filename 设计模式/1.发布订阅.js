// 发布订阅模式最简易的实现。

const publish = {}  //发布者
publish.clientList = []   //订阅的事件列表

// 将订阅事件加入事件列表
publish.listen = function (fn) {
  this.clientList.push(fn)
}

//移除订阅事件
publish.remove = function (_fn) {
  // 不传，取消所有
  let clientList
  if (!_fn) {
    this.clientList = []
  } else {
    this.clientList= this.clientList.filter(fn =>{return fn !== _fn})
  }
}

// 触发事件
publish.trigger = function (...args) {
  this.clientList.forEach(event => event.apply(publish, args))
}

const consl = function (args) {
  console.log('args:', args)
}
const consl1 = function (args) {
  console.log('args-again:', args)
}
publish.listen(consl)
publish.listen(consl1)
publish.remove(consl)

publish.trigger('111')

