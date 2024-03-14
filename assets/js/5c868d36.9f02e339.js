"use strict";(self.webpackChunkmisitioweb=self.webpackChunkmisitioweb||[]).push([[974],{5277:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(4848),s=i(8453);const r={sidebar_position:1},c="Docker | Script PRO4",o={id:"tutorial-basics/create-a-page",title:"Docker | Script PRO4",description:"Descripci\xf3n",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/Caso02/docs/tutorial-basics/create-a-page",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/Caso02/docs/category/tutorial"},next:{title:"SSL externa/independiente",permalink:"/Caso02/docs/tutorial-basics/create-a-document"}},t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Acceder a la instancia v\xeda SSH",id:"acceder-a-la-instancia-v\xeda-ssh",level:2},{value:"Clonar el snippet de GitLab que contiene el script",id:"clonar-el-snippet-de-gitlab-que-contiene-el-script",level:2},{value:"Dar permisos de ejecuci\xf3n al script",id:"dar-permisos-de-ejecuci\xf3n-al-script",level:2},{value:"Iniciar el despliegue",id:"iniciar-el-despliegue",level:2},{value:"Continuaci\xf3n del Proceso",id:"continuaci\xf3n-del-proceso",level:2},{value:"Finalizaci\xf3n del Script",id:"finalizaci\xf3n-del-script",level:3},{value:"Enlaces de Inter\xe9s",id:"enlaces-de-inter\xe9s",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"docker--script-pro4",children:"Docker | Script PRO4"}),"\n",(0,n.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"El script a continuaci\xf3n est\xe1 dise\xf1ado para su uso en instancias Linux con Ubuntu 18 o superior. Este archivo automatiza la actualizaci\xf3n del sistema, instala las herramientas necesarias junto con sus dependencias y realiza todas las configuraciones previas. El resultado es un entorno listo para probar en menos de 20 minutos, siempre y cuando el dominio ya est\xe9 configurado hacia la instancia. La ejecuci\xf3n del script es simple y directa."}),"\n",(0,n.jsx)(a.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Antes de comenzar, aseg\xfarese de tener acceso a su servidor, VPS, m\xe1quina virtual o entorno local mediante SSH. En las instalaciones realizadas para AWS o Google Cloud, se le proporcionar\xe1 un usuario, la IP del servidor y la clave SSH (que puede ser un archivo .ppk o .pem). Aseg\xfarese de almacenar estas credenciales en su equipo local."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Adem\xe1s, es necesario tener instalada una versi\xf3n de SSH en su m\xe1quina para conectarse de manera remota. Puede utilizar herramientas como Putty, FileZilla o una consola terminal. Para obtener m\xe1s informaci\xf3n sobre el acceso SSH, consulte las siguientes gu\xedas:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#",children:"Gu\xeda para acceder con Putty (gesti\xf3n de servidor)"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#heading=h.nezjsyganf1w",children:"Gu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"})}),"\n"]}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Si es posible, configure su dominio para que apunte a su instancia. Al finalizar la instalaci\xf3n, el aplicativo estar\xe1 disponible. Edite los registros A y CNAME, donde A debe contener su IP y CNAME el valor '*' (asterisco) para que se tomen los subdominios registrados por la herramienta.\n",(0,n.jsx)(a.img,{alt:"Texto alternativo",src:i(7525).A+"",width:"832",height:"459"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h1,{id:"pasos",children:"Pasos"}),"\n",(0,n.jsx)(a.h2,{id:"acceder-a-la-instancia-v\xeda-ssh",children:"Acceder a la instancia v\xeda SSH"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Loguearse como superusuario ejecutando:","\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo du\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"clonar-el-snippet-de-gitlab-que-contiene-el-script",children:"Clonar el snippet de GitLab que contiene el script"}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Clonar el snippet de GitLab con el siguiente comando:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"git clone https://gitlab.com/snippets/2079063.git script\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Ingresar a la carpeta clonada:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd script\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"dar-permisos-de-ejecuci\xf3n-al-script",children:"Dar permisos de ejecuci\xf3n al script"}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsxs)(a.li,{children:["Dar permisos de ejecuci\xf3n al script:","\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"chmod +x install.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"iniciar-el-despliegue",children:"Iniciar el despliegue"}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"El comando para iniciar el despliegue requiere un par\xe1metro principal, por ejemplo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"./install.sh facturador.pro\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Una vez ejecutado el comando, iniciar\xe1 el proceso de actualizaci\xf3n del sistema. Durante el proceso, se le solicitar\xe1:"}),"\n",(0,n.jsx)(a.p,{children:"a. El usuario y la contrase\xf1a de GitLab para descargar el proyecto en su instancia."}),"\n",(0,n.jsx)(a.p,{children:"b. Si desea instalar un SSL gratuito. Tenga en cuenta que este debe ser actualizado cada 90 d\xedas. El mensaje ser\xe1 el siguiente:"}),"\n",(0,n.jsx)(a.p,{children:"Mensaje sobre la instalaci\xf3n del SSL."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Texto alternativo",src:i(3518).A+"",width:"756",height:"84"})}),"\n",(0,n.jsx)(a.p,{children:"i. Deber\xe1 responder con \u201cs\u201d o \u201cn\u201d para continuar."}),"\n",(0,n.jsxs)(a.p,{children:["ii. Si selecciona ",(0,n.jsx)(a.em,{children:"SI"})," , deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como ",(0,n.jsx)(a.em,{children:"_acme-challenge.example.com"})," o simplemente ",(0,n.jsx)(a.em,{children:"_acme-challenge"})," depender\xe1 de su proveedor."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Texto alternativo",src:i(2743).A+"",width:"691",height:"168"})}),"\n",(0,n.jsx)(a.h2,{id:"continuaci\xf3n-del-proceso",children:"Continuaci\xf3n del Proceso"}),"\n",(0,n.jsx)(a.p,{children:"iii. Para continuar, presione Enter. Luego, deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo, y habr\xe1 finalizado la configuraci\xf3n. Si el proceso es exitoso, la ejecuci\xf3n del script continuar\xe1."}),"\n",(0,n.jsxs)(a.p,{children:["c. Si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de GitLab al momento de configurar clave SSH para actualizaci\xf3n autom\xe1tica (requiere acceso a ",(0,n.jsx)(a.a,{href:"https://gitlab.com/profile/keys",children:"GitLab Keys"}),")."]}),"\n",(0,n.jsxs)(a.p,{children:["bash\nconfigurar clave SSH para actualizaci\xf3n autom\xe1tica? (requiere acceso a ",(0,n.jsx)(a.a,{href:"https://gitlab.com/profile/keys",children:"https://gitlab.com/profile/keys"}),"). si[s] no[n]"]}),"\n",(0,n.jsxs)(a.p,{children:["i. Deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar ii. De seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab\n",(0,n.jsx)(a.img,{alt:"Texto alternativo",src:i(104).A+"",width:"684",height:"432"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"finalizaci\xf3n-del-script",children:"Finalizaci\xf3n del Script"}),"\n",(0,n.jsx)(a.p,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1n varios datos que debe guardar, como:"}),"\n",(0,n.jsx)(a.p,{children:"a. Usuario administrador\nb. Contrase\xf1a para usuario administrador\nc. CURL del proyecto\nd. Ubicaci\xf3n del proyecto dentro del servidor\ne. Clave SSH para a\xf1adir a GitLab (obligatorio para quienes seleccionan la instalaci\xf3n de SSH)"}),"\n",(0,n.jsx)(a.h2,{id:"enlaces-de-inter\xe9s",children:"Enlaces de Inter\xe9s"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1955372",children:"Actualizaci\xf3n del SSL"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker",children:"Actualizaci\xf3n mediante ejecuci\xf3n Script para instalaciones Docker"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit#heading=h.5gkh9djmh9b",children:"Gesti\xf3n de SSL independiente, no el que incorpora el Script"})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1971490",children:"Gu\xeda GitLab para la instalaci\xf3n, contiene el script usado en el presente manual"}),". Adem\xe1s, posee los par\xe1metros extras que pueden usarse en la ejecuci\xf3n del paso 6."]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7525:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/01-8ce971fed1e7e714dc6b2e5f3e152889.png"},3518:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/02-93d8a91b919754266634afe9c9e51cc9.png"},2743:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/03-e8d77d55f2dd729337a2d7aa57ebf5c5.png"},104:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/04-763af2d1640010787e0b4db4b91a44d8.png"},8453:(e,a,i)=>{i.d(a,{R:()=>c,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function c(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);