import{m as e}from"./monaco.CEUksMZg.js";const o="gcl";e.languages.register({id:o,extensions:["gcl"],aliases:[],mimetypes:["application/gcl"]});e.languages.setLanguageConfiguration(o,{comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#pragma\\s+region\\b"),end:new RegExp("^\\s*#pragma\\s+endregion\\b")}},wordPattern:/[a-zA-Z_@$ΣΛλ][a-zA-Z0-9_]*/});e.languages.setMonarchTokensProvider(o,{defaultToken:"",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["if","fi","do","od","par","rap","skip","check"],constants:["true","false","init","stuck","terminated"],operators:["-",",","->",":=","!","!=","(",")","{","}","*","/","^","&&","&","+","<","<=","=",">",">=","||","|"],ltl:["X","G","F","U"],tokenizer:{root:[[/[a-zA-Z_@$ΣΛλ][a-zA-Z0-9_]*/,{cases:{"@keywords":"keyword","@constants":"constant.language","@ltl":"constant","@operators":"operator","@default":"identifier"}}],{include:"@whitespace"},[/[-,:=!*\/&+<>|]/,"keyword.operator"],[/(\/\/).*$/,"comment"],[/[{}()\[\]]/,"@brackets"],[/[0-9]+/,"number"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*\\$/,"comment","@linecomment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],linecomment:[[/.*[^\\]$/,"comment","@pop"],[/[^]+/,"comment"]]}});export{o as GCL_LANGUAGE_ID};
