"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,b=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={id:"PlayerMetadata",title:"Interface: PlayerMetadata",sidebar_label:"PlayerMetadata",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/PlayerMetadata",id:"api/interfaces/PlayerMetadata",title:"Interface: PlayerMetadata",description:"Properties",source:"@site/docs/api/interfaces/PlayerMetadata.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PlayerMetadata",permalink:"/YouTubePlayer/docs/api/interfaces/PlayerMetadata",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerMetadata",title:"Interface: PlayerMetadata",sidebar_label:"PlayerMetadata",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"default",permalink:"/YouTubePlayer/docs/api/classes/default"},next:{title:"SourceInfo",permalink:"/YouTubePlayer/docs/api/interfaces/SourceInfo"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"album",id:"album",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"artist",id:"artist",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"artwork",id:"artwork",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"title",id:"title",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"album"},"album"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"album"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ravinder-Olivier/ElectronPlayer/blob/00e333a/lib/types.ts#L9"},"lib/types.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"artist"},"artist"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"artist"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ravinder-Olivier/ElectronPlayer/blob/00e333a/lib/types.ts#L8"},"lib/types.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"artwork"},"artwork"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"artwork"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"MediaImage"),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ravinder-Olivier/ElectronPlayer/blob/00e333a/lib/types.ts#L10"},"lib/types.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ravinder-Olivier/ElectronPlayer/blob/00e333a/lib/types.ts#L7"},"lib/types.ts:7")))}u.isMDXComponent=!0}}]);