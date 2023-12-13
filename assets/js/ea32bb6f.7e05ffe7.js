"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9407],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return h},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),p=function(e){return function(n){var t=m(n.components);return i.createElement(e,r({},n,{components:t}))}},m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),h=a,u=p["".concat(o,".").concat(h)]||p[h]||c[h]||r;return t?i.createElement(u,s(s({ref:n},d),{},{components:t})):i.createElement(u,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69732:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var i,a=t(83117),r=t(80102),o=(t(67294),t(3905)),s=["components"],l={id:"incrementality",title:"Incrementality",sidebar_label:"Incrementality"},d=void 0,p={unversionedId:"implementation/incrementality",id:"implementation/incrementality",title:"Incrementality",description:"This is a walkthrough of the most important parts of the",source:"@site/docs/implementation/incrementality.md",sourceDirName:"implementation",slug:"/implementation/incrementality",permalink:"/docs/implementation/incrementality",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/implementation/incrementality.md",tags:[],version:"current",frontMatter:{id:"incrementality",title:"Incrementality",sidebar_label:"Incrementality"},sidebar:"someSidebar",previous:{title:"Dotnet",permalink:"/docs/indexer/scip-dotnet"}},m={},h=[{value:"Units",id:"units",level:2},{value:"Capturing ownership data from the indexer",id:"capturing-ownership-data-from-the-indexer",level:2},{value:"JSON",id:"json",level:3},{value:"Binary",id:"binary",level:3},{value:"Storing the ownership data",id:"storing-the-ownership-data",level:3},{value:"Ownership sets",id:"ownership-sets",level:2},{value:"Visibility and slices",id:"visibility-and-slices",level:2},{value:"Propagating ownership to dependent facts",id:"propagating-ownership-to-dependent-facts",level:2},{value:"Storing ownership in the DB",id:"storing-ownership-in-the-db",level:2},{value:"Caching fact ownership",id:"caching-fact-ownership",level:3},{value:"Ownership for derived facts",id:"ownership-for-derived-facts",level:2},{value:"Ownership for stacked databases",id:"ownership-for-stacked-databases",level:2},{value:"Derived facts in stacked incremental DBs",id:"derived-facts-in-stacked-incremental-dbs",level:3}],c=(i="SrcFile",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),u={toc:h};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This is a walkthrough of the most important parts of the\nimplementation of incrementality, aimed at people working on Glean."),(0,o.mdx)("h2",{id:"units"},"Units"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("em",{parentName:"p"},"unit")," is an arbitrary string. In Thrift:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'typedef string (hs.type = "ByteString") UnitName\n')),(0,o.mdx)("p",null,"Units do not need to be declared beforehand; a Unit exists if it is\nthe owner of at least one fact."),(0,o.mdx)("p",null,"Each unit is assigned a unique integer, called ",(0,o.mdx)("inlineCode",{parentName:"p"},"UnitId"),". This is done\nby the storage backend the first time the unit is encountered, and\nthereafter the unit will be referred to by its ",(0,o.mdx)("inlineCode",{parentName:"p"},"UnitId"),"."),(0,o.mdx)("h2",{id:"capturing-ownership-data-from-the-indexer"},"Capturing ownership data from the indexer"),(0,o.mdx)("p",null,"The indexer provides an initial mapping of facts to units (or units to\nfacts, if you like). A fact can have an arbitrary number of owners.\nThis is done in one of two ways."),(0,o.mdx)("h3",{id:"json"},"JSON"),(0,o.mdx)("p",null,"For indexers that produce JSON, the unit is an optional field:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'[\n{\n   "predicate": "glean.test.Node.5",\n   "facts" : [\n       {\n         "key": { "label": "d" }\n       }\n   ],\n   "unit": "D"\n},\n')),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"unit")," here is the owner of all the facts in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"facts")," array."),(0,o.mdx)("p",null,"For an example JSON file with units, see ",(0,o.mdx)(c,{file:"glean/shell/tests/owner.glean",mdxType:"SrcFile"}),"."),(0,o.mdx)("h3",{id:"binary"},"Binary"),(0,o.mdx)("p",null,"Indexers that produce binary facts can annotate a batch of facts with owners:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'struct Batch {\n  ...\n  5: map<UnitName, list<Id> (hs.type = "VectorStorable")> (\n    hs.type = "HashMap",\n  ) owned;\n')),(0,o.mdx)("p",null,"Specifies ownership of the facts in this batch. The list is really a\nlist of intervals ",(0,o.mdx)("inlineCode",{parentName:"p"},"[x1,x2, y1,y2, ... ]")," representing the inclusive\nranges ",(0,o.mdx)("inlineCode",{parentName:"p"},"x1..x2"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"y1..y2"),", ... where ",(0,o.mdx)("inlineCode",{parentName:"p"},"x1 <= x2"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"y1 <= y2"),", ..."),(0,o.mdx)("p",null,"The ranges do not need to be sorted, and can overlap."),(0,o.mdx)("h3",{id:"storing-the-ownership-data"},"Storing the ownership data"),(0,o.mdx)("p",null,"The raw ownership data from the indexer is captured when the facts are\nwritten to the DB. The fact IDs in the ownership data are substituted\nwith the final fact IDs of the facts."),(0,o.mdx)("p",null,"Note that we might be writing a fact that already exists in the DB; in\nthat case we don't write the fact, but we must still remember the\nownership mapping, because it might be adding additional owners."),(0,o.mdx)("h2",{id:"ownership-sets"},"Ownership sets"),(0,o.mdx)("p",null,"In general the owner of a fact is an ",(0,o.mdx)("em",{parentName:"p"},"ownership set"),", which has the\nfollowing form:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"  set ::= unit\n        | set_1 || ... || set_n\n        | set_1 && ... && set_n\n")),(0,o.mdx)("p",null,"That is, an ownership set is either a ",(0,o.mdx)("em",{parentName:"p"},"unit"),", or a disjunction of sets\n(",(0,o.mdx)("inlineCode",{parentName:"p"},"set_1 || ... || set_n"),"), or a conjunction of sets (",(0,o.mdx)("inlineCode",{parentName:"p"},"set_1 && ... &&\nset_n"),")."),(0,o.mdx)("p",null,"Each unique set is assigned a unique ID, called ",(0,o.mdx)("inlineCode",{parentName:"p"},"UsetId")," in the\nimplementation. ",(0,o.mdx)("inlineCode",{parentName:"p"},"UsetId")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"UnitId")," use distinct ranges, so we can\nrepresent a set in a canonical way as an operator (",(0,o.mdx)("inlineCode",{parentName:"p"},"||")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"&&"),")\ntogether with an integer set. The implementation of this is\n",(0,o.mdx)("inlineCode",{parentName:"p"},"SetExpr<T>")," in ",(0,o.mdx)(c,{file:"glean/rts/ownership/uset.h",mdxType:"SrcFile"}),"."),(0,o.mdx)("p",null,"A set may only refer to ",(0,o.mdx)("inlineCode",{parentName:"p"},"UsetId"),"s that are smaller than its ",(0,o.mdx)("inlineCode",{parentName:"p"},"UsetId"),"\n(just like facts can only refer to smaller fact IDs)."),(0,o.mdx)("p",null,"The efficiency of this scheme depends on the assumption that while\nthere are a lot of facts, there are relatively few distinct ownership\nsets. Typically we see between 10-100x more facts than sets. The\nstorage we need for sets is therefore small relative to the size of\nthe DB. This assumption rests on the indexer using a coarse enough\nrange of units; one unit per file or module is good, but one unit per\nfunction would lead to more sets."),(0,o.mdx)("h2",{id:"visibility-and-slices"},"Visibility and slices"),(0,o.mdx)("p",null,"When building an incremental DB, we will ",(0,o.mdx)("em",{parentName:"p"},"exclude")," some units from the\nbase DB. This is done by building a ",(0,o.mdx)("em",{parentName:"p"},"slice")," (see ",(0,o.mdx)(c,{file:"glean/rts/ownership/slice.h",mdxType:"SrcFile"}),")"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A ",(0,o.mdx)("em",{parentName:"li"},"slice")," is a set of ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsetId")),(0,o.mdx)("li",{parentName:"ul"},"A ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsetId")," is in the slice if",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"unit"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"unit")," is not excluded"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"set_1 || ... || set_n"),": any of ",(0,o.mdx)("inlineCode",{parentName:"li"},"set_1 ... set_n")," are in the slice"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"set_1 && ... && set_n"),": all of ",(0,o.mdx)("inlineCode",{parentName:"li"},"set_1 ... set_n")," are in the slice"))),(0,o.mdx)("li",{parentName:"ul"},"A fact is visible if its ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsetId")," is in the slice")),(0,o.mdx)("p",null,"A slice is represented by a bitmap. To construct the slice we\ndetermine the visibility of each ",(0,o.mdx)("inlineCode",{parentName:"p"},"UsetId")," in ascending order, so that\nwhen we process a given set we already know the visibility of the sets\nit refers to."),(0,o.mdx)("h2",{id:"propagating-ownership-to-dependent-facts"},"Propagating ownership to dependent facts"),(0,o.mdx)("p",null,"The property we want is that"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"In a DB consisting of all the visible facts for a given set of\nexcluded units, every fact referenced by a visible fact is\nalso visible.")),(0,o.mdx)("p",null,"(Basically, there are no dangling references.)"),(0,o.mdx)("p",null,"To achieve this, we have to make sure that the ownership sets are\nbuilt such that this property is true for any set of excluded units."),(0,o.mdx)("p",null,"This is done as follows:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"for a fact F with ownership set A",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"for each fact referenced by F with ownership set B",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"we make the owner ",(0,o.mdx)("inlineCode",{parentName:"li"},"A || B"))))))),(0,o.mdx)("p",null,"This is obviously correct: if F is visible, then every fact it refers\nto will also be visible."),(0,o.mdx)("p",null,"In practice we make this efficient by:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Traverse facts in reverse order, so we always visit a fact before\nthe facts it depends on, and we only have to visit each fact once.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"We only have disjunctions at this stage (conjunctions arise with\nderived facts in the next stage), so we can normalise ",(0,o.mdx)("inlineCode",{parentName:"p"},"A || B")," by\ntaking the union of the sets ",(0,o.mdx)("inlineCode",{parentName:"p"},"A")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"B"),". We use an efficient\ninteger set representation with fast union (see ",(0,o.mdx)(c,{file:"glean/rts/ownership/setu32.h",mdxType:"SrcFile"}),")."))),(0,o.mdx)("p",null,"This propagation requires ",(0,o.mdx)("em",{parentName:"p"},"O(facts)")," time, and the current\nimplementation also requires ",(0,o.mdx)("em",{parentName:"p"},"O(facts)")," space too."),(0,o.mdx)("p",null,"The implementation of this propagation is ",(0,o.mdx)("inlineCode",{parentName:"p"},"computeOwnership")," in ",(0,o.mdx)(c,{file:"glean/rts/ownership.cpp",mdxType:"SrcFile"}),"."),(0,o.mdx)("p",null,"Ownership propagation happens after all the facts are written, but\nbefore derivation starts. This is why we have the ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean complete"),"\ncommand: it marks the predicates complete and computes ownership sets\nfor the written facts."),(0,o.mdx)("p",null,"In the future we could consider"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Starting the propagation in parallel with fact writing. We may have to visit facts multiple times, however."),(0,o.mdx)("li",{parentName:"ul"},"Do it with less than ",(0,o.mdx)("em",{parentName:"li"},"O(facts)")," space, to support large DBs. We'll probably have to write intermediate results to the DB.")),(0,o.mdx)("h2",{id:"storing-ownership-in-the-db"},"Storing ownership in the DB"),(0,o.mdx)("p",null,"Ownership that we store in the DB consists of:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ownershipUnits"),": a mappings from unit to ",(0,o.mdx)("inlineCode",{parentName:"li"},"UnitId")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ownershipUnitIds"),": a mapping from ",(0,o.mdx)("inlineCode",{parentName:"li"},"UnitId")," to unit. This is\nused only for introspection (displaying an ownership set, e.g. for\nthe ",(0,o.mdx)("inlineCode",{parentName:"li"},":owner")," command in the shell)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ownershipSets"),": a mapping from ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsetId")," to set, encoded using Elias Fano Coding."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"factOwners"),": a mapping from ",(0,o.mdx)("inlineCode",{parentName:"li"},"Id")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsetId"),", giving the owner for\neach fact ID. This is an interval map, so for a series of consecutive\nfact Ids with the same owner, we only store the first.")),(0,o.mdx)("h3",{id:"caching-fact-ownership"},"Caching fact ownership"),(0,o.mdx)("p",null,"Reading from ",(0,o.mdx)("inlineCode",{parentName:"p"},"factOwners")," each time we want the ownership of a fact\ncan be very expensive, because we need to check the owner\nevery time we visit a fact during a query to determine its visibility."),(0,o.mdx)("p",null,"We therefore cache the ownership information in memory. This is done\nlazily: we read a page of fact owners at a time. To find the owner of\na fact, we binary-search in the page to find the beginning of the\ninterval containing the desired fact ID."),(0,o.mdx)("h2",{id:"ownership-for-derived-facts"},"Ownership for derived facts"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"A derived fact should be visible if and only if all the facts that\nit was derived from are visible.")),(0,o.mdx)("p",null,"This naturally gives rise to the following implementation:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The owner for a fact derived from facts ",(0,o.mdx)("inlineCode",{parentName:"li"},"F1...Fn")," with owners ",(0,o.mdx)("inlineCode",{parentName:"li"},"O1...On"),"\nrespectively is ",(0,o.mdx)("inlineCode",{parentName:"li"},"O1 && ... && On"))),(0,o.mdx)("p",null,"This is straightforward except that we might have multiple threads\nderiving in parallel, and e want to avoid having duplicate ownership\nsets created."),(0,o.mdx)("p",null,"So the implementation is similar to the way facts are written:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"When deriving we create a batch of ownership information\n(",(0,o.mdx)("inlineCode",{parentName:"p"},"DefineOwnership"),") consisting of the new ownership sets and the\nmapping from facts to ownership sets. Each ",(0,o.mdx)("inlineCode",{parentName:"p"},"DefineOwnership")," is\nwritten to the DB as it is created, using ",(0,o.mdx)("inlineCode",{parentName:"p"},"addDefineOwnership"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"When writing the facts to the DB, we de-duplicate the ownership sets\nagainst those in the DB, and renumber the sets as necessary. This is\n",(0,o.mdx)("inlineCode",{parentName:"p"},"computeDerivedOwnership"),"."))),(0,o.mdx)("p",null,"Note that because derivation needs to know the owners of facts derived\nfrom, the ownership propagation described above needs to be complete\nfirst."),(0,o.mdx)("h2",{id:"ownership-for-stacked-databases"},"Ownership for stacked databases"),(0,o.mdx)("p",null,"The main complication with stacked DBs is that a DB may induce new\nownership for facts in a lower DB in the stack, as described ",(0,o.mdx)("a",{parentName:"p",href:"#stacked-incremental-dbs"},"above"),"."),(0,o.mdx)("p",null,"For the stacked DB we do ",(0,o.mdx)("a",{parentName:"p",href:"#propagating-ownership-to-dependent-facts"},"ownership\npropagation")," as before,\nincluding propagating ownership to facts in the base DBs. But we don't\nwant to have to consider all facts in the stack, so instead of walking\nthrough all facts in the stack we switch to using a priority queue for\nfacts in the base DB(s) to track facts to which we are propagating\nownership."),(0,o.mdx)("p",null,"Now that a fact in the base DB can have multiple owners, we have an\nimplementation choice:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"getOwner(fact)")," returns ",(0,o.mdx)("em",{parentName:"p"},"all")," owners for the fact."),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"A fact is visible if ",(0,o.mdx)("em",{parentName:"li"},"any")," of its owners is in the slice."),(0,o.mdx)("li",{parentName:"ul"},"When deriving facts later, we have to construct the set of the\ndisjunction of all owners for a fact we derived from."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"getOwner(fact)")," returns the ",(0,o.mdx)("em",{parentName:"p"},"first")," owner in the stack. For this\nto work, the first owner has to include the base DB owner too. For\nexample, if fact F has base owner A and new owner B propagated from\nthe stacked DB, then its owner in the stacked DB should be ",(0,o.mdx)("inlineCode",{parentName:"p"},"A ||\nB"),". Now when deriving, we only have one owner for each fact and we\ndon't need to construct new sets."))),(0,o.mdx)("p",null,"In Glean we currently do (2) because it seemed simpler."),(0,o.mdx)("h3",{id:"derived-facts-in-stacked-incremental-dbs"},"Derived facts in stacked incremental DBs"),(0,o.mdx)("p",null,"There is a problem here: suppose we have a fact F with owner A in the\nbase DB, and we propagate a new owner B to F in a stacked DB. F's\nowner is now ",(0,o.mdx)("inlineCode",{parentName:"p"},"A || B"),". However, facts that derived from F in the\noriginal base DB will have ownership sets that don't include B.  The\nconsequence is that later we might have a situation where F is\nvisible, but facts derived from it are not."),(0,o.mdx)("p",null,"To fix this, we want to do incremental derivation on the stacked DB,\nand propagate this new ownership to the base DB, which will fix up the\nownership of the derived facts. Incremental derivation must therefore\nconsider facts that have new ownership in the stacked DB when\nderiving. At the time of writing, this isn't implemented yet."))}f.isMDXComponent=!0}}]);