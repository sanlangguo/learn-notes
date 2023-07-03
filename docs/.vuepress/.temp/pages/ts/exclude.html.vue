<template><div><h4 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h4>
<p>在 TypeScript 中，联合类型是由多个类型组成的类型。有时候我们需要从联合类型中排除某些特定的类型，这时可以使用 TS Exclude 工具来实现。</p>
<p>下面是一个示例：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyUnion</span> <span class="token operator">=</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'b'</span> <span class="token operator">|</span> <span class="token string">'c'</span> <span class="token operator">|</span> <span class="token string">'d'</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">ExcludedUnion</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>MyUnion<span class="token punctuation">,</span> <span class="token string">'b'</span> <span class="token operator">|</span> <span class="token string">'d'</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// ExcludedUnion 的类型为 'a' | 'c'</span>
<span class="token keyword">const</span> <span class="token constant">D</span><span class="token operator">:</span>ExcludedUnion <span class="token operator">=</span> <span class="token string">'a'</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">D</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们定义了一个名为 MyUnion 的联合类型，它包含了 'a'、'b'、'c' 和 'd' 这四个字符串字面量类型。然后，我们使用 TS.Exclude 工具将 'b' 和 'd' 从 MyUnion 联合类型中排除出去，得到一个新的类型 ExcludedUnion。</p>
<p>通过使用 TS.Exclude 工具，我们成功地排除了 'b' 和 'd' 这两个特定的类型，并生成了一个新的联合类型 ExcludedUnion，其中只包含了 'a' 和 'c' 两个字符串字面量类型。</p>
<p>需要注意的是，TS.Exclude 工具只能应用于联合类型。如果尝试将其应用于非联合类型，TypeScript 编译器将会报错。</p>
</div></template>


