<template><div><h3 id="_160-相交链表" tabindex="-1"><a class="header-anchor" href="#_160-相交链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/" target="_blank" rel="noopener noreferrer">160. 相交链表<ExternalLinkIcon/></a></h3>
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

	如果用两个指针 p1 和 p2 分别在两条链表上前进，我们可以让 p1 遍历完链表 A 之后开始遍历链表 B，让 p2 遍历完链表 B 之后, 开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起。
	
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">206. 反转链表<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_234-回文链表" tabindex="-1"><a class="header-anchor" href="#_234-回文链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/palindrome-linked-list/" target="_blank" rel="noopener noreferrer">234. 回文链表<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_141-环形链表" tabindex="-1"><a class="header-anchor" href="#_141-环形链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer">141. 环形链表<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_142-环形链表-ii" tabindex="-1"><a class="header-anchor" href="#_142-环形链表-ii" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer">142. 环形链表 II<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#_21-合并两个有序链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/merge-two-sorted-lists/" target="_blank" rel="noopener noreferrer">21. 合并两个有序链表<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-两数相加" tabindex="-1"><a class="header-anchor" href="#_2-两数相加" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/add-two-numbers/" target="_blank" rel="noopener noreferrer">2. 两数相加<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-删除链表的倒数第-n-个结点" tabindex="-1"><a class="header-anchor" href="#_19-删除链表的倒数第-n-个结点" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">19. 删除链表的倒数第 N 个结点<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_24-两两交换链表中的节点" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/swap-nodes-in-pairs/" target="_blank" rel="noopener noreferrer">24. 两两交换链表中的节点<ExternalLinkIcon/></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-k-个一组翻转链表" tabindex="-1"><a class="header-anchor" href="#_25-k-个一组翻转链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/reverse-nodes-in-k-group/" target="_blank" rel="noopener noreferrer">25. K 个一组翻转链表<ExternalLinkIcon/></a></h3>
<p><strong>困难</strong></p>
<p>给你链表的头节点 <code v-pre>head</code> ，每 <code v-pre>k</code> 个节点一组进行翻转，请你返回修改后的链表。</p>
<p><code v-pre>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 <code v-pre>k</code> 的整数倍，那么请将最后剩余的节点保持原有顺序。</p>
<p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k = <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<p>输入 <code v-pre>head</code>，<code v-pre>reverseKGroup</code> 函数能够把以 <code v-pre>head</code> 为头的这条链表进行翻转。</p>
<p>我们要充分利用这个递归函数的定义，把原问题分解成规模更小的子问题进行求解。</p>
<p><strong>1、先反转以 <code v-pre>head</code> 开头的 <code v-pre>k</code> 个元素</strong>。</p>
<p><img src="https://labuladong.github.io/pictures/kgroup/3.jpg" alt="img"></p>
<p><strong>2、将第 <code v-pre>k + 1</code> 个元素作为 <code v-pre>head</code> 递归调用 <code v-pre>reverseKGroup</code> 函数</strong>。</p>
<p><img src="https://labuladong.github.io/pictures/kgroup/4.jpg" alt="img"></p>
<p><strong>3、将上述两个过程的结果连接起来</strong>。</p>
<p><img src="https://labuladong.github.io/pictures/kgroup/5.jpg" alt="img"></p>
<p>最后函数递归完成之后就是这个结果，完全符合题意：</p>
<p><img src="https://labuladong.github.io/pictures/kgroup/7.jpg" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 区间 [a, b) 包含 k 个待反转元素</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> head<span class="token punctuation">,</span> b <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不足 k 个，不需要反转，base case</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 反转前 k 个元素</span>
    <span class="token keyword">let</span> newHead <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 递归反转后续链表并连接起来</span>
    a<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/* 反转区间 [a, b) 的元素，注意是左闭右开 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> a<span class="token punctuation">,</span> nxt <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token comment">// while 终止的条件改一下就行了</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nxt <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> nxt<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回反转后的头结点</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_138-随机链表的复制" tabindex="-1"><a class="header-anchor" href="#_138-随机链表的复制" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/copy-list-with-random-pointer/" target="_blank" rel="noopener noreferrer">138. 随机链表的复制<ExternalLinkIcon/></a></h3>
<p><strong>中等</strong></p>
<p>给你一个长度为 <code v-pre>n</code> 的链表，每个节点包含一个额外增加的随机指针 <code v-pre>random</code> ，该指针可以指向链表中的任何节点或空节点。</p>
<p>构造这个链表的 <strong><a href="https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin" target="_blank" rel="noopener noreferrer">深拷贝<ExternalLinkIcon/></a></strong>。 深拷贝应该正好由 <code v-pre>n</code> 个 <strong>全新</strong> 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 <code v-pre>next</code> 指针和 <code v-pre>random</code> 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。<strong>复制链表中的指针都不应指向原链表中的节点</strong> 。</p>
<p>例如，如果原链表中有 <code v-pre>X</code> 和 <code v-pre>Y</code> 两个节点，其中 <code v-pre>X.random --&gt; Y</code> 。那么在复制链表中对应的两个节点 <code v-pre>x</code> 和 <code v-pre>y</code> ，同样有 <code v-pre>x.random --&gt; y</code> 。</p>
<p>返回复制链表的头节点。</p>
<p>用一个由 <code v-pre>n</code> 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 <code v-pre>[val, random_index]</code> 表示：</p>
<ul>
<li><code v-pre>val</code>：一个表示 <code v-pre>Node.val</code> 的整数。</li>
<li><code v-pre>random_index</code>：随机指针指向的节点索引（范围从 <code v-pre>0</code> 到 <code v-pre>n-1</code>）；如果不指向任何节点，则为 <code v-pre>null</code> 。</li>
</ul>
<p>你的代码 <strong>只</strong> 接受原链表的头节点 <code v-pre>head</code> 作为传入参数。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png" alt="img"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：head = <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token null keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token null keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<p>这个问题其实就是实现一个深copy,  可以利用递归遍历，来实现深 copy</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, next, random) <span class="token punctuation">{</span>
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>


<span class="token comment">// 定义一个名为 `copyRandomList` 的函数，该函数将复制一个具有随机指针的链表。</span>
<span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cacheNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查 `head` 是否为 `null`。如果是，则返回 `head`，因为没有链表可复制。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    <span class="token comment">// 检查 `cacheNode` Map 是否包含 `head` 节点。如果它不包含，则表示该节点尚未复制。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheNode<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 `head` 节点添加到 `cacheNode` Map 中，并将其值设置为一个对象，其中包含 `head` 节点的 `val`（值）。</span>
        cacheNode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">val</span><span class="token operator">:</span> head<span class="token punctuation">.</span>val
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 使用 `Object.assign()` 将 `head` 节点的 `next` 和 `random` 指针复制到 `cacheNode` Map 中存储的节点中。</span>
        <span class="token comment">// `copyRandomList(head.next, cacheNode)` 递归地复制 `head.next` 节点，`copyRandomList(head.random, cacheNode)` 递归地复制 `head.random` 节点。</span>
        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>cacheNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> cacheNode<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">random</span><span class="token operator">:</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>random<span class="token punctuation">,</span> cacheNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回 `cacheNode` Map 中存储的 `head` 节点。这是复制的链表的头节点。</span>
    <span class="token keyword">return</span> cacheNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_148-排序链表" tabindex="-1"><a class="header-anchor" href="#_148-排序链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/sort-list/" target="_blank" rel="noopener noreferrer">148. 排序链表<ExternalLinkIcon/></a></h3>
<p><strong>中等</strong></p>
<p>给你链表的头结点 <code v-pre>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p>
<p><strong>示例 1：</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" alt="img"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：head = [4,2,1,3]
输出：[1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路</li>
</ul>
<ol>
<li>用数组接受每一项的值，然后进行排序</li>
<li>根据排序后的数组，进行生成链表</li>
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
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>

<span class="token comment">// 定义一个函数，参数为链表的头节点</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个空数组用于存储链表节点的值</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// 创建一个指针指向链表的头节点</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> head
    <span class="token comment">// 遍历链表，将节点的值存入数组</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 对数组进行排序</span>
    arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
    <span class="token comment">// 创建一个虚拟头节点</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建一个指针指向虚拟头节点</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> dummy
    <span class="token comment">// 遍历排序后的数组，将值构建成新的链表</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回排序后的链表的头节点</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_23-合并-k-个升序链表" tabindex="-1"><a class="header-anchor" href="#_23-合并-k-个升序链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/merge-k-sorted-lists/" target="_blank" rel="noopener noreferrer">23. 合并 K 个升序链表<ExternalLinkIcon/></a></h3>
<p><strong>困难</strong></p>
<p>给你一个链表数组，每个链表都已经按升序排列。</p>
<p>请你将所有链表合并到一个升序链表中，返回合并后的链表。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解题思路
<ol>
<li>先用数组接受每一个链表的值</li>
<li>再给数组进行排序</li>
<li>构建链表，返回最终构建好的链表即可</li>
</ol>
</li>
</ul>
<p>**空间复杂度：**O(N)，其中 N 是所有链表中节点的总数。arr 数组存储所有链表中的值。</p>
<p>**时间复杂度：**O(N log N)，其中 N 是所有链表中节点的总数。对 arr 数组进行排序需要 O(N log N) 的时间</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 合并 K 个升序链表
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">lists</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeKLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">lists</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个空数组来存储所有链表中的值</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历链表数组中的每个链表</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lists<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 只要当前链表不为空，就执行循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将当前链表节点的值推入数组</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 将当前链表指针移到下一个节点</span>
            lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 对数组中的值进行升序排序</span>
    arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建一个虚拟头节点，并将其值设置为数组中的第一个值</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将指针 p 设置为虚拟头节点</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

    <span class="token comment">// 遍历数组中的每个值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在 p 节点后创建一个新节点，并将其值设置为数组中的当前值</span>
        p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将 p 指针移动到新创建的节点</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回虚拟头节点的下一个节点，它指向合并后的链表</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://mp.weixin.qq.com/s/AWsL7G89RtaHyHjRPNJENA?scene=25#wechat_redirect" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
</div></template>


