/** 方法1：普通递归 */

function method1(arr){
  let res=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res=res.concat(method1(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}

/**基于reduce的递归 
 * reduce((pre,current,currenIndex)=>{},initValue)   //initValue默认为数组的第一个元素
*/
function method2(arr){
 return arr.reduce((prev,cur)=>{
   return prev.concat(Array.isArray(cur)?method2(cur):cur)
 },[])
}

/**基于es6 ... 操作符 */
function method3(arr){
  while(arr.some(item=>Array.isArray(item))){
    arr=[].concat(...arr)
  }
  return arr
}

console.log('method1------:',method1([1,[2,3,[4,5]]]))
console.log('method2------:',method2([1,[2,3,[4,5]]]))
console.log('method3------:',method3([1,[2,3,[4,5]]]))