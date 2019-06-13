/**
 * 插入排序： 对于一个有序数组，从后向前遍历。把目标值插入正确位置。 
 * 时间复杂度： 最坏 O(n^2), 最好 O(n^2)
 * 空间复杂度:  O(1)
 * 是否稳定： 是
 */

const arr = [1, 4, 2, 9, 6, 3, 7, 23, 34, 87, 34]
function insertSort(arr) {
    let target,preIndex
    for (let i = 1, len = arr.length; i < len; i++) {
        target=arr[i];
        preIndex=i-1
        while(preIndex>=0&&arr[preIndex]>target){
          arr[preIndex+1]=arr[preIndex];
          preIndex--;
        }
        arr[preIndex+1]=target
    }
    return arr;
}

console.log(insertSort(arr))