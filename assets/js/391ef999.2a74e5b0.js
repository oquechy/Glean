"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9357],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,d=s["".concat(a,".").concat(m)]||s[m]||f[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66233:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(87462),l=t(63366),o=(t(67294),t(3905)),a=(t(44256),["components"]),i={id:"style",title:"Angle Style Guide",sidebar_label:"Style Guide"},c=void 0,u={unversionedId:"angle/style",id:"angle/style",isDocsHomePage:!1,title:"Angle Style Guide",description:"Typical Angle style uses the following rules:",source:"@site/docs/angle/style.md",sourceDirName:"angle",slug:"/angle/style",permalink:"/docs/angle/style",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/angle/style.md",tags:[],version:"current",frontMatter:{id:"style",title:"Angle Style Guide",sidebar_label:"Style Guide"},sidebar:"someSidebar",previous:{title:"Reference",permalink:"/docs/angle/reference"},next:{title:"Haskell",permalink:"/docs/query/api/haskell"}},s=[],p={toc:s};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Typical Angle style uses the following rules:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"2-column indentation"),(0,o.mdx)("li",{parentName:"ul"},"trailing commas"),(0,o.mdx)("li",{parentName:"ul"},"open/close braces on a line by themselves"),(0,o.mdx)("li",{parentName:"ul"},"camel case for record field names")),(0,o.mdx)("p",null,"e.g."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"# Named parameter\ntype Parameter =\n  {\n    name : Name,\n    type : Type,\n    isVariadic : bool,\n  }\n")),(0,o.mdx)("p",null,"This uses quite a lot of vertical space, but it's clear and works well with source control."),(0,o.mdx)("p",null,"It's OK to put things on a single line if they fit:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"type Access = enum { Public | Protected | Private }\n")))}m.isMDXComponent=!0}}]);