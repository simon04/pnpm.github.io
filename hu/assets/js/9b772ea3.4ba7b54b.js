"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5677],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=m(n),d=r,u=k["".concat(o,".").concat(d)]||k[d]||s[d]||p;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<p;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4197:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>c,default:()=>k});var a=n(5900),r=n(4750),p=(n(9496),n(9613)),l=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"pnpm CLI",description:"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/hu/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"Telep\xedt\xe9s",permalink:"/hu/installation"},next:{title:"pnpx CLI",permalink:"/hu/pnpx-cli"}},c=[{value:"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest",id:"k\xfcl\xf6nbs\xe9gek-npm-hez-k\xe9pest",children:[],level:2},{value:"Options",id:"options",children:[{value:"-C &lt;\xfat&gt;, --dir &lt;\xfat&gt;",id:"-c-\xfat---dir-\xfat",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Parancsok",id:"parancsok",children:[],level:2}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"k\xfcl\xf6nbs\xe9gek-npm-hez-k\xe9pest"},"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest"),(0,p.kt)("p",null,"npm-mel ellent\xe9tben pnpm minden opci\xf3t ellen\u0151riz. For example, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," will fail as ",(0,p.kt)("inlineCode",{parentName:"p"},"--target_arch")," is not a valid option for ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,p.kt)("p",null,"Egyes f\xfcgg\u0151s\xe9gek azonban haszn\xe1lhatj\xe1k a ",(0,p.kt)("inlineCode",{parentName:"p"},"npm_config_")," k\xf6rnyezeti v\xe1ltoz\xf3t, amely a CLI opci\xf3kb\xf3l van \xf6sszerakva. Ebben az esetben a k\xf6vetkez\u0151 megold\xe1sokb\xf3l v\xe1laszthatsz:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,p.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,p.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,p.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch x64"))),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"-c-\xfat---dir-\xfat"},"-C ","<","\xfat",">",", --dir ","<","\xfat",">"),(0,p.kt)("p",null,"pnpm \xfagy fut mintha az ",(0,p.kt)("inlineCode",{parentName:"p"},"<\xfat>"),"-ban lenne inditva, vagyis az az akt\xedv mapp\xe1ja."),(0,p.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,p.kt)("p",null,"Hozz\xe1adva: v5.6.0"),(0,p.kt)("p",null,"Run as if pnpm was started in the root of the ",(0,p.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," instead of the current working directory."),(0,p.kt)("h2",{id:"parancsok"},"Parancsok"),(0,p.kt)("p",null,"Tov\xe1bbi inform\xe1ci\xf3\xe9rt tekintsed meg az egyes CLI-parancsok dokument\xe1ci\xf3j\xe1t. Itt egy lista n\xe9mely gyakran haszn\xe1lt npm parancsok megfelel\u0151ir\u0151l:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"npm parancs"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm megfel\u0151je"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm install")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/hu/cli/install"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,p.kt)("p",null,"Ismeretlen parancs haszn\xe1lata eset\xe9n pnpm a megadott n\xe9vvel rendelkez\u0151 szkriptet keresi, \xedgy ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," ugyanazz\xe1 v\xe1lik mint ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Ha nincs szkript a megadott n\xe9vvel, akkor pnpm shell szkriptk\xe9nt hajtja v\xe9gre a parancsot, \xedgy olyan dolgokat tehet, mint ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (l\xe1sd ",(0,p.kt)("a",{parentName:"p",href:"/hu/cli/exec"},"pnpm exec"),")."))}k.isMDXComponent=!0}}]);