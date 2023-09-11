import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.51926b02.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config/file2rule.md","filePath":"config/file2rule.md"}'),p={name:"config/file2rule.md"},o=l(`<h2 id="根据现有css文件-生成规则" tabindex="-1">根据现有css文件，生成规则 <a class="header-anchor" href="#根据现有css文件-生成规则" aria-label="Permalink to &quot;根据现有css文件，生成规则&quot;">​</a></h2><p>字符串形式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">allin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      cssFile: </span><span style="color:#9ECBFF;">&#39;./style/index.scss&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      presets: [</span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">allin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      cssFile: </span><span style="color:#032F62;">&#39;./style/index.scss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      presets: [</span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span></code></pre></div><p>对象形式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">allin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      cssFile: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        input:</span><span style="color:#9ECBFF;">&#39;./style/index.scss&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 支持文件夹和文件路径 </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 局部 &gt; 全局，局部prefix，suffix可以覆盖全局的prefix，suffix</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefix: </span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 给这些文件内的css增加前缀</span></span>
<span class="line"><span style="color:#E1E4E8;">        suffix: </span><span style="color:#9ECBFF;">&#39;suf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 给这些文件内的css增加后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">        rmPrefix: </span><span style="color:#9ECBFF;">&#39;uni-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 给这些文件内的css移除前后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">        rmSuffix: </span><span style="color:#9ECBFF;">&#39;ff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 给这些文件内的css移除增加后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      presets: [</span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">allin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      cssFile: {</span></span>
<span class="line"><span style="color:#24292E;">        input:</span><span style="color:#032F62;">&#39;./style/index.scss&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 支持文件夹和文件路径 </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 局部 &gt; 全局，局部prefix，suffix可以覆盖全局的prefix，suffix</span></span>
<span class="line"><span style="color:#24292E;">        prefix: </span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 给这些文件内的css增加前缀</span></span>
<span class="line"><span style="color:#24292E;">        suffix: </span><span style="color:#032F62;">&#39;suf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 给这些文件内的css增加后缀</span></span>
<span class="line"><span style="color:#24292E;">        rmPrefix: </span><span style="color:#032F62;">&#39;uni-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 给这些文件内的css移除前后缀</span></span>
<span class="line"><span style="color:#24292E;">        rmSuffix: </span><span style="color:#032F62;">&#39;ff&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 给这些文件内的css移除增加后缀</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      presets: [</span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span></code></pre></div><blockquote><p>例如：</p></blockquote><p>文件内容</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// style/index</span><span style="color:#B392F0;">.scss</span></span>
<span class="line"><span style="color:#B392F0;">.over-hide</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;}</span></span>
<span class="line"><span style="color:#B392F0;">.flex-1</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;}</span></span>
<span class="line"><span style="color:#B392F0;">.tn-flex</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 暂不支持</span></span>
<span class="line"><span style="color:#B392F0;">.flex</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.col5</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// style/index</span><span style="color:#6F42C1;">.scss</span></span>
<span class="line"><span style="color:#6F42C1;">.over-hide</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;}</span></span>
<span class="line"><span style="color:#6F42C1;">.flex-1</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;}</span></span>
<span class="line"><span style="color:#6F42C1;">.tn-flex</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 暂不支持</span></span>
<span class="line"><span style="color:#6F42C1;">.flex</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.col5</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;}</span></span></code></pre></div><p>配置增加cssFile</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue.config.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chainWebpack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">plugin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;allinClass&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">allinClass</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          cssFile: </span><span style="color:#9ECBFF;">&#39;./style/index.scss&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;flex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;display: flex;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }]</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue.config.js</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chainWebpack</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    config</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">plugin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;allinClass&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">allinClass</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">          cssFile: </span><span style="color:#032F62;">&#39;./style/index.scss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          rules: [{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;flex&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;display: flex;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }]</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>自动生成静态规则 加入rules</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue.config.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chainWebpack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">plugin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;allinClass&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">allinClass</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          cssFile: </span><span style="color:#9ECBFF;">&#39;./style/index.scss&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;flex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;display: flex;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;over-hide&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;overflow: hidden;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;flex-1&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;flex: 1;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;tn-flex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;display: flex;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }]</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue.config.js</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chainWebpack</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    config</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">plugin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;allinClass&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">allinClass</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          cssFile: </span><span style="color:#032F62;">&#39;./style/index.scss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          rules: [{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;flex&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;display: flex;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;over-hide&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;overflow: hidden;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;flex-1&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;flex: 1;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;tn-flex&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;display: flex;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }]</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const f=s(p,[["render",c]]);export{h as __pageData,f as default};
