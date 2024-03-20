import{_ as p,r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-B-42ZPY7.js";const i={},r=n("h2",{id:"二分查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二分查找","aria-hidden":"true"},"#"),s(" 二分查找")],-1),u={id:"_35-搜索插入位置",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#_35-搜索插入位置","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.cn/problems/search-insert-position/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p><p>请必须使用时间复杂度为 <code>O(log n)</code> 的算法。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [1,3,5,6], target = 5
输出: 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [1,3,5,6], target = 2
输出: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [1,3,5,6], target = 7
输出: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 二分查找插入位置</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义左右指针</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span>
    <span class="token comment">// 循环查找</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中间位置</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right <span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
        <span class="token comment">// 如果中间位置大于目标值，则右指针左移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间位置小于目标值，则左指针右移</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间位置等于目标值，则返回中间位置</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果没有找到目标值，则返回右指针加 1</span>
    <span class="token keyword">return</span> right <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={id:"_74-搜索二维矩阵",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_74-搜索二维矩阵","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.cn/problems/search-a-2d-matrix/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p><strong>中等</strong></p><p>给你一个满足下述两条属性的 <code>m x n</code> 整数矩阵：</p><ul><li>每行中的整数从左到右按非严格递增顺序排列。</li><li>每行的第一个整数大于前一行的最后一个整数。</li></ul><p>给你一个整数 <code>target</code> ，如果 <code>target</code> 在矩阵中，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解题思路</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将矩阵展平为一个一维数组</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 定义左右指针</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// 使用二分查找算法查找目标值</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中间索引</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span> left <span class="token operator">+</span> right <span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>

        <span class="token comment">// 如果中间元素大于目标值，则将右指针移动到中间索引的左边</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素小于目标值，则将左指针移动到中间索引的右边</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素等于目标值，则返回 true</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果未找到目标值，则返回 false</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),f={id:"_34-在排序数组中查找元素的第一个和最后一个位置",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#_34-在排序数组中查找元素的第一个和最后一个位置","aria-hidden":"true"},"#",-1),w={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><strong>中等</strong></p><p>给你一个按照非递减顺序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。请你找出给定目标值在数组中的开始位置和结束位置。</p><p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p><p>你必须设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchRange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义左右指针</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 定义结果数组</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果第一个元素和最后一个元素等于目标值，则直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 循环查找</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中间位置</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment">// 如果中间元素大于目标值，则右指针右移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素小于目标值，则左指针左移</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素等于目标值</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果结果数组中第一个元素和第二个元素都为-1，则更新为中间位置</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid
                res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid
            <span class="token punctuation">}</span>

            <span class="token comment">// 如果左侧元素等于目标值且小于结果数组中的第一个元素，则更新第一个元素</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> target <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> left
            <span class="token punctuation">}</span>

            <span class="token comment">// 更新第二个元素</span>
            res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid

            <span class="token comment">// 左指针右移</span>
            left <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">1</span>

            <span class="token comment">// 如果左指针大于右指针，则返回结果数组</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回结果数组</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x={id:"_34-在排序数组中查找元素的第一个和最后一个位置-1",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#_34-在排序数组中查找元素的第一个和最后一个位置-1","aria-hidden":"true"},"#",-1),M={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",target:"_blank",rel:"noopener noreferrer"},O=t(`<p><strong>中等</strong></p><p>给你一个按照非递减顺序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。请你找出给定目标值在数组中的开始位置和结束位置。</p><p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p><p>你必须设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [], target = 0
输出：[-1,-1]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解题思路</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchRange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义左右指针</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 定义结果数组</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果第一个元素和最后一个元素等于目标值，则直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 循环查找</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中间位置</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment">// 如果中间元素大于目标值，则右指针右移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素小于目标值，则左指针左移</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// 如果中间元素等于目标值</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果结果数组中第一个元素和第二个元素都为-1，则更新为中间位置</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid
                res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid
            <span class="token punctuation">}</span>

            <span class="token comment">// 如果左侧元素等于目标值且小于结果数组中的第一个元素，则更新第一个元素</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> target <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> left
            <span class="token punctuation">}</span>

            <span class="token comment">// 更新第二个元素</span>
            res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mid

            <span class="token comment">// 左指针右移</span>
            left <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">1</span>

            <span class="token comment">// 如果左指针大于右指针，则返回结果数组</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回结果数组</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),N={id:"_33-搜索旋转排序数组",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#_33-搜索旋转排序数组","aria-hidden":"true"},"#",-1),V={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array/",target:"_blank",rel:"noopener noreferrer"},B=t(`<p><strong>中等</strong></p><p>整数数组 <code>nums</code> 按升序排列，数组中的值 <strong>互不相同</strong> 。</p><p>在传递给函数之前，<code>nums</code> 在预先未知的某个下标 <code>k</code>（<code>0 &lt;= k &lt; nums.length</code>）上进行了 <strong>旋转</strong>，使数组变为 <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code>（下标 <strong>从 0 开始</strong> 计数）。例如， <code>[0,1,2,4,5,6,7]</code> 在下标 <code>3</code> 处经旋转后可能变为 <code>[4,5,6,7,0,1,2]</code> 。</p><p>给你 <strong>旋转后</strong> 的数组 <code>nums</code> 和一个整数 <code>target</code> ，如果 <code>nums</code> 中存在这个目标值 <code>target</code> ，则返回它的下标，否则返回 <code>-1</code> 。</p><p>你必须设计一个时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路：</strong></p><ol><li>初始化左右指针，分别指向数组的开头和结尾。</li><li>循环，直到左右指针相遇或交叉： <ul><li>计算中间索引。</li><li>如果中间元素等于目标值，则返回中间索引。</li><li>如果中间元素小于目标值，则目标值一定在中间索引的右边，更新左指针为中间索引加 1。</li><li>如果中间元素大于目标值，则目标值一定在中间索引的左边，更新右指针为中间索引减 1。</li></ul></li><li>如果循环结束，说明目标值不存在，返回 -1。</li></ol><p>**时间复杂度：**O(log n)，其中 n 是数组的长度。这是因为每次循环都会将搜索范围缩小一半。</p><p>**空间复杂度：**O(1)，因为算法不需要额外的空间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二分查找算法
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span> 排序好的数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span> 要查找的目标值
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 目标值在数组中的索引，如果不存在则返回 -1
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化左右指针，分别指向数组的开头和结尾</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token comment">// 当左右指针相遇或交叉时，说明目标值不存在</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中间索引</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

        <span class="token comment">// 如果中间元素等于目标值，则返回中间索引</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid
        <span class="token punctuation">}</span>

        <span class="token comment">// 如果中间元素小于目标值，则目标值一定在中间索引的右边</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 如果中间元素大于目标值，则目标值一定在中间索引的左边</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果循环结束，说明目标值不存在</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),E={id:"_153-寻找旋转排序数组中的最小值",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#_153-寻找旋转排序数组中的最小值","aria-hidden":"true"},"#",-1),A={href:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/",target:"_blank",rel:"noopener noreferrer"},L=t(`<p><strong>中等</strong></p><p>已知一个长度为 <code>n</code> 的数组，预先按照升序排列，经由 <code>1</code> 到 <code>n</code> 次 <strong>旋转</strong> 后，得到输入数组。例如，原数组 <code>nums = [0,1,2,4,5,6,7]</code> 在变化后可能得到：</p><ul><li>若旋转 <code>4</code> 次，则可以得到 <code>[4,5,6,7,0,1,2]</code></li><li>若旋转 <code>7</code> 次，则可以得到 <code>[0,1,2,4,5,6,7]</code></li></ul><p>注意，数组 <code>[a[0], a[1], a[2], ..., a[n-1]]</code> <strong>旋转一次</strong> 的结果为数组 <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code> 。</p><p>给你一个元素值 <strong>互不相同</strong> 的数组 <code>nums</code> ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 <strong>最小元素</strong> 。</p><p>你必须设计一个时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路：</strong></p><p>给定一个旋转排序数组，即一个有序数组经过多次旋转后形成的数组，寻找其中的最小值。</p><p>我们可以使用二分查找算法来解决这个问题。二分查找算法的基本思想是：</p><ol><li>将数组分成两半。</li><li>如果目标值在前半部分，则将后半部分舍弃。</li><li>如果目标值在后半部分，则将前半部分舍弃。</li><li>重复步骤 1-3，直到找到目标值或数组为空。</li></ol><p><strong>本题的特殊情况：</strong></p><p>旋转排序数组与普通有序数组不同，它可能存在多个递增子序列。因此，我们不能直接使用二分查找算法。</p><p><strong>解决办法：</strong></p><p>我们可以利用旋转排序数组的性质：</p><ul><li>旋转排序数组一定包含一个递增子序列。</li><li>最小值一定在这个递增子序列中。</li></ul><p>因此，我们可以使用二分查找算法来寻找这个递增子序列。具体步骤如下：</p><ol><li>定义左右边界 <code>l</code> 和 <code>r</code>，分别为 0 和 <code>nums.length - 1</code>。</li><li>计算中点 <code>mid</code>。</li><li>如果 <code>nums[mid] &lt; nums[r]</code>，说明最小值在中点左边，因此将 <code>r</code> 更新为 <code>mid</code>。</li><li>否则，说明最小值在中点右边，因此将 <code>l</code> 更新为 <code>mid + 1</code>。</li><li>重复步骤 2-4，直到 <code>l</code> 和 <code>r</code> 相等。</li><li>返回 <code>nums[l]</code>，即最小值。</li></ol><p>**时间复杂度：**O(log n)，其中 n 为数组长度。</p><p>**空间复杂度：**O(1)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 寻找旋转排序数组中的最小值
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMin</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义左右边界</span>
    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 循环直到左右边界相等</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算中点</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
        <span class="token comment">// 如果中点值小于右边界值，说明最小值在中点左边</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 右边界缩小到中点</span>
            r <span class="token operator">=</span> mid
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 否则，最小值在中点右边</span>
            <span class="token comment">// 左边界扩大到中点+1</span>
            l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回左边界值，即最小值</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),R={id:"_4-寻找两个正序数组的中位数",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#_4-寻找两个正序数组的中位数","aria-hidden":"true"},"#",-1),T={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"},q=t(`<p><strong>困难</strong></p><p>给定两个大小分别为 <code>m</code> 和 <code>n</code> 的正序（从小到大）数组 <code>nums1</code> 和 <code>nums2</code>。请你找出并返回这两个正序数组的 <strong>中位数</strong> 。</p><p>算法的时间复杂度应该为 <code>O(log (m+n))</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解题思路</li></ul><p>这段代码的解题思路是用于找到两个已排序数组的中位数。下面是详细的解题思路：</p><ol><li><p>首先，将两个输入的已排序数组 <code>nums1</code> 和 <code>nums2</code> 合并成一个新数组 <code>arr</code>，这样可以将两个数组中的元素整合到一个数组中，方便后续处理。</p></li><li><p>接着，对新数组 <code>arr</code> 进行排序，以确保数组中的元素按照升序排列，这样可以更方便地找到中位数。</p></li><li><p>然后，判断新数组 <code>arr</code> 的长度是否为奇数。如果是奇数，直接返回中间位置的元素作为中位数；如果是偶数，取中间两个元素的平均值作为中位数。</p></li><li><p>最后，根据判断条件返回对应的中位数值。</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个函数 findMedianSortedArrays，接受两个参数 nums1 和 nums2</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将两个数组合并成一个新数组 arr</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> nums1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 对新数组 arr 进行排序，以便后续找到中位数</span>
    arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断数组长度是否为奇数，如果是奇数，则直接返回中间值；如果是偶数，则返回中间两个值的平均数作为中位数</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function z(D,F){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("h3",u,[d,s(),n("a",k,[s("35. 搜索插入位置"),e(a)])]),m,n("h3",v,[b,s(),n("a",g,[s("74. 搜索二维矩阵"),e(a)])]),h,n("h3",f,[y,s(),n("a",w,[s("34. 在排序数组中查找元素的第一个和最后一个位置"),e(a)])]),_,n("h3",x,[j,s(),n("a",M,[s("34. 在排序数组中查找元素的第一个和最后一个位置"),e(a)])]),O,n("h3",N,[S,s(),n("a",V,[s("33. 搜索旋转排序数组"),e(a)])]),B,n("h3",E,[I,s(),n("a",A,[s("153. 寻找旋转排序数组中的最小值"),e(a)])]),L,n("h3",R,[C,s(),n("a",T,[s("4. 寻找两个正序数组的中位数"),e(a)])]),q])}const H=p(i,[["render",z],["__file","binary-search.html.vue"]]);export{H as default};
