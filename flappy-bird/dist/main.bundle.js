(()=>{var t={9662:(t,e,r)=>{var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9483:(t,e,r)=>{var n=r(4411),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a constructor")}},6077:(t,e,r)=>{var n=r(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070).f,c=n("unscopables"),u=Array.prototype;null==u[c]&&i(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},9670:(t,e,r)=>{var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),c=function(t){return function(e,r,c){var u,a=n(e),s=i(a),f=o(c,s);if(t&&r!=r){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),c=r(7908),u=r(6244),a=r(5417),s=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,h,g,d){for(var b,m,x=c(y),O=i(x),w=n(h,g),S=u(O),j=0,P=d||a,E=e?P(y,S):r||l?P(y,0):void 0;S>j;j++)if((v||j in O)&&(m=w(b=O[j],j,x),t))if(e)E[j]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(E,b)}else switch(t){case 4:return!1;case 7:s(E,b)}return p?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},1589:(t,e,r)=>{var n=r(1400),o=r(6244),i=r(6135),c=Array,u=Math.max;t.exports=function(t,e,r){for(var a=o(t),s=n(e,a),f=n(void 0===r?a:r,a),p=c(u(f-s,0)),l=0;s<f;s++,l++)i(p,l,t[s]);return p.length=l,p}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},7475:(t,e,r)=>{var n=r(3157),o=r(4411),i=r(111),c=r(5112)("species"),u=Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,(o(e)&&(e===u||n(e.prototype))||i(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?u:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(614),i=r(4326),c=r(5112)("toStringTag"),u=Object,a="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),c))?r:a?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,e,r){for(var u=o(e),a=c.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||r&&n(r,p)||a(t,p,s(e,p))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,r)=>{"use strict";var n=r(4948),o=r(3070),i=r(9114);t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},8052:(t,e,r)=>{var n=r(614),o=r(3070),i=r(6339),c=r(3072);t.exports=function(t,e,r,u){u||(u={});var a=u.enumerable,s=void 0!==u.name?u.name:e;if(n(r)&&i(r,s,u),u.global)a?t[e]=r:c(e,r);else{try{u.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),c=r(8113),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),c=r(8052),u=r(3072),a=r(9920),s=r(4705);t.exports=function(t,e){var r,f,p,l,v,y=t.target,h=t.global,g=t.stat;if(r=h?n:g?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in e){if(l=e[f],p=t.dontCallGetSet?(v=o(r,f))&&v.value:r[f],!s(h?f:y+(g?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(r,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.apply,c=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?c.bind(i):function(){return c.apply(i,arguments)})},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),c=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?c(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7065:(t,e,r)=>{"use strict";var n=r(1702),o=r(9662),i=r(111),c=r(2597),u=r(206),a=r(4374),s=Function,f=n([].concat),p=n([].join),l={},v=function(t,e,r){if(!c(l,e)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";l[e]=s("C,a","return new C("+p(n,",")+")")}return l[e](t,r)};t.exports=a?s.bind:function(t){var e=o(this),r=e.prototype,n=u(arguments,1),c=function(){var r=f(n,u(arguments));return this instanceof c?v(e,r.length,r):e.apply(t,r)};return i(r)&&(c.prototype=r),c}},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,s=u&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:s}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,c=o.call,u=n&&i.bind(c,c);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(4326),c=Object,u=n("".split);t.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):c(t)}:c},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,c=r(4811),u=r(7854),a=r(1702),s=r(111),f=r(8880),p=r(2597),l=r(5465),v=r(6200),y=r(3501),h="Object already initialized",g=u.TypeError,d=u.WeakMap;if(c||l.state){var b=l.state||(l.state=new d),m=a(b.get),x=a(b.has),O=a(b.set);n=function(t,e){if(x(b,t))throw g(h);return e.facade=t,O(b,t,e),e},o=function(t){return m(b,t)||{}},i=function(t){return x(b,t)}}else{var w=v("state");y[w]=!0,n=function(t,e){if(p(t,w))throw g(h);return e.facade=t,f(t,w,e),e},o=function(t){return p(t,w)?t[w]:{}},i=function(t){return p(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),c=r(648),u=r(5005),a=r(2788),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.exec(s),h=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,a(t))}catch(t){return!0}};g.sham=!0,t.exports=!p||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?g:h},5032:(t,e,r)=>{var n=r(2597);t.exports=function(t){return void 0!==t&&(n(t,"value")||n(t,"writable"))}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,c=function(t,e){var r=a[u(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},s=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},8554:t=>{t.exports=function(t){return null==t}},111:(t,e,r)=>{var n=r(614),o="object"==typeof document&&document.all,i=void 0===o&&void 0!==o;t.exports=i?function(t){return"object"==typeof t?null!==t:n(t)||t===o}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(5005),o=r(614),i=r(7976),c=r(3307),u=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,u(t))}},3061:(t,e,r)=>{"use strict";var n=r(3383).IteratorPrototype,o=r(30),i=r(9114),c=r(8003),u=r(7497),a=function(){return this};t.exports=function(t,e,r,s){var f=e+" Iterator";return t.prototype=o(n,{next:i(+!s,r)}),c(t,f,!1,!0),u[f]=a,t}},1656:(t,e,r)=>{"use strict";var n=r(2109),o=r(6916),i=r(1913),c=r(6530),u=r(614),a=r(3061),s=r(9518),f=r(7674),p=r(8003),l=r(8880),v=r(8052),y=r(5112),h=r(7497),g=r(3383),d=c.PROPER,b=c.CONFIGURABLE,m=g.IteratorPrototype,x=g.BUGGY_SAFARI_ITERATORS,O=y("iterator"),w="keys",S="values",j="entries",P=function(){return this};t.exports=function(t,e,r,c,y,g,E){a(r,e,c);var T,R,A,I=function(t){if(t===y&&_)return _;if(!x&&t in C)return C[t];switch(t){case w:case S:case j:return function(){return new r(this,t)}}return function(){return new r(this)}},L=e+" Iterator",F=!1,C=t.prototype,k=C[O]||C["@@iterator"]||y&&C[y],_=!x&&k||I(y),M="Array"==e&&C.entries||k;if(M&&(T=s(M.call(new t)))!==Object.prototype&&T.next&&(i||s(T)===m||(f?f(T,m):u(T[O])||v(T,O,P)),p(T,L,!0,!0),i&&(h[L]=P)),d&&y==S&&k&&k.name!==S&&(!i&&b?l(C,"name",S):(F=!0,_=function(){return o(k,this)})),y)if(R={values:I(S),keys:g?_:I(w),entries:I(j)},E)for(A in R)(x||F||!(A in C))&&v(C,A,R[A]);else n({target:e,proto:!0,forced:x||F},R);return i&&!E||C[O]===_||v(C,O,_,{name:y}),h[e]=_,R}},3383:(t,e,r)=>{"use strict";var n,o,i,c=r(7293),u=r(614),a=r(111),s=r(30),f=r(9518),p=r(8052),l=r(5112),v=r(1913),y=l("iterator"),h=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(n=o):h=!0),!a(n)||c((function(){var t={};return n[y].call(t)!==t}))?n={}:v&&(n=s(n)),u(n[y])||p(n,y,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}},7497:t=>{t.exports={}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{var n=r(7293),o=r(614),i=r(2597),c=r(9781),u=r(6530).CONFIGURABLE,a=r(2788),s=r(9909),f=s.enforce,p=s.get,l=Object.defineProperty,v=c&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),h=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||u&&t.name!==e)&&(c?l(t,"name",{value:e,configurable:!0}):t.name=e),v&&r&&i(r,"arity")&&t.length!==r.arity&&l(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?c&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=y.join("string"==typeof e?e:"")),t};Function.prototype.toString=h((function(){return o(this)&&p(this).source||a(this)}),"toString")},4758:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),c=r(748),u=r(3501),a=r(490),s=r(317),f=r(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(l("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;y="undefined"!=typeof document?document.domain&&n?v(n):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):v(n);for(var r=c.length;r--;)delete y.prototype[c[r]];return y()};u[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=y(),void 0===e?r:i.f(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3353),i=r(3070),c=r(9670),u=r(5656),a=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){c(t);for(var r,n=u(e),o=a(e),s=o.length,f=0;s>f;)i.f(t,r=o[f++],n[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(3353),c=r(9670),u=r(4948),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=n?i?function(t,e,r){if(c(t),e=u(e),c(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(c(t),e=u(e),c(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),c=r(9114),u=r(5656),a=r(4948),s=r(2597),f=r(4664),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=u(t),e=a(e),f)try{return p(t,e)}catch(t){}if(s(t,e))return c(!o(i.f,t,e),t[e])}},1156:(t,e,r)=>{var n=r(4326),o=r(5656),i=r(8006).f,c=r(1589),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return c(u)}}(t):i(o(t))}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(2597),o=r(614),i=r(7908),c=r(6200),u=r(8544),a=c("IE_PROTO"),s=Object,f=s.prototype;t.exports=u?s.getPrototypeOf:function(t){var e=i(t);if(n(e,a))return e[a];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof s?f:null}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),c=r(1318).indexOf,u=r(3501),a=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(u,r)&&o(n,r)&&a(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~c(f,r)||a(f,r));return f}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(6916),o=r(614),i=r(111),c=TypeError;t.exports=function(t,e){var r,u;if("string"===e&&o(r=t.toString)&&!i(u=n(r,t)))return u;if(o(r=t.valueOf)&&!i(u=n(r,t)))return u;if("string"!==e&&o(r=t.toString)&&!i(u=n(r,t)))return u;throw c("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),c=r(5181),u=r(9670),a=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(u(t)),r=c.f;return r?a(e,r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},4488:(t,e,r)=>{var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},8003:(t,e,r)=>{var n=r(3070).f,o=r(2597),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:e})}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3072),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,e,r)=>{var n=r(1702),o=r(9303),i=r(1340),c=r(4488),u=n("".charAt),a=n("".charCodeAt),s=n("".slice),f=function(t){return function(e,r){var n,f,p=i(c(e)),l=o(r),v=p.length;return l<0||l>=v?t?"":void 0:(n=a(p,l))<55296||n>56319||l+1===v||(f=a(p,l+1))<56320||f>57343?t?u(p,l):n:t?s(p,l,l+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},6293:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6532:(t,e,r)=>{var n=r(6916),o=r(5005),i=r(5112),c=r(8052);t.exports=function(){var t=o("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,u=i("toPrimitive");e&&!e[u]&&c(e,u,(function(t){return n(r,this)}),{arity:1})}},2015:(t,e,r)=>{var n=r(6293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{var n=r(6916),o=r(111),i=r(2190),c=r(8173),u=r(2140),a=r(5112),s=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,a=c(t,f);if(a){if(void 0===e&&(e="default"),r=n(a,t,e),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:(t,e,r)=>{var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,r)=>{var n=r(7854),o=r(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:(t,e,r)=>{var n=r(857),o=r(2597),i=r(6061),c=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},6061:(t,e,r)=>{var n=r(5112);e.f=n},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),c=r(9711),u=r(6293),a=r(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=a&&p?p(e):l(e)}return s[t]}},6992:(t,e,r)=>{"use strict";var n=r(5656),o=r(1223),i=r(7497),c=r(9909),u=r(3070).f,a=r(1656),s=r(1913),f=r(9781),p="Array Iterator",l=c.set,v=c.getterFor(p);t.exports=a(Array,"Array",(function(t,e){l(this,{type:p,target:n(t),index:0,kind:e})}),(function(){var t=v(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");var y=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&f&&"values"!==y.name)try{u(y,"name",{value:"values"})}catch(t){}},8862:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2104),c=r(6916),u=r(1702),a=r(7293),s=r(3157),f=r(614),p=r(111),l=r(2190),v=r(206),y=r(6293),h=o("JSON","stringify"),g=u(/./.exec),d=u("".charAt),b=u("".charCodeAt),m=u("".replace),x=u(1..toString),O=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,j=!y||a((function(){var t=o("Symbol")();return"[null]"!=h([t])||"{}"!=h({a:t})||"{}"!=h(Object(t))})),P=a((function(){return'"\\udf06\\ud834"'!==h("\udf06\ud834")||'"\\udead"'!==h("\udead")})),E=function(t,e){var r=v(arguments),n=e;if((p(e)||void 0!==t)&&!l(t))return s(e)||(e=function(t,e){if(f(n)&&(e=c(n,this,t,e)),!l(e))return e}),r[1]=e,i(h,null,r)},T=function(t,e,r){var n=d(r,e-1),o=d(r,e+1);return g(w,t)&&!g(S,o)||g(S,t)&&!g(w,n)?"\\u"+x(b(t,0),16):t};h&&n({target:"JSON",stat:!0,arity:3,forced:j||P},{stringify:function(t,e,r){var n=v(arguments),o=i(j?E:h,null,n);return P&&"string"==typeof o?m(o,O,T):o}})},5003:(t,e,r)=>{var n=r(2109),o=r(7293),i=r(5656),c=r(1236).f,u=r(9781),a=o((function(){c(1)}));n({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},9660:(t,e,r)=>{var n=r(2109),o=r(6293),i=r(7293),c=r(5181),u=r(7908);n({target:"Object",stat:!0,forced:!o||i((function(){c.f(1)}))},{getOwnPropertySymbols:function(t){var e=c.f;return e?e(u(t)):[]}})},489:(t,e,r)=>{var n=r(2109),o=r(7293),i=r(7908),c=r(9518),u=r(8544);n({target:"Object",stat:!0,forced:o((function(){c(1)})),sham:!u},{getPrototypeOf:function(t){return c(i(t))}})},1539:(t,e,r)=>{var n=r(1694),o=r(8052),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},2419:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2104),c=r(7065),u=r(9483),a=r(9670),s=r(111),f=r(30),p=r(7293),l=o("Reflect","construct"),v=Object.prototype,y=[].push,h=p((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),g=!p((function(){l((function(){}))})),d=h||g;n({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){u(t),a(e);var r=arguments.length<3?t:u(arguments[2]);if(g&&!h)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return i(y,n,e),new(i(c,t,n))}var o=r.prototype,p=f(s(o)?o:v),d=i(t,p,e);return s(d)?d:p}})},4819:(t,e,r)=>{var n=r(2109),o=r(6916),i=r(111),c=r(9670),u=r(5032),a=r(1236),s=r(9518);n({target:"Reflect",stat:!0},{get:function t(e,r){var n,f,p=arguments.length<3?e:arguments[2];return c(e)===p?e[r]:(n=a.f(e,r))?u(n)?n.value:void 0===n.get?void 0:o(n.get,p):i(f=s(e))?t(f,r,p):void 0}})},8783:(t,e,r)=>{"use strict";var n=r(8710).charAt,o=r(1340),i=r(9909),c=r(1656),u="String Iterator",a=i.set,s=i.getterFor(u);c(String,"String",(function(t){a(this,{type:u,string:o(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4032:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(6916),c=r(1702),u=r(1913),a=r(9781),s=r(6293),f=r(7293),p=r(2597),l=r(7976),v=r(9670),y=r(5656),h=r(4948),g=r(1340),d=r(9114),b=r(30),m=r(1956),x=r(8006),O=r(1156),w=r(5181),S=r(1236),j=r(3070),P=r(6048),E=r(5296),T=r(8052),R=r(2309),A=r(6200),I=r(3501),L=r(9711),F=r(5112),C=r(6061),k=r(6800),_=r(6532),M=r(8003),D=r(9909),B=r(2092).forEach,G=A("hidden"),N="Symbol",z=D.set,H=D.getterFor(N),U=Object.prototype,V=o.Symbol,$=V&&V.prototype,W=o.TypeError,Y=o.QObject,q=S.f,J=j.f,X=O.f,K=E.f,Q=c([].push),Z=R("symbols"),tt=R("op-symbols"),et=R("wks"),rt=!Y||!Y.prototype||!Y.prototype.findChild,nt=a&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(U,e);n&&delete U[e],J(t,e,r),n&&t!==U&&J(U,e,n)}:J,ot=function(t,e){var r=Z[t]=b($);return z(r,{type:N,tag:t,description:e}),a||(r.description=e),r},it=function(t,e,r){t===U&&it(tt,e,r),v(t);var n=h(e);return v(r),p(Z,n)?(r.enumerable?(p(t,G)&&t[G][n]&&(t[G][n]=!1),r=b(r,{enumerable:d(0,!1)})):(p(t,G)||J(t,G,d(1,{})),t[G][n]=!0),nt(t,n,r)):J(t,n,r)},ct=function(t,e){v(t);var r=y(e),n=m(r).concat(ft(r));return B(n,(function(e){a&&!i(ut,r,e)||it(t,e,r[e])})),t},ut=function(t){var e=h(t),r=i(K,this,e);return!(this===U&&p(Z,e)&&!p(tt,e))&&(!(r||!p(this,e)||!p(Z,e)||p(this,G)&&this[G][e])||r)},at=function(t,e){var r=y(t),n=h(e);if(r!==U||!p(Z,n)||p(tt,n)){var o=q(r,n);return!o||!p(Z,n)||p(r,G)&&r[G][n]||(o.enumerable=!0),o}},st=function(t){var e=X(y(t)),r=[];return B(e,(function(t){p(Z,t)||p(I,t)||Q(r,t)})),r},ft=function(t){var e=t===U,r=X(e?tt:y(t)),n=[];return B(r,(function(t){!p(Z,t)||e&&!p(U,t)||Q(n,Z[t])})),n};s||(T($=(V=function(){if(l($,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=L(t),r=function(t){this===U&&i(r,tt,t),p(this,G)&&p(this[G],e)&&(this[G][e]=!1),nt(this,e,d(1,t))};return a&&rt&&nt(U,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),T(V,"withoutSetter",(function(t){return ot(L(t),t)})),E.f=ut,j.f=it,P.f=ct,S.f=at,x.f=O.f=st,w.f=ft,C.f=function(t){return ot(F(t),t)},a&&(J($,"description",{configurable:!0,get:function(){return H(this).description}}),u||T(U,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:V}),B(m(et),(function(t){k(t)})),n({target:N,stat:!0,forced:!s},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:st}),_(),M(V,N),I[G]=!0},1817:(t,e,r)=>{"use strict";var n=r(2109),o=r(9781),i=r(7854),c=r(1702),u=r(2597),a=r(614),s=r(7976),f=r(1340),p=r(3070).f,l=r(9920),v=i.Symbol,y=v&&v.prototype;if(o&&a(v)&&(!("description"in y)||void 0!==v().description)){var h={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(h[e]=!0),e};l(g,v),g.prototype=y,y.constructor=g;var d="Symbol(test)"==String(v("test")),b=c(y.valueOf),m=c(y.toString),x=/^Symbol\((.*)\)[^)]+$/,O=c("".replace),w=c("".slice);p(y,"description",{configurable:!0,get:function(){var t=b(this);if(u(h,t))return"";var e=m(t),r=d?w(e,7,-1):O(e,x,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:g})}},763:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2597),c=r(1340),u=r(2309),a=r(2015),s=u("string-to-symbol-registry"),f=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=c(t);if(i(s,e))return s[e];var r=o("Symbol")(e);return s[e]=r,f[r]=e,r}})},2165:(t,e,r)=>{r(6800)("iterator")},2526:(t,e,r)=>{r(4032),r(763),r(6620),r(8862),r(9660)},6620:(t,e,r)=>{var n=r(2109),o=r(2597),i=r(2190),c=r(6330),u=r(2309),a=r(2015),s=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!a},{keyFor:function(t){if(!i(t))throw TypeError(c(t)+" is not a symbol");if(o(s,t))return s[t]}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),c=r(8533),u=r(8880),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(e){t.forEach=c}};for(var s in o)o[s]&&a(n[s]&&n[s].prototype);a(i)},3948:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),c=r(6992),u=r(8880),a=r(5112),s=a("iterator"),f=a("toStringTag"),p=c.values,l=function(t,e){if(t){if(t[s]!==p)try{u(t,s,p)}catch(e){t[s]=p}if(t[f]||u(t,f,e),o[e])for(var r in c)if(t[r]!==c[r])try{u(t,r,c[r])}catch(e){t[r]=c[r]}}};for(var v in o)l(n[v]&&n[v].prototype,v);l(i,"DOMTokenList")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})();var n={};(()=>{"use strict";r.d(n,{t:()=>C}),r(1539),r(4747),r.p,r(5003),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948),r(489),r(4819),r(2419);var t,e,o,i=document.getElementById("update-result"),c=document.getElementById("start-button"),u=document.getElementById("banner"),a=document.getElementById("container-game"),s=document.getElementById("flappy-bird"),f=document.getElementById("difficulty");function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,r){return e&&p(t.prototype,e),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}var y,h=y=l((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));h.moveDown=function(){y.currentPosition=parseFloat(s.style.top),s.style.top="".concat(y.currentPosition+(y.counterDec+=e/10),"%")},h.moveUp=function(){clearInterval(y.handler),y.counterDec=e/10,y.currentPosition=parseFloat(s.style.top),s.style.top="".concat(y.currentPosition-o,"%"),y.handler=setInterval(y.moveDown,50)};const g=h=y=function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c}([function(t){}],h);var d={point:0,addPoint:function(t){t?(this.point=0,i.textContent="".concat(this.point)):(this.point++,i.textContent="".concat(this.point))},gameOverScore:function(){var t=document.getElementById("final-score");null!==t&&u.removeChild(t),c.textContent="Restart";var e=document.createElement("p");e.textContent="Your final score is ".concat(this.point),e.setAttribute("id","final-score"),u.insertBefore(e,u.children[0])}},b=[];const m=function(t,e,r){var n,o,i;if(b.every((function(t){return e!==t}))&&(n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i=s.getBoundingClientRect()),void 0===n||void 0===o||void 0===i)return!0;var c=i.right+i.width,a=i.y+i.height,f=n.y+n.height,p=o.y+o.height;if(o.right>=i.right&&o.right<=c&&(a>o.y||i.y<f)||i.y<n.y||i.y+i.height>p)return window.removeEventListener("keyup",C),clearInterval(g.handler),i.y+i.height>p&&(s.removeAttribute("style"),s.classList.remove("set-start-flappy"),s.style.bottom="0%"),i.y<n.y&&(s.removeAttribute("style"),s.style.top="0%"),clearInterval(r),d.gameOverScore(),u.classList.remove("hidden"),b.length=0,!1;if(o.right<i.right&&b.every((function(t){return e!==t}))){d.addPoint(!1);var l=e;b.push(l)}return!0};function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function O(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return w(t)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=j(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function j(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,e,r){return e&&T(t.prototype,e),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}var I=function(t,e){return Math.round(Math.random()*(t-e)+e)},L=function(){function t(){E(this,t),this.hole=I(20,30)}return R(t,[{key:"generateHeightPipesBasedOnHole",value:function(t){var e=100-this.hole;t.heightPipe1=I(0,e);for(var r=e-10;t.heightPipe1<=10||t.heightPipe1>=r;)t.heightPipe1=I(0,e);t.heightPipe2=e-t.heightPipe1}}]),t}();L.stopGame=!0;var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(o,t);var e,r,n=(e=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=P(e);if(r){var o=P(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return O(this,t)});function o(){var t,e;return E(this,o),(e=n.apply(this,arguments)).nextMovement=function(t,r){var n=parseFloat(t.style.right),o=parseFloat(r.style.right);setTimeout((function(){L.stopGame&&(t.style.right="".concat(n+.5,"%"),r.style.right="".concat(o+.5,"%"),L.stopGame=m(t,r,L.pipesInterval),L.stopGame&&e.logicMotionPipes(t,r))}),25)},e.logicMotionPipes=function(t,r){parseFloat(t.style.right)>100?(t.remove(),r.remove()):e.nextMovement(t,r)},e.createPipes=function(r){S((t=w(e),P(o.prototype)),"generateHeightPipesBasedOnHole",t).call(t,r),L.stopGame=!0;var n=document.createElement("img"),i=document.createElement("img");n.src="../../images/pipe.png",i.src="../../images/pipe.png",n.style.height="".concat(r.heightPipe1,"%"),i.style.height="".concat(r.heightPipe2,"%"),n.style.right="-20%",i.style.right="-20%",n.className="pipe-1-down-direction",i.className="pipe-2-up-direction",a.append(n),a.append(i),e.logicMotionPipes(n,i)},e}return R(o)}(L);F=function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"==typeof Reflect?"undefined":A(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c}([function(t){}],F);var C=function(){return g.moveUp()};c.onclick=function(){a.querySelectorAll("img").forEach((function(t){t.remove()})),function(){var r=f.options[f.selectedIndex].value;switch(parseInt(r)){case 1:t=3e3,e=1,o=5;break;case 2:t=2e3,e=2,o=8;break;case 3:t=1500,e=3,o=10}}(),u.classList.add("hidden"),s.style.top="50%",window.addEventListener("keyup",C),d.addPoint(!0),setTimeout((function(){var e=new F;e.createPipes(e),L.pipesInterval=setInterval((function(){var t=new F;t.createPipes(t)}),t)}),0)}})()})();