(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),b=(n(0),n(129)),l=(n(39),["components"]),c={id:"reference",title:"Angle Reference",sidebar_label:"Reference"},o={unversionedId:"angle/reference",id:"angle/reference",isDocsHomePage:!1,title:"Angle Reference",description:"Queries",source:"@site/../docs/angle/reference.md",slug:"/angle/reference",permalink:"/docs/angle/reference",version:"current",sidebar_label:"Reference",sidebar:"someSidebar",previous:{title:"Debugging",permalink:"/docs/angle/debugging"},next:{title:"Angle Style Guide",permalink:"/docs/angle/style"}},p=[{value:"Queries",id:"queries",children:[]},{value:"Statements",id:"statements",children:[]},{value:"Names",id:"names",children:[]},{value:"Term",id:"term",children:[]},{value:"Primitives",id:"primitives",children:[]}],i={toc:p};function m(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"queries"},"Queries"),Object(b.b)("p",null,"A query produces a set of values. At the outermost level, the values\nreturned are always ",Object(b.b)("em",{parentName:"p"},"facts"),", which are returned to the client making\nthe query."),Object(b.b)("p",null,"In general, a Glean query takes the form:"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"query")," ::= ","[ ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"where")," ]"," ",Object(b.b)("em",{parentName:"p"},"statement\u2080")," ; ...; ",Object(b.b)("em",{parentName:"p"},"statement\u2099")),Object(b.b)("p",null,"You can think of this declaratively, as in"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"For each substitution of the variables in the query such that ",Object(b.b)("em",{parentName:"p"},"statement\u2080"),"..",Object(b.b)("em",{parentName:"p"},"statement\u2099")," holds, produce the value of ",Object(b.b)("em",{parentName:"p"},"term"))),Object(b.b)("p",null,"Or, we can think of it more operationally, which helps with query optimisation:"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"for each value of ",Object(b.b)("em",{parentName:"p"},"statement\u2080"),Object(b.b)("br",null),"\n...",Object(b.b)("br",null),"\nfor each value of ",Object(b.b)("em",{parentName:"p"},"statement\u2099"),Object(b.b)("br",null),"\nproduce the value of ",Object(b.b)("em",{parentName:"p"},"term"))),Object(b.b)("p",null,"If ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"where")," is omitted, then the query produces the values of the final statement. For example, a query ",Object(b.b)("inlineCode",{parentName:"p"},'src.File "foo/bar"')," is equivalent to ",Object(b.b)("inlineCode",{parentName:"p"},'F where F = src.File "foo/bar"'),"."),Object(b.b)("p",null,"Note that a query corresponds to a nested loop, where ",Object(b.b)("em",{parentName:"p"},"statement\u2080")," is the outermost loop, and ",Object(b.b)("em",{parentName:"p"},"statement\u2099")," is the innermost. The ordering of the statements can therefore have a significant effect on performance."),Object(b.b)("h2",{id:"statements"},"Statements"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"statement")," ::= ","[ ",Object(b.b)("em",{parentName:"p"},"term\u2081")," ",Object(b.b)("inlineCode",{parentName:"p"},"=")," ]"," ",Object(b.b)("em",{parentName:"p"},"term\u2082")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"match all values of ",Object(b.b)("strong",{parentName:"p"},"term\u2081")," against all values of ",Object(b.b)("strong",{parentName:"p"},"term\u2082"))),Object(b.b)("p",null,"The order is mostly irrelevant; ",Object(b.b)("inlineCode",{parentName:"p"},"A = B")," is equivalent to ",Object(b.b)("inlineCode",{parentName:"p"},"B = A"),", except that type inference works by inferring the right-hand-side before checking the left-hand-side so this may influence which order you want. You can also use a type signature (",Object(b.b)("inlineCode",{parentName:"p"},"A = B : type"),") to help the type checker."),Object(b.b)("h2",{id:"names"},"Names"),Object(b.b)("p",null,"Glean uses the following classes of names:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("em",{parentName:"li"},"schema name"),", e.g. ",Object(b.b)("inlineCode",{parentName:"li"},"search.cxx"),", of the form ",Object(b.b)("em",{parentName:"li"},"name"),"[.",Object(b.b)("em",{parentName:"li"},"name"),"]","*. By convention, the components of a schema name begin with a lower-case letter."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("em",{parentName:"li"},"predicate name"),", e.g. ",Object(b.b)("inlineCode",{parentName:"li"},"cxx.Name.1")," of the form ",Object(b.b)("em",{parentName:"li"},"schema"),".",Object(b.b)("em",{parentName:"li"},"predicate"),"[.",Object(b.b)("em",{parentName:"li"},"version"),"]",". By convention, ",Object(b.b)("em",{parentName:"li"},"predicate")," begins with an upper-case letter. The version can often be omitted, in which case it defaults depending on the context: in a query it defaults to the most recent version, in a schema there is always only one version of a predicate visible in any given scope."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("em",{parentName:"li"},"field name"),", e.g. ",Object(b.b)("inlineCode",{parentName:"li"},"declaration"),", used to identify fields of a record, or alternatives of a sum type or enumeration.  A field name ",Object(b.b)("strong",{parentName:"li"},"must begin with a lower-case letter"),"."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("em",{parentName:"li"},"variable"),", e.g. ",Object(b.b)("inlineCode",{parentName:"li"},"X"),". Variables ",Object(b.b)("strong",{parentName:"li"},"must begin with an upper-case letter")," to distinguish them from field names.")),Object(b.b)("p",null,"There is a set of reserved words that can't be used for names. Mostly this is because those words would clash with reserved keywords in code that we generate from the schema, and we don't want to have to do any automatic translation of names that might be confusing. Typically the convention for avoiding these reserved words is to add an underscore to the name, e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"class_"),"."),Object(b.b)("h2",{id:"term"},"Term"),Object(b.b)("p",null,"A term may be fully defined, like ",Object(b.b)("inlineCode",{parentName:"p"},"{ true, 123 }")," (a value that we could insert in the database), or it can be partially defined, like ",Object(b.b)("inlineCode",{parentName:"p"},'{ A, "b", _ }'),"."),Object(b.b)("p",null,"A term is often matched against something that will instantiate its unknown variables. For example, in ",Object(b.b)("inlineCode",{parentName:"p"},"cxx.Name X"),", we're instantitating the variable ",Object(b.b)("inlineCode",{parentName:"p"},"X")," to each of the keys of the predicate ",Object(b.b)("inlineCode",{parentName:"p"},"cxx.Name"),"."),Object(b.b)("p",null,"Ultimately the result of a query must be terms that are fully defined, though. If this isn't the case, Glean's query engine will report an error.  For example, a query like ",Object(b.b)("inlineCode",{parentName:"p"},"X where 123")," doesn't make sense, because we haven't matched ",Object(b.b)("inlineCode",{parentName:"p"},"X")," with anything."),Object(b.b)("p",null,"Terms have the following forms:"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"term")," ::=",Object(b.b)("br",null),"\n","\xa0","\xa0","    ",Object(b.b)("em",{parentName:"p"},"variable")," ",Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"A ",Object(b.b)("strong",{parentName:"p"},"variable")," names the terms that match at this position in the query. The variable can be menioned elsewhere in the query; it doesn't usually make sense for a variable to be mentioned only once, since then you might as well just use a wildcard, see below.")),Object(b.b)("p",null,"\xa0","\xa0","  ",Object(b.b)("inlineCode",{parentName:"p"},"_"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"A wildcard; matches anything")),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"predicate"),"\xa0",Object(b.b)("em",{parentName:"p"},"term")," ","[ ",Object(b.b)("inlineCode",{parentName:"p"},"->")," ",Object(b.b)("em",{parentName:"p"},"term")," ]"," ",Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"All the facts of ",Object(b.b)("strong",{parentName:"p"},"predicate")," with keys that match the first ",Object(b.b)("strong",{parentName:"p"},"term")," (and values that match the second ",Object(b.b)("strong",{parentName:"p"},"term")," if appropriate)")),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("inlineCode",{parentName:"p"},"(")," ",Object(b.b)("em",{parentName:"p"},"query")," ",Object(b.b)("inlineCode",{parentName:"p"},")")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"All the values of ",Object(b.b)("strong",{parentName:"p"},"query"),". Note in particular that ",Object(b.b)("strong",{parentName:"p"},"query")," can just be a simple term, but it can also be something like ",Object(b.b)("strong",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"where")," ",Object(b.b)("strong",{parentName:"p"},"statements"),".")),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"[..]")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"All the elements of the array ",Object(b.b)("strong",{parentName:"p"},"term"))),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term\u2081")," ",Object(b.b)("inlineCode",{parentName:"p"},"|")," ",Object(b.b)("em",{parentName:"p"},"term\u2082")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"When used as a pattern, matches ",Object(b.b)("strong",{parentName:"p"},"term\u2081")," or ",Object(b.b)("strong",{parentName:"p"},"term\u2082"),". When used as an expression, generates all values of ",Object(b.b)("strong",{parentName:"p"},"term\u2081")," and all values of ",Object(b.b)("strong",{parentName:"p"},"term\u2082"),".")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Note: variables mentioned in ",Object(b.b)("strong",{parentName:"p"},"term\u2081")," and ",Object(b.b)("strong",{parentName:"p"},"term\u2082")," are local to those terms, and may have different types, but only if the variable is not mentioned elsewhere.")),Object(b.b)("p",null,"\xa0","\xa0","  ",Object(b.b)("em",{parentName:"p"},"[0-9]","+"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"a number matches a value of type ",Object(b.b)("inlineCode",{parentName:"p"},"nat")," or ",Object(b.b)("inlineCode",{parentName:"p"},"byte"))),Object(b.b)("p",null,"\xa0","\xa0","  ",Object(b.b)("em",{parentName:"p"},"string"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"a string matches a value of type ",Object(b.b)("inlineCode",{parentName:"p"},"string"))),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("em",{parentName:"p"},"string")," ",Object(b.b)("inlineCode",{parentName:"p"},".."),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches strings with the given prefix")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("em",{parentName:"p"},"string")," ",Object(b.b)("inlineCode",{parentName:"p"},"..")," ",Object(b.b)("em",{parentName:"p"},"term"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches both a prefix and a suffix of a string")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"{")," ",Object(b.b)("em",{parentName:"p"},"field")," ",Object(b.b)("inlineCode",{parentName:"p"},"=")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},",")," ... ",Object(b.b)("inlineCode",{parentName:"p"},"}"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches a record with the given fields")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"{")," ",Object(b.b)("em",{parentName:"p"},"field")," ",Object(b.b)("inlineCode",{parentName:"p"},"=")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"}")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches a sum type with an alternative ",Object(b.b)("strong",{parentName:"p"},"field"))),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("em",{parentName:"p"},"field")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"when matching a sum type, shorthand for ",Object(b.b)("inlineCode",{parentName:"p"},"{")," ",Object(b.b)("em",{parentName:"p"},"field")," ",Object(b.b)("inlineCode",{parentName:"p"},"= _ }"))),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("em",{parentName:"p"},"enumerator")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches an value of an enumerated type")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"{ just =")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"}"),Object(b.b)("br",null),"\n","\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"nothing")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches a ",Object(b.b)("inlineCode",{parentName:"p"},"maybe")," type")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"true"),Object(b.b)("br",null),"\n","\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches a ",Object(b.b)("inlineCode",{parentName:"p"},"boolean"))),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("em",{parentName:"p"},"term"),"\xa0",":","\xa0",Object(b.b)("em",{parentName:"p"},"type"),Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"(a ",Object(b.b)("em",{parentName:"p"},"type signature"),") interpret ",Object(b.b)("strong",{parentName:"p"},"term")," as having type ",Object(b.b)("strong",{parentName:"p"},"type"),", where ",Object(b.b)("strong",{parentName:"p"},"type")," is any valid Angle type.")),Object(b.b)("p",null,"\xa0","\xa0"," ",Object(b.b)("inlineCode",{parentName:"p"},"$")," ","[0-9]","+",Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"matches a literal fact ID. The only reason to use these would be if you did a previous query, extracted some fact IDs, and want to do a subsequent query incorporating them. Literal fact IDs are not allowed in derived predicates (it wouldn't make any sense).")),Object(b.b)("h2",{id:"primitives"},"Primitives"),Object(b.b)("p",null,"Angle supports a few primitive operations. The argument(s) to a primitive operation must always be fully defined; they cannot be patterns or a wildcards."),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("inlineCode",{parentName:"p"},"prim.toLower")," (S : string) : string"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Converts its string argument to lower case")),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("inlineCode",{parentName:"p"},"prim.length")," (A : ","[_]",") : nat"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Equal to the number of elements in its array argument")),Object(b.b)("p",null,"\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},">")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("br",null),"\n","\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},">=")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("br",null),"\n","\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"<")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("br",null),"\n","\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"<=")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("br",null),"\n","\xa0","\xa0",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("inlineCode",{parentName:"p"},"!=")," ",Object(b.b)("em",{parentName:"p"},"term")," ",Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Standard numerical comparisons. These work on values of type ",Object(b.b)("inlineCode",{parentName:"p"},"nat")," only, and they have value ",Object(b.b)("inlineCode",{parentName:"p"},"{}")," if the comparison succeeds, otherwise they fail (in the same way as a predicate match fails if there are no facts that match the pattern).")))}m.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(n),u=a,O=m["".concat(l,".").concat(u)]||m[u]||s[u]||b;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);