import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6829929b.js";const A=JSON.parse('{"title":"British Library Images Online","description":"","frontmatter":{},"headers":[],"relativePath":"api/british-library-images-online.md","filePath":"api/british-library-images-online.md"}'),p={name:"api/british-library-images-online.md"},o=l(`<h1 id="british-library-images-online" tabindex="-1">British Library Images Online <a class="header-anchor" href="#british-library-images-online" aria-label="Permalink to &quot;British Library Images Online&quot;">​</a></h1><p>The class for scraping metadata and images from <a href="https://imagesonline.bl.uk" target="_blank" rel="noreferrer">British Library Images Online</a>.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Create a querier for British Library Images Online:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> libquery_extensions </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> BritishLibraryImagesOnline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">directory </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./output/british-library-images-online</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">querier </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BritishLibraryImagesOnline</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">query_path</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/queries/queries.jsonl&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">metadata_path</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/metadata/metadata.jsonl&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">img_dir</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/imgs&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Query metadata:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">base_urls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://imagesonline.bl.uk/search/?searchQuery=chart</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://imagesonline.bl.uk/search/?searchQuery=map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fetch_metadata</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">base_urls</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">base_urls</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Query images:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fetch_image</span><span style="color:#89DDFF;">()</span></span></code></pre></div><h2 id="metadata-schema" tabindex="-1">Metadata Schema <a class="header-anchor" href="#metadata-schema" aria-label="Permalink to &quot;Metadata Schema&quot;">​</a></h2><p>Each metadata entry is stored as:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SourceData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">assetName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">downloadUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Source</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Caption</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Title of Work</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Shelfmark</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Place and date of production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Credit</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Artist/creator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Author</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MetadataEntry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">British Library</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">idInSource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">accessDate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sourceData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SourceData</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,12),e=[o];function t(r,c,y,i,F,D){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};