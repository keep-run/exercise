/**构造函数 */
function Promise(executor) {
  var self = this;
  self.status = 'pending'; //promise当前的状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  //promise状态变为resolve时的回调函数集，可能有多个
 function resolve(value) {
     if(self.status === 'pending') {
         self.status = 'resolved';
         self.data = value;
         for(var i = 0; i < self.onResolvedCallback.length; i++) {
             self.onResolvedCallback[i](value);
         }
     }
 }
 executor(resolve);
};
Promise.prototype.then = function (resolve) {
  this.onResolvedCallback.push(resolve);
};