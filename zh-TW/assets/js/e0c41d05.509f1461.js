"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9536],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,k=u["".concat(o,".").concat(s)]||u[s]||d[s]||p;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<p;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=n(2081),a=n(4604),p=(n(9496),n(9613)),l=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",title:"pnpm CLI",description:"\u8207 npm \u7684\u5dee\u7570",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/zh-TW/next/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"\u5b89\u88dd",permalink:"/zh-TW/next/installation"},next:{title:"\u8a2d\u5b9a",permalink:"/zh-TW/next/configuring"}},c={},d=[{value:"\u8207 npm \u7684\u5dee\u7570",id:"\u8207-npm-\u7684\u5dee\u7570",level:2},{value:"\u9078\u9805",id:"\u9078\u9805",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u8207-npm-\u7684\u5dee\u7570"},"\u8207 npm \u7684\u5dee\u7570"),(0,p.kt)("p",null,"\u8207 npm \u4e0d\u540c\uff0cpnpm \u6703\u9a57\u8b49\u6240\u6709\u7684\u9078\u9805\u3002 \u4f8b\u5982\uff0c\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," \u5c07\u6703\u5931\u6557\uff0c\u56e0\u70ba ",(0,p.kt)("inlineCode",{parentName:"p"},"--target_arch")," \u4e0d\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u6709\u6548\u7684\u9078\u9805\u3002"),(0,p.kt)("p",null,"\u4e0d\u904e\uff0c\u90e8\u5206\u4f9d\u8cf4\u5957\u4ef6\u53ef\u80fd\u6703\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm_config_")," \u74b0\u5883\u8b8a\u6578\uff0c\u8a72\u8b8a\u6578 \u662f\u4f86\u81ea CLI \u7684\u9078\u9805\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u60a8\u6709\u4e0b\u5217\u9078\u9805\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u8a2d\u7f6e\u660e\u78ba\u7684\u74b0\u5883\u8b8a\u6578\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,p.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"--config.")," \u4f86\u5f37\u5236\u57f7\u884c\u672a\u77e5\u7684\u9078\u9805\uff1a ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,p.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,p.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,p.kt)("p",null,"\u53d6\u4ee3\u76ee\u524d\u7684\u5de5\u4f5c\u76ee\u9304\u6539\u7531 ",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u70ba\u958b\u982d\u7684\u8def\u5f91\u57f7\u884c pnpm\u3002"),(0,p.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,p.kt)("p",null,"\u53d6\u4ee3\u76ee\u524d\u7684\u5de5\u4f5c\u76ee\u9304\u6539\u7531 ",(0,p.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," \u70ba\u958b\u982d\u7684\u8def\u5f91\u57f7\u884c pnpm\u3002"),(0,p.kt)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,p.kt)("p",null,"\u6709\u95dc\u66f4\u591a\u7684\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1\u5404\u5225 CLI \u6307\u4ee4\u7684\u6587\u4ef6\u3002 \u4ee5\u4e0b\u662f\u5c0d\u7b49\u7684\u7c21\u6613 npm \u6307\u4ee4\uff0c\u53ef\u5e6b\u52a9\u60a8\u958b\u59cb\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"npm command"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm install")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-TW/next/cli/install"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,p.kt)("p",null,"\u7576\u4f7f\u7528\u672a\u77e5\u7684\u6307\u4ee4\u540d\u7a31\u6642\uff0cpnpm \u6703\u641c\u5c0b\u5177\u6709\u76f8\u540c\u540d\u7a31\u7684\u8173\u672c\uff0c \u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \u8207 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm lint")," \u5c07\u6703\u662f\u76f8\u540c\u7684\u3002 \u5982\u679c\u6c92\u6709\u641c\u5c0b\u5230\u76f8\u540c\u6307\u4ee4\u540d\u7a31\uff0c \u5247 pnpm \u5c07\u65bc shell \u4e2d\u57f7\u884c\u539f\u672c\u7684\u6307\u4ee4\u5167\u5bb9\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u57f7\u884c\u50cf\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," \u7684\u6307\u4ee4 (\u8acb\u53c3\u95b1 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/cli/exec"},"pnpm exec"),")\u3002"))}s.isMDXComponent=!0}}]);