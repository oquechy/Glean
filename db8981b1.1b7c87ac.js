(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(129)),i=(t(39),["components"]),c={id:"intro",title:"Introduction",sidebar_label:"Introduction"},l={unversionedId:"angle/intro",id:"angle/intro",isDocsHomePage:!1,title:"Introduction",description:"Angle is Glean\u2019s schema and query language.  It is a declarative query",source:"@site/../docs/angle/intro.md",slug:"/angle/intro",permalink:"/docs/angle/intro",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Querying Glean",permalink:"/docs/query/intro"},next:{title:"Angle Guide",permalink:"/docs/angle/guide"}},u=[],p={toc:u};function s(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Angle is Glean\u2019s schema and query language.  It is a declarative query\nlanguage based on logic programming and Datalog, and is designed to be\nparticularly suited for finding and extracting data from Glean."),Object(o.b)("p",null,"To give you a flavour of the query language, here is how we could\nreturn the names of all the member declarations defined in a\nJavascript file ",Object(o.b)("inlineCode",{parentName:"p"},"project/myfile.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'N where\n  flow.FileDeclaration {\n    file = "project/myfile.js",\n    declaration = {\n      memberDecl = {\n        name = N\n      }\n    }\n  }\n')),Object(o.b)("p",null,"To learn about Angle, start with the ",Object(o.b)("a",{parentName:"p",href:"guide"},"Guide"),"."))}s.isMDXComponent=!0},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);