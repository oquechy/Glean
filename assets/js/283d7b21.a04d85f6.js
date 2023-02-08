"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9428],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{EO:function(){return l},O1:function(){return o},Rr:function(){return c}});var r,a=t(67294),i=t(44256);function o(e){return a.createElement("a",{href:r+e.file},e.file)}function l(e){return a.createElement("a",{href:r+e.file},e.children)}r=(0,i.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,t=e.external;return(0,i.fbContent)({internal:a.createElement("code",null,n),external:a.createElement("code",null,t)})}},63930:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=(t(12038),["components"]),l={id:"design",title:"Schema Design",sidebar_label:"Design"},c=void 0,s={unversionedId:"schema/design",id:"schema/design",title:"Schema Design",description:"There are usually multiple ways to design a schema, and which one is",source:"@site/docs/schema/design.md",sourceDirName:"schema",slug:"/schema/design",permalink:"/docs/schema/design",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/schema/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Schema Design",sidebar_label:"Design"},sidebar:"someSidebar",previous:{title:"Thrift and JSON",permalink:"/docs/schema/thrift"},next:{title:"Overview",permalink:"/docs/query/intro"}},u={},d=[{value:"Should we reference predicates directly?",id:"should-we-reference-predicates-directly",level:2},{value:"Use key-value predicates",id:"use-key-value-predicates",level:2},{value:"Using arrays",id:"using-arrays",level:2},{value:"How to experiment with schema design",id:"how-to-experiment-with-schema-design",level:2}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"There are usually multiple ways to design a schema, and which one is\nbest will depend on multiple factors. Specifically, we usually want to\nrepresent data so that it"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"can be stored compactly,"),(0,i.mdx)("li",{parentName:"ul"},"is convenient to generate,"),(0,i.mdx)("li",{parentName:"ul"},"is convenient and efficient to query,"),(0,i.mdx)("li",{parentName:"ul"},"and it supports incremental indexing.")),(0,i.mdx)("p",null,"In the following sections we'll go through some of the common choices\nthat you'll encounter when designing a schema and offer some advice."),(0,i.mdx)("p",null,"Note: here we're only concerned with stored facts. The considerations\nhere don't apply to ",(0,i.mdx)("a",{parentName:"p",href:"../../derived/#on-demand-derived-predicates"},"On-demand derived predicates"),", because they aren't stored."),(0,i.mdx)("h2",{id:"should-we-reference-predicates-directly"},"Should we reference predicates directly?"),(0,i.mdx)("p",null,"For example, you could write a predicate for a class like this: ",(0,i.mdx)("strong",{parentName:"p"},"(1)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"predicate Class :\n  {\n    name : string,\n    methods : [Method]\n  }\n")),(0,i.mdx)("p",null,"or like this: ",(0,i.mdx)("strong",{parentName:"p"},"(2)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"predicate Class :\n  {\n    name : string,\n  }\n\npredicate ClassMethod :\n  {\n    class_ : Class,\n    method : Method\n  }\n")),(0,i.mdx)("p",null,"Which of these is best?"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Functionality")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"(1) retains the order of the methods, which might be\nimportant. Otherwise they're equivalent."),(0,i.mdx)("li",{parentName:"ul"},"With (1) we have to know the methods when we generate the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Class"),"\nfact, whereas with (2) we can generate the facts about the methods\nseparately and in any order. This might not matter much with\nsomething small like a class definition, but for larger facts\n(e.g. the definitions of a file) it could be important."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Data representation")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"(1) has fewer facts per class, so is more compact (see ",(0,i.mdx)("a",{parentName:"li",href:"#using-arrays"},"Using Arrays")," below)."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Query performance")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"it's faster to fetch the methods of a class with\n(1), because (2) requires searching two predicates."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Incrementality")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"with (1), changing one method requires changing the\nwhole ",(0,i.mdx)("inlineCode",{parentName:"li"},"Class")," fact, which might force changes to other facts. With\n(2) we would only need to replace the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ClassToMethod")," fact.")))),(0,i.mdx)("h2",{id:"use-key-value-predicates"},"Use key-value predicates"),(0,i.mdx)("p",null,"We often have a choice between using key-only or key-value (also known as ",(0,i.mdx)("a",{parentName:"p",href:"../../angle/advanced#functional-predicates"},"Functional predicates"),"): ",(0,i.mdx)("strong",{parentName:"p"},"(1)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"predicate FunctionType : { function : Function, type_ : Type }\n")),(0,i.mdx)("p",null,"and: ",(0,i.mdx)("strong",{parentName:"p"},"(2)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"predicate FunctionType : Function -> Type\n")),(0,i.mdx)("p",null,"There are several tradeoffs here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Functionality")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"(1) is a relation, whereas (2) is a function. In practical terms,\nwith (1) you can have many types for the same function, but with\n(2) that is an error (Glean will complain if you try to\ninsert two facts with the same key and different values)."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Data representation")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"(2) is much more efficient to store. In particular the value is\nstored only once. If the value (",(0,i.mdx)("inlineCode",{parentName:"li"},"Type")," in the above example) is large,\nyou should strongly consider using a key-value predicate."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Query performance")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Both (1) and (2) support efficient querying by the key (",(0,i.mdx)("inlineCode",{parentName:"li"},"Function"),"\nin the example), and they both support slow filtering by the value\n(",(0,i.mdx)("inlineCode",{parentName:"li"},"Type"),")."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Incrementality")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"These two alternatives are equivalent with respect to incrementality.")))),(0,i.mdx)("h2",{id:"using-arrays"},"Using arrays"),(0,i.mdx)("p",null,"If you're choosing between arrays and separate facts, then consider:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Arrays are ordered lists, whereas facts are just sets. If the order\nof your items is important - because you're representing something\nthat has an order, such as function arguments - then an array is the\nright choice.  (someday Glean might have a \"set\" type, but it\ncurrently doesn't).")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Conversely, if the order is ",(0,i.mdx)("em",{parentName:"p"},"not")," important, then using an array is\na poor choice because you will be forced to choose an order when\ngenerating your data. If you don't have a deterministic way to pick\nthe order, then your data representation is non-deterministic which\nleads to spurious differences in things like test outputs, which can\nbe annoying.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Arrays are much more compact than multiple facts. There can be a\nhuge difference in storage overhead; it's worth measuring this for\nyour schema.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"When a client fetches an array as part of the result of a query,\nthey will get the whole array. If your array is large, that may be a\nlot of data to send over the wire, and it might even result in an\nallocation limit error on the server, preventing the client from\nfetching the data at all. Facts tend to support incremental querying\nbetter compared with arrays.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Facts with large arrays are also slower to search through in a query\nthan smaller facts."))),(0,i.mdx)("h2",{id:"how-to-experiment-with-schema-design"},"How to experiment with schema design"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Generate some data and see how large it is, using ",(0,i.mdx)("inlineCode",{parentName:"p"},":stat")," in the shell.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Write some example queries against your data, and check how much\nsearching they do using ",(0,i.mdx)("inlineCode",{parentName:"p"},":profile")," in the shell (see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/angle/debugging"},"Query\nDebugging"),")."))))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=a++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const a=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const o=["internal","external"];function l(e){return s(e),u()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=s,n.isInternal=u,n.hasEphemeralDiffNumber=function(){return Boolean(d())},n.getEphemeralDiffNumber=d,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const a=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:i}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);