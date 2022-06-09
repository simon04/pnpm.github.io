"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8071],{9613:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>c});var n=o(9496);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=n.createContext({}),m=function(e){var a=n.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},d=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(o),c=t,k=u["".concat(p,".").concat(c)]||u[c]||l[c]||i;return o?n.createElement(k,r(r({ref:a},d),{},{components:o})):n.createElement(k,r({ref:a},d))}));function c(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var m=2;m<i;m++)r[m]=o[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7961:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var n=o(2848),t=o(9213),i=(o(9496),o(9613)),r=["components"],s={id:"faq",title:"Perguntas frequentes"},p=void 0,m={unversionedId:"faq",id:"version-7.x/faq",title:"Perguntas frequentes",description:"Por que minha pasta node_modules usa espa\xe7o se os pacotes s\xe3o armazenados globalmente?",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/pt/faq",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"faq",title:"Perguntas frequentes"}},d={},l=[{value:"Por que minha pasta <code>node_modules</code> usa espa\xe7o se os pacotes s\xe3o armazenados globalmente?",id:"por-que-minha-pasta-node_modules-usa-espa\xe7o-se-os-pacotes-s\xe3o-armazenados-globalmente",level:2},{value:"Ele funciona no Windows?",id:"ele-funciona-no-windows",level:2},{value:"Mas a abordagem aninhada do <code>node_modules</code> \xe9 incompat\xedvel com Windows?",id:"mas-a-abordagem-aninhada-do-node_modules-\xe9-incompat\xedvel-com-windows",level:2},{value:"E quanto aos links simb\xf3licos circulares?",id:"e-quanto-aos-links-simb\xf3licos-circulares",level:2},{value:"Por que usar hard links? Por que n\xe3o criar um link simb\xf3lico direto para o armazenamento global?",id:"por-que-usar-hard-links-por-que-n\xe3o-criar-um-link-simb\xf3lico-direto-para-o-armazenamento-global",level:2},{value:"O pnpm funciona com diversas unidades de armazenamento ou sistemas de arquivos?",id:"o-pnpm-funciona-com-diversas-unidades-de-armazenamento-ou-sistemas-de-arquivos",level:2},{value:"O caminho para o armazenamento global \xe9 especificado",id:"o-caminho-para-o-armazenamento-global-\xe9-especificado",level:3},{value:"O caminho para o armazenamento global N\xc3O \xe9 especificado",id:"o-caminho-para-o-armazenamento-global-n\xe3o-\xe9-especificado",level:3},{value:"O que <code>pnpm</code> significa?",id:"o-que-pnpm-significa",level:2},{value:"<code>pnpm</code> n\xe3o funciona com &lt;SEU-PROJETO-AQUI&gt;?",id:"pnpm-n\xe3o-funciona-com-seu-projeto-aqui",level:2},{value:"Solu\xe7\xe3o 1",id:"solu\xe7\xe3o-1",level:3},{value:"Solu\xe7\xe3o 2",id:"solu\xe7\xe3o-2",level:3},{value:"Solu\xe7\xe3o 3",id:"solu\xe7\xe3o-3",level:3}],u={toc:l};function c(e){var a=e.components,o=(0,t.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"por-que-minha-pasta-node_modules-usa-espa\xe7o-se-os-pacotes-s\xe3o-armazenados-globalmente"},"Por que minha pasta ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," usa espa\xe7o se os pacotes s\xe3o armazenados globalmente?"),(0,i.kt)("p",null,"pnpm cria ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," do armazenamento global para a pasta ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," de cada projeto. Hard links apontam para o mesmo espa\xe7o no disco onde os arquivos originais est\xe3o. Ent\xe3o, por exemplo, se voc\xea tem o pacote ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," em seu projeto como uma depend\xeancia, e ocupa 1MB de espa\xe7o, ent\xe3o ir\xe1 parecer que ocupa 1MB de espa\xe7o na pasta ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", e 1MB de espa\xe7o no armazenamento global. No entanto, esse 1MB \xe9 ",(0,i.kt)("em",{parentName:"p"},"o mesmo espa\xe7o")," no disco, apontado de duas localiza\xe7\xf5es diferentes. Ent\xe3o, no total, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," ocupa 1MB, n\xe3o 2MB."),(0,i.kt)("p",null,"Para mais sobre este assunto:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Porque os hard links parecem ocupar o mesmo espa\xe7o que os originais?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Uma thread da sala de bate-papo do pnpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Uma issue no reposit\xf3rio do pnpm"))),(0,i.kt)("h2",{id:"ele-funciona-no-windows"},"Ele funciona no Windows?"),(0,i.kt)("p",null,"Resposta curta: Sim. Resposta longa: Usando um link simb\xf3lico no Windows \xe9 problem\xe1tico pra dizer o m\xednimo, entretanto, pnpm tem uma solu\xe7\xe3o alternativa/gambiarra. Para Windows, n\xf3s usamos ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"jun\xe7\xf5es")," em vez disso."),(0,i.kt)("h2",{id:"mas-a-abordagem-aninhada-do-node_modules-\xe9-incompat\xedvel-com-windows"},"Mas a abordagem aninhada do ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," \xe9 incompat\xedvel com Windows?"),(0,i.kt)("p",null,"As primeiras vers\xf5es do npm apresentavam problemas devido ao aninhamento de todos os ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (veja ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"essa issue"),"). No entanto, pnpm n\xe3o cria pastas profundas, ele armazena todos os pacotes de forma plana e utiliza links simb\xf3licos para criar a estrutura de depend\xeancias."),(0,i.kt)("h2",{id:"e-quanto-aos-links-simb\xf3licos-circulares"},"E quanto aos links simb\xf3licos circulares?"),(0,i.kt)("p",null,"Mesmo que o pnpm use links para colocar depend\xeancias dentro das pastas ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", symlinks circulares s\xe3o evitados porque os pacotes-pai s\xe3o colocados na mesma pasta ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," em que est\xe3o suas depend\xeancias. Portanto, as depend\xeancias de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," n\xe3o est\xe3o em ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", mas ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," est\xe1 em ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", junto com suas pr\xf3prias depend\xeancias."),(0,i.kt)("h2",{id:"por-que-usar-hard-links-por-que-n\xe3o-criar-um-link-simb\xf3lico-direto-para-o-armazenamento-global"},"Por que usar hard links? Por que n\xe3o criar um link simb\xf3lico direto para o armazenamento global?"),(0,i.kt)("p",null,"Um pacote pode ter diferentes conjuntos de depend\xeancias numa mesma m\xe1quina."),(0,i.kt)("p",null,"No projeto ",(0,i.kt)("strong",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," pode depender de ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", mas no projeto ",(0,i.kt)("strong",{parentName:"p"},"B"),", a mesma depend\xeancia ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," pode depender de ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; ent\xe3o, pnpm liga ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," para todos os projetos que o usam, a fim de criar diferentes conjuntos de depend\xeancias em cada um deles."),(0,i.kt)("p",null,"Um link simb\xf3lico direto para o armazenamento global iria funcionar com a op\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," do Node, mas essa abordagem viria com uma infinidade de problemas, ent\xe3o n\xf3s decidimos continuar utilizando hard links. Para mais detalhes sobre por que esta decis\xe3o foi tomada, veja ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"esta issue"),"."),(0,i.kt)("h2",{id:"o-pnpm-funciona-com-diversas-unidades-de-armazenamento-ou-sistemas-de-arquivos"},"O pnpm funciona com diversas unidades de armazenamento ou sistemas de arquivos?"),(0,i.kt)("p",null,"O armazenamento global de pacotes deve estar na mesma unidade de armazenamento e utilizando o mesmo sistema de arquivos da instala\xe7\xe3o. Caso contr\xe1rio, os pacotes ser\xe3o copiados, e n\xe3o vinculados. Isso ocorre devido a uma limita\xe7\xe3o de como os hard links funcionam - um arquivo num determinado sistema de arquivos n\xe3o pode ser direcionado para um endere\xe7o em outro sistema. Veja a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"issue #712")," para mais detalhes."),(0,i.kt)("p",null,"pnpm funciona de maneira diferente nos dois casos abaixo:"),(0,i.kt)("h3",{id:"o-caminho-para-o-armazenamento-global-\xe9-especificado"},"O caminho para o armazenamento global \xe9 especificado"),(0,i.kt)("p",null,"Caso o caminho para o armazenamento global seja ",(0,i.kt)("a",{parentName:"p",href:"/pt/configuring"},"especificado"),", a c\xf3pia ocorrer\xe1 entre o armazenamento e quaisquer projetos que estejam numa unidade de armazenamento diferente."),(0,i.kt)("p",null,"Se voc\xea executar ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," na unidade ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ent\xe3o o armazenamento global deve estar na unidade ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". Se o armazenamento estiver localizado na unidade ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ent\xe3o todos os pacotes ser\xe3o copiados para a localiza\xe7\xe3o do projeto, ao inv\xe9s de serem vinculados. Isso inibe severamente os benef\xedcios de armazenamento e desempenho do pnpm."),(0,i.kt)("h3",{id:"o-caminho-para-o-armazenamento-global-n\xe3o-\xe9-especificado"},"O caminho para o armazenamento global N\xc3O \xe9 especificado"),(0,i.kt)("p",null,"Caso o caminho n\xe3o seja especificado, ent\xe3o m\xfaltiplas inst\xe2ncias do armazenamento global ser\xe3o criadas (uma vez por cada unidade ou sistema de arquivos)."),(0,i.kt)("p",null,"Caso a instala\xe7\xe3o seja executada na unidade ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", o armazenamento global ser\xe1 criado em ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", na pasta ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),", na pasta raiz (ou root).  Se, posteriormente, a instala\xe7\xe3o for executada na unidade ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", um armazenamento global independente ser\xe1 criado em ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", na pasta ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". Os projetos ainda ir\xe3o manter os benef\xedcios do pnpm, mas cada unidade de armazenamento pode conter pacotes redundantes."),(0,i.kt)("h2",{id:"o-que-pnpm-significa"},"O que ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," significa?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," significa ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm")," (ingl\xeas para ",(0,i.kt)("inlineCode",{parentName:"p"},"npm com desempenho"),"). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," inventou o nome."),(0,i.kt)("h2",{id:"pnpm-n\xe3o-funciona-com-seu-projeto-aqui"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," n\xe3o funciona com ","<","SEU-PROJETO-AQUI>?"),(0,i.kt)("p",null,"Na maioria dos casos, isso significa que uma de suas depend\xeancias requer pacotes n\xe3o declarados no ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Este \xe9 um erro comum, causado pela abordagem de um ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," plano. Caso isso aconte\xe7a, este \xe9 um erro na depend\xeancia, que deve ser corrigida. No entanto, isso pode levar algum tempo, ent\xe3o o pnpm suporta solu\xe7\xf5es alternativas para fazer com que os pacotes problem\xe1ticos funcionem."),(0,i.kt)("h3",{id:"solu\xe7\xe3o-1"},"Solu\xe7\xe3o 1"),(0,i.kt)("p",null,"No exemplo a seguir, uma depend\xeancia ",(0,i.kt)("strong",{parentName:"p"},"n\xe3o")," possui o pacote ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," em sua pr\xf3pria lista de depend\xeancias."),(0,i.kt)("p",null,"A solu\xe7\xe3o mais f\xe1cil para resolver o problema de depend\xeancias faltantes nos pacotes problem\xe1ticos \xe9 ",(0,i.kt)("strong",{parentName:"p"},"adicionar ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," como uma depend\xeancia no arquivo ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")," de seu projeto"),"."),(0,i.kt)("p",null,"Voc\xea pode fazer isso instalando-o via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", e ele ser\xe1 automaticamente adicionado ao arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," de seu projeto."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solu\xe7\xe3o-2"},"Solu\xe7\xe3o 2"),(0,i.kt)("p",null,"Uma das solu\xe7\xf5es \xe9 usar ",(0,i.kt)("a",{parentName:"p",href:"/pt/pnpmfile#hooks"},"hooks")," para adicionar as depend\xeancias faltantes ao ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"do pacote."),(0,i.kt)("p",null,"Um exemplo era o pacote ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard"),", que n\xe3o estava funcionando com ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". O problema foi resolvido, e o pacote funciona com ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," agora."),(0,i.kt)("p",null,"Antes, ele costumava gerar um erro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"O problema era que ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," foi utilizado em ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),", que foi utilizado pelo ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", mas ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," n\xe3o era especificado no ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," do ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),". Ele ainda funcionava com ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," por que eles utilizam um ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," plano."),(0,i.kt)("p",null,"A solu\xe7\xe3o foi criar um arquivo nomeado ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," com o seguinte conte\xfado:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"Ap\xf3s criar o arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", exclua ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," apenas - n\xe3o h\xe1 necessidade de excluir ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", j\xe1 que os hooks do pnpm afetam apenas a resolu\xe7\xe3o do m\xf3dulo. Ent\xe3o, reinstale as depend\xeancias & tudo deve estar funcionando."),(0,i.kt)("h3",{id:"solu\xe7\xe3o-3"},"Solu\xe7\xe3o 3"),(0,i.kt)("p",null,"Caso hajam muitos problemas, voc\xea pode utilizar a op\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist"),". Isso cria um ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," plano, com estrutura similar ao criado pelo ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", algo n\xe3o recomendado, uma vez que evitar esta estrutura \xe9 o principal objetivo da abordagem de ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," do pnpm."),(0,i.kt)("p",null,"Para utiliz\xe1-lo, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}c.isMDXComponent=!0}}]);