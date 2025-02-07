nums = [2, 7, 11, 15], target = 9


/**
 * @description: 
 * 两数之和
 */
function twoNums(snums = [], target) {
    const indexMap = new Map();
    for (let index = 0; index < snums.length; index++) {
        const element = array[index];
        const com = target - element;
        if (indexMap.has(com)) {
            return [indexMap.get(com), index];

        } else {
            indexMap.set(element, index);
        }

    }
}

/**
 *  2, 7 ,11,15
 * 
 * 
 * */ 