/**
 * 冒泡排序： 
 * 时间复杂度： 最坏 O(n^2), 最好 O(n)
 * 空间复杂度:  O(1)
 * 是否稳定： 是
 */

const arr = [1, 4, 2, 9, 6, 3, 7, 23, 34, 87, 34]
function bubbleSort(arr) {
    let temp = 0;
    let flag=true;
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        flag=true
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag=false
            }
        }
        if(flag){
            break   //已经有序。无需再比较。
        }
    }

    return arr;
}

console.log(bubbleSort(arr))