// 删除排序数组中的重复项

function removePulicates(nums: number[]) {
    const size = nums.length;
    let slowp = 0;
    for (let fastp = 0; fastp < size; fastp++) {
        if (nums[fastp] !== nums[slowp]) {
            slowp++;
            nums[slowp] = nums[fastp];
        }
    }
    nums.length = slowp + 1
    return {
        size:slowp + 1,
        nums
    }
}

export const execRP = () => {
    console.log(removePulicates([1,1,2,2,3,3,4]));
    
}