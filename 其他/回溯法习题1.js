/** 给定一个数组，找出其中n项之和等于目标值得组合 */

function getCombines(arr,n,target){
    let res=[];
    let len=arr.length;
    function backtrack(start,curr){
        if(curr.length===n){
            if(curr.reduce((prev,cur)=>prev+cur)===target){
                res.push(curr.slice())
            }
            return 
        }

        for(let i=start;i<len;i++){
            curr.push(arr[i]);
            backtrack(i+1,curr);
            curr.pop();
        }
    }
     backtrack(0,[])
     return res;
}

console.log(getCombines([1,2,3,4,5,6,7,8],2,7))