<template><div><h2 id="_10-机器代码-二进制机器码究竟是如何被cpu执行的" tabindex="-1"><a class="header-anchor" href="#_10-机器代码-二进制机器码究竟是如何被cpu执行的" aria-hidden="true">#</a> 10-机器代码：二进制机器码究竟是如何被CPU执行的</h2>
<p>本文主要介绍了 CPU 如何执行二进制机器码。在此之前，我们需要了解如何将源代码编译成机器码，以及编译后的机器码如何被 CPU 执行。</p>
<p>将源码编译成机器码
以一段 C 代码为例，我们可以看到这段代码只是做了一个简单的加法操作，将 x 和 y 两个数字相加得到 z，并返回结果 z。</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> z <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token keyword">return</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们知道，CPU 并不能直接执行这段 C 代码，而是需要对其进行编译，将其转换为二进制的机器码，然后 CPU 才能按照顺序执行编译后的机器码。</p>
<p>我们可以通过 GCC 编译器将这段 C 代码编译成二进制文件，命令为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>gcc <span class="token operator">-</span><span class="token constant">O0</span> <span class="token operator">-</span>o code_prog code<span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入命令后会在文件夹中生成名为 code_prog 的可执行程序。接下来我们再将编译后的机器码反汇编成汇编代码，以便更好地理解机器码的执行过程。</p>
<h3 id="机器码的执行过程" tabindex="-1"><a class="header-anchor" href="#机器码的执行过程" aria-hidden="true">#</a> 机器码的执行过程</h3>
<p>机器码是由 0 和 1 组成的二进制代码，CPU 只能执行二进制代码。CPU 中有一个叫做指令寄存器（Instruction Register）的寄存器，它存储着当前要执行的指令。CPU 还有一个叫做程序计数器（Program Counter）的寄存器，它存储着下一条要执行的指令的地址。</p>
<p>CPU 执行机器码的过程如下：</p>
<p>CPU 从程序计数器中读取下一条指令的地址。
CPU 根据指令地址从内存中读取指令，并将其存储到指令寄存器中。
CPU 解析指令，并根据指令执行相应的操作。
CPU 将程序计数器加上指令的长度（通常为 1 到 15 个字节），以便读取下一条指令。
以上四个步骤会不断重复，直到程序结束或出现异常情况。</p>
<p>在本文示例中，编译后的机器码如下：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token number">55</span>                      push   rbp
<span class="token number">48</span> <span class="token number">89</span> e5                mov    rbp<span class="token punctuation">,</span>rsp
c7 <span class="token number">45</span> fc <span class="token number">01</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span>    mov    DWORD PTR <span class="token punctuation">[</span>rbp<span class="token operator">-</span><span class="token number">0x4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0x1</span>
c7 <span class="token number">45</span> f8 <span class="token number">02</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span>    mov    DWORD PTR <span class="token punctuation">[</span>rbp<span class="token operator">-</span><span class="token number">0x8</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0x2</span>
<span class="token number">8</span>b <span class="token number">45</span> fc                mov    eax<span class="token punctuation">,</span>DWORD PTR <span class="token punctuation">[</span>rbp<span class="token operator">-</span><span class="token number">0x4</span><span class="token punctuation">]</span>
<span class="token number">8</span>b <span class="token number">55</span> f8                mov    edx<span class="token punctuation">,</span>DWORD PTR <span class="token punctuation">[</span>rbp<span class="token operator">-</span><span class="token number">0x8</span><span class="token punctuation">]</span>
<span class="token number">01</span> d0                   add    eax<span class="token punctuation">,</span>edx
<span class="token number">89</span> c2                   mov    edx<span class="token punctuation">,</span>eax
c9                      leave
c3                      ret

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，机器码中的每条指令都是由若干个字节组成的。例如第一条指令 55，它只有一个字节，表示将当前栈帧的基址（即 RBP）压入栈中。而第四条指令 8b 45 fc 则有三个字节，表示将 RBP - 0x4 处的值存入 EAX 寄存器中。</p>
<p>在本文示例中，CPU 执行机器码时首先执行第一条指令 push rbp，然后执行第二条指令 mov rbp, rsp，将当前栈帧的基址设置为栈顶地址。接下来依次执行第三至第七条指令，最后返回结果。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>本文介绍了 CPU 如何执行二进制机器码。CPU 执行机器码时需要将其从内存中读取到指令寄存器中，并解析指令并根据指令执行相应的操作。在本文示例中，我们可以看到机器码中的每条指令都是由若干个字节组成的。</p>
</div></template>


