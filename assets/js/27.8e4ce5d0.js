(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{467:function(s,n,t){"use strict";t.r(n);var a=t(44),p=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"layoutreplacer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layoutreplacer"}},[s._v("#")]),s._v(" LayoutReplacer "),t("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),t("Badge",{attrs:{text:"private",title:"private",type:"private"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { LayoutReplacer } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/logger/src/layouts/class/LayoutReplacer"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/logger/blob/v5.5.4/packages/logger/src/layouts/class/LayoutReplacer.ts#L0-L0"}},[s._v("/packages/logger/src/layouts/class/LayoutReplacer.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" LayoutReplacer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>tokens<span class="token punctuation">:</span> <a href="/api/logger/layouts/interfaces/TokensHandlers.html"><span class="token">TokensHandlers</span></a><span class="token punctuation">,</span> timezoneOffset<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @param specifier\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\ncategoryName<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @param specifier\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\nformatAsDate<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\nhostname<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\nformatMessage<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span>|<span class="token keyword">string</span><span class="token punctuation">}</span>\n */\nendOfLine<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\nlogLevel<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\nstartTime<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\nstartColour<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\nendColour<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\npercent<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\npid<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent?<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a> | undefined<span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @param specifier\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\nclusterInfo<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n/**\n *\n * @param loggingEvent\n * @param specifier\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\nuserDefined<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/logger/layouts/interfaces/IReplacers.html"><span class="token">IReplacers</span></a><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("categoryName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("formatAsDate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("hostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("formatMessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("endOfLine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("logLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("startTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("startColour"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("endColour"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("percent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),s._v(" | undefined"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("clusterInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("userDefined"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/layouts/interfaces/IReplacers.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("IReplacers")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);n.default=p.exports}}]);