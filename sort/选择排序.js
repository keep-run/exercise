/**
 * 选择排序： 
 * 时间复杂度： 最坏 O(n^2), 最好 O(n^2)
 * 空间复杂度:  O(1)
 * 是否稳定： 否
 */

const arr = [1, 4, 2, 9, 6, 3, 7, 23, 34, 87, 34]
function selectSort(arr) {
    let minIndex, temp
    for (let i = 0, len = arr.length; i < len; i++) {
        minIndex = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectSort(arr))