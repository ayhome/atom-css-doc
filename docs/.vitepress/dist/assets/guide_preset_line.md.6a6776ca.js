import{h as s,o as a,c as n,Q as l}from"./chunks/framework.51926b02.js";const p=l(`<h1 id="文字超出隐藏" tabindex="-1">文字超出隐藏 <a class="header-anchor" href="#文字超出隐藏" aria-label="Permalink to &quot;文字超出隐藏&quot;">​</a></h1><p>a-line-[number]</p><h2 id="文字超出省略" tabindex="-1">文字超出省略 <a class="header-anchor" href="#文字超出省略" aria-label="Permalink to &quot;文字超出省略&quot;">​</a></h2><p>一行 line-1</p><div class="a-line-1 a-w-100">文字文字文字文字文字文字文字文字</div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;line-1&quot;</span><span style="color:#E1E4E8;">&gt;文字文字文字文字文字文字文字文字&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.line-1</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-line-clamp</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">word-break</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">break-all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ellipsis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-webkit-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-box-orient</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">vertical</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;line-1&quot;</span><span style="color:#24292E;">&gt;文字文字文字文字文字文字文字文字&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.line-1</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-line-clamp</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">word-break</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">break-all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">ellipsis</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-webkit-box</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-box-orient</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">vertical</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>两行 line-2</p><div class="a-line-2 a-w-100">文字文字文字文字文字文字文字文字</div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;line-2&quot;</span><span style="color:#E1E4E8;">&gt;文字文字文字文字文字文字文字文字&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.line-2</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-line-clamp</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">word-break</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">break-all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ellipsis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-webkit-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-box-orient</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">vertical</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;line-2&quot;</span><span style="color:#24292E;">&gt;文字文字文字文字文字文字文字文字&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.line-2</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-line-clamp</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">word-break</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">break-all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">ellipsis</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-webkit-box</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-box-orient</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">vertical</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,9),o=[p],y=JSON.parse('{"title":"文字超出隐藏","description":"","frontmatter":{},"headers":[],"relativePath":"guide/preset/line.md","filePath":"guide/preset/line.md"}'),e={name:"guide/preset/line.md"},i=Object.assign(e,{setup(t){return s(0),(c,r)=>(a(),n("div",null,o))}});export{y as __pageData,i as default};
