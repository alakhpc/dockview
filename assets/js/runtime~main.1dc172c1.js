(()=>{"use strict";var e,a,f,c,b,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={exports:{}};return d[e].call(f.exports,f,f.exports,r),f.exports}r.m=d,e=[],r.O=(a,f,c,b)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,c,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(b,d),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({45:"080482b1",53:"935f2afb",205:"83d480e9",301:"e67bc143",533:"b2b675dd",627:"8ebb4ab1",854:"7fc83237",890:"6dbbc280",1394:"795cd3db",1455:"4a27f0af",1477:"b2f554cd",1713:"a7023ddc",2469:"8930f2be",2535:"814f3328",2818:"96bc3f3c",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3489:"81d88ff9",3608:"9e4087bc",3737:"3875b9e1",3854:"e1fcafe5",4013:"01a85c17",4173:"4edc808e",4837:"8d5e8a01",5159:"c5c39f25",5164:"e3ad1f13",5189:"2bcd7dda",5199:"a88a0098",5562:"613c5af1",5588:"4bf480fb",5996:"57502b2a",6072:"c29a6ee1",6103:"ccc49370",6154:"0613c60c",6843:"4d6c3daa",6942:"e224ad6b",7272:"be999520",7318:"dfb2590f",7414:"393be207",7438:"9c021584",7555:"64566cc6",7615:"f7998abb",7918:"17896441",8073:"ce438b21",8610:"6875c492",8708:"5faaa310",8834:"3ca89d9d",9151:"bfcdc23a",9397:"baa6b714",9514:"1be78505",9533:"351884eb",9817:"14eb3368",9835:"f59d8d36"}[e]||e)+"."+{45:"a4d33446",53:"eb2c1987",205:"ffea5776",301:"41b59eab",533:"f8de8c30",627:"20a468a1",854:"b3a7c079",890:"48a83074",1394:"631efda4",1455:"0b0af109",1477:"86436a52",1713:"e1ebeb05",2006:"dd9dddbb",2469:"c5a213e4",2535:"c3c76b2c",2818:"c7ffdb09",3085:"9ad91ab6",3089:"d9787151",3237:"b59afa2a",3489:"53e8b0db",3608:"d9aed09c",3737:"288d2209",3854:"8d637b25",4013:"8bbc8a55",4173:"cc044644",4506:"4a5f1fb5",4837:"6d03f491",5159:"31a10a1d",5164:"f43a4ada",5189:"c9ec21b9",5199:"6f0dc0e6",5562:"dbc7c480",5588:"64885087",5996:"474600af",6072:"aa770ba9",6103:"c0cd1421",6154:"19acc676",6209:"72dd9863",6843:"baff5de1",6942:"5810e15c",7272:"590bc3a4",7318:"7d825dfe",7414:"a9128fbf",7438:"7e45dcde",7555:"59353173",7615:"f0eb0f8a",7918:"fd1ff481",8073:"c013ddf0",8610:"825affa9",8632:"7da03781",8708:"820af064",8834:"935bea52",9151:"f7d27933",9397:"e9946372",9514:"e2adecd0",9533:"ad2d9dce",9817:"05849fbe",9835:"858897e9"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="dockview-docs:",r.l=(e,a,f,d)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"7918","080482b1":"45","935f2afb":"53","83d480e9":"205",e67bc143:"301",b2b675dd:"533","8ebb4ab1":"627","7fc83237":"854","6dbbc280":"890","795cd3db":"1394","4a27f0af":"1455",b2f554cd:"1477",a7023ddc:"1713","8930f2be":"2469","814f3328":"2535","96bc3f3c":"2818","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237","81d88ff9":"3489","9e4087bc":"3608","3875b9e1":"3737",e1fcafe5:"3854","01a85c17":"4013","4edc808e":"4173","8d5e8a01":"4837",c5c39f25:"5159",e3ad1f13:"5164","2bcd7dda":"5189",a88a0098:"5199","613c5af1":"5562","4bf480fb":"5588","57502b2a":"5996",c29a6ee1:"6072",ccc49370:"6103","0613c60c":"6154","4d6c3daa":"6843",e224ad6b:"6942",be999520:"7272",dfb2590f:"7318","393be207":"7414","9c021584":"7438","64566cc6":"7555",f7998abb:"7615",ce438b21:"8073","6875c492":"8610","5faaa310":"8708","3ca89d9d":"8834",bfcdc23a:"9151",baa6b714:"9397","1be78505":"9514","351884eb":"9533","14eb3368":"9817",f59d8d36:"9835"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>c=e[a]=[f,b]));f.push(c[2]=b);var d=r.p+r.u(a),t=new Error;r.l(d,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,b,d=f[0],t=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();
//# sourceMappingURL=runtime~main.1dc172c1.js.map