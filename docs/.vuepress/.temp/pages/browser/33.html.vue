<template><div><h2 id="跨站脚本攻击-xss-为什么cookie中有httponly属性" tabindex="-1"><a class="header-anchor" href="#跨站脚本攻击-xss-为什么cookie中有httponly属性" aria-hidden="true">#</a> 跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性？'</h2>
<h3 id="xss攻击" tabindex="-1"><a class="header-anchor" href="#xss攻击" aria-hidden="true">#</a> XSS攻击</h3>
<p>跨站脚本攻击（XSS）是指黑客往HTML文件中或者DOM中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。当页面被注入了恶意JavaScript脚本时，浏览器无法区分这些脚本是被恶意注入的还是正常的页面内容，所以恶意注入JavaScript脚本也拥有所有的脚本权限。XSS攻击的危害包括窃取Cookie信息、监听用户行为、篡改页面内容等。</p>
<h3 id="httponly属性" tabindex="-1"><a class="header-anchor" href="#httponly属性" aria-hidden="true">#</a> HttpOnly属性</h3>
<p>HttpOnly是一个Cookie属性，它可以防止JavaScript获取和操作Cookie，从而防止XSS攻击。当HttpOnly属性被设置为true时，浏览器会禁止JavaScript访问该Cookie，只允许HTTP请求访问该Cookie。这样就可以防止黑客通过恶意JavaScript脚本窃取用户的Cookie信息。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>XSS攻击是一种利用恶意JavaScript脚本对用户实施攻击的手段，它的危害包括窃取Cookie信息、监听用户行为、篡改页面内容等。为了防止XSS攻击，可以使用HttpOnly属性来限制JavaScript对Cookie的访问和操作。</p>
</div></template>


