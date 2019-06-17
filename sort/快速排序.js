const arr = [1, 6, 8, 9, 26, 5]

function quickSort(arr, leftIndex, rightIndex) {
    let len = arr.length;
    let left = leftIndex === undefined ? 0 : leftIndex
    let right = rightIndex === undefined ? len - 1:rightIndex;
    let base
    if (left < right) {
        base = partition(arr, left, right);
        quickSort(arr, left, base - 1);
        quickSort(arr, base + 1, right)
    }
}

/** 分区 以left位置的值作为基准，经过分区后，比arr[left]小的值放在左侧，
比arr[left]大的值放在右侧，返回arr[left]的新位置
*/
function partition(arr, left, right) {
    let pivot = left;
    let index = left + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1
}

function swap(arr, i, j) {
    if (i === j) { return arr }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}

quickSort(arr)
console.log(arr)