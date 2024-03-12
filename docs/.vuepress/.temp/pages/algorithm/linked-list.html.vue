<template><div><p><a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/" target="_blank" rel="noopener noreferrer">160. 相交链表<ExternalLinkIcon/></a></p>
<p>你两个单链表的头节点 <code v-pre>headA</code> 和 <code v-pre>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 <code v-pre>null</code> 。</p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png" alt="160_statement"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 * 解题思路
 * 这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应：

	如果用两个指针 p1 和 p2 分别在两条链表上前进，并不能同时走到公共节点，也就无法得到相交节点 c1。

	解决这个问题的关键是，通过某些方式，让 p1 和 p2 能够同时到达相交节点 c1。

	如果用两个指针 p1 和 p2 分别在两条链表上前进，我们可以让 p1 遍历完链表 A 之后开始遍历链表 B，让 p2 遍历	完链表 B 之后开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起。
	
	如果这样进行拼接，就可以让 p1 和 p2 同时进入公共部分，也就是同时到达相交节点 c1：
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pA <span class="token operator">=</span> headA<span class="token punctuation">,</span> pB <span class="token operator">=</span> headB
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pA <span class="token operator">!=</span> pB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pA <span class="token operator">=</span> pA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> pA<span class="token punctuation">.</span>next
      pB <span class="token operator">=</span> pB <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> pB<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  	<span class="token keyword">return</span> pA
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">206. 反转链表<ExternalLinkIcon/></a></p>
<p>给你单链表的头节点 <code v-pre>head</code> ，请你反转链表，并返回反转后的链表。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="rev1ex1"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路：迭代法</li>
</ul>
<p>假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。</p>
<p>在遍历链表时，将当前节点的 next  指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
    pre <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> item
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/palindrome-linked-list/" target="_blank" rel="noopener noreferrer">234. 回文链表<ExternalLinkIcon/></a></p>
<p>给你一个单链表的头节点 <code v-pre>head</code> ，请你判断该链表是否为回文链表 (<code v-pre>回文序列是向前和向后读都相同的序列</code>)，如果是，返回 <code v-pre>true</code> ；否则，返回 <code v-pre>false</code> 。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" alt="pal1linked-list"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<ol>
<li>第一步先遍历用数组存储每一项的值</li>
<li>然后利用双指针，进行判断两边是否相等</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> j <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer">141. 环形链表<ExternalLinkIcon/></a></p>
<p>给你一个链表的头节点 <code v-pre>head</code> ，判断链表中是否有环。</p>
<p>如果链表中有某个节点，可以通过连续跟踪 <code v-pre>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code v-pre>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。</p>
<p><strong>注意：<code v-pre>pos</code> 不作为参数进行传递</strong> 。仅仅是为了标识链表的实际情况。</p>
<p><em>如果链表中存在环</em> ，则返回 <code v-pre>true</code> 。 否则，返回 <code v-pre>false</code> 。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" alt="circularlinkedlist"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">-4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos = <span class="token number">1</span>
输出：<span class="token boolean">true</span>
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>解题思路</p>
<p>要使用双指针技巧中的快慢指针，每当慢指针 <code v-pre>slow</code> 前进一步，快指针 <code v-pre>fast</code> 就前进两步。</p>
<p>如果 <code v-pre>fast</code> 最终遇到空指针，说明链表中没有环；如果 <code v-pre>fast</code> 最终和 <code v-pre>slow</code> 相遇，那肯定是 <code v-pre>fast</code> 超过了 <code v-pre>slow</code> 一圈，说明链表中含有环。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> fast <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span> fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
      <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer">142. 环形链表 II<ExternalLinkIcon/></a></p>
<p>给定一个链表的头节点  <code v-pre>head</code> ，返回链表开始入环的第一个节点。 <em>如果链表无环，则返回 <code v-pre>null</code>。</em></p>
<p>如果链表中有某个节点，可以通过连续跟踪 <code v-pre>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code v-pre>pos</code> 来表示链表尾连接到链表中的位置（<strong>索引从 0 开始</strong>）。如果 <code v-pre>pos</code> 是 <code v-pre>-1</code>，则在该链表中没有环。<strong>注意：<code v-pre>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p>
<p><strong>不允许修改</strong> 链表。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">-4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos = <span class="token number">1</span>
输出：返回索引为 <span class="token number">1</span> 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>解题思路</p>
<p>直观地来说就是当快慢指针相遇时，让其中任一个指针指向头节点，然后让它俩以相同速度前进，再次相遇时所在的节点位置就是环开始的位置。</p>
<p>我们假设快慢指针相遇时，慢指针 <code v-pre>slow</code> 走了 <code v-pre>k</code> 步，那么快指针 <code v-pre>fast</code> 一定走了 <code v-pre>2k</code> 步：</p>
<p><img src="https://labuladong.github.io/pictures/双指针/3.jpeg" alt="img"></p>
</li>
</ul>
<p><code v-pre>fast</code> 一定比 <code v-pre>slow</code> 多走了 <code v-pre>k</code> 步，这多走的 <code v-pre>k</code> 步其实就是 <code v-pre>fast</code> 指针在环里转圈圈，所以 <code v-pre>k</code> 的值就是环长度的「整数倍」。</p>
<p>假设相遇点距环的起点的距离为 <code v-pre>m</code>，那么结合上图的 <code v-pre>slow</code> 指针，环的起点距头结点 <code v-pre>head</code> 的距离为 <code v-pre>k - m</code>，也就是说如果从 <code v-pre>head</code> 前进 <code v-pre>k - m</code> 步就能到达环起点。</p>
<p>巧的是，如果从相遇点继续前进 <code v-pre>k - m</code> 步，也恰好到达环起点：</p>
<p><img src="https://labuladong.github.io/pictures/双指针/2.jpeg" alt="img"></p>
<p>所以，只要我们把快慢指针中的任一个重新指向 <code v-pre>head</code>，然后两个指针同速前进，<code v-pre>k - m</code> 步后一定会相遇，相遇之处就是环的起点了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> slow <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fast <span class="token operator">=</span> head
      <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!=</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> fast
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/merge-two-sorted-lists/" target="_blank" rel="noopener noreferrer">21. 合并两个有序链表<ExternalLinkIcon/></a></p>
<p><strong>简单</strong></p>
<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：l1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>解题思路</p>
<p><img src="https://labuladong.github.io/pictures/链表技巧/1.gif" alt="img"></p>
<p>这个算法的逻辑类似于「拉拉链」，<code v-pre>l1, l2</code> 类似于拉链两侧的锯齿，指针 <code v-pre>p</code> 就好像拉链的拉索，将两个有序链表合并。</p>
<p><strong>代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 <code v-pre>dummy</code> 节点</strong>，它相当于是个占位符，可以避免处理空指针的情况，降低代码的复杂性。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> dummy
  <span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">&amp;&amp;</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      p<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
      list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      p<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
      list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  p<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/add-two-numbers/" target="_blank" rel="noopener noreferrer">2. 两数相加<ExternalLinkIcon/></a></p>
<p><strong>中等</strong></p>
<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字。</p>
<p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p>
<p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：l1 = <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 = <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
解释：<span class="token number">342</span> + <span class="token number">465</span> = <span class="token number">807</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<p>逆序存储很友好了，直接遍历链表就是从个位开始的，符合我们计算加法的习惯顺序。如果是正序存储，那倒要费点脑筋了，可能需要 <a href="https://labuladong.github.io/article/fname.html?fname=%E9%80%92%E5%BD%92%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86" target="_blank" rel="noopener noreferrer">翻转链表<ExternalLinkIcon/></a> 或者使用栈来辅助。</p>
<p>这道题主要考察 <a href="https://labuladong.github.io/article/fname.html?fname=%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7" target="_blank" rel="noopener noreferrer">链表双指针技巧<ExternalLinkIcon/></a> 和加法运算过程中对进位的处理。注意这个 <code v-pre>carry</code> 变量的处理，在我们手动模拟加法过程的时候会经常用到。</p>
<p><strong>代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 <code v-pre>dummy</code> 节点</strong>。你可以试试，如果不使用 <code v-pre>dummy</code> 虚拟节点，代码会稍显复杂，而有了 <code v-pre>dummy</code> 节点这个占位符，可以避免处理初始的空指针情况，降低代码的复杂性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在两条链表上的指针</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> l1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> l2<span class="token punctuation">;</span>
    <span class="token comment">// 虚拟头结点（构建新链表时的常用技巧）</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 指针 p 负责构建新链表</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token comment">// 记录进位</span>
    <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 开始执行加法，两条链表走完且没有进位时才能结束循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> p2 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> carry <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先加上上次的进位</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> carry<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">+=</span> p1<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">+=</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 处理进位情况</span>
        carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>val <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        val <span class="token operator">=</span> val <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">// 构建新节点</span>
        p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回结果链表的头结点（去除虚拟头结点）</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">19. 删除链表的倒数第 N 个结点<ExternalLinkIcon/></a></p>
<p><strong>中等</strong></p>
<p>给你一个链表，删除链表的倒数第 <code v-pre>n</code> 个结点，并且返回链表的头结点。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n = <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<p>要删除倒数第 <code v-pre>n</code> 个节点，就得获得倒数第 <code v-pre>n + 1</code> 个节点的引用。</p>
<p>获取单链表的倒数第 <code v-pre>k</code> 个节点，就是想考察 <a href="https://labuladong.github.io/article/fname.html?fname=%E9%93%BE%E8%A1%A8%E6%8A%80%E5%B7%A7" target="_blank" rel="noopener noreferrer">双指针技巧<ExternalLinkIcon/></a> 中快慢指针的运用，一般都会要求你<strong>只遍历一次链表</strong>，就算出倒数第 <code v-pre>k</code> 个节点。</p>
<p>第一步，我们先让一个指针 <code v-pre>p1</code> 指向链表的头节点 <code v-pre>head</code>，然后走 <code v-pre>k</code> 步：</p>
<p><img src="https://labuladong.github.io/pictures/链表技巧/1.jpeg" alt="img"></p>
<p>第二步，用一个指针 <code v-pre>p2</code> 指向链表头节点 <code v-pre>head</code>：</p>
<p><img src="https://labuladong.github.io/pictures/链表技巧/2.jpeg" alt="img"></p>
<p>第三步，让 <code v-pre>p1</code> 和 <code v-pre>p2</code> 同时向前走，<code v-pre>p1</code> 走到链表末尾的空指针时走了 <code v-pre>n - k</code> 步，<code v-pre>p2</code> 也走了 <code v-pre>n - k</code> 步，也就是链表的倒数第 <code v-pre>k</code> 个节点：</p>
<p><img src="https://labuladong.github.io/pictures/链表技巧/3.jpeg" alt="img"></p>
<p>这样，只遍历了一次链表，就获得了倒数第 <code v-pre>k</code> 个节点 <code v-pre>p2</code>。</p>
<p>解法中在链表头部接一个虚拟节点 <code v-pre>dummy</code> 是为了避免删除倒数第一个元素时出现空指针异常，在头部加入 <code v-pre>dummy</code> 节点并不影响尾部倒数第 <code v-pre>k</code> 个元素是什么。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

    <span class="token comment">// 将快指针向前移动 n 步</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 同时移动快指针和慢指针</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除慢指针指向的节点</span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode.cn/problems/swap-nodes-in-pairs/" target="_blank" rel="noopener noreferrer">24. 两两交换链表中的节点<ExternalLinkIcon/></a></p>
<p><strong>中等</strong></p>
<p>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" alt="img"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：head = [1,2,3,4]
输出：[2,1,4,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<p>非递归</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> node1 <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    <span class="token keyword">let</span> node2 <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    item<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
    node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next
    node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node1
    p <span class="token operator">=</span> node1
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://mp.weixin.qq.com/s/AWsL7G89RtaHyHjRPNJENA?scene=25#wechat_redirect" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
</div></template>


