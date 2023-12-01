// 快速排序算法
console.log("dd");

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    debugger

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

// 示例用法
let arr = [8, 3]
// [8, 3, 1, 5, 2, 9, 7];
console.log(quickSort(arr), "quicksort");


// log3(9) * logx(8) = log2(8)   6