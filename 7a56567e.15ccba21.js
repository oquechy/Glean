(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),j=a,m=p["".concat(l,".").concat(j)]||p[j]||O[j]||r;return n?b.a.createElement(m,i(i({ref:t},o),{},{components:n})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<r;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return O}));var a=n(3),b=n(7),r=(n(0),n(129)),l=n(39),i=["components"],c={id:"thrift",title:"Thrift and JSON",sidebar_label:"Thrift and JSON"},o={unversionedId:"schema/thrift",id:"schema/thrift",isDocsHomePage:!1,title:"Thrift and JSON",description:"The Glean schema is automatically translated into a set of Thrift type",source:"@site/../docs/schema/thrift.md",slug:"/schema/thrift",permalink:"/docs/schema/thrift",version:"current",sidebar_label:"Thrift and JSON",sidebar:"someSidebar",previous:{title:"Workflow",permalink:"/docs/schema/workflow"},next:{title:"Querying Glean",permalink:"/docs/query/intro"}},d=[],p={toc:d};function O(e){var t=e.components,n=Object(b.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Glean schema is automatically translated into a set of Thrift type\ndefinitions by the ",Object(r.b)("inlineCode",{parentName:"p"},"gen-schema")," tool (see ",Object(r.b)("a",{parentName:"p",href:"workflow"},"Workflow"),").\nThese Thrift definitions can be used to work with Glean data in your\nclient, as native data types in whatever language you're using, either\nfor querying data or for writing facts."),Object(r.b)("p",null,"The Thrift types also have a JSON representation, which can be read\nand written directly. When you perform queries in the\n",Object(r.b)("a",{parentName:"p",href:"../shell"},"shell"),", the results are printed as JSON-encoded Thrift;\nwhen you ",Object(r.b)("a",{parentName:"p",href:"../write"},"write data to Glean")," it can be in the form of\nJSON-encoded Thrift."),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("p",null,"Facebook internal: the Thrift types for the schema are automatically\ngenerated into\n",Object(r.b)("a",{parentName:"p",href:"https://phabricator.intern.facebook.com/diffusion/FBS/browse/master/fbcode/glean/schema"},"fbcode/glean/schema"),", and those files are automatically sync'd to\nwww too.")),Object(r.b)("p",null,"The relationship between schema types and Thrift/JSON is given by the following table:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema type"),Object(r.b)("th",{parentName:"tr",align:null},"Thrift type"),Object(r.b)("th",{parentName:"tr",align:null},"JSON"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"nat")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Nat")," (",Object(r.b)("inlineCode",{parentName:"td"},"i64"),")"),Object(r.b)("td",{parentName:"tr",align:null},"123")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"byte")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Byte")," (",Object(r.b)("inlineCode",{parentName:"td"},"i8"),")"),Object(r.b)("td",{parentName:"tr",align:null},"123")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},'"abc"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")," or ",Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"[byte]")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"binary")),Object(r.b)("td",{parentName:"tr",align:null},"base-64 encoded string ",Object(r.b)("sup",null,"*1"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"[T]")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"list<T>")),Object(r.b)("td",{parentName:"tr",align:null},"[...]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"{"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"f\u2081 : T\u2081,"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"...,"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"f\u2099 : T\u2099"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"struct Foo {"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"1: T\u2081 f\u2081;"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"..."),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"n: T\u2099 f\u2099;"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"{"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},'"f\u2081" : q\u2081,'),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"..."),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},'"f\u2099" : q\u2099'),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"{"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"f\u2081 : T\u2081 "),Object(r.b)("code",null,"|"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"... "),Object(r.b)("code",null,"|"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"f\u2099 : T\u2099"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"union Foo {"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"1: T\u2081 f\u2081;"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"..."),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"n: T\u2099 f\u2099;"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'{ "f" : t }'),Object(r.b)("br",null),"for one of the fields ",Object(r.b)("inlineCode",{parentName:"td"},"f\u2081"),"..",Object(r.b)("inlineCode",{parentName:"td"},"f\u2099"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"maybe T")),Object(r.b)("td",{parentName:"tr",align:null},"In a record field:",Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"optional T f")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"f : t"),Object(r.b)("br",null)," if the value is present")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"enum {"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"L\u2081"),Object(r.b)("code",null,"|"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"..."),Object(r.b)("code",null,"|"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"L\u2099"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"enum Foo { "),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"L\u2081 = 1,"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"..."),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"L\u2099 = n"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}")),Object(r.b)("td",{parentName:"tr",align:null},"the index of the value,",Object(r.b)("br",null)," e.g. 12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"predicate P : K -> V")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"struct P {"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"1: Id id"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"2: optional K key"),Object(r.b)("br",null),"\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},"3: optional V value"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"}"),Object(r.b)("br",null),"note",Object(r.b)("sup",null,"*2")),Object(r.b)("td",{parentName:"tr",align:null},"refer to fact N:",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"N")," or ",Object(r.b)("inlineCode",{parentName:"td"},'{ "id": N }'),Object(r.b)("br",null),"define a fact:",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},'{ "id" : N,'),Object(r.b)("br",null),"\xa0","\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},'"key" : t }')," or",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},'{ "key": t }')," or",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},'{ "key": t,'),Object(r.b)("br",null),"\xa0","\xa0","\xa0","\xa0",Object(r.b)("inlineCode",{parentName:"td"},'"value" : v }'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"type N = T")),Object(r.b)("td",{parentName:"tr",align:null},"depending on T: ",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"struct N { .. }"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"union N {...}"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"enum N {...}"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"typedef T N;")),Object(r.b)("td",{parentName:"tr",align:null},"same as type T")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Thrift encoding of a binary field in JSON is a base-64-encoded string. However, not all Thrift implementations respect this. At the time of writing, the Python Thrift implementation doesn't base-64-encode binary values. For this reason we provide an option in the Glean Thrift API to disable base-64 encoding for binary if your client doesn't support it. The Glean Shell also uses this option to make it easier to work with binary.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"the ",Object(r.b)("inlineCode",{parentName:"p"},"key")," is optional - a nested fact may be expanded in place or represented by a reference to the fact ID only. When querying Glean data the query specifies which nested facts should be expanded in the result, and when writing data to Glean using Thrift or JSON, we can optionally specify the value of nested facts inline."))))}O.isMDXComponent=!0}}]);