"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7871],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),v=l,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(2848),l=t(9213),a=(t(9496),t(9613)),o=["components"],i={id:"env",title:"pnpm env <cmd>"},p=void 0,s={unversionedId:"cli/env",id:"version-6.x/cli/env",title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/id/6.x/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/id/6.x/cli/start"},next:{title:"pnpm publish",permalink:"/id/6.x/cli/publish"}},u={},c=[{value:"Perintah",id:"perintah",level:2},{value:"use",id:"use",level:3},{value:"Opsional",id:"opsional",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:c};function v(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v6.12.0"),(0,a.kt)("p",null,"Mengelola lingkungan Node.js."),(0,a.kt)("h2",{id:"perintah"},"Perintah"),(0,a.kt)("h3",{id:"use"},"use"),(0,a.kt)("p",null,"Instal dan gunakan versi Node.js yang ditentukan"),(0,a.kt)("p",null,"Instal versi LTS dari Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,a.kt)("p",null,"Instal Node.js v16:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,a.kt)("p",null,"Also since v6.18.0:"),(0,a.kt)("p",null,"Instal versi pra-rilis Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,a.kt)("p",null,"Instal versi terbaru Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,a.kt)("h2",{id:"opsional"},"Opsional"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Perubahan dilakukan di seluruh sistem."))}v.isMDXComponent=!0}}]);