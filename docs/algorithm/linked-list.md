### [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

![160_statement](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 解题思路
 * 这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应：

	如果用两个指针 p1 和 p2 分别在两条链表上前进，并不能同时走到公共节点，也就无法得到相交节点 c1。

	解决这个问题的关键是，通过某些方式，让 p1 和 p2 能够同时到达相交节点 c1。

	如果用两个指针 p1 和 p2 分别在两条链表上前进，我们可以让 p1 遍历完链表 A 之后开始遍历链表 B，让 p2 遍历完链表 B 之后, 开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起。
	
	如果这样进行拼接，就可以让 p1 和 p2 同时进入公共部分，也就是同时到达相交节点 c1：
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB
    while (pA != pB) {
      pA = pA === null ? headB : pA.next
      pB = pB === null ? headA : pB.next
    }
  	return pA
};
```



### [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![rev1ex1](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```json
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

- 解题思路：迭代法

假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。

在遍历链表时，将当前节点的 next  指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。

```js
var reverseList = function(head) {
  let pre = null, cur = head
  while (cur) {
    const item = cur.next
    cur.next = pre
    pre = cur
    cur = item
  }
  return pre
}
```



### [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/)

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表 (`回文序列是向前和向后读都相同的序列`)，如果是，返回 `true` ；否则，返回 `false` 。

**示例 1：**

![pal1linked-list](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

```json
输入：head = [1,2,2,1]
输出：true
```

- 解题思路

1. 第一步先遍历用数组存储每一项的值
2. 然后利用双指针，进行判断两边是否相等

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    if (arr[i] != arr[j]) return false
  }
  return true
};
```



### [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。

**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

*如果链表中存在环* ，则返回 `true` 。 否则，返回 `false` 。

**示例 1：**

![circularlinkedlist](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```json
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

- 解题思路

  要使用双指针技巧中的快慢指针，每当慢指针 `slow` 前进一步，快指针 `fast` 就前进两步。

  如果 `fast` 最终遇到空指针，说明链表中没有环；如果 `fast` 最终和 `slow` 相遇，那肯定是 `fast` 超过了 `slow` 一圈，说明链表中含有环。

```js
var hasCycle = function(head) {
    let slow = fast = head
    while ( fast != null && fast.next != null) {
      slow = slow.next
      fast = fast.next.next
      if (slow == fast) return true
    }
  	return false
};
```



### [142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```json
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

- 解题思路

  直观地来说就是当快慢指针相遇时，让其中任一个指针指向头节点，然后让它俩以相同速度前进，再次相遇时所在的节点位置就是环开始的位置。

  我们假设快慢指针相遇时，慢指针 `slow` 走了 `k` 步，那么快指针 `fast` 一定走了 `2k` 步：

  ![img](https://labuladong.github.io/pictures/%E5%8F%8C%E6%8C%87%E9%92%88/3.jpeg)

`fast` 一定比 `slow` 多走了 `k` 步，这多走的 `k` 步其实就是 `fast` 指针在环里转圈圈，所以 `k` 的值就是环长度的「整数倍」。

假设相遇点距环的起点的距离为 `m`，那么结合上图的 `slow` 指针，环的起点距头结点 `head` 的距离为 `k - m`，也就是说如果从 `head` 前进 `k - m` 步就能到达环起点。

巧的是，如果从相遇点继续前进 `k - m` 步，也恰好到达环起点：

![img](https://labuladong.github.io/pictures/%E5%8F%8C%E6%8C%87%E9%92%88/2.jpeg)

所以，只要我们把快慢指针中的任一个重新指向 `head`，然后两个指针同速前进，`k - m` 步后一定会相遇，相遇之处就是环的起点了。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var detectCycle = function(head) {
  let fast = slow = head
  while (fast != null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      while (slow != fast) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }
  return null
}
```



### [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)

**简单** 

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)



```json
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

- 解题思路

  ![img](https://labuladong.github.io/pictures/%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7/1.gif)

  这个算法的逻辑类似于「拉拉链」，`l1, l2` 类似于拉链两侧的锯齿，指针 `p` 就好像拉链的拉索，将两个有序链表合并。

  **代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 `dummy` 节点**，它相当于是个占位符，可以避免处理空指针的情况，降低代码的复杂性。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(null)
  const p = dummy
  while (list1 && list2) {
    if (list1.val < list2.val) {
      p.next = list1
      list1 = list1.next
    } else {
      p.next = list2
      list2 = list2.next
    }
    p = p.next
  }
  p.next = list1 == null ? list2 : list1
  return dummy.next
}
```



### [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/)

**中等**

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg)

```json
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

- 解题思路

逆序存储很友好了，直接遍历链表就是从个位开始的，符合我们计算加法的习惯顺序。如果是正序存储，那倒要费点脑筋了，可能需要 [翻转链表](https://labuladong.github.io/article/fname.html?fname=递归反转链表的一部分) 或者使用栈来辅助。

这道题主要考察 [链表双指针技巧](https://labuladong.github.io/article/fname.html?fname=链表技巧) 和加法运算过程中对进位的处理。注意这个 `carry` 变量的处理，在我们手动模拟加法过程的时候会经常用到。

**代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 `dummy` 节点**。你可以试试，如果不使用 `dummy` 虚拟节点，代码会稍显复杂，而有了 `dummy` 节点这个占位符，可以避免处理初始的空指针情况，降低代码的复杂性。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 在两条链表上的指针
    let p1 = l1, p2 = l2;
    // 虚拟头结点（构建新链表时的常用技巧）
    let dummy = new ListNode(-1);
    // 指针 p 负责构建新链表
    let p = dummy;
    // 记录进位
    let carry = 0;
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    while (p1 !== null || p2 !== null || carry > 0) {
        // 先加上上次的进位
        let val = carry;
        if (p1 !== null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            val += p2.val;
            p2 = p2.next;
        }
        // 处理进位情况
        carry = Math.floor(val / 10);
        val = val % 10;
        // 构建新节点
        p.next = new ListNode(val);
        p = p.next;
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.next;
};
```



### [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

**中等**

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```json
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

- 解题思路

要删除倒数第 `n` 个节点，就得获得倒数第 `n + 1` 个节点的引用。

获取单链表的倒数第 `k` 个节点，就是想考察 [双指针技巧](https://labuladong.github.io/article/fname.html?fname=链表技巧) 中快慢指针的运用，一般都会要求你**只遍历一次链表**，就算出倒数第 `k` 个节点。

第一步，我们先让一个指针 `p1` 指向链表的头节点 `head`，然后走 `k` 步：



![img](https://labuladong.github.io/pictures/%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7/1.jpeg)



第二步，用一个指针 `p2` 指向链表头节点 `head`：



![img](https://labuladong.github.io/pictures/%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7/2.jpeg)



第三步，让 `p1` 和 `p2` 同时向前走，`p1` 走到链表末尾的空指针时走了 `n - k` 步，`p2` 也走了 `n - k` 步，也就是链表的倒数第 `k` 个节点：



![img](https://labuladong.github.io/pictures/%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7/3.jpeg)



这样，只遍历了一次链表，就获得了倒数第 `k` 个节点 `p2`。

解法中在链表头部接一个虚拟节点 `dummy` 是为了避免删除倒数第一个元素时出现空指针异常，在头部加入 `dummy` 节点并不影响尾部倒数第 `k` 个元素是什么。



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    // 将快指针向前移动 n 步
    for (var i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }

    // 同时移动快指针和慢指针
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 删除慢指针指向的节点
    slow.next = slow.next.next;

    return dummy.next;
};
```



### [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)

**中等**

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

- 解题思路

非递归

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  let p = dummy;
  while (p.next != null && p.next.next != null) {
    let node1 = p.next
    let node2 = p.next.next
    item.next = node2
    node1.next = node2.next
    node2.next = node1
    p = node1
  }
  return dummy.next
};
```



### [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

**困难**

给你链表的头节点 `head` ，每 `k` 个节点一组进行翻转，请你返回修改后的链表。

`k` 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 `k` 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

```json
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

- 解题思路

输入 `head`，`reverseKGroup` 函数能够把以 `head` 为头的这条链表进行翻转。

我们要充分利用这个递归函数的定义，把原问题分解成规模更小的子问题进行求解。

**1、先反转以 `head` 开头的 `k` 个元素**。



![img](https://labuladong.github.io/pictures/kgroup/3.jpg)



**2、将第 `k + 1` 个元素作为 `head` 递归调用 `reverseKGroup` 函数**。



![img](https://labuladong.github.io/pictures/kgroup/4.jpg)



**3、将上述两个过程的结果连接起来**。



![img](https://labuladong.github.io/pictures/kgroup/5.jpg)



最后函数递归完成之后就是这个结果，完全符合题意：



![img](https://labuladong.github.io/pictures/kgroup/7.jpg)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return null;
    // 区间 [a, b) 包含 k 个待反转元素
    let a = head, b = head;
    for (let i = 0; i < k; i++) {
        // 不足 k 个，不需要反转，base case
        if (!b) return head;
        b = b.next;
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b);
    // 递归反转后续链表并连接起来
    a.next = reverseKGroup(b, k);
    return newHead;
};

/* 反转区间 [a, b) 的元素，注意是左闭右开 */
var reverse = function (a, b) {
    let pre = null, cur = a, nxt = a;
    // while 终止的条件改一下就行了
    while (cur !== b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    // 返回反转后的头结点
    return pre;
};

```



### [138. 随机链表的复制](https://leetcode.cn/problems/copy-list-with-random-pointer/)

**中等**

给你一个长度为 `n` 的链表，每个节点包含一个额外增加的随机指针 `random` ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 **[深拷贝](https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin)**。 深拷贝应该正好由 `n` 个 **全新** 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 `next` 指针和 `random` 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。**复制链表中的指针都不应指向原链表中的节点** 。

例如，如果原链表中有 `X` 和 `Y` 两个节点，其中 `X.random --> Y` 。那么在复制链表中对应的两个节点 `x` 和 `y` ，同样有 `x.random --> y` 。

返回复制链表的头节点。

用一个由 `n` 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 `[val, random_index]` 表示：

- `val`：一个表示 `Node.val` 的整数。
- `random_index`：随机指针指向的节点索引（范围从 `0` 到 `n-1`）；如果不指向任何节点，则为 `null` 。

你的代码 **只** 接受原链表的头节点 `head` 作为传入参数。

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png)

```json
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```



- 解题思路

这个问题其实就是实现一个深copy,  可以利用递归遍历，来实现深 copy

```js

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


// 定义一个名为 `copyRandomList` 的函数，该函数将复制一个具有随机指针的链表。
var copyRandomList = function(head, cacheNode = new Map) {
    // 检查 `head` 是否为 `null`。如果是，则返回 `head`，因为没有链表可复制。
    if (head === null) {
        return head
    }
    // 检查 `cacheNode` Map 是否包含 `head` 节点。如果它不包含，则表示该节点尚未复制。
    if (!cacheNode.has(head)) {
        // 将 `head` 节点添加到 `cacheNode` Map 中，并将其值设置为一个对象，其中包含 `head` 节点的 `val`（值）。
        cacheNode.set(head, {
            val: head.val
        })
        // 使用 `Object.assign()` 将 `head` 节点的 `next` 和 `random` 指针复制到 `cacheNode` Map 中存储的节点中。
        // `copyRandomList(head.next, cacheNode)` 递归地复制 `head.next` 节点，`copyRandomList(head.random, cacheNode)` 递归地复制 `head.random` 节点。
        Object.assign(cacheNode.get(head), {
            next: copyRandomList(head.next, cacheNode),
            random: copyRandomList(head.random, cacheNode)
        })
    }
    // 返回 `cacheNode` Map 中存储的 `head` 节点。这是复制的链表的头节点。
    return cacheNode.get(head)
};

```



### [148. 排序链表](https://leetcode.cn/problems/sort-list/)

**中等**

给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)

```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```





- 解题思路

1. 用数组接受每一项的值，然后进行排序
2. 根据排序后的数组，进行生成链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 定义一个函数，参数为链表的头节点
var sortList = function(head) {
    // 创建一个空数组用于存储链表节点的值
    let arr = []
    // 创建一个指针指向链表的头节点
    let p = head
    // 遍历链表，将节点的值存入数组
    while (p) {
        arr.push(p.val)
        p = p.next
    }
    // 对数组进行排序
    arr.sort((a, b) => a - b)
    // 创建一个虚拟头节点
    let dummy = new ListNode(arr[0])
    // 创建一个指针指向虚拟头节点
    let cur = dummy
    // 遍历排序后的数组，将值构建成新的链表
    for (let i = 0; i < arr.length; i++) {
       cur.next = new ListNode(arr[i]);
       cur = cur.next;
    }
    // 返回排序后的链表的头节点
    return dummy.next
};

```



### [23. 合并 K 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)

**困难**

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。



**示例 1：**

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```



- 解题思路
  1. 先用数组接受每一个链表的值
  2. 再给数组进行排序
  3. 构建链表，返回最终构建好的链表即可

**空间复杂度：**O(N)，其中 N 是所有链表中节点的总数。arr 数组存储所有链表中的值。

**时间复杂度：**O(N log N)，其中 N 是所有链表中节点的总数。对 arr 数组进行排序需要 O(N log N) 的时间

```js
/**
 * 合并 K 个升序链表
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 创建一个空数组来存储所有链表中的值
    let arr = [];

    // 遍历链表数组中的每个链表
    for (let i = 0; i < lists.length; i++) {
        // 只要当前链表不为空，就执行循环
        while (lists[i]) {
            // 将当前链表节点的值推入数组
            arr.push(lists[i].val);

            // 将当前链表指针移到下一个节点
            lists[i] = lists[i].next;
        }
    }

    // 对数组中的值进行升序排序
    arr.sort((a, b) => a - b);

    // 创建一个虚拟头节点，并将其值设置为数组中的第一个值
    let dummy = new ListNode(arr[0]);

    // 将指针 p 设置为虚拟头节点
    let p = dummy;

    // 遍历数组中的每个值
    for (let i = 0; i < arr.length; i++) {
        // 在 p 节点后创建一个新节点，并将其值设置为数组中的当前值
        p.next = new ListNode(arr[i]);

        // 将 p 指针移动到新创建的节点
        p = p.next;
    }

    // 返回虚拟头节点的下一个节点，它指向合并后的链表
    return dummy.next;
};

```









[参考链接](https://mp.weixin.qq.com/s/AWsL7G89RtaHyHjRPNJENA?scene=25#wechat_redirect)
