function mergeSort (arr){
  let len=arr.length;
  if(len<2){
      return arr
  }
  let mid=Math.floor(len/2);
  let left=arr.slice(0,mid);
  let right=arr.slice(mid);
   
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let res=[];
    while(left.length>0&&right.length>0){
        if(left[0]<=right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    if(left.length>0){
        res=res.concat(left)
    }else{
        res=res.concat(right)
    }

    return res
}

console.log(mergeSort([3,9,2,45,21,98,1]))