/* 
  手写数组去重 扁平化函数 排序
  Array.sort
  Array.flat
  set
*/

/* 
  Array.flat
  1. 用于将嵌套的数组扁平化 该方法返回一个新数组对原数据没有影响
  2. 不传参数时，默认扁平化一层，可以传入一个证书，表示想要扁平化的层数
  3. 传入<=0 的整数，不扁平化
  4. Infinity 作为参数，无论多少层嵌套，都会转化为一维数组
  5. 如果原数组有空位，Array.prototype.flat 会跳过空位
*/

/* 方法1 使用reduce方法 */
import { toJson } from "./JSONString.js"

const arr = [1, [2, 3], [4, 5, [6]]]

function flat1(arr = [], depth = 1) {
  return Array.isArray(arr) ?
    arr.reduce((prev, cur) => {
      console.log(depth, cur);
      if (depth > 0) {
        return [...prev, ...flat1(cur, depth - 1)]
      } else {
        return [...prev, cur]
      }
    }, []) : [arr]
}

// toJson(flat1(arr, 0))

/*
  方法2 栈
*/
function flattenDeep(arr) {
  const result = []
  // 将数组元素拷⻉至栈，直接赋值会改变原数组
  const stack = [...arr]
  // 如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      // 如果是数组再次入栈，并且展开了一层
      stack.push(...val)
    } else {
      // 如果不是数组，就用头插法插入到结果数组中
      result.unshift(val)
    }
  }
  return result
}

// toJson(flattenDeep(arr))

Array.prototype.flat = function (depth = 1) {
  let result = [];

  this.forEach((element, index) => {
    if (Array.isArray(element) && depth > 0) {
      result = result.concat(element.flat(depth - 1));
    } else {
      result[index] = element;
    }
  });

  return result;
};
console.log(arr.flat(1));