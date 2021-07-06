(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return f}));var a=t(3),i=t(7),r=(t(0),t(129)),l=t(39),o=t(132),c=["components"],b={id:"write",title:"Writing data to Glean",sidebar_label:"Writing data to Glean"},s={unversionedId:"write",id:"write",isDocsHomePage:!1,title:"Writing data to Glean",description:"This page describes the various ways in which data gets into Glean.",source:"@site/../docs/write.md",slug:"/write",permalink:"/docs/write",version:"current",sidebar_label:"Writing data to Glean",sidebar:"someSidebar",previous:{title:"Glean Databases",permalink:"/docs/databases"},next:{title:"Running the Tools",permalink:"/docs/running"}},d=[{value:"Client-driven writing",id:"client-driven-writing",children:[]},{value:"Server-driven writing",id:"server-driven-writing",children:[]},{value:"APIs for writing",id:"apis-for-writing",children:[]},{value:"Writing from the command line",id:"writing-from-the-command-line",children:[{value:"JSON format",id:"json-format",children:[]},{value:"Loading a DB from JSON in the shell",id:"loading-a-db-from-json-in-the-shell",children:[]},{value:"Creating a database using the command line",id:"creating-a-database-using-the-command-line",children:[]}]}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",n)}},m=p("Scribe"),u=p("Backup"),h={toc:d};function f(e){var n=e.components,t=Object(i.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page describes the various ways in which data gets into Glean."),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("p",null,"For a complete walkthrough of the steps necessary to write an indexer, see ",Object(r.b)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Glean/How_to:_write_a_Glean_indexer/"},"How to write a Glean indexer"),".")),Object(r.b)("p",null,"There are two main methods for creating a DB. Repo-wide indexing jobs\nwhich require multiple workers and have dependent tasks are managed by\nthe server, while simple one-off DB creation can be performed\nindependently by a single client."),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("p",null,"After the data is ingested by the write tier (",Object(r.b)("inlineCode",{parentName:"p"},"glean.write"),"), it is backed up and copied to the read tier (",Object(r.b)("inlineCode",{parentName:"p"},"glean"),") for efficient access. For newly created DB names, check out ",Object(r.b)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Glean/Write/#configuring-db-backup-an"},"the section below")," for configuring this behavior.")),Object(r.b)("h2",{id:"client-driven-writing"},"Client-driven writing"),Object(r.b)("p",null,"A database can be created by a client using any of these methods:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Programmatically, using one of the APIs listed in ",Object(r.b)("a",{parentName:"li",href:"#apis-for-writing"},"APIs for Writing"),"."),Object(r.b)("li",{parentName:"ol"},"On the command line: invoke the ",Object(r.b)("inlineCode",{parentName:"li"},"glean")," command-line tool to send data in JSON format, see ",Object(r.b)("a",{parentName:"li",href:"#creating-a-database-usin"}," Creating a database using the command line"),"."),Object(r.b)("li",{parentName:"ol"},"In the shell, use ",Object(r.b)("inlineCode",{parentName:"li"},"glean-shell --db-root=<dir>")," and then use the command ",Object(r.b)("inlineCode",{parentName:"li"},":load")," to create a DB from a JSON file. See ",Object(r.b)("a",{parentName:"li",href:"#loading-a-db-from-json-i"}," Loading a DB from JSON in the shell"),".")),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Via Scribe, see ",Object(r.b)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/Write/#writing-data-using-scrib"},"Writing data using Scribe")))),Object(r.b)("h2",{id:"server-driven-writing"},"Server-driven writing"),Object(r.b)("p",null,"Large indexing jobs are coordinated by the server, using a ",Object(r.b)("em",{parentName:"p"},"recipe")," to\ndefine the various tasks and the dependencies between them.  Recipes\nare defined in the recipes configuration; see the ",Object(r.b)("inlineCode",{parentName:"p"},"--recipe-config"),"\noption in ",Object(r.b)("a",{parentName:"p",href:"running#common-options"},"Common options"),"."),Object(r.b)("p",null,"The job proceeds as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"An indexing job is started by calling the server's ",Object(r.b)("inlineCode",{parentName:"p"},"kickOff")," Thrift\nmethod. This creates a work queue of tasks on the server.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Clients obtain tasks from the server by calling ",Object(r.b)("inlineCode",{parentName:"p"},"getWork"),". Tasks may\nhave dependencies between them, so the server won't hand out a task\nuntil its dependencies are complete.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When all tasks are done, the server marks the database as complete."))),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("p",null,"For the fbsource indexer, the components of this are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The coordinator, run by a ",Object(r.b)("a",{parentName:"li",href:"https://www.internalfb.com/intern/chronos/job/?jobname=glean.clang.indexer&smc=chronos_gp_admin_client"},"chronos job"),", which calls ",Object(r.b)("inlineCode",{parentName:"li"},"kickoff")," and then waits for completion."),Object(r.b)("li",{parentName:"ul"},"The workers which poll the server (see ",Object(r.b)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/ClangIndexer/"},"Glean/ClangIndexer"),")"),Object(r.b)("li",{parentName:"ul"},"The server (see ",Object(r.b)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/Infrastructure/"},"Glean/Infrastructure"),")"))),Object(r.b)("h2",{id:"apis-for-writing"},"APIs for writing"),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The C++ writing API is the most performant. It is used by the clang-based indexer for C++  and Objective C code.  See ",Object(r.b)("a",{parentName:"li",href:"https://phabricator.intern.facebook.com/diffusion/FBS/browse/master/fbcode/glean/cpp/glean.h"},"glean/cpp/glean.h")),Object(r.b)("li",{parentName:"ul"},"In Hack, ",Object(r.b)("a",{parentName:"li",href:"https://www.internalfb.com/intern/codex/symbol/php/Glean/genKickOffForHandle/"},"genKickOffForHandle")," and the various functions for writing facts."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Haskell API for writing",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)(o.b,{file:"glean/client/hs/example/ExampleWriter.hs",mdxType:"SrcFile"}))))),Object(r.b)("p",null,"If none of the above work for you, the Thrift API enable basic write\naccess to the database."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"kickOff")," can be used to create a new DB"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sendJsonBatch")," is for sending facts in JSON-serialized form"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"finishBatch")," exposes the result of a previously sent JSON batch"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"workFinished")," closes a DB")),Object(r.b)("p",null,"A rough outline of a client looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"glean = make_glean_thrift_client()\ndb_handle = make_uuid()\nglean.kickOff(my_repo, KickOffFill(writeHandle=db_handle))\nfor json_batch in json_batches:\n    handle = glean.sendJsonBatch(json_batch)\n    result = glean.finishBatch(handle)\n    # handle result\nglean.workFinished(my_repo, db_handle, success_or_failure)\n")),Object(r.b)("h2",{id:"writing-from-the-command-line"},"Writing from the command line"),Object(r.b)("h3",{id:"json-format"},"JSON format"),Object(r.b)("p",null,"The JSON format for Glean data is described in ",Object(r.b)("a",{parentName:"p",href:"schema/thrift"},"Thrift and JSON"),"."),Object(r.b)("p",null,"Here's an example of JSON data for writing to Glean:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'[\n  { "predicate": "cxx1.Name.1",          # define facts for cxx1.Name.1\n    "facts": [\n      { "id": 1, "key": "abc" },         # define a fact with id 1\n      { "id": 2, "key": "def" }\n    ]\n  },\n  { "predicate": "cxx1.FunctionName.1",  # define facts for cxx1.FunctionName.1\n    "facts": [\n      { "id": 3,\n        "key": {\n          "name": { "id": 1 }}}          # reference to fact with id 1\n    ]\n  },\n  { "predicate": "cxx1.FunctionQName.1", # define facts for cxx1.FunctionQName.1\n    "facts": [\n      { "key": {\n        "name": 3,                       # 3 is shorthand for { "id": 3 }\n        "scope": { "global_": {} } } },\n      { "key": {\n        "name": {\n          "key": {                       # define a nested fact directly\n            "name": {\n              "key": "ghi" }}},         # another nested fact\n        "scope": {\n          "namespace_": {\n            "key": {\n              "name": {\n                "key": "std" }}}}}\n    ]\n  }\n]\n')),Object(r.b)("p",null,"The rules of the game are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Predicate names must include versions, i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"cxx1.Name.1")," rather than ",Object(r.b)("inlineCode",{parentName:"li"},"cxx1.Name"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"id")," field when defining a fact is optional. The ",Object(r.b)("inlineCode",{parentName:"li"},"id")," numbers in the input file will ",Object(r.b)("em",{parentName:"li"},"not")," be the final ",Object(r.b)("inlineCode",{parentName:"li"},"id")," numbers assigned to the facts in the database."),Object(r.b)("li",{parentName:"ul"},"There are no restrictions on ",Object(r.b)("inlineCode",{parentName:"li"},"id")," values (any 64-bit integer will do) but an ",Object(r.b)("inlineCode",{parentName:"li"},"id")," value may not be reused within a file."),Object(r.b)("li",{parentName:"ul"},"Later facts may refer to earlier ones using either ",Object(r.b)("inlineCode",{parentName:"li"},'{ "id": N }')," or just ",Object(r.b)("inlineCode",{parentName:"li"},"N"),"."),Object(r.b)("li",{parentName:"ul"},"It is only possible to refer to ",Object(r.b)("inlineCode",{parentName:"li"},"id"),"s from facts in the same file, if you are writing multiple files using ",Object(r.b)("inlineCode",{parentName:"li"},"glean write")," or via the ",Object(r.b)("inlineCode",{parentName:"li"},"sendJsonBatch")," API."),Object(r.b)("li",{parentName:"ul"},"a nested facts can be defined inline, instead of defining it with an ",Object(r.b)("inlineCode",{parentName:"li"},"id")," first and then referencing it."),Object(r.b)("li",{parentName:"ul"},"an inline nested fact can be given an ",Object(r.b)("inlineCode",{parentName:"li"},"id")," and referred to later.")),Object(r.b)("h3",{id:"loading-a-db-from-json-in-the-shell"},"Loading a DB from JSON in the shell"),Object(r.b)("p",null,"The shell is useful for experimenting with creating a DB from JSON data directly. Let's try loading the data above into a DB in the shell:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ mkdir /tmp/glean\n$ glean-shell --db-root /tmp/glean\nGlean Shell, dev mode\ntype :help for help.\nno fbsource database availabe\n> :load test/0 /home/smarlow/test\nI0514 01:19:37.137109 3566745 Work.hs:184] test/16: database complete\n")),Object(r.b)("p",null,"Let's see what facts we loaded:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"test> :stat\n1\n  count: 72\n  size:  5988\ncxx1.FunctionName.1\n  count: 2\n  size:  66\ncxx1.FunctionQName.1\n  count: 2\n  size:  70\ncxx1.Name.1\n  count: 4\n  size:  148\ncxx1.NamespaceQName.1\n  count: 1\n  size:  35\ntest>\n")),Object(r.b)("p",null,"Note that there were 4 ",Object(r.b)("inlineCode",{parentName:"p"},"cxx1.Name.1")," facts - some of those were defined as inline nested facts in the JSON. We can query them all:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'test> cxx1.Name _\n4 results, 1 queries, 4 facts, 0.22ms, 44296 bytes\n\n{ "id": 1096, "key": "abc" }\n{ "id": 1097, "key": "def" }\n{ "id": 1100, "key": "ghi" }\n{ "id": 1102, "key": "std" }\n')),Object(r.b)("p",null,"Note that the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," values here do not correspond to the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," values in the input file."),Object(r.b)("h3",{id:"creating-a-database-using-the-command-line"},"Creating a database using the command line"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"glean")," command-line tool can be used to create a database directly on the server."),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("p",null,"There is a default retention policy for databases created this way; for details and to discuss your requirements, talk to the Glean team before creating databases.")),Object(r.b)("p",null,"To create a database from a single file of JSON facts:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"glean --service <write-server> create --finish --repo <name>/<hash> <filename>\n")),Object(r.b)("p",null,"where"),Object(r.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<write-server>")," can be ",Object(r.b)("inlineCode",{parentName:"li"},"glean.write.test")," for testing. ",Object(r.b)("inlineCode",{parentName:"li"},"glean.write")," is the production write tier."))),Object(r.b)(l.OssOnly,{mdxType:"OssOnly"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<write-server>")," is the ",Object(r.b)("inlineCode",{parentName:"li"},"host:port")," of the Glean server"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<name>")," is the name for your DB. For indexing repositories we normally use the name of the repository, but it's just a string, so you can use whatever you want."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<hash>")," identifies this particular instance of your database. For repositories we normally use the revision hash, but, again, it's just a string."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<filename>")," the file containing the JSON facts.")),Object(r.b)("p",null,"If the file is more than, say, 100MB, this operation will probably time out sending the data to the server. To send large amounts of data you need to batch it up into multiple files, and then send it like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"glean --service <write-server> create --repo <name>/<hash>\nglean --service <write-server> write --repo <name>/<hash> <filename1>\nglean --service <write-server> write --repo <name>/<hash> <filename2>\n...\nglean --service <write-server> finish --repo <name>/<hash>\n")),Object(r.b)("p",null,"To find out if your DB made it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"glean-shell --service <write-server> :list\n")),Object(r.b)("p",null,"This will list the DBs available on the write server."),Object(r.b)(m,{mdxType:"Scribe"}),Object(r.b)(u,{mdxType:"Backup"}))}f.isMDXComponent=!0},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?i.a.createElement(u,o(o({ref:n},b),{},{components:t})):i.a.createElement(u,o({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=t[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},132:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return b}));var a=t(0),i=t.n(a),r=t(39);let l;function o(e){return i.a.createElement("a",{href:l+e.file},e.file)}function c(e){return i.a.createElement("a",{href:l+e.file},e.children)}l=Object(r.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";const b=({children:e,internal:n,external:t})=>Object(r.fbContent)({internal:i.a.createElement("code",null,n),external:i.a.createElement("code",null,t)})}}]);