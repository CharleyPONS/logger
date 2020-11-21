(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{493:function(s,a,t){"use strict";t.r(a);var n=t(44),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"loggerappenders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loggerappenders"}},[s._v("#")]),s._v(" LoggerAppenders "),t("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { LoggerAppenders } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/logger"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/logger/blob/v5.5.4/packages/logger/src/logger/class/LoggerAppenders.ts#L0-L0"}},[s._v("/packages/logger/src/logger/class/LoggerAppenders.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" LoggerAppenders "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('get <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n/**\n * The `<span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a <span class="token keyword">boolean</span> indicating whether an element with the specified configuration name exists or not.\n * @param name Required. The key of the element to test for presence in the Map object.`\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>\n */\n<span class="token function">has</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The `<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a specified element <span class="token keyword">from</span> a loggerAppenders.\n * @param name Required. The configuration of the element to return <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span><a href="/api/logger/logger/class/ILoggerAppender.html"><span class="token">ILoggerAppender</span></a><span class="token punctuation">}</span>\n */\n<span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/logger/logger/class/ILoggerAppender.html"><span class="token">ILoggerAppender</span></a><span class="token punctuation">;</span>\n/**\n * The `<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>` method adds or updates an element with a specified key and value to a loggerAppenders object.\n * @param name Required. The key of the element to add to the loggerAppenders object.\n * @param config Required. The config of the element to add to the loggerAppenders object.\n * @returns <span class="token punctuation">{</span>LoggerAppender<span class="token punctuation">}</span>\n */\n<span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> config<span class="token punctuation">:</span> <a href="/api/logger/appenders/interfaces/IAppenderConfiguration.html"><span class="token">IAppenderConfiguration</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> LoggerAppenders<span class="token punctuation">;</span>\n/**\n * Remove all configuration that match with the `name`.\n * @param name Required. The key of the element to remove <span class="token keyword">from</span> the loggerAppenders object.\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span> Returns true if an element in the Map object existed and has been removed<span class="token punctuation">,</span> or false if the element does not exist.\n */\n<span class="token function">delete</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The `<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes all elements <span class="token keyword">from</span> a loggerAppenders object.\n */\n<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The `<span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>` method executes a provided function once per each key/value pair in the loggerAppenders object<span class="token punctuation">,</span> in insertion order.\n * @param callback Function to execute for each element.\n * @param thisArg Value to use <span class="token keyword">as</span> this when executing callback.\n */\n<span class="token function">forEach</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <a href="/api/logger/logger/class/ILoggerAppender.html"><span class="token">ILoggerAppender</span></a><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> map<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <a href="/api/logger/logger/class/ILoggerAppender.html"><span class="token">ILoggerAppender</span></a>&gt;<span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">,</span> thisArg?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span>Array<span class="token punctuation">}</span>\n */\n<span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * Return all appenders that match with the given loggingLevel.\n * @param loggingLevel\n * @returns <span class="token punctuation">{</span><span class="token punctuation">[</span><a href="/api/logger/appenders/class/BaseAppender.html"><span class="token">BaseAppender</span></a><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n<span class="token function">byLogLevel</span><span class="token punctuation">(</span>loggingLevel<span class="token punctuation">:</span> <a href="/api/logger/core/LogLevel.html"><span class="token">LogLevel</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/logger/appenders/class/BaseAppender.html"><span class="token">BaseAppender</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[t("code",[s._v("string")])]),s._v(" "),t("td",[s._v("Required. The key of the element to test for presence in the Map object.`")])])])]),s._v(" "),t("p",[s._v("The `has() method returns a boolean indicating whether an element with the specified configuration name exists or not.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/logger/class/ILoggerAppender.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("ILoggerAppender")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[t("code",[s._v("string")])]),s._v(" "),t("td",[s._v("Required. The configuration of the element to return from the Map object.")])])])]),s._v(" "),t("p",[s._v("The `get() method returns a specified element from a loggerAppenders.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/appenders/interfaces/IAppenderConfiguration.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("IAppenderConfiguration")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/logger/class/LoggerAppenders.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LoggerAppenders")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[t("code",[s._v("string")])]),s._v(" "),t("td",[s._v("Required. The key of the element to add to the loggerAppenders object.  config")])])])]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("set()")]),s._v(" method adds or updates an element with a specified key and value to a loggerAppenders object.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("delete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[t("code",[s._v("string")])]),s._v(" "),t("td",[s._v("Required. The key of the element to remove from the loggerAppenders object.")])])])]),s._v(" "),t("p",[s._v("Remove all configuration that match with the "),t("code",[s._v("name")]),s._v(".")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("The `clear() method removes all elements from a loggerAppenders object.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/logger/class/ILoggerAppender.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("ILoggerAppender")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/logger/class/ILoggerAppender.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("ILoggerAppender")])]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" thisArg?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("callback")]),s._v(" "),t("td",[t("code",[s._v('(value: <a href="/api/logger/logger/class/ILoggerAppender.html"><span class="token">ILoggerAppender</span></a>')])]),s._v(" "),t("td",[s._v("Function to execute for each element.  thisArg")])])])]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("forEach()")]),s._v(" method executes a provided function once per each key/value pair in the loggerAppenders object, in insertion order.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("byLogLevel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/core/LogLevel.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("LogLevel")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/logger/appenders/class/BaseAppender.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("BaseAppender")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Return all appenders that match with the given loggingLevel.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);