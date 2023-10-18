import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.4675998f.js";const F=JSON.parse('{"title":"align-content","description":"","frontmatter":{},"headers":[],"relativePath":"guide/preset/flex/align-content.md","filePath":"guide/preset/flex/align-content.md"}'),l={name:"guide/preset/flex/align-content.md"},t=o(`<h1 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-n&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: normal;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-c&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: center;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-fs&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: flex-start;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-fe&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: flex-end;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-sb&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: space-between;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-sa&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: space-around;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-se&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: sspace-evenly;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-s&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: stretch;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ac-b&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;align-content: baseline;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-n&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: normal;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-c&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: center;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-fs&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: flex-start;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-fe&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: flex-end;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-sb&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: space-between;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-sa&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: space-around;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-se&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: sspace-evenly;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-s&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: stretch;&quot;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ac-b&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;align-content: baseline;&quot;</span></span></code></pre></div>`,2),p=[t];function e(c,r,y,E,u,i){return n(),a("div",null,p)}const g=s(l,[["render",e]]);export{F as __pageData,g as default};
