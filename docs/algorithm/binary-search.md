## 二分查找



### [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/)

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。 

**示例 1:**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

**示例 2:**

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

**示例 3:**

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```



```js
// 二分查找插入位置
var searchInsert = function(nums, target) {
    // 定义左右指针
    let left = 0, right = nums.length -1
    // 循环查找
    while (left <= right) {
        // 计算中间位置
        const mid = (left + right ) >> 1
        // 如果中间位置大于目标值，则右指针左移
        if (nums[mid] > target) {
            right = mid - 1
        } 
        // 如果中间位置小于目标值，则左指针右移
        else if (nums[mid] < target) {
            left = mid + 1
        } 
        // 如果中间位置等于目标值，则返回中间位置
        else {
            return mid
        }
    }
    // 如果没有找到目标值，则返回右指针加 1
    return right + 1
};

```



### [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)

**中等**

给你一个满足下述两条属性的 `m x n` 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。
- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 `target` ，如果 `target` 在矩阵中，返回 `true` ；否则，返回 `false` 。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/05/mat.jpg)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

- 解题思路

```js

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 将矩阵展平为一个一维数组
    const arr = matrix.flat()

    // 定义左右指针
    let left = 0, right = arr.length -1

    // 使用二分查找算法查找目标值
    while (left <= right) {
        // 计算中间索引
        const mid = ( left + right ) >> 1

        // 如果中间元素大于目标值，则将右指针移动到中间索引的左边
        if (arr[mid] > target) {
            right = mid - 1
        } 
        // 如果中间元素小于目标值，则将左指针移动到中间索引的右边
        else if (arr[mid] < target) {
            left = mid + 1
        } 
        // 如果中间元素等于目标值，则返回 true
        else {
            return true
        }
    }

    // 如果未找到目标值，则返回 false
    return false
};

```



### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

**中等**

给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。

 

**示例 1：**

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 定义左右指针
    let left = 0, right = nums.length - 1;
    // 定义结果数组
    let res = [-1, -1];

    // 如果第一个元素和最后一个元素等于目标值，则直接返回
    if (nums[left] == target && nums[right] == target) {
        return [left, right]
    }

    // 循环查找
    while (left <= right) {
        // 计算中间位置
        const mid = left + Math.floor((right - left) >> 1)

        // 如果中间元素大于目标值，则右指针右移
        if (nums[mid] > target) {
            right = mid -1
        } 
        // 如果中间元素小于目标值，则左指针左移
        else if (nums[mid] < target) {
            left = mid + 1
        } 
        // 如果中间元素等于目标值
        else {
            // 如果结果数组中第一个元素和第二个元素都为-1，则更新为中间位置
            if (res[0] === -1 && res[1] === -1) {
                res[0] = mid
                res[1] = mid
            }

            // 如果左侧元素等于目标值且小于结果数组中的第一个元素，则更新第一个元素
            if (nums[left] === target && left < res[0]) {
                res[0] = left
            }

            // 更新第二个元素
            res[1] = mid

            // 左指针右移
            left = left + 1

            // 如果左指针大于右指针，则返回结果数组
            if (left > right) {
                return res
            }
        }
    }

    // 返回结果数组
    return res;
};
```

### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

**中等**

给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。

 

**示例 1：**

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

**示例 2：**

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

**示例 3：**

```
输入：nums = [], target = 0
输出：[-1,-1]

```

- 解题思路

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 定义左右指针
    let left = 0, right = nums.length - 1;
    // 定义结果数组
    let res = [-1, -1];

    // 如果第一个元素和最后一个元素等于目标值，则直接返回
    if (nums[left] == target && nums[right] == target) {
        return [left, right]
    }

    // 循环查找
    while (left <= right) {
        // 计算中间位置
        const mid = left + Math.floor((right - left) >> 1)

        // 如果中间元素大于目标值，则右指针右移
        if (nums[mid] > target) {
            right = mid -1
        } 
        // 如果中间元素小于目标值，则左指针左移
        else if (nums[mid] < target) {
            left = mid + 1
        } 
        // 如果中间元素等于目标值
        else {
            // 如果结果数组中第一个元素和第二个元素都为-1，则更新为中间位置
            if (res[0] === -1 && res[1] === -1) {
                res[0] = mid
                res[1] = mid
            }

            // 如果左侧元素等于目标值且小于结果数组中的第一个元素，则更新第一个元素
            if (nums[left] === target && left < res[0]) {
                res[0] = left
            }

            // 更新第二个元素
            res[1] = mid

            // 左指针右移
            left = left + 1

            // 如果左指针大于右指针，则返回结果数组
            if (left > right) {
                return res
            }
        }
    }

    // 返回结果数组
    return res;
};

```



### [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

**中等**

整数数组 `nums` 按升序排列，数组中的值 **互不相同** 。

在传递给函数之前，`nums` 在预先未知的某个下标 `k`（`0 <= k < nums.length`）上进行了 **旋转**，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 **从 0 开始** 计数）。例如， `[0,1,2,4,5,6,7]` 在下标 `3` 处经旋转后可能变为 `[4,5,6,7,0,1,2]` 。

给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，如果 `nums` 中存在这个目标值 `target` ，则返回它的下标，否则返回 `-1` 。

你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。

 

**示例 1：**

```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

**解题思路：**

1. 初始化左右指针，分别指向数组的开头和结尾。
2. 循环，直到左右指针相遇或交叉：
   - 计算中间索引。
   - 如果中间元素等于目标值，则返回中间索引。
   - 如果中间元素小于目标值，则目标值一定在中间索引的右边，更新左指针为中间索引加 1。
   - 如果中间元素大于目标值，则目标值一定在中间索引的左边，更新右指针为中间索引减 1。
3. 如果循环结束，说明目标值不存在，返回 -1。

**时间复杂度：**O(log n)，其中 n 是数组的长度。这是因为每次循环都会将搜索范围缩小一半。

**空间复杂度：**O(1)，因为算法不需要额外的空间。

```js
/**
 * 二分查找算法
 *
 * @param {number[]} nums 排序好的数组
 * @param {number} target 要查找的目标值
 * @return {number} 目标值在数组中的索引，如果不存在则返回 -1
 */
var search = function(nums, target) {
    // 初始化左右指针，分别指向数组的开头和结尾
    let left = 0, right = nums.length - 1

    // 当左右指针相遇或交叉时，说明目标值不存在
    while (left <= right) {
        // 计算中间索引
        const mid = Math.floor((left + right) / 2)

        // 如果中间元素等于目标值，则返回中间索引
        if (nums[mid] === target) {
            return mid
        }

        // 如果中间元素小于目标值，则目标值一定在中间索引的右边
        else if (nums[mid] < target) {
            left = mid + 1
        }

        // 如果中间元素大于目标值，则目标值一定在中间索引的左边
        else {
            right = mid - 1
        }
    }

    // 如果循环结束，说明目标值不存在
    return -1
};

```



### [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

**中等**

已知一个长度为 `n` 的数组，预先按照升序排列，经由 `1` 到 `n` 次 **旋转** 后，得到输入数组。例如，原数组 `nums = [0,1,2,4,5,6,7]` 在变化后可能得到：

- 若旋转 `4` 次，则可以得到 `[4,5,6,7,0,1,2]`
- 若旋转 `7` 次，则可以得到 `[0,1,2,4,5,6,7]`

注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` **旋转一次** 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。

给你一个元素值 **互不相同** 的数组 `nums` ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 **最小元素** 。

你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。

 

**示例 1：**

```
输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
```

**解题思路：**

给定一个旋转排序数组，即一个有序数组经过多次旋转后形成的数组，寻找其中的最小值。

我们可以使用二分查找算法来解决这个问题。二分查找算法的基本思想是：

1. 将数组分成两半。
2. 如果目标值在前半部分，则将后半部分舍弃。
3. 如果目标值在后半部分，则将前半部分舍弃。
4. 重复步骤 1-3，直到找到目标值或数组为空。

**本题的特殊情况：**

旋转排序数组与普通有序数组不同，它可能存在多个递增子序列。因此，我们不能直接使用二分查找算法。

**解决办法：**

我们可以利用旋转排序数组的性质：

* 旋转排序数组一定包含一个递增子序列。
* 最小值一定在这个递增子序列中。

因此，我们可以使用二分查找算法来寻找这个递增子序列。具体步骤如下：

1. 定义左右边界 `l` 和 `r`，分别为 0 和 `nums.length - 1`。
2. 计算中点 `mid`。
3. 如果 `nums[mid] < nums[r]`，说明最小值在中点左边，因此将 `r` 更新为 `mid`。
4. 否则，说明最小值在中点右边，因此将 `l` 更新为 `mid + 1`。
5. 重复步骤 2-4，直到 `l` 和 `r` 相等。
6. 返回 `nums[l]`，即最小值。

**时间复杂度：**O(log n)，其中 n 为数组长度。

**空间复杂度：**O(1)。

```js
/**
 * 寻找旋转排序数组中的最小值
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 定义左右边界
    let l = 0, r = nums.length - 1;
    // 循环直到左右边界相等
    while (l < r) {
        // 计算中点
        const mid = (l + r) >> 1
        // 如果中点值小于右边界值，说明最小值在中点左边
        if (nums[mid] < nums[r]) {
            // 右边界缩小到中点
            r = mid
        } else { // 否则，最小值在中点右边
            // 左边界扩大到中点+1
            l = mid + 1
        }
    }
    // 返回左边界值，即最小值
    return nums[l]
};

```





### [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/)

**困难**

给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的 **中位数** 。

算法的时间复杂度应该为 `O(log (m+n))` 。

 

**示例 1：**

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

**示例 2：**

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

- 解题思路

这段代码的解题思路是用于找到两个已排序数组的中位数。下面是详细的解题思路：

1. 首先，将两个输入的已排序数组 `nums1` 和 `nums2` 合并成一个新数组 `arr`，这样可以将两个数组中的元素整合到一个数组中，方便后续处理。

2. 接着，对新数组 `arr` 进行排序，以确保数组中的元素按照升序排列，这样可以更方便地找到中位数。

3. 然后，判断新数组 `arr` 的长度是否为奇数。如果是奇数，直接返回中间位置的元素作为中位数；如果是偶数，取中间两个元素的平均值作为中位数。

4. 最后，根据判断条件返回对应的中位数值。

```js
// 定义一个函数 findMedianSortedArrays，接受两个参数 nums1 和 nums2
var findMedianSortedArrays = function(nums1, nums2) {
    // 将两个数组合并成一个新数组 arr
    let arr = nums1.concat(nums2);
    // 对新数组 arr 进行排序，以便后续找到中位数
    arr.sort((a, b) => a - b);
    // 判断数组长度是否为奇数，如果是奇数，则直接返回中间值；如果是偶数，则返回中间两个值的平均数作为中位数
    return (arr.length) & 1 === 1 ? arr[Math.floor(arr.length / 2)] : (arr[Math.floor(arr.length / 2 - 1)] + arr[Math.floor(arr.length / 2)]) / 2;
};

```

