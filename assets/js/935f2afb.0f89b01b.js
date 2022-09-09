"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"someSidebar":[{"type":"category","label":"Quick Start","items":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"link","label":"Trying Glean","href":"/docs/trying","docId":"trying"},{"type":"link","label":"Building Glean","href":"/docs/building","docId":"building"},{"type":"link","label":"Walkthrough","href":"/docs/walkthrough","docId":"walkthrough"}],"collapsed":true,"collapsible":true},{"type":"category","label":"User Guide","items":[{"type":"category","label":"Schemas","items":[{"type":"link","label":"Basic Concepts","href":"/docs/schema/basic","docId":"schema/basic"},{"type":"link","label":"Built-in Types","href":"/docs/schema/types","docId":"schema/types"},{"type":"link","label":"Syntax","href":"/docs/schema/syntax","docId":"schema/syntax"},{"type":"link","label":"Recursion","href":"/docs/schema/recursion","docId":"schema/recursion"},{"type":"link","label":"Changing a schema","href":"/docs/schema/changing","docId":"schema/changing"},{"type":"link","label":"The special \\"all\\" schema","href":"/docs/schema/all","docId":"schema/all"},{"type":"link","label":"Workflow","href":"/docs/schema/workflow","docId":"schema/workflow"},{"type":"link","label":"Thrift and JSON","href":"/docs/schema/thrift","docId":"schema/thrift"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Querying","items":[{"type":"link","label":"Overview","href":"/docs/query/intro","docId":"query/intro"},{"type":"category","label":"Angle","items":[{"type":"link","label":"Introduction","href":"/docs/angle/intro","docId":"angle/intro"},{"type":"link","label":"Guide","href":"/docs/angle/guide","docId":"angle/guide"},{"type":"link","label":"Query Efficiency","href":"/docs/angle/efficiency","docId":"angle/efficiency"},{"type":"link","label":"Advanced Query Features","href":"/docs/angle/advanced","docId":"angle/advanced"},{"type":"link","label":"Debugging","href":"/docs/angle/debugging","docId":"angle/debugging"},{"type":"link","label":"Reference","href":"/docs/angle/reference","docId":"angle/reference"},{"type":"link","label":"Style Guide","href":"/docs/angle/style","docId":"angle/style"}],"collapsed":true,"collapsible":true},{"type":"category","label":"APIs","items":[{"type":"link","label":"Haskell","href":"/docs/query/api/haskell","docId":"query/api/haskell"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"link","label":"Derived Predicates","href":"/docs/derived","docId":"derived"},{"type":"link","label":"Glean Databases","href":"/docs/databases","docId":"databases"},{"type":"link","label":"Writing data to Glean","href":"/docs/write","docId":"write"},{"type":"link","label":"Running the Tools","href":"/docs/running","docId":"running"},{"type":"link","label":"Using the Shell","href":"/docs/shell","docId":"shell"},{"type":"link","label":"Running the Glean Server","href":"/docs/server","docId":"server"},{"type":"link","label":"The Glean CLI tool","href":"/docs/cli","docId":"cli"},{"type":"category","label":"Indexers","items":[{"type":"link","label":"Introduction","href":"/docs/indexer/intro","docId":"indexer/intro"},{"type":"link","label":"C++ and C","href":"/docs/indexer/cxx","docId":"indexer/cxx"},{"type":"link","label":"JavaScript (Flow)","href":"/docs/indexer/flow","docId":"indexer/flow"},{"type":"link","label":"Hack","href":"/docs/indexer/hack","docId":"indexer/hack"},{"type":"link","label":"Haskell","href":"/docs/indexer/haskell","docId":"indexer/haskell"},{"type":"link","label":"TypeScript","href":"/docs/indexer/lsif-typescript","docId":"indexer/lsif-typescript"},{"type":"link","label":"Go","href":"/docs/indexer/lsif-go","docId":"indexer/lsif-go"},{"type":"link","label":"Rust","href":"/docs/indexer/lsif-rust","docId":"indexer/lsif-rust"},{"type":"link","label":"Java","href":"/docs/indexer/lsif-java","docId":"indexer/lsif-java"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true}]},"docs":{"angle/advanced":{"id":"angle/advanced","title":"Advanced Query Features","description":"Types and signatures","sidebar":"someSidebar"},"angle/debugging":{"id":"angle/debugging","title":"Debugging","description":"Typically you want to do most of your debugging in the","sidebar":"someSidebar"},"angle/efficiency":{"id":"angle/efficiency","title":"Query Efficiency","description":"There are two important aspects of a query that affect its efficiency;","sidebar":"someSidebar"},"angle/guide":{"id":"angle/guide","title":"Angle Guide","description":"The following guide will explain Angle from first principles, leading you through from simple queries to more complex ones.","sidebar":"someSidebar"},"angle/intro":{"id":"angle/intro","title":"Angle Introduction","description":"Angle is Glean\u2019s schema and query language.  It is a declarative query","sidebar":"someSidebar"},"angle/reference":{"id":"angle/reference","title":"Angle Reference","description":"Queries","sidebar":"someSidebar"},"angle/style":{"id":"angle/style","title":"Angle Style Guide","description":"Typical Angle style uses the following rules:","sidebar":"someSidebar"},"building":{"id":"building","title":"Building Glean from Source","description":"Introduction","sidebar":"someSidebar"},"cli":{"id":"cli","title":"The Glean CLI tool","description":"The Glean CLI tool (glean) can create and write data into databases,","sidebar":"someSidebar"},"databases":{"id":"databases","title":"Glean Databases","description":"Glean stores facts in databases.","sidebar":"someSidebar"},"derived":{"id":"derived","title":"Derived Predicates","description":"Glean supports predicates that are defined in terms of a query. There are two types of derived predicates, \\"stored\\" and \\"on demand\\".","sidebar":"someSidebar"},"indexer/cxx":{"id":"indexer/cxx","title":"C++ and C","description":"The C++ indexer (\\"the clang indexer\\") is a wrapper over","sidebar":"someSidebar"},"indexer/flow":{"id":"indexer/flow","title":"JavaScript (Flow)","description":"The JavaScript/Flow indexer is built into the","sidebar":"someSidebar"},"indexer/hack":{"id":"indexer/hack","title":"Hack","description":"The Hack indexer is built into the Hack typechecker. Stable and nightly binaries of the Hack indexer are available.","sidebar":"someSidebar"},"indexer/haskell":{"id":"indexer/haskell","title":"Haskell","description":"To index Haskell Glean consumes .hie files produced by the GHC compiler (>=8.8) with the flag -fwrite-ide-info.","sidebar":"someSidebar"},"indexer/intro":{"id":"indexer/intro","title":"Introduction","description":"In this section we\'ll describe the indexers that are currently available for","sidebar":"someSidebar"},"indexer/lsif-go":{"id":"indexer/lsif-go","title":"Go","description":"To index Go we use SourceGraph\'s LSIF indexer for Go. LSIF is a new format for tools to share information about code. Binary releases of lsif-go are available ffor x86 Linux which will work as Glean indexers. The LSIF indexer uses a recent (>1.15) version of Go.","sidebar":"someSidebar"},"indexer/lsif-java":{"id":"indexer/lsif-java","title":"Java","description":"To index Java we use","sidebar":"someSidebar"},"indexer/lsif-rust":{"id":"indexer/lsif-rust","title":"Rust","description":"To index Rust we use rust-analyzer in LSIF mode. Pre-built binaries of rust-analyzer can be used as indexers that emit LSIF from Rust source.","sidebar":"someSidebar"},"indexer/lsif-typescript":{"id":"indexer/lsif-typescript","title":"TypeScript","description":"To index TypeScript we use SourceGraph\'s LSIF indexer for TypeScript. LSIF is a new format for tools to share information about code. Releases of lsif-tsc can be installed with yarn or npm and used as indexers for LSIF, which Glean will accept. The indexer itself requires a node.js runtime.","sidebar":"someSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Glean is a system for working with facts about source code. It is","sidebar":"someSidebar"},"query/api/haskell":{"id":"query/api/haskell","title":"Haskell Query API","description":"To use the Haskell API:","sidebar":"someSidebar"},"query/haskell":{"id":"query/haskell","title":"Haskell Query API","description":"To use the Haskell API:"},"query/intro":{"id":"query/intro","title":"Querying Glean","description":"Glean\'s query language is called Angle.  Read the [Angle","sidebar":"someSidebar"},"running":{"id":"running","title":"Running the Tools","description":"Configuration files","sidebar":"someSidebar"},"schema/all":{"id":"schema/all","title":"The special \\"all\\" schema","description":"There is a special schema known as the all schema, defined in .","sidebar":"someSidebar"},"schema/basic":{"id":"schema/basic","title":"Basic Concepts","description":"This section explains the concepts behind how Glean stores data, and","sidebar":"someSidebar"},"schema/changing":{"id":"schema/changing","title":"How do I change a schema?","description":"Glean supports modifying the schema directly, while providing","sidebar":"someSidebar"},"schema/recursion":{"id":"schema/recursion","title":"Recursion","description":"Predicates can be (mutually) recursive. In other words, we can use","sidebar":"someSidebar"},"schema/syntax":{"id":"schema/syntax","title":"Syntax","description":"Schemas are written in Glean\'s Angle language.","sidebar":"someSidebar"},"schema/thrift":{"id":"schema/thrift","title":"Thrift and JSON","description":"The Glean schema is automatically translated into a set of Thrift type","sidebar":"someSidebar"},"schema/types":{"id":"schema/types","title":"Built-in Types","description":"Built-in Types","sidebar":"someSidebar"},"schema/workflow":{"id":"schema/workflow","title":"Workflow","description":"Where is the schema defined?","sidebar":"someSidebar"},"server":{"id":"server","title":"Running the Glean Server","description":"Typically the Glean server is invoked as:","sidebar":"someSidebar"},"shell":{"id":"shell","title":"Using the Shell","description":"The shell is an interactive tool in which you can","sidebar":"someSidebar"},"trying":{"id":"trying","title":"Trying Glean","description":"We provide a Docker image containing a pre-built set of Glean binaries","sidebar":"someSidebar"},"walkthrough":{"id":"walkthrough","title":"Walkthrough","description":"We can play with Glean using the shell. You can do this","sidebar":"someSidebar"},"write":{"id":"write","title":"Writing data to Glean","description":"This page describes the various ways in which data gets into Glean.","sidebar":"someSidebar"}}}')}}]);