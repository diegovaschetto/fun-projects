(()=>{var t={9662:(t,e,r)=>{var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},6077:(t,e,r)=>{var n=r(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070).f,a=n("unscopables"),c=Array.prototype;null==c[a]&&i(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:(t,e,r)=>{var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var c,u=n(e),s=i(u),f=o(a,s);if(t&&r!=r){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),a=r(7908),c=r(6244),u=r(5417),s=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,g,h,d){for(var b,m,x=a(y),S=i(x),O=n(g,h),w=c(S),P=0,j=d||u,E=e?j(y,w):r||l?j(y,0):void 0;w>P;P++)if((v||P in S)&&(m=O(b=S[P],P,x),t))if(e)E[P]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return P;case 2:s(E,b)}else switch(t){case 4:return!1;case 7:s(E,b)}return p?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},1589:(t,e,r)=>{var n=r(1400),o=r(6244),i=r(6135),a=Array,c=Math.max;t.exports=function(t,e,r){for(var u=o(t),s=n(e,u),f=n(void 0===r?u:r,u),p=a(c(f-s,0)),l=0;s<f;s++,l++)i(p,l,t[s]);return p.length=l,p}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},7475:(t,e,r)=>{var n=r(3157),o=r(4411),i=r(111),a=r(5112)("species"),c=Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,(o(e)&&(e===c||n(e.prototype))||i(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?c:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(614),i=r(4326),a=r(5112)("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?r:u?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e,r){for(var c=o(e),u=a.f,s=i.f,f=0;f<c.length;f++){var p=c[f];n(t,p)||r&&n(r,p)||u(t,p,s(e,p))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,r)=>{"use strict";var n=r(4948),o=r(3070),i=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},8052:(t,e,r)=>{var n=r(614),o=r(3070),i=r(6339),a=r(3072);t.exports=function(t,e,r,c){c||(c={});var u=c.enumerable,s=void 0!==c.name?c.name:e;if(n(r)&&i(r,s,c),c.global)u?t[e]=r:a(e,r);else{try{c.unsafe?t[e]&&(u=!0):delete t[e]}catch(t){}u?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(8052),c=r(3072),u=r(9920),s=r(4705);t.exports=function(t,e){var r,f,p,l,v,y=t.target,g=t.global,h=t.stat;if(r=g?n:h?n[y]||c(y,{}):(n[y]||{}).prototype)for(f in e){if(l=e[f],p=t.dontCallGetSet?(v=o(r,f))&&v.value:r[f],!s(g?f:y+(h?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(r,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,a=o.call,c=n&&i.bind(a,a);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(4326),a=Object,c=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(4811),c=r(7854),u=r(1702),s=r(111),f=r(8880),p=r(2597),l=r(5465),v=r(6200),y=r(3501),g="Object already initialized",h=c.TypeError,d=c.WeakMap;if(a||l.state){var b=l.state||(l.state=new d),m=u(b.get),x=u(b.has),S=u(b.set);n=function(t,e){if(x(b,t))throw h(g);return e.facade=t,S(b,t,e),e},o=function(t){return m(b,t)||{}},i=function(t){return x(b,t)}}else{var O=v("state");y[O]=!0,n=function(t,e){if(p(t,O))throw h(g);return e.facade=t,f(t,O,e),e},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(648),c=r(5005),u=r(2788),s=function(){},f=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.exec(s),g=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},h=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,u(t))}catch(t){return!0}};h.sham=!0,t.exports=!p||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?h:g},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=u[c(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},8554:t=>{t.exports=function(t){return null==t}},111:(t,e,r)=>{var n=r(614),o="object"==typeof document&&document.all,i=void 0===o&&void 0!==o;t.exports=i?function(t){return"object"==typeof t?null!==t:n(t)||t===o}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(5005),o=r(614),i=r(7976),a=r(3307),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,c(t))}},3061:(t,e,r)=>{"use strict";var n=r(3383).IteratorPrototype,o=r(30),i=r(9114),a=r(8003),c=r(7497),u=function(){return this};t.exports=function(t,e,r,s){var f=e+" Iterator";return t.prototype=o(n,{next:i(+!s,r)}),a(t,f,!1,!0),c[f]=u,t}},1656:(t,e,r)=>{"use strict";var n=r(2109),o=r(6916),i=r(1913),a=r(6530),c=r(614),u=r(3061),s=r(9518),f=r(7674),p=r(8003),l=r(8880),v=r(8052),y=r(5112),g=r(7497),h=r(3383),d=a.PROPER,b=a.CONFIGURABLE,m=h.IteratorPrototype,x=h.BUGGY_SAFARI_ITERATORS,S=y("iterator"),O="keys",w="values",P="entries",j=function(){return this};t.exports=function(t,e,r,a,y,h,E){u(r,e,a);var T,A,I,L=function(t){if(t===y&&M)return M;if(!x&&t in C)return C[t];switch(t){case O:case w:case P:return function(){return new r(this,t)}}return function(){return new r(this)}},F=e+" Iterator",R=!1,C=t.prototype,k=C[S]||C["@@iterator"]||y&&C[y],M=!x&&k||L(y),D="Array"==e&&C.entries||k;if(D&&(T=s(D.call(new t)))!==Object.prototype&&T.next&&(i||s(T)===m||(f?f(T,m):c(T[S])||v(T,S,j)),p(T,F,!0,!0),i&&(g[F]=j)),d&&y==w&&k&&k.name!==w&&(!i&&b?l(C,"name",w):(R=!0,M=function(){return o(k,this)})),y)if(A={values:L(w),keys:h?M:L(O),entries:L(P)},E)for(I in A)(x||R||!(I in C))&&v(C,I,A[I]);else n({target:e,proto:!0,forced:x||R},A);return i&&!E||C[S]===M||v(C,S,M,{name:y}),g[e]=M,A}},3383:(t,e,r)=>{"use strict";var n,o,i,a=r(7293),c=r(614),u=r(111),s=r(30),f=r(9518),p=r(8052),l=r(5112),v=r(1913),y=l("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(n=o):g=!0),!u(n)||a((function(){var t={};return n[y].call(t)!==t}))?n={}:v&&(n=s(n)),c(n[y])||p(n,y,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},7497:t=>{t.exports={}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{var n=r(7293),o=r(614),i=r(2597),a=r(9781),c=r(6530).CONFIGURABLE,u=r(2788),s=r(9909),f=s.enforce,p=s.get,l=Object.defineProperty,v=a&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),g=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||c&&t.name!==e)&&(a?l(t,"name",{value:e,configurable:!0}):t.name=e),v&&r&&i(r,"arity")&&t.length!==r.arity&&l(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?a&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=y.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return o(this)&&p(this).source||u(this)}),"toString")},4758:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),a=r(748),c=r(3501),u=r(490),s=r(317),f=r(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(l("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;y="undefined"!=typeof document?document.domain&&n?v(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):v(n);for(var r=a.length;r--;)delete y.prototype[a[r]];return y()};c[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=y(),void 0===e?r:i.f(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3353),i=r(3070),a=r(9670),c=r(5656),u=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);for(var r,n=c(e),o=u(e),s=o.length,f=0;s>f;)i.f(t,r=o[f++],n[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(3353),a=r(9670),c=r(4948),u=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=n?i?function(t,e,r){if(a(t),e=c(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(a(t),e=c(e),a(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),c=r(5656),u=r(4948),s=r(2597),f=r(4664),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=c(t),e=u(e),f)try{return p(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},1156:(t,e,r)=>{var n=r(4326),o=r(5656),i=r(8006).f,a=r(1589),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return a(c)}}(t):i(o(t))}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(2597),o=r(614),i=r(7908),a=r(6200),c=r(8544),u=a("IE_PROTO"),s=Object,f=s.prototype;t.exports=c?s.getPrototypeOf:function(t){var e=i(t);if(n(e,u))return e[u];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof s?f:null}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,c=r(3501),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(c,r)&&o(n,r)&&u(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~a(f,r)||u(f,r));return f}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(6916),o=r(614),i=r(111),a=TypeError;t.exports=function(t,e){var r,c;if("string"===e&&o(r=t.toString)&&!i(c=n(r,t)))return c;if(o(r=t.valueOf)&&!i(c=n(r,t)))return c;if("string"!==e&&o(r=t.toString)&&!i(c=n(r,t)))return c;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),c=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(c(t)),r=a.f;return r?u(e,r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},4488:(t,e,r)=>{var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},8003:(t,e,r)=>{var n=r(3070).f,o=r(2597),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:e})}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,e,r)=>{var n=r(1702),o=r(9303),i=r(1340),a=r(4488),c=n("".charAt),u=n("".charCodeAt),s=n("".slice),f=function(t){return function(e,r){var n,f,p=i(a(e)),l=o(r),v=p.length;return l<0||l>=v?t?"":void 0:(n=u(p,l))<55296||n>56319||l+1===v||(f=u(p,l+1))<56320||f>57343?t?c(p,l):n:t?s(p,l,l+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},6293:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6532:(t,e,r)=>{var n=r(6916),o=r(5005),i=r(5112),a=r(8052);t.exports=function(){var t=o("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,c=i("toPrimitive");e&&!e[c]&&a(e,c,(function(t){return n(r,this)}),{arity:1})}},2015:(t,e,r)=>{var n=r(6293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{var n=r(6916),o=r(111),i=r(2190),a=r(8173),c=r(2140),u=r(5112),s=TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,u=a(t,f);if(u){if(void 0===e&&(e="default"),r=n(u,t,e),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,r)=>{var n=r(7854),o=r(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:(t,e,r)=>{var n=r(857),o=r(2597),i=r(6061),a=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},6061:(t,e,r)=>{var n=r(5112);e.f=n},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),c=r(6293),u=r(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&p?p(e):l(e)}return s[t]}},6992:(t,e,r)=>{"use strict";var n=r(5656),o=r(1223),i=r(7497),a=r(9909),c=r(3070).f,u=r(1656),s=r(1913),f=r(9781),p="Array Iterator",l=a.set,v=a.getterFor(p);t.exports=u(Array,"Array",(function(t,e){l(this,{type:p,target:n(t),index:0,kind:e})}),(function(){var t=v(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");var y=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&f&&"values"!==y.name)try{c(y,"name",{value:"values"})}catch(t){}},8862:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2104),a=r(6916),c=r(1702),u=r(7293),s=r(3157),f=r(614),p=r(111),l=r(2190),v=r(206),y=r(6293),g=o("JSON","stringify"),h=c(/./.exec),d=c("".charAt),b=c("".charCodeAt),m=c("".replace),x=c(1..toString),S=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,w=/^[\uDC00-\uDFFF]$/,P=!y||u((function(){var t=o("Symbol")();return"[null]"!=g([t])||"{}"!=g({a:t})||"{}"!=g(Object(t))})),j=u((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),E=function(t,e){var r=v(arguments),n=e;if((p(e)||void 0!==t)&&!l(t))return s(e)||(e=function(t,e){if(f(n)&&(e=a(n,this,t,e)),!l(e))return e}),r[1]=e,i(g,null,r)},T=function(t,e,r){var n=d(r,e-1),o=d(r,e+1);return h(O,t)&&!h(w,o)||h(w,t)&&!h(O,n)?"\\u"+x(b(t,0),16):t};g&&n({target:"JSON",stat:!0,arity:3,forced:P||j},{stringify:function(t,e,r){var n=v(arguments),o=i(P?E:g,null,n);return j&&"string"==typeof o?m(o,S,T):o}})},5003:(t,e,r)=>{var n=r(2109),o=r(7293),i=r(5656),a=r(1236).f,c=r(9781),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},9660:(t,e,r)=>{var n=r(2109),o=r(6293),i=r(7293),a=r(5181),c=r(7908);n({target:"Object",stat:!0,forced:!o||i((function(){a.f(1)}))},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(c(t)):[]}})},1539:(t,e,r)=>{var n=r(1694),o=r(8052),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},8783:(t,e,r)=>{"use strict";var n=r(8710).charAt,o=r(1340),i=r(9909),a=r(1656),c="String Iterator",u=i.set,s=i.getterFor(c);a(String,"String",(function(t){u(this,{type:c,string:o(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4032:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(6916),a=r(1702),c=r(1913),u=r(9781),s=r(6293),f=r(7293),p=r(2597),l=r(7976),v=r(9670),y=r(5656),g=r(4948),h=r(1340),d=r(9114),b=r(30),m=r(1956),x=r(8006),S=r(1156),O=r(5181),w=r(1236),P=r(3070),j=r(6048),E=r(5296),T=r(8052),A=r(2309),I=r(6200),L=r(3501),F=r(9711),R=r(5112),C=r(6061),k=r(6800),M=r(6532),D=r(8003),_=r(9909),B=r(2092).forEach,G=I("hidden"),N="Symbol",z=_.set,H=_.getterFor(N),U=Object.prototype,V=o.Symbol,$=V&&V.prototype,W=o.TypeError,q=o.QObject,Y=w.f,J=P.f,X=S.f,K=E.f,Q=a([].push),Z=A("symbols"),tt=A("op-symbols"),et=A("wks"),rt=!q||!q.prototype||!q.prototype.findChild,nt=u&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(U,e);n&&delete U[e],J(t,e,r),n&&t!==U&&J(U,e,n)}:J,ot=function(t,e){var r=Z[t]=b($);return z(r,{type:N,tag:t,description:e}),u||(r.description=e),r},it=function(t,e,r){t===U&&it(tt,e,r),v(t);var n=g(e);return v(r),p(Z,n)?(r.enumerable?(p(t,G)&&t[G][n]&&(t[G][n]=!1),r=b(r,{enumerable:d(0,!1)})):(p(t,G)||J(t,G,d(1,{})),t[G][n]=!0),nt(t,n,r)):J(t,n,r)},at=function(t,e){v(t);var r=y(e),n=m(r).concat(ft(r));return B(n,(function(e){u&&!i(ct,r,e)||it(t,e,r[e])})),t},ct=function(t){var e=g(t),r=i(K,this,e);return!(this===U&&p(Z,e)&&!p(tt,e))&&(!(r||!p(this,e)||!p(Z,e)||p(this,G)&&this[G][e])||r)},ut=function(t,e){var r=y(t),n=g(e);if(r!==U||!p(Z,n)||p(tt,n)){var o=Y(r,n);return!o||!p(Z,n)||p(r,G)&&r[G][n]||(o.enumerable=!0),o}},st=function(t){var e=X(y(t)),r=[];return B(e,(function(t){p(Z,t)||p(L,t)||Q(r,t)})),r},ft=function(t){var e=t===U,r=X(e?tt:y(t)),n=[];return B(r,(function(t){!p(Z,t)||e&&!p(U,t)||Q(n,Z[t])})),n};s||(T($=(V=function(){if(l($,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?h(arguments[0]):void 0,e=F(t),r=function(t){this===U&&i(r,tt,t),p(this,G)&&p(this[G],e)&&(this[G][e]=!1),nt(this,e,d(1,t))};return u&&rt&&nt(U,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),T(V,"withoutSetter",(function(t){return ot(F(t),t)})),E.f=ct,P.f=it,j.f=at,w.f=ut,x.f=S.f=st,O.f=ft,C.f=function(t){return ot(R(t),t)},u&&(J($,"description",{configurable:!0,get:function(){return H(this).description}}),c||T(U,"propertyIsEnumerable",ct,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:V}),B(m(et),(function(t){k(t)})),n({target:N,stat:!0,forced:!s},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!u},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:it,defineProperties:at,getOwnPropertyDescriptor:ut}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:st}),M(),D(V,N),L[G]=!0},1817:(t,e,r)=>{"use strict";var n=r(2109),o=r(9781),i=r(7854),a=r(1702),c=r(2597),u=r(614),s=r(7976),f=r(1340),p=r(3070).f,l=r(9920),v=i.Symbol,y=v&&v.prototype;if(o&&u(v)&&(!("description"in y)||void 0!==v().description)){var g={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(g[e]=!0),e};l(h,v),h.prototype=y,y.constructor=h;var d="Symbol(test)"==String(v("test")),b=a(y.valueOf),m=a(y.toString),x=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),O=a("".slice);p(y,"description",{configurable:!0,get:function(){var t=b(this);if(c(g,t))return"";var e=m(t),r=d?O(e,7,-1):S(e,x,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:h})}},763:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2597),a=r(1340),c=r(2309),u=r(2015),s=c("string-to-symbol-registry"),f=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=a(t);if(i(s,e))return s[e];var r=o("Symbol")(e);return s[e]=r,f[r]=e,r}})},2165:(t,e,r)=>{r(6800)("iterator")},2526:(t,e,r)=>{r(4032),r(763),r(6620),r(8862),r(9660)},6620:(t,e,r)=>{var n=r(2109),o=r(2597),i=r(2190),a=r(6330),c=r(2309),u=r(2015),s=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!i(t))throw TypeError(a(t)+" is not a symbol");if(o(s,t))return s[t]}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(8533),c=r(8880),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},3948:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(6992),c=r(8880),u=r(5112),s=u("iterator"),f=u("toStringTag"),p=a.values,l=function(t,e){if(t){if(t[s]!==p)try{c(t,s,p)}catch(e){t[s]=p}if(t[f]||c(t,f,e),o[e])for(var r in a)if(t[r]!==a[r])try{c(t,r,a[r])}catch(e){t[r]=a[r]}}};for(var v in o)l(n[v]&&n[v].prototype,v);l(i,"DOMTokenList")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})();var n={};(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}r.d(n,{t:()=>P}),r(1539),r(4747),r.p,r(5003),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948);var i,a=document.getElementById("flappy-bird"),c=i=e((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));c.moveDown=function(){i.currentPosition=parseFloat(a.style.top),a.style.top="".concat(i.currentPosition+(i.counterDec+=.1),"%")},c.moveUp=function(){clearInterval(i.handler),i.counterDec=.1,i.currentPosition=parseFloat(a.style.top),a.style.top="".concat(i.currentPosition-5,"%"),i.handler=setInterval(i.moveDown,50)};const u=c=i=function(t,e,r,n){var i,a=arguments.length,c=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(a<3?i(c):a>3?i(e,r,c):i(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c}([function(t){}],c);var s=document.getElementById("update-result"),f={point:0,addPoint:function(t){t?(this.point=0,s.textContent="".concat(this.point)):(this.point++,s.textContent="".concat(this.point))}},p=document.getElementById("flappy-bird"),l=document.getElementById("banner"),v=[];function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}var h,d=document.getElementById("container-game"),b=function(t,e){return Math.round(Math.random()*(t-e)+e)},m=h=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.createPipes=function(t){e.generateHeightPipesBasedOnHole(t),h.stopGame=!0;var r=document.createElement("img"),n=document.createElement("img");r.src="../../images/pipe.png",n.src="../../images/pipe.png",r.style.height="".concat(t.heightPipe1,"%"),n.style.height="".concat(t.heightPipe2,"%"),r.style.right="-20%",n.style.right="-20%",r.className="pipe-1-down-direction",n.className="pipe-2-up-direction",d.append(r),d.append(n),e.logicMotionPipes(r,n)},this.nextMovement=function(t,r){var n=parseFloat(t.style.right),o=parseFloat(r.style.right);setTimeout((function(){h.stopGame&&(t.style.right="".concat(n+.5,"%"),r.style.right="".concat(o+.5,"%"),h.stopGame=function(t,e,r){var n,o,i;if(v.every((function(t){return e!==t}))&&(n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i=p.getBoundingClientRect()),void 0===n||void 0===o||void 0===i)return!0;var a=i.right+i.width,c=i.y+i.height,s=n.y+n.height,y=o.y+o.height;if(o.right>=i.right&&o.right<=a&&(c>o.y||i.y<s)||i.y<n.y||i.y+i.height>y)return window.removeEventListener("keyup",P),clearInterval(u.handler),i.y+i.height>y&&(p.removeAttribute("style"),p.classList.remove("set-start-flappy"),p.style.bottom="0%"),i.y<n.y&&(p.removeAttribute("style"),p.style.top="0%"),clearInterval(r),l.classList.remove("hidden"),!1;if(o.right<i.right&&v.every((function(t){return e!==t}))){f.addPoint(!1);var g=e;v.push(g)}return!0}(t,r,h.pipesInterval),h.stopGame&&e.logicMotionPipes(t,r))}),25)},this.logicMotionPipes=function(t,r){parseFloat(t.style.right)>100?(t.remove(),r.remove()):e.nextMovement(t,r)},this.hole=b(20,30)}var e,r;return e=t,(r=[{key:"generateHeightPipesBasedOnHole",value:function(t){var e=100-this.hole;t.heightPipe1=b(0,e);for(var r=e-10;t.heightPipe1<=10||t.heightPipe1>=r;)t.heightPipe1=b(0,e);t.heightPipe2=e-t.heightPipe1}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();m.stopGame=!0,m=h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}([function(t){}],m);var x=document.getElementById("start-button"),S=document.getElementById("banner"),O=document.getElementById("container-game"),w=document.getElementById("flappy-bird"),P=function(){return u.moveUp()};x.onclick=function(){O.querySelectorAll("img").forEach((function(t){t.remove()})),S.classList.add("hidden"),w.style.top="50%",window.addEventListener("keyup",P),f.addPoint(!0),m.pipesInterval=setInterval((function(){var t=new m;t.createPipes(t)}),2e3)}})()})();