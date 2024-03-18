### 前序遍历

* **场景：**
    * 复制一棵二叉树
    * 计算二叉树的节点数
    * 判断两棵二叉树是否相等
    * 序列化二叉树

### 中序遍历

* **场景：**
    * 输出二叉树中的元素按升序排列
    * 查找二叉树中的第 k 个最小元素
    * 将二叉搜索树转换为双向链表
    * 验证二叉搜索树

### 后序遍历

* **场景：**
    * 释放二叉树中的内存
    * 计算二叉树的高度
    * 检查二叉树是否为完全二叉树
    * 反转二叉树



使用前序求的就是深度，使用后序求的是高度。

- 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）
- 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数或者节点数（取决于高度从0开始还是从1开始）



**二叉树的高度**

* **定义：**二叉树中从根节点到最深叶节点的最长路径上的节点数。
* **计算方法：**从根节点开始，递归地计算左子树和右子树的高度，取较大值加 1。
* **特点：**
    * 表示树的整体大小。
    * 衡量树的平衡性。

**二叉树的深度**

* **定义：**二叉树中从根节点到任意叶节点的最长路径上的节点数。
* **计算方法：**从根节点开始，递归地计算左子树和右子树的深度，取较大值。
* **特点：**
    * 表示树中节点的最大深度。
    * 衡量树的复杂性。

**区别**

| 特征           | 二叉树的高度                 | 二叉树的深度                   |
| -------------- | ---------------------------- | ------------------------------ |
| 定义           | 根节点到最深叶节点的路径长度 | 根节点到任意叶节点的路径长度   |
| 计算方法       | 递归计算左右子树的高度       | 递归计算左右子树的深度         |
| 特点           | 表示树的整体大小和平衡性     | 表示树中节点的最大深度和复杂性 |
| 范围           | 高度 >= 深度                 | 高度 >= 深度                   |
| 对于完全二叉树 | 高度 = 深度                  | 高度 = 深度                    |

**示例**

考虑以下二叉树：

```
        1
       / \
      2   3
     / \   \
    4   5   6
```

* **高度：**3（从根节点到叶节点 6 的路径）
* **深度：**2（从根节点到叶节点 4 或 5 的路径）



### [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

[思路](https://leetcode.cn/problems/binary-tree-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked#)

**简单**

给定一个二叉树的根节点 `root` ，返回 *它的 **中序** 遍历* 。



**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```json
输入：root = [1,null,2,3]
输出：[1,3,2]
```

- 题解

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  const dp = (node) => {
    if (node === null) return node
    dp(node.left)
    res.push(node.val)
    dp(node.right)
  }
  dp(root)
  return res
}
```



### [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

**简单**

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

 

```
输入：root = [3,9,20,null,null,15,7]
输出：3
```



- 题解思路

  采用前序和后序都可以

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
 // 如果根节点为空，则返回 0
    if (root === null) {
        return 0;
    }
    // 递归计算左子树的最大深度
    let leftDepth = maxDepth(root.left);
    // 递归计算右子树的最大深度
    let rightDepth = maxDepth(root.right);
    // 返回左子树和右子树的最大深度加上 1（根节点）
    return Math.max(leftDepth, rightDepth) + 1;
};
```



### [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

**简单**

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

```json
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

- 解题思路
  具体来说，我们首先检查根节点是否为空。如果为空，则返回空。否则，我们递归地翻转左右子树。然后，我们交换左右子树。最后，我们返回翻转后的二叉树的根节点。
- 时间复杂度
  这道题的时间复杂度是 O(n)，其中 n 是二叉树的节点数。这是因为我们必须遍历二叉树中的每个节点。
- 空间复杂度
  这道题的空间复杂度是 O(h)，其中 h 是二叉树的高度。这是因为我们必须使用递归调用栈。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

代码实现
代码实现非常简单。我们首先检查根节点是否为空。如果为空，则返回空。否则，我们递归地翻转左右子树。然后，我们交换左右子树。最后，我们返回翻转后的二叉树的根节点。

/**
 * 翻转一棵二叉树。
 *
 * @param {TreeNode} root 二叉树的根节点。
 * @return {TreeNode} 翻转后的二叉树的根节点。
 */
var invertTree = function (root) {
    // 如果根节点为空，则返回空。
    if (root === null) return null;

    // 递归翻转左右子树。
    const left = invertTree(root.right);
    const right = invertTree(root.left);

    // 交换左右子树。
    root.left = left;
    root.right = right;

    // 返回翻转后的二叉树的根节点。
    return root;
};

```



### [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

**简单**

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

 

**示例 1：**

![img](https://pic.leetcode.cn/1698026966-JDYPDU-image.png)

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

- **解题思路：**

要判断一棵二叉树是否对称，我们可以使用递归的方法。具体步骤如下：

1. **基线情况：**如果树为空或只有一个节点，则它是对称的。
2. **递归情况：**
   - 检查左子树和右子树是否对称。
   - 检查左子树的左子树和右子树的右子树是否对称。
   - 检查左子树的右子树和右子树的左子树是否对称。

- 题解

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
		const dps = (left, right) => {
        if (left === null && right === null) return true
        if (left === null || right === null || left.val != right.val) return false
        return dps(left.left, right.right) && dps(left.right, right.left)
    }
    return dps(root, root)
};
```





### [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)

**简单**

给你一棵二叉树的根节点，返回该树的 **直径** 。

二叉树的 **直径** 是指树中任意两个节点之间最长路径的 **长度** 。这条路径可能经过也可能不经过根节点 `root` 。

两节点之间路径的 **长度** 由它们之间边数表示。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)

```
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
```

- 解题思路

  所谓二叉树的直径，就是左右子树的最大深度之和，那么直接的想法是对每个节点计算左右子树的最大高度，得出每个节点的直径，从而得出最大的那个直径。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // 初始化最大直径为0
    let max = 0
    // 定义深度优先搜索函数
    const dps = (node) => {
        // 如果节点为空，返回0
        if (node === null) return 0
        // 递归计算左子树深度
        const left = dps(node.left)
        // 递归计算右子树深度
        const right = dps(node.right)
        // 更新最大直径
        max = Math.max(left + right, max)
        // 返回当前节点的深度
        return Math.max(left, right) + 1
    }
    // 调用深度优先搜索函数
    dps(root)
    // 返回最大直径
    return max
};

```



### [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

**中等**

给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

- **解题思路：**

1. 初始化结果集 `res` 和队列 `queue`。
2. 如果根节点为空，直接返回结果集。
3. 将根节点加入队列。
4. 循环队列，直到队列为空：
   - 创建一个空数组 `level` 来存储当前层的节点值。
   - 记录当前层的节点数量 `length`。
   - 遍历当前层的每个节点：
     - 取出队首节点 `node`。
     - 将 `node` 的值加入 `level`。
     - 如果 `node` 的左子节点不为空，加入队列。
     - 如果 `node` 的右子节点不为空，加入队列。
   - 将 `level` 加入结果集 `res`。
5. 返回结果集 `res`。



```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 结果集
    let res = [], 
    // 队列
    queue = []
    // 如果根节点为空，直接返回结果集
    if (root === null) return res
    // 将根节点加入队列
    queue = [root]
    // 只要队列不为空，就继续循环
    while (queue.length) {
        // 每一层的节点值
        let level = []
        // 当前层的节点数量
        let length = queue.length
        // 遍历当前层的每个节点
        for (let i = 0; i < length; i++) {
            // 取出队首节点
            let node = queue.shift()
            // 将节点值加入当前层
            level.push(node.val)
            // 如果左子节点不为空，加入队列
            node.left && queue.push(node.left)
            // 如果右子节点不为空，加入队列
            node.right && queue.push(node.right)
        }
        // 将当前层加入结果集
        res.push(level)
    }
    // 返回结果集
    return res
};
```



### [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

**简单**

给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵平衡二叉搜索树。 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```



- **解题思路：**

我们可以使用分治法来解决这个问题。

1. **找到数组的中间元素：**中间元素将成为二叉搜索树的根节点。
2. **递归地将数组的左半部分转换为左子树，右半部分转换为右子树：**这将确保二叉搜索树是高度平衡的。
3. **将左子树和右子树连接到根节点：**这将完成二叉搜索树的构建。



```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 如果数组为空，则返回 null
  if (!nums.length) return null

  // 找到数组的中间索引
  const mid = nums.length >> 1

  // 创建一个新的 TreeNode，值为中间索引处的元素
  const root = new TreeNode(nums[mid])

  // 递归创建左子树和右子树
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))

  // 返回 BST 的根节点
  return root
};

```



### [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

**中等**

给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。

**有效** 二叉搜索树定义如下：

- 节点的左子树只包含小于 当前节点的数。
- 节点的右子树只包含 **大于** 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```
输入：root = [2,1,3]
输出：true
```

- 解题思路
  1. 通过递归遍历二叉树的每个节点，同时维护一个变量 pre 来保存前一个节点的值
  2. 然后判断当前节点的值是否大于前一个节点的值，以此来判断二叉树是否为二叉搜索树。
  3. 左子树所有节点的值都小于当前节点的值，
  4. 右子树所有节点的值都大于当前节点的值。
  5. 最终返回整棵树是否为二叉搜索树的结果。

```js


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let pre = null // 初始化一个变量 pre 用于保存前一个节点的值
    const dp = (node) => { // 定义一个递归函数 dp，用于判断二叉树是否为二叉搜索树
        if (!node) return true // 如果节点为空，返回 true
        const left = dp(node.left) // 递归判断左子树
        if (pre != null && pre >= node.val) return false // 如果前一个节点的值大于等于当前节点的值，返回 false
        pre = node.val // 更新前一个节点的值为当前节点的值
        const right = dp(node.right) // 递归判断右子树
        return left && right // 返回左右子树是否都为二叉搜索树
    }
    return dp(root) // 返回调用 dp 函数处理根节点的结果
};

```



### [230. 二叉搜索树中第K小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

**中等**

给定一个二叉搜索树的根节点 `root` ，和一个整数 `k` ，请你设计一个算法查找其中第 `k` 个最小元素（从 1 开始计数）。 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)

```
输入：root = [3,1,4,null,2], k = 1
输出：1
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)

```
输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3
```

- 解题思路

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = 0, index = 0 // 初始化变量 res 为 0，index 为 0
    const dps = (node, k) => { // 定义一个深度优先搜索函数 dps，接收一个节点 node 和整数 k
        if (node.left) { // 如果当前节点有左子节点
            dps(node.left, k) // 递归调用 dps 函数，传入左子节点和 k
        }
        index++ // 索引加一
        if (index === k) { // 如果索引等于 k
            return res = node.val // 将 res 设置为当前节点的值
        }
        if (node.right) { // 如果当前节点有右子节点
            dps(node.right, k) // 递归调用 dps 函数，传入右子节点和 k
        }
    }
    dps(root, k) // 调用深度优先搜索函数，传入根节点和 k
    return res // 返回结果 res
};

```



### [199. 二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)

**中等**

给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例 1:**

![img](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)

```
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```



```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return []  // 如果根节点为空，返回一个空数组
  let res = [], queue = [root]  // 定义结果数组 res 和辅助队列 queue，初始将根节点放入队列中
  while (queue.length) {  // 循环直到队列为空
    const length = queue.length  // 获取当前队列的长度
    for (let i = 0; i < length; i++) {  // 遍历当前层的节点
      let node = queue.shift()  // 取出队首节点
      if (i === length - 1) {  // 如果当前节点是当前层的最后一个节点
        res.push(node.val)  // 将当前节点的值存入结果数组 res 中
      }
      node.left && queue.push(node.left)  // 如果当前节点有左子节点，则将左子节点加入队列中
      node.right && queue.push(node.right)  // 如果当前节点有右子节点，则将右子节点加入队列中
    }
  }
  return res  // 返回存储了右视图节点值的结果数组 res
}

```



### [114. 二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

**中等**

给你二叉树的根结点 `root` ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 `TreeNode` ，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null` 。
- 展开后的单链表应该与二叉树 [**先序遍历**](https://baike.baidu.com/item/先序遍历/6442839?fr=aladdin) 顺序相同。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg)

```
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

**示例 2：**

```
输入：root = []
输出：[]
```

- 解题思路 [**参考**](https://labuladong.online/algo/slug.html?slug=flatten-binary-tree-to-linked-list) 

**给 `flatten` 函数输入一个节点 `root`，那么以 `root` 为根的二叉树就会被拉平为一条链表**。

如何利用这个定义来完成算法？你想想怎么把以 `root` 为根的二叉树拉平为一条链表？

很简单，以下流程：

1、将 `root` 的左子树和右子树拉平。

2、将 `root` 的右子树接到左子树下方，然后将整个左子树作为右子树。



![img](https://labuladong.github.io/pictures/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%97/2.jpeg)



至于如何把 `root` 的左右子树拉平，不用你操心，`flatten` 函数的定义就是这样，交给他做就行了。

把上面的逻辑翻译成代码，即可解决本题。



```js
var flatten = function(root) {
    // base case
    if (root == null) return;
    // 先递归拉平左右子树
    flatten(root.left);
    flatten(root.right);

    /****后序遍历位置****/
    // 1、左右子树已经被拉平成一条链表
    var left = root.left;
    var right = root.right;

    // 2、将左子树作为右子树
    root.left = null;
    root.right = left;

    // 3、将原先的右子树接到当前右子树的末端
    var p = root;
    while (p.right != null) {
        p = p.right;
    }
    p.right = right;
};
```





### [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

**中等**

给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。

**示例 1:**

![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

**示例 2:**

```
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

- 解题思路 [参考](https://labuladong.online/algo/slug.html?slug=construct-binary-tree-from-preorder-and-inorder-traversal)

**构造二叉树，第一件事一定是找根节点，然后想办法构造左右子树**。

二叉树的前序和中序遍历结果的特点如下：



![img](https://labuladong.github.io/pictures/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%972/1.jpeg)



前序遍历结果第一个就是根节点的值，然后再根据中序遍历结果确定左右子树的节点。



```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   // 如果前序遍历数组为空，则返回空
    if (!preorder.length) return null
    
    // 从前序遍历数组中获取根节点的值
    const rootVal = preorder.shift()
    
    // 在中序遍历数组中查找根节点值的索引
    const rootIndex = inorder.indexOf(rootVal)
    
    // 创建一个根节点，值为根节点的值
    const root = new TreeNode(rootVal)
    
    // 递归构建左子树，使用前序遍历和中序遍历数组的左部分
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
    
    // 递归构建右子树，使用前序遍历和中序遍历数组的右部分
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex+1))
    
    // 返回二叉树的根节点
    return root
}
```



### [437. 路径总和 III](https://leetcode.cn/problems/path-sum-iii/)

[思路](https://leetcode.cn/problems/path-sum-iii/description/?envType=study-plan-v2&envId=top-100-liked#)

中等

给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。

**路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)

```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```



- 解题思路
  1. **递归遍历**：从树的根节点开始，递归地遍历每个节点。
     
  2. **路径总和计算**：对于每个节点，以该节点为起点，向下遍历所有可能的路径，计算路径和是否等于给定的目标值。

  3. **辅助函数**：可以编写一个辅助函数，用于计算以当前节点为起点的路径总和个数。在该函数中，可以使用递归来遍历以当前节点为根的子树，并不断累加路径和。

  4. **前缀和**：在遍历过程中，可以使用一个哈希表来记录从根节点到当前节点的路径和，以及每个路径和出现的次数。

  5. **路径和判断**：在更新路径和的同时，查看在哈希表中是否存在之前路径和加上或减去目标值的结果，若存在则说明存在符合条件的路径。

  6. **统计路径总数**：最终统计符合条件的路径总数，并返回结果。


```js
var pathSum = function(root, sum) {
    // 使用哈希表来记录路径和及其出现次数
    const prefixSumCount = { 0: 1 };
    let count = 0;

    // 定义递归函数，计算符合条件的路径总数
    const dfs = (node, currSum) => {
        if (!node) return;

        // 更新当前路径和
        currSum += node.val;
        
        // 更新符合条件的路径总数
        count += prefixSumCount[currSum - sum] || 0;
        
        // 更新当前路径和在哈希表中的出现次数
        prefixSumCount[currSum] = (prefixSumCount[currSum] || 0) + 1;

        // 递归遍历左子树
        dfs(node.left, currSum);
        
        // 递归遍历右子树
        dfs(node.right, currSum);

        // 回溯，将当前路径和在哈希表中的出现次数减一
        prefixSumCount[currSum] -= 1;
    };

    // 调用递归函数开始计算路径总数
    dfs(root, 0);

    // 返回符合条件的路径总数
    return count;
};

```





### [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

**中等**

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```



- 解题思路

```js

// 寻找最近公共祖先的函数
var lowestCommonAncestor = function(root, p, q) {
    // 边界条件：如果当前节点为 null 或者等于 p 或 q，则直接返回当前节点
    if (root === null || root === p || root === q) {
        return root;
    }

    // 递归查找左子树和右子树
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);

    // 根据左右子树的情况判断最近公共祖先
    if (left === null) return right // p 和 q 同在右子树，最近公共祖先为 right
    if (right === null) return left  // p 和 q 同在左子树，最近公共祖先为 left
    return root  // p 和 q 分别位于当前节点的左右子树，当前节点即为最近公共祖先
};
```



### [124. 二叉树中的最大路径和](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)

[思路](https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-100-liked#)

**困难**

二叉树中的 **路径** 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 **至多出现一次** 。该路径 **至少包含一个** 节点，且不一定经过根节点。

**路径和** 是路径中各节点值的总和。

给你一个二叉树的根节点 `root` ，返回其 **最大路径和** 。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg)

```
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg)

```
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

```js

var maxPathSum = function(root) { // 定义函数 maxPathSum，接受根节点作为参数
    let maxNum = Number.MIN_SAFE_INTEGER; // 初始化最大路径和为 JavaScript 中表示的最小安全整数
    const dfs = (root) => { // 定义深度优先搜索函数 dfs，接受一个节点作为参数
        if (!root) return 0; // 如果节点为空，返回0
        const left = dfs(root.left); // 递归计算左子树的最大路径和
        const right = dfs(root.right); // 递归计算右子树的最大路径和
        const interNum = Math.max(right + left + root.val); // 计算经过当前节点的路径和
        maxNum = Math.max(maxNum, interNum); // 更新最大路径和
        const outNumer = root.val + Math.max(0, left, right); // 计算以当前节点为根节点向上延伸的路径和
        return outNumer < 0 ? 0 : outNumer; // 返回向上延伸的路径和，确保不为负数
    }
    dfs(root); // 调用 dfs 函数开始遍历二叉树
    return maxNum; // 返回整棵二叉树中的最大路径和
};


```

