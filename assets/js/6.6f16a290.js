(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{416:function(t,a,s){t.exports=s.p+"assets/img/calculation1.decd2aa5.png"},417:function(t,a,s){t.exports=s.p+"assets/img/calculation7.247d0e9b.png"},418:function(t,a,s){t.exports=s.p+"assets/img/calculation2.27b4f2f4.png"},419:function(t,a,s){t.exports=s.p+"assets/img/calculation3.64f8a700.png"},420:function(t,a,s){t.exports=s.p+"assets/img/calculation6.0ef6e2ca.png"},421:function(t,a,s){t.exports=s.p+"assets/img/calculation5.d3cacfa8.png"},422:function(t,a,s){t.exports=s.p+"assets/img/7.74dbbef2.png"},423:function(t,a,s){t.exports=s.p+"assets/img/8.074bd532.png"},424:function(t,a,s){t.exports=s.p+"assets/img/9.72aa845f.png"},425:function(t,a,s){t.exports=s.p+"assets/img/10.a3ae2a6b.png"},426:function(t,a,s){t.exports=s.p+"assets/img/11.94c793d2.png"},427:function(t,a,s){t.exports=s.p+"assets/img/12.39b69d03.png"},428:function(t,a,s){t.exports=s.p+"assets/img/13.17601f43.png"},429:function(t,a,s){t.exports=s.p+"assets/img/14.8f5d612b.png"},430:function(t,a,s){t.exports=s.p+"assets/img/15.47acf04f.png"},431:function(t,a,s){t.exports=s.p+"assets/img/16.4c040f8c.png"},432:function(t,a,s){t.exports=s.p+"assets/img/17.43840858.png"},433:function(t,a,s){t.exports=s.p+"assets/img/18.1f2b5d3b.png"},434:function(t,a,s){t.exports=s.p+"assets/img/19.cdcff5db.png"},435:function(t,a,s){t.exports=s.p+"assets/img/20.798e4794.png"},491:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue3-响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-响应式原理"}},[t._v("#")]),t._v(" VUE3 响应式原理")]),t._v(" "),a("h2",{attrs:{id:"响应式存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式存储"}},[t._v("#")]),t._v(" 响应式存储")]),t._v(" "),a("h3",{attrs:{id:"基本变量响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本变量响应式"}},[t._v("#")]),t._v(" 基本变量响应式")]),t._v(" "),a("p",[t._v("VUE3是如何存储代码中的计算方式, 并当属性更新时重新跑一次代码计算新值")]),t._v(" "),a("p",[a("img",{attrs:{src:s(416),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"单个响应式对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个响应式对象"}},[t._v("#")]),t._v(" 单个响应式对象")]),t._v(" "),a("p",[t._v("当变量在对象里, 对象中的每个属性都需要自己的dep(依赖关系), 或者说effect的Set集合")]),t._v(" "),a("p",[t._v("示意图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(417),alt:"image"}})]),t._v(" "),a("p",[t._v("实现代码:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(418),alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(419),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"多个响应式对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个响应式对象"}},[t._v("#")]),t._v(" 多个响应式对象")]),t._v(" "),a("p",[t._v("当我们有多个响应式对象时, 每个都需要跟踪effect")]),t._v(" "),a("p",[t._v('这个时候就需要一个"目标图"去存储我们每个"响应式对象属性"的关联依赖')]),t._v(" "),a("p",[t._v("示意图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(420),alt:"image"}})]),t._v(" "),a("p",[t._v("实现代码:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(421),alt:"image"}})]),t._v(" "),a("p",[t._v("这里的targetMap用到weakMap的原因是如果这个目标对象不再可以从任何代码访问, 那么他在weakMap上的关联就会被垃圾回收.")]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("我们已经有存储不同effect的方法, 但是我们还没让effect实现自动重新运行, 这会留到下一章.")]),t._v(" "),a("h2",{attrs:{id:"响应式触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式触发"}},[t._v("#")]),t._v(" 响应式触发")]),t._v(" "),a("p",[t._v("基于上一章的内容, 我们仍在手动调用track和trigger来保存和触发effect.")]),t._v(" "),a("p",[t._v("如果想自动调用track和触发trigger, 则按照如下思路")]),t._v(" "),a("p",[a("img",{attrs:{src:s(422),alt:"image"}})]),t._v(" "),a("p",[t._v("那么问题就变成了如何拦截GET和SET方法")]),t._v(" "),a("h3",{attrs:{id:"vue版本响应式变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue版本响应式变化"}},[t._v("#")]),t._v(" VUE版本响应式变化")]),t._v(" "),a("h4",{attrs:{id:"vue2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2"}},[t._v("#")]),t._v(" VUE2")]),t._v(" "),a("p",[t._v("在VUE2 中, 使用的是ES5的 Object.defineProperty() 去拦截GET和SET.")]),t._v(" "),a("p",[t._v("由于GET和SET是被添加在各个属性下的, 导致创造了一个响应式对象后, 无法再添加新的响应式属性, 需要调用VUE.set()")]),t._v(" "),a("h4",{attrs:{id:"vue3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[t._v("#")]),t._v(" VUE3")]),t._v(" "),a("p",[t._v("在VUE3 中, 使用的是ES6的 Reflect和Proxy. 这意味着可以在响应式对象中随意添加属性, 他们会自动的变成响应式.")]),t._v(" "),a("h3",{attrs:{id:"reflect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect"}},[t._v("#")]),t._v(" Reflect")]),t._v(" "),a("p",[t._v("获取对象属性的三个方法:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("quantity")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quantity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quantity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("三种方法都可以得到对象属性, 但是Reflect有一种超能力, 后面再讲解.")]),t._v(" "),a("h3",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),a("p",[t._v("示意图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(423),alt:"image"}})]),t._v(" "),a("p",[t._v("注意Proxy的第二个参数, 叫做handler对象, 我们可以传递一个诱捕器拦截我们想要的操作, 如属性查找, 函数调用等. 如下图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(424),alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"在-proxy-中使用-reflect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-proxy-中使用-reflect"}},[t._v("#")]),t._v(" 在 Proxy 中使用 Reflect")]),t._v(" "),a("p",[a("img",{attrs:{src:s(425),alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"在handler加上set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在handler加上set"}},[t._v("#")]),t._v(" 在handler加上set")]),t._v(" "),a("p",[a("img",{attrs:{src:s(426),alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"对-proxy-进行封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-proxy-进行封装"}},[t._v("#")]),t._v(" 对 proxy 进行封装")]),t._v(" "),a("p",[a("img",{attrs:{src:s(427),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"完成响应式更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成响应式更新"}},[t._v("#")]),t._v(" 完成响应式更新")]),t._v(" "),a("p",[t._v("将track 和 trgger 放入 porxy的 handler函数中")]),t._v(" "),a("p",[a("img",{attrs:{src:s(428),alt:"image"}})]),t._v(" "),a("p",[t._v("这样我们就完成了响应式, 响应式流程如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(429),alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"优化响应式更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化响应式更新"}},[t._v("#")]),t._v(" 优化响应式更新")]),t._v(" "),a("h3",{attrs:{id:"avtiveeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avtiveeffect"}},[t._v("#")]),t._v(" avtiveEffect")]),t._v(" "),a("p",[t._v("上一章我们已经实现响应式更新, 但是每次执行响应式对象的GET方法都会触发 track 去存储effect, 这并不是最佳方案, 如图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(430),alt:"image"}})]),t._v(" "),a("p",[t._v("为了解决这个问题, 我们引入一个 avtiveEffect 变量, 表示现在正在运行中的effect.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(431),alt:"image"}})]),t._v(" "),a("p",[t._v("然后在 track 函数中判断当前是否有 avtiveEffect , 有才会对effect进行存储, 这样就不会重复执行存储")]),t._v(" "),a("p",[a("img",{attrs:{src:s(432),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("p",[t._v("我们已经解决了 track 函数重复记录 effect 的问题. 那么当 effect 中有非响应式对象的时候, 我们应该怎么处理呢?")]),t._v(" "),a("p",[a("img",{attrs:{src:s(433),alt:"image"}})]),t._v(" "),a("p",[t._v("解决方案有两种:")]),t._v(" "),a("h4",{attrs:{id:"直接生成一个响应式对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接生成一个响应式对象"}},[t._v("#")]),t._v(" 直接生成一个响应式对象")]),t._v(" "),a("p",[a("img",{attrs:{src:s(434),alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"利用对象的get-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用对象的get-set"}},[t._v("#")]),t._v(" 利用对象的get,set")]),t._v(" "),a("p",[t._v("在VUE3 的 composition API 中 ref 的实现方式")]),t._v(" "),a("p",[a("img",{attrs:{src:s(435),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"计算属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[t._v("#")]),t._v(" 计算属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("getter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("quantity")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" salePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"computed salePrice"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"computed total"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" salePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"total应该等于9:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"salePrice应该等于4.5:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" salePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nproduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"total应该等于13.5:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"salePrice应该等于4.5:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" salePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"思考总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考总结"}},[t._v("#")]),t._v(" 思考总结")]),t._v(" "),a("h3",{attrs:{id:"ref与reactive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref与reactive"}},[t._v("#")]),t._v(" ref与reactive")]),t._v(" "),a("p",[t._v("ref适用于专注一个值的响应式, 如果适用了reactive就违背了初衷, 所以不能把ref当成一个普通的响应式对象. 并且在VUE3中会有 isRef 这样的函数去检测ref以区分reactive, 最后还需要考虑性能问题, 创建一个响应式对象需要做很多额外工作, 相比ref更加消耗性能.")]),t._v(" "),a("h3",{attrs:{id:"proxy带来的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy带来的优势"}},[t._v("#")]),t._v(" proxy带来的优势")]),t._v(" "),a("p",[t._v("当适用proxy的时候, 所谓的响应式会变为懒加载, 因为在VUE2的响应式中, 必须遍历所有的键, 并当场转换为响应式. 在VUE3中, 当调用reactive的时候, 所做的只是返回了一个代理对象.")]),t._v(" "),a("p",[t._v("这极大提升了性能, 例如应用程序里有一个庞大的对象列表, 但是对于分页而言, 我们可能只需要渲染前10个, 那么只有这10个对象会进行响应式转换.")])])}),[],!1,null,null,null);a.default=e.exports}}]);