"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6166],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),s=function(e){return function(n){var a=p(n.components);return t.createElement(e,i({},n,{components:a}))}},p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,h=s["".concat(o,".").concat(c)]||s[c]||u[c]||i;return a?t.createElement(h,m(m({ref:n},d),{},{components:a})):t.createElement(h,m({ref:n},d))}));function x(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43880:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],m={id:"syntax",title:"Syntax",sidebar_label:"Syntax"},l=void 0,d={unversionedId:"schema/syntax",id:"schema/syntax",title:"Syntax",description:"Schemas are written in Glean's Angle language.",source:"@site/docs/schema/syntax.md",sourceDirName:"schema",slug:"/schema/syntax",permalink:"/docs/schema/syntax",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/schema/syntax.md",tags:[],version:"current",frontMatter:{id:"syntax",title:"Syntax",sidebar_label:"Syntax"},sidebar:"someSidebar",previous:{title:"Built-in Types",permalink:"/docs/schema/types"},next:{title:"Recursion",permalink:"/docs/schema/recursion"}},s={},p=[{value:"Named schemas",id:"named-schemas",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Referring to other predicates",id:"referring-to-other-predicates",level:2},{value:"Named types",id:"named-types",level:2},{value:"Importing and inheriting",id:"importing-and-inheriting",level:2},{value:"Importing",id:"importing",level:3},{value:"Inheritance and revising schemas",id:"inheritance-and-revising-schemas",level:3},{value:"Naming rules and conventions",id:"naming-rules-and-conventions",level:2}],c={toc:p};function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Schemas are written in Glean's ",(0,i.mdx)("strong",{parentName:"p"},"Angle")," language."),(0,i.mdx)("h2",{id:"named-schemas"},"Named schemas"),(0,i.mdx)("p",null,"We usually create a new named schema for a family of related types and predicates. For example ",(0,i.mdx)("inlineCode",{parentName:"p"},"hack")," is the schema for facts about Hack code, ",(0,i.mdx)("inlineCode",{parentName:"p"},"cxx")," is the schema for facts about C/C++ and Objective C code, ",(0,i.mdx)("inlineCode",{parentName:"p"},"java")," is the schema for facts about Java code, and so on."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema java.1 {\n# your types and predicates go here\n}\n")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("strong",{parentName:"p"},"What does the .1 suffix mean?")," This is the ",(0,i.mdx)("em",{parentName:"p"},"version")," of the\nschema. Versions are a somewhat legacy feature and you should\nnormally leave everything at version 1.")),(0,i.mdx)("p",null,"The name of the schema will be also used as the ",(0,i.mdx)("em",{parentName:"p"},"namespace")," for the\ngenerated Thrift types. You'll notice that each schema gets a separate\ngenerated ",(0,i.mdx)("a",{parentName:"p",href:"/docs/schema/thrift"},"Thrift file")," for working with the data in your code."),(0,i.mdx)("h2",{id:"predicates"},"Predicates"),(0,i.mdx)("p",null,"A predicate definition looks like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"predicate P : KeyType -> ValueType\n")),(0,i.mdx)("p",null,"where"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"P")," is the name of the predicate. e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"src.File")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"KeyType")," is the ",(0,i.mdx)("em",{parentName:"li"},"key type")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"ValueType")," is the ",(0,i.mdx)("em",{parentName:"li"},"value type"))),(0,i.mdx)("p",null,"For example, the example schema that we saw in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/introduction"},"Introduction"),"\ncontains the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Class")," predicate:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema example.1 {\npredicate Class :\n  {\n     name : string,\n     line : nat,\n  }\n}\n")),(0,i.mdx)("p",null,"This defines:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A predicate called ",(0,i.mdx)("inlineCode",{parentName:"li"},"example.Class.1")," (you can usually refer to it by its unversioned name, ",(0,i.mdx)("inlineCode",{parentName:"li"},"example.Class"),")."),(0,i.mdx)("li",{parentName:"ul"},"With a key type that is a record, consisting of",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"a field ",(0,i.mdx)("inlineCode",{parentName:"li"},"name"),", that has type ",(0,i.mdx)("inlineCode",{parentName:"li"},"string")),(0,i.mdx)("li",{parentName:"ul"},"a field ",(0,i.mdx)("inlineCode",{parentName:"li"},"line"),", of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"nat"))))),(0,i.mdx)("h2",{id:"referring-to-other-predicates"},"Referring to other predicates"),(0,i.mdx)("p",null,"A key feature of Glean is the ability to refer directly to other types\nto build up nested structures."),(0,i.mdx)("p",null,"To refer to a predicate defined in the same schema, we just use its\nunqualified name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema example.1 {\npredicate Class :\n  {\n     name : string,\n     line : nat,\n  }\n\npredicate Parent :\n  {\n     child : Class,\n     parent : Class,\n  }\n}\n")),(0,i.mdx)("p",null,"We can also refer to predicates defined in other schemas, but we have\nto bring them into scope using an ",(0,i.mdx)("inlineCode",{parentName:"p"},"import")," declaration.  For example,\nthe ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," schema contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"File")," predicate:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema src.1 {\npredicate File : string\n}\n")),(0,i.mdx)("p",null,"If we want to extend our ",(0,i.mdx)("inlineCode",{parentName:"p"},"Class")," predicate with the file that contains\nit, we can do it like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema example.1 {\nimport src.1\n\npredicate Class :\n  {\n     name : string,\n     line : nat,\n     file : src.File\n  }\n}\n")),(0,i.mdx)("p",null,"Note that to refer to a predicate from another schema, we have to\nqualify it with the name of its schema, as in ",(0,i.mdx)("inlineCode",{parentName:"p"},"src.File")," above. We\ndon't have to add the version though - there can only be one version\nof any given predicate in scope at a time."),(0,i.mdx)("h2",{id:"named-types"},"Named types"),(0,i.mdx)("p",null,"It's useful to be able to name a type so that it can be used in multiple places. The form of a type definition is similar to a predicate:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"type <name> = <type>\n")),(0,i.mdx)("p",null,"For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," schema has a type for source locations:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=python"},"schema src.1 {\npredicate File : string\n\n# Common source code location type\ntype Loc = {\n  file : File,\n  line : nat,\n  column : nat,\n}\n}\n")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("inlineCode",{parentName:"p"},"type")," declarations cannot be recursive or mutually recursive. If you want a\nrecursive type, the cycle must go through at least one predicate. For\nmore details, see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/schema/recursion"},"Recursion"),".")),(0,i.mdx)("h2",{id:"importing-and-inheriting"},"Importing and inheriting"),(0,i.mdx)("p",null,"There are two ways for schemas to refer to each other:"),(0,i.mdx)("h3",{id:"importing"},"Importing"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema example.1 {\nimport src.1\n...\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"import")," declaration brings into scope all the predicates and\ntypes defined by the named schema. Those predicates and types are\nreferred to by qualified names, e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"src.File")," for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"File"),"\npredicate defined by the schema ",(0,i.mdx)("inlineCode",{parentName:"p"},"src"),". The version number is dropped;\neach schema exports a single version of a predicate or type, so the\nunversioned name is unambiguous."),(0,i.mdx)("h3",{id:"inheritance-and-revising-schemas"},"Inheritance and revising schemas"),(0,i.mdx)("admonition",{type:"warning"},(0,i.mdx)("p",{parentName:"admonition"},"Schema inheritance is a legacy feature and may be removed in the\nfuture. The process for safely changing schemas is described in\n",(0,i.mdx)("a",{parentName:"p",href:"/docs/schema/changing"},"Changing the Schema"),".")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"schema example.2 : example.1 {\npredicate Class :\n  {\n       # new definition of Class\n  }\n}\n")),(0,i.mdx)("p",null,"Inheritance is useful for making changes to a schema by creating a new schema version:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Inheriting from a schema brings into scope all the types and predicates of that schema, both qualified ",(0,i.mdx)("em",{parentName:"li"},"and unqualified"),"."),(0,i.mdx)("li",{parentName:"ul"},"The new schema also exports all the types and predicates defined in the schemas it inherits from, ",(0,i.mdx)("em",{parentName:"li"},"except those that are re-defined"),".")),(0,i.mdx)("p",null,"Specifically, in the above example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We can ",(0,i.mdx)("inlineCode",{parentName:"li"},"import example.2")," anywhere and get all the predicates defined in ",(0,i.mdx)("inlineCode",{parentName:"li"},"example.1"),", except that we'll get the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"Class")," defined in ",(0,i.mdx)("inlineCode",{parentName:"li"},"example.2"),"."),(0,i.mdx)("li",{parentName:"ul"},"We can still ",(0,i.mdx)("inlineCode",{parentName:"li"},"import example.1")," and get the old version of the schema.")),(0,i.mdx)("p",null,"Note that if you have predicates that depend on a predicate that was revised in this way, you must also copy those predicates to the new schema, because the existing predicates will refer to the old version of the predicate you revised. (In due course Glean will probably provide a convenient way to do this; in the meantime you have to copy & paste. Not a big deal because you'll usually delete the old one at some point, and you can't modify it anyway.)"),(0,i.mdx)("p",null,"Named schemas can ",(0,i.mdx)("em",{parentName:"p"},"not")," form cycles through their ",(0,i.mdx)("inlineCode",{parentName:"p"},"import")," or\ninheritance declarations."),(0,i.mdx)("h2",{id:"naming-rules-and-conventions"},"Naming rules and conventions"),(0,i.mdx)("p",null,"Names take the form of a dot-separated sequence of alphanumeric words. For example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"sys.Blob"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"clang.File"),", or ",(0,i.mdx)("inlineCode",{parentName:"p"},"cxx.objc.Name"),". The words up to the last dot are the ",(0,i.mdx)("em",{parentName:"p"},"namespace"),", the final word is the ",(0,i.mdx)("em",{parentName:"p"},"name"),"."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/angle/reference#names"},"Names")," for full details."),(0,i.mdx)("p",null,"Briefly:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Namespaces (schema names) are dot-separated sequences of identifiers each beginning with a lower-case letter"),(0,i.mdx)("li",{parentName:"ul"},"Names and namespaces can contain only alphanumeric characters, '_', or '.' (namespaces only)"),(0,i.mdx)("li",{parentName:"ul"},"There is a set of reserved words that can't be used for names, e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"class"),". Syncing the schema will fail with an error if you use a reserved word.")))}u.isMDXComponent=!0}}]);