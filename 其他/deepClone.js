/** 方法一：基于JSON.stringify和JSON.parse。 缺点是：如果复制的对象中是函数，则会丢失。
 * 原因是 stringify会将参数转化成字符串，而参数不能接受函数 */

function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

/** 递归实现 */
function deepClone2(target) {
  if (typeof target === 'object') {
    let res = Array.isArray(target) ? [] : {}
    for (const key in target) {
      res[key] = deepClone2(target[key])
    }
    return res
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};

console.log('---deep clone 2---------', deepClone2(target))

/** 以上代码对于普通的数据，没有问题，但是如果有循环引用，就会造成栈内存溢出了
 * 解决办法：用一个map记录有没有被拷贝过，如果拷贝过就直接返回，否则继续拷贝
 */

function deepClone3(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target,cloneTarget)
    for(const key in target){
      cloneTarget[key]=deepClone3(target[key],map)
    }
    return cloneTarget
  }else{
    return target
  }
}

const target3 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target3.target=target3

console.log('---deep clone 3---------', deepClone3(target3))