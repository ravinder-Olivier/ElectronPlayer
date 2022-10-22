"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(y,l(l({ref:t},d),{},{components:a})):r.createElement(y,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:m,groupId:y,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.U)(),[k,O]=(0,n.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=y){const e=w[y];null!=e&&e!==k&&v.some((t=>t.value===e))&&O(e)}const D=e=>{const t=e.currentTarget,a=P.indexOf(t),r=v[a].value;r!==k&&(E(t),O(r),null!=y&&T(y,String(r)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=P[t]??P[P.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>P.push(e),onKeyDown:S,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":k===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,l.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},9614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_position:3},s="Creating players (without playlists)",u={unversionedId:"usage/creating-players",id:"usage/creating-players",title:"Creating players (without playlists)",description:"The API for creating players will change soon, and this",source:"@site/docs/usage/creating-players.md",sourceDirName:"usage",slug:"/usage/creating-players",permalink:"/YouTubePlayer/docs/usage/creating-players",draft:!1,editUrl:"https://github.com/RedstoneWizard08/YouTubePlayer/tree/main/docs/docs/usage/creating-players.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating playlists",permalink:"/YouTubePlayer/docs/usage/creating-playlists"},next:{title:"Readme",permalink:"/YouTubePlayer/docs/api/"}},d={},p=[],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-players-without-playlists"},"Creating players (without playlists)"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The API for creating players will change soon, and this\nwill completely remove the metadata (second parameter)\nof the ",(0,n.kt)("inlineCode",{parentName:"p"},"createPlayer()")," function, and the metadata will\nbe auto-generated based on the info provided (first\nparameter), since the metadata being supplied is very\nrepetitive.")),(0,n.kt)("p",null,"To use the library, use this code:"),(0,n.kt)(o.Z,{groupId:"language-formats",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cjs",label:"CommonJS Modules",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Import the library\nconst YouTubePlayer = require("@redstonewizard08/youtube-player");\n\n// Most build tools will allow you to import assets directly\n// as URLs (e.g. Vite, or Webpack with plugins, also rollup),\n// but if that fails, you can just provide a URL (relative or\n// non-relative). YouTube Player also supports Data URIs.\nconst poster = require("../public/assets/hold_your_ground.png");\nconst video = require("../public/assets/hold_your_ground.mp4");\n\n// On window load, create our player.\nwindow.addEventListener("load", () => {\n    // Define the video info.\n    /** @type {import("@redstonewizard08/youtube-player").VideoData} */\n    const video = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        title: "Hold Your Ground",\n\n        poster: poster,\n        source: video,\n    };\n\n    // Define the metadata.\n    /** @type {import("@redstonewizard08/youtube-player").PlayerMetadata} */\n    const metadata = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        titie: "Hold Your Ground",\n\n        artwork: [\n            // ...\n        ],\n    };\n\n    // Create the player instance.\n    const player = YouTubePlayer.createPlayer(video, metadata);\n});\n'))),(0,n.kt)(l.Z,{value:"esm",label:"ES Modules",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'// Import the library\nimport YouTubePlayer from "@redstonewizard08/youtube-player";\n\n// Most build tools will allow you to import assets directly\n// as URLs (e.g. Vite, or Webpack with plugins, also rollup),\n// but if that fails, you can just provide a URL (relative or\n// non-relative). YouTube Player also supports Data URIs.\nimport poster from "../public/assets/hold_your_ground.png";\nimport video from "../public/assets/hold_your_ground.mp4";\n\n// On window load, create our player.\nwindow.addEventListener("load", () => {\n    // Define the video info.\n    /** @type {import("@redstonewizard08/youtube-player").VideoData} */\n    const video = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        title: "Hold Your Ground",\n\n        poster: poster,\n        source: video,\n    };\n\n    // Define the metadata.\n    /** @type {import("@redstonewizard08/youtube-player").PlayerMetadata} */\n    const metadata = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        titie: "Hold Your Ground",\n\n        artwork: [\n            // ...\n        ],\n    };\n\n    // Create the player instance.\n    const player = YouTubePlayer.createPlayer(video, metadata);\n});\n'))),(0,n.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'// Import the library\nimport YouTubePlayer, { type VideoData, type PlayerMetadata } from "@redstonewizard08/youtube-player";\n\n// Most build tools will allow you to import assets directly\n// as URLs (e.g. Vite, or Webpack with plugins, also rollup),\n// but if that fails, you can just provide a URL (relative or\n// non-relative). YouTube Player also supports Data URIs.\nimport poster from "../public/assets/hold_your_ground.png";\nimport video from "../public/assets/hold_your_ground.mp4";\n\n// On window load, create our player.\nwindow.addEventListener("load", () => {\n    // Define the video info.\n    const video: VideoData = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        title: "Hold Your Ground",\n\n        poster: poster,\n        source: video,\n    };\n\n    // Define the metadata.\n    const metadata: PlayerMetadata = {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        titie: "Hold Your Ground",\n\n        artwork: [\n            // ...\n        ],\n    };\n\n    // Create the player instance.\n    const player = YouTubePlayer.createPlayer(video, metadata);\n});\n')))))}m.isMDXComponent=!0}}]);