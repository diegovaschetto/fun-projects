(()=>{var t={9662:(t,r,e)=>{var n=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},6077:(t,r,e)=>{var n=e(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,r,e)=>{var n=e(5112),o=e(30),i=e(3070).f,a=n("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:(t,r,e)=>{var n=e(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},457:(t,r,e)=>{"use strict";var n=e(9974),o=e(6916),i=e(7908),a=e(411),u=e(659),c=e(4411),s=e(6244),f=e(6135),p=e(554),l=e(246),v=Array;t.exports=function(t){var r=i(t),e=c(this),y=arguments.length,g=y>1?arguments[1]:void 0,h=void 0!==g;h&&(g=n(g,y>2?arguments[2]:void 0));var d,b,m,x,S,w,O=l(r),j=0;if(!O||this===v&&u(O))for(d=s(r),b=e?new this(d):v(d);d>j;j++)w=h?g(r[j],j):r[j],f(b,j,w);else for(S=(x=p(r,O)).next,b=e?new this:[];!(m=o(S,x)).done;j++)w=h?a(x,g,[m.value,j],!0):m.value,f(b,j,w);return b.length=j,b}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(1702),i=e(8361),a=e(7908),u=e(6244),c=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,g,h,d){for(var b,m,x=a(y),S=i(x),w=n(g,h),O=u(S),j=0,P=d||c,A=r?P(y,O):e||l?P(y,0):void 0;O>j;j++)if((v||j in S)&&(m=w(b=S[j],j,x),t))if(r)A[j]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(A,b)}else switch(t){case 4:return!1;case 7:s(A,b)}return p?-1:o||f?f:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},1589:(t,r,e)=>{var n=e(1400),o=e(6244),i=e(6135),a=Array,u=Math.max;t.exports=function(t,r,e){for(var c=o(t),s=n(r,c),f=n(void 0===e?c:e,c),p=a(u(f-s,0)),l=0;s<f;s++,l++)i(p,l,t[s]);return p.length=l,p}},206:(t,r,e)=>{var n=e(1702);t.exports=n([].slice)},7475:(t,r,e)=>{var n=e(3157),o=e(4411),i=e(111),a=e(5112)("species"),u=Array;t.exports=function(t){var r;return n(t)&&(r=t.constructor,(o(r)&&(r===u||n(r.prototype))||i(r)&&null===(r=r[a]))&&(r=void 0)),void 0===r?u:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},411:(t,r,e)=>{var n=e(9670),o=e(212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){o(t,"throw",r)}}},72:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(614),i=e(4326),a=e(5112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=u(t),a))?e:c?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||c(t,p,s(r,p))}}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},8052:(t,r,e)=>{var n=e(614),o=e(3070),i=e(6339),a=e(3072);t.exports=function(t,r,e,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:r;if(n(e)&&i(e,s,u),u.global)c?t[r]=e:a(r,e);else{try{u.unsafe?t[r]&&(c=!0):delete t[r]}catch(t){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,r,e)=>{var n=e(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(8052),u=e(3072),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,p,l,v,y=t.target,g=t.global,h=t.stat;if(e=g?n:h?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in r){if(l=r[f],p=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(g?f:y+(h?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,r,e)=>{var n=e(1702),o=e(9662),i=e(4374),a=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,a=o.call,u=n&&i.bind(a,a);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},246:(t,r,e)=>{var n=e(648),o=e(8173),i=e(8554),a=e(7497),u=e(5112)("iterator");t.exports=function(t){if(!i(t))return o(t,u)||o(t,"@@iterator")||a[n(t)]}},554:(t,r,e)=>{var n=e(6916),o=e(9662),i=e(9670),a=e(6330),u=e(246),c=TypeError;t.exports=function(t,r){var e=arguments.length<2?u(t):r;if(o(e))return i(n(e,t));throw c(a(t)+" is not iterable")}},8173:(t,r,e)=>{var n=e(9662),o=e(8554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(4326),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,a=e(4811),u=e(7854),c=e(1702),s=e(111),f=e(8880),p=e(2597),l=e(5465),v=e(6200),y=e(3501),g="Object already initialized",h=u.TypeError,d=u.WeakMap;if(a||l.state){var b=l.state||(l.state=new d),m=c(b.get),x=c(b.has),S=c(b.set);n=function(t,r){if(x(b,t))throw h(g);return r.facade=t,S(b,t,r),r},o=function(t){return m(b,t)||{}},i=function(t){return x(b,t)}}else{var w=v("state");y[w]=!0,n=function(t,r){if(p(t,w))throw h(g);return r.facade=t,f(t,w,r),r},o=function(t){return p(t,w)?t[w]:{}},i=function(t){return p(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw h("Incompatible receiver, "+t+" required");return e}}}},659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),a=e(648),u=e(5005),c=e(2788),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.exec(s),g=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},h=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,c(t))}catch(t){return!0}};h.sham=!0,t.exports=!p||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?h:g},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},8554:t=>{t.exports=function(t){return null==t}},111:(t,r,e)=>{var n=e(614),o="object"==typeof document&&document.all,i=void 0===o&&void 0!==o;t.exports=i?function(t){return"object"==typeof t?null!==t:n(t)||t===o}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(614),i=e(7976),a=e(3307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,u(t))}},212:(t,r,e)=>{var n=e(6916),o=e(9670),i=e(8173);t.exports=function(t,r,e){var a,u;o(t);try{if(!(a=i(t,"return"))){if("throw"===r)throw e;return e}a=n(a,t)}catch(t){u=!0,a=t}if("throw"===r)throw e;if(u)throw a;return o(a),e}},3061:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),a=e(8003),u=e(7497),c=function(){return this};t.exports=function(t,r,e,s){var f=r+" Iterator";return t.prototype=o(n,{next:i(+!s,e)}),a(t,f,!1,!0),u[f]=c,t}},1656:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(1913),a=e(6530),u=e(614),c=e(3061),s=e(9518),f=e(7674),p=e(8003),l=e(8880),v=e(8052),y=e(5112),g=e(7497),h=e(3383),d=a.PROPER,b=a.CONFIGURABLE,m=h.IteratorPrototype,x=h.BUGGY_SAFARI_ITERATORS,S=y("iterator"),w="keys",O="values",j="entries",P=function(){return this};t.exports=function(t,r,e,a,y,h,A){c(e,r,a);var E,I,T,L=function(t){if(t===y&&k)return k;if(!x&&t in M)return M[t];switch(t){case w:case O:case j:return function(){return new e(this,t)}}return function(){return new e(this)}},R=r+" Iterator",F=!1,M=t.prototype,C=M[S]||M["@@iterator"]||y&&M[y],k=!x&&C||L(y),D="Array"==r&&M.entries||C;if(D&&(E=s(D.call(new t)))!==Object.prototype&&E.next&&(i||s(E)===m||(f?f(E,m):u(E[S])||v(E,S,P)),p(E,R,!0,!0),i&&(g[R]=P)),d&&y==O&&C&&C.name!==O&&(!i&&b?l(M,"name",O):(F=!0,k=function(){return o(C,this)})),y)if(I={values:L(O),keys:h?k:L(w),entries:L(j)},A)for(T in I)(x||F||!(T in M))&&v(M,T,I[T]);else n({target:r,proto:!0,forced:x||F},I);return i&&!A||M[S]===k||v(M,S,k,{name:y}),g[r]=k,I}},3383:(t,r,e)=>{"use strict";var n,o,i,a=e(7293),u=e(614),c=e(111),s=e(30),f=e(9518),p=e(8052),l=e(5112),v=e(1913),y=l("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(n=o):g=!0),!c(n)||a((function(){var t={};return n[y].call(t)!==t}))?n={}:v&&(n=s(n)),u(n[y])||p(n,y,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},7497:t=>{t.exports={}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},6339:(t,r,e)=>{var n=e(7293),o=e(614),i=e(2597),a=e(9781),u=e(6530).CONFIGURABLE,c=e(2788),s=e(9909),f=s.enforce,p=s.get,l=Object.defineProperty,v=a&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),g=t.exports=function(t,r,e){"Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!i(t,"name")||u&&t.name!==r)&&(a?l(t,"name",{value:r,configurable:!0}):t.name=r),v&&e&&i(e,"arity")&&t.length!==e.arity&&l(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?a&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=y.join("string"==typeof r?r:"")),t};Function.prototype.toString=g((function(){return o(this)&&p(this).source||c(this)}),"toString")},4758:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),a=e(748),u=e(3501),c=e(490),s=e(317),f=e(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(l("")),t.close();var r=t.parentWindow.Object;return t=null,r},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,r;y="undefined"!=typeof document?document.domain&&n?v(n):((r=s("iframe")).style.display="none",c.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):v(n);for(var e=a.length;e--;)delete y.prototype[a[e]];return y()};u[f]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[f]=t):e=y(),void 0===r?e:i.f(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3353),i=e(3070),a=e(9670),u=e(5656),c=e(1956);r.f=n&&!o?Object.defineProperties:function(t,r){a(t);for(var e,n=u(r),o=c(r),s=o.length,f=0;s>f;)i.f(t,e=o[f++],n[e]);return t}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(3353),a=e(9670),u=e(4948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;r.f=n?i?function(t,r,e){if(a(t),r=u(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=f(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=u(r),a(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),a=e(9114),u=e(5656),c=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=c(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},1156:(t,r,e)=>{var n=e(4326),o=e(5656),i=e(8006).f,a=e(1589),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return a(u)}}(t):i(o(t))}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(2597),o=e(614),i=e(7908),a=e(6200),u=e(8544),c=a("IE_PROTO"),s=Object,f=s.prototype;t.exports=u?s.getPrototypeOf:function(t){var r=i(t);if(n(r,c))return r[c];var e=r.constructor;return o(e)&&r instanceof e?e.prototype:r instanceof s?f:null}},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,u=e(3501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},7674:(t,r,e)=>{var n=e(1702),o=e(9670),i=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,r,e)=>{var n=e(6916),o=e(614),i=e(111),a=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!i(u=n(e,t)))return u;if(o(e=t.valueOf)&&!i(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!i(u=n(e,t)))return u;throw a("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),a=e(5181),u=e(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},857:(t,r,e)=>{var n=e(7854);t.exports=n},261:(t,r,e)=>{"use strict";var n,o,i=e(6916),a=e(1702),u=e(1340),c=e(66),s=e(999),f=e(2309),p=e(30),l=e(9909).get,v=e(441),y=e(173),g=f("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,d=h,b=a("".charAt),m=a("".indexOf),x=a("".replace),S=a("".slice),w=(o=/b*/g,i(h,n=/a/,"a"),i(h,o,"a"),0!==n.lastIndex||0!==o.lastIndex),O=s.BROKEN_CARET,j=void 0!==/()??/.exec("")[1];(w||j||O||v||y)&&(d=function(t){var r,e,n,o,a,s,f,v=this,y=l(v),P=u(t),A=y.raw;if(A)return A.lastIndex=v.lastIndex,r=i(d,A,P),v.lastIndex=A.lastIndex,r;var E=y.groups,I=O&&v.sticky,T=i(c,v),L=v.source,R=0,F=P;if(I&&(T=x(T,"y",""),-1===m(T,"g")&&(T+="g"),F=S(P,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==b(P,v.lastIndex-1))&&(L="(?: "+L+")",F=" "+F,R++),e=new RegExp("^(?:"+L+")",T)),j&&(e=new RegExp("^"+L+"$(?!\\s)",T)),w&&(n=v.lastIndex),o=i(h,I?e:v,F),I?o?(o.input=S(o.input,R),o[0]=S(o[0],R),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:w&&o&&(v.lastIndex=v.global?o.index+o[0].length:n),j&&o&&o.length>1&&i(g,o[0],e,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&E)for(o.groups=s=p(null),a=0;a<E.length;a++)s[(f=E[a])[0]]=o[f[1]];return o}),t.exports=d},66:(t,r,e)=>{"use strict";var n=e(9670);t.exports=function(){var t=n(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r}},999:(t,r,e)=>{var n=e(7293),o=e(7854).RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||n((function(){return!o("a","y").sticky})),u=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:i}},441:(t,r,e)=>{var n=e(7293),o=e(7854).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},173:(t,r,e)=>{var n=e(7293),o=e(7854).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:(t,r,e)=>{var n=e(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},8003:(t,r,e)=>{var n=e(3070).f,o=e(2597),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.25.0",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,r,e)=>{var n=e(1702),o=e(9303),i=e(1340),a=e(4488),u=n("".charAt),c=n("".charCodeAt),s=n("".slice),f=function(t){return function(r,e){var n,f,p=i(a(r)),l=o(e),v=p.length;return l<0||l>=v?t?"":void 0:(n=c(p,l))<55296||n>56319||l+1===v||(f=c(p,l+1))<56320||f>57343?t?u(p,l):n:t?s(p,l,l+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},6293:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6532:(t,r,e)=>{var n=e(6916),o=e(5005),i=e(5112),a=e(8052);t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,u=i("toPrimitive");r&&!r[u]&&a(r,u,(function(t){return n(e,this)}),{arity:1})}},2015:(t,r,e)=>{var n=e(6293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:(t,r,e)=>{var n=e(4758);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,r,e)=>{var n=e(6916),o=e(111),i=e(2190),a=e(8173),u=e(2140),c=e(5112),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=a(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,r,e)=>{var n=e(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,r,e)=>{var n=e(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,r,e)=>{var n=e(7854),o=e(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:(t,r,e)=>{var n=e(857),o=e(2597),i=e(6061),a=e(3070).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},6061:(t,r,e)=>{var n=e(5112);r.f=n},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),a=e(9711),u=e(6293),c=e(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var r="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=c&&p?p(r):l(r)}return s[t]}},38:(t,r,e)=>{var n=e(2109),o=e(457);n({target:"Array",stat:!0,forced:!e(72)((function(t){Array.from(t)}))},{from:o})},6992:(t,r,e)=>{"use strict";var n=e(5656),o=e(1223),i=e(7497),a=e(9909),u=e(3070).f,c=e(1656),s=e(1913),f=e(9781),p="Array Iterator",l=a.set,v=a.getterFor(p);t.exports=c(Array,"Array",(function(t,r){l(this,{type:p,target:n(t),index:0,kind:r})}),(function(){var t=v(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values");var y=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&f&&"values"!==y.name)try{u(y,"name",{value:"values"})}catch(t){}},42:(t,r,e)=>{"use strict";var n=e(2109),o=e(3157),i=e(4411),a=e(111),u=e(1400),c=e(6244),s=e(5656),f=e(6135),p=e(5112),l=e(194),v=e(206),y=l("slice"),g=p("species"),h=Array,d=Math.max;n({target:"Array",proto:!0,forced:!y},{slice:function(t,r){var e,n,p,l=s(this),y=c(l),b=u(t,y),m=u(void 0===r?y:r,y);if(o(l)&&(e=l.constructor,(i(e)&&(e===h||o(e.prototype))||a(e)&&null===(e=e[g]))&&(e=void 0),e===h||void 0===e))return v(l,b,m);for(n=new(void 0===e?h:e)(d(m-b,0)),p=0;b<m;b++,p++)b in l&&f(n,p,l[b]);return n.length=p,n}})},309:(t,r,e)=>{var n=e(9781),o=e(6530).EXISTS,i=e(1702),a=e(3070).f,u=Function.prototype,c=i(u.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec);n&&!o&&a(u,"name",{configurable:!0,get:function(){try{return f(s,c(this))[1]}catch(t){return""}}})},8862:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(2104),a=e(6916),u=e(1702),c=e(7293),s=e(3157),f=e(614),p=e(111),l=e(2190),v=e(206),y=e(6293),g=o("JSON","stringify"),h=u(/./.exec),d=u("".charAt),b=u("".charCodeAt),m=u("".replace),x=u(1..toString),S=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,j=!y||c((function(){var t=o("Symbol")();return"[null]"!=g([t])||"{}"!=g({a:t})||"{}"!=g(Object(t))})),P=c((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),A=function(t,r){var e=v(arguments),n=r;if((p(r)||void 0!==t)&&!l(t))return s(r)||(r=function(t,r){if(f(n)&&(r=a(n,this,t,r)),!l(r))return r}),e[1]=r,i(g,null,e)},E=function(t,r,e){var n=d(e,r-1),o=d(e,r+1);return h(w,t)&&!h(O,o)||h(O,t)&&!h(w,n)?"\\u"+x(b(t,0),16):t};g&&n({target:"JSON",stat:!0,arity:3,forced:j||P},{stringify:function(t,r,e){var n=v(arguments),o=i(j?A:g,null,n);return P&&"string"==typeof o?m(o,S,E):o}})},9660:(t,r,e)=>{var n=e(2109),o=e(6293),i=e(7293),a=e(5181),u=e(7908);n({target:"Object",stat:!0,forced:!o||i((function(){a.f(1)}))},{getOwnPropertySymbols:function(t){var r=a.f;return r?r(u(t)):[]}})},1539:(t,r,e)=>{var n=e(1694),o=e(8052),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},916:(t,r,e)=>{"use strict";var n=e(2109),o=e(261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},601:(t,r,e)=>{"use strict";e(916);var n,o,i=e(2109),a=e(6916),u=e(614),c=e(9670),s=e(1340),f=(n=!1,(o=/[ac]/).exec=function(){return n=!0,/./.exec.apply(this,arguments)},!0===o.test("abc")&&n),p=/./.test;i({target:"RegExp",proto:!0,forced:!f},{test:function(t){var r=c(this),e=s(t),n=r.exec;if(!u(n))return a(p,r,e);var o=a(n,r,e);return null!==o&&(c(o),!0)}})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(1340),i=e(9909),a=e(1656),u="String Iterator",c=i.set,s=i.getterFor(u);a(String,"String",(function(t){c(this,{type:u,string:o(t),index:0})}),(function(){var t,r=s(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},4032:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(6916),a=e(1702),u=e(1913),c=e(9781),s=e(6293),f=e(7293),p=e(2597),l=e(7976),v=e(9670),y=e(5656),g=e(4948),h=e(1340),d=e(9114),b=e(30),m=e(1956),x=e(8006),S=e(1156),w=e(5181),O=e(1236),j=e(3070),P=e(6048),A=e(5296),E=e(8052),I=e(2309),T=e(6200),L=e(3501),R=e(9711),F=e(5112),M=e(6061),C=e(6800),k=e(6532),D=e(8003),_=e(9909),N=e(2092).forEach,G=T("hidden"),B="Symbol",U=_.set,$=_.getterFor(B),z=Object.prototype,H=o.Symbol,V=H&&H.prototype,W=o.TypeError,Y=o.QObject,K=O.f,X=j.f,q=S.f,J=A.f,Q=a([].push),Z=I("symbols"),tt=I("op-symbols"),rt=I("wks"),et=!Y||!Y.prototype||!Y.prototype.findChild,nt=c&&f((function(){return 7!=b(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=K(z,r);n&&delete z[r],X(t,r,e),n&&t!==z&&X(z,r,n)}:X,ot=function(t,r){var e=Z[t]=b(V);return U(e,{type:B,tag:t,description:r}),c||(e.description=r),e},it=function(t,r,e){t===z&&it(tt,r,e),v(t);var n=g(r);return v(e),p(Z,n)?(e.enumerable?(p(t,G)&&t[G][n]&&(t[G][n]=!1),e=b(e,{enumerable:d(0,!1)})):(p(t,G)||X(t,G,d(1,{})),t[G][n]=!0),nt(t,n,e)):X(t,n,e)},at=function(t,r){v(t);var e=y(r),n=m(e).concat(ft(e));return N(n,(function(r){c&&!i(ut,e,r)||it(t,r,e[r])})),t},ut=function(t){var r=g(t),e=i(J,this,r);return!(this===z&&p(Z,r)&&!p(tt,r))&&(!(e||!p(this,r)||!p(Z,r)||p(this,G)&&this[G][r])||e)},ct=function(t,r){var e=y(t),n=g(r);if(e!==z||!p(Z,n)||p(tt,n)){var o=K(e,n);return!o||!p(Z,n)||p(e,G)&&e[G][n]||(o.enumerable=!0),o}},st=function(t){var r=q(y(t)),e=[];return N(r,(function(t){p(Z,t)||p(L,t)||Q(e,t)})),e},ft=function(t){var r=t===z,e=q(r?tt:y(t)),n=[];return N(e,(function(t){!p(Z,t)||r&&!p(z,t)||Q(n,Z[t])})),n};s||(E(V=(H=function(){if(l(V,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?h(arguments[0]):void 0,r=R(t),e=function(t){this===z&&i(e,tt,t),p(this,G)&&p(this[G],r)&&(this[G][r]=!1),nt(this,r,d(1,t))};return c&&et&&nt(z,r,{configurable:!0,set:e}),ot(r,t)}).prototype,"toString",(function(){return $(this).tag})),E(H,"withoutSetter",(function(t){return ot(R(t),t)})),A.f=ut,j.f=it,P.f=at,O.f=ct,x.f=S.f=st,w.f=ft,M.f=function(t){return ot(F(t),t)},c&&(X(V,"description",{configurable:!0,get:function(){return $(this).description}}),u||E(z,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),N(m(rt),(function(t){C(t)})),n({target:B,stat:!0,forced:!s},{useSetter:function(){et=!0},useSimple:function(){et=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,r){return void 0===r?b(t):at(b(t),r)},defineProperty:it,defineProperties:at,getOwnPropertyDescriptor:ct}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:st}),k(),D(H,B),L[G]=!0},1817:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(7854),a=e(1702),u=e(2597),c=e(614),s=e(7976),f=e(1340),p=e(3070).f,l=e(9920),v=i.Symbol,y=v&&v.prototype;if(o&&c(v)&&(!("description"in y)||void 0!==v().description)){var g={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),r=s(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(g[r]=!0),r};l(h,v),h.prototype=y,y.constructor=h;var d="Symbol(test)"==String(v("test")),b=a(y.valueOf),m=a(y.toString),x=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),w=a("".slice);p(y,"description",{configurable:!0,get:function(){var t=b(this);if(u(g,t))return"";var r=m(t),e=d?w(r,7,-1):S(r,x,"$1");return""===e?void 0:e}}),n({global:!0,constructor:!0,forced:!0},{Symbol:h})}},763:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(2597),a=e(1340),u=e(2309),c=e(2015),s=u("string-to-symbol-registry"),f=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var r=a(t);if(i(s,r))return s[r];var e=o("Symbol")(r);return s[r]=e,f[e]=r,e}})},2165:(t,r,e)=>{e(6800)("iterator")},2526:(t,r,e)=>{e(4032),e(763),e(6620),e(8862),e(9660)},6620:(t,r,e)=>{var n=e(2109),o=e(2597),i=e(2190),a=e(6330),u=e(2309),c=e(2015),s=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!i(t))throw TypeError(a(t)+" is not a symbol");if(o(s,t))return s[t]}})},3948:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8509),a=e(6992),u=e(8880),c=e(5112),s=c("iterator"),f=c("toStringTag"),p=a.values,l=function(t,r){if(t){if(t[s]!==p)try{u(t,s,p)}catch(r){t[s]=p}if(t[f]||u(t,f,r),o[r])for(var e in a)if(t[e]!==a[e])try{u(t,e,a[e])}catch(r){t[e]=a[e]}}};for(var v in o)l(n[v]&&n[v].prototype,v);l(i,"DOMTokenList")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.p;var r=document.getElementById("container-game"),n=function(t,r){return Math.round(Math.random()*(t-r)+r)},o=function(){function r(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.hole=n(15,25)}var e,o;return e=r,(o=[{key:"generateHeightPipesBasedOnHole",value:function(t){var r=100-this.hole;t.heightPipe1=n(0,r);for(var e=r-10;t.heightPipe1<=10||t.heightPipe1>=e;)t.heightPipe1=n(0,r);t.heightPipe2=r-t.heightPipe1}}])&&t(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),r}(),i=function(t,r){var e=parseInt(t.style.right),n=parseInt(r.style.right);setTimeout((function(){t.style.right="".concat(e+1,"%"),r.style.right="".concat(n+1,"%"),a(t,r)}),50)},a=function(t,r){if(parseInt(t.style.right)>100||parseInt(t.style.right)<0){if(parseInt(t.style.right)>100)return t.remove(),void r.remove();i(t,r)}else i(t,r)};var u;function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function s(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,r,e){return r&&s(t.prototype,r),e&&s(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}e(42),e(1539),e(309),e(38),e(8783),e(916),e(601),e(2526),e(1817),e(2165),e(6992),e(3948);var p=document.getElementById("flappy-bird"),l=f((function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}));u=l,l.counterDec=1,l.handlerArray=[],l.execMotionDown=function(){var t=setTimeout((function(){u.currentPosition=parseInt(p.style.top),p.style.top="".concat(u.currentPosition+u.counterDec++,"%"),u.handlerArray.push(t),console.log(u.handlerArray),u.logicDownMotion()}),500)},l.logicDownMotion=function(){u.currentPosition=parseInt(p.style.top),u.currentPosition<100&&u.execMotionDown()},l.moveUp=function(){console.log(u.handlerArray);var t,r=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}(u.handlerArray);try{for(r.s();!(t=r.n()).done;){var e=t.value;clearTimeout(e)}}catch(t){r.e(t)}finally{r.f()}console.log(u.handlerArray),u.counterDec=1,p.hasAttribute("style")?(u.currentPosition=parseInt(p.style.top),p.style.top="".concat(u.currentPosition-5,"%")):(p.style.top="50%",u.currentPosition=parseInt(p.style.top),p.style.top="".concat(u.currentPosition-5,"%")),setTimeout(u.logicDownMotion,500)};const v=l;setInterval((function(){var t,e,n,i=new o;i.generateHeightPipesBasedOnHole(i),t=i,e=document.createElement("img"),n=document.createElement("img"),e.src="../../images/pipe.png",n.src="../../images/pipe.png",e.style.height="".concat(t.heightPipe1,"%"),n.style.height="".concat(t.heightPipe2,"%"),e.style.right="-20%",n.style.right="-20%",e.className="pipe-1-down-direction",n.className="pipe-2-up-direction",r.append(e),r.append(n),a(e,n)}),3e3),window.addEventListener("click",v.moveUp)})()})();