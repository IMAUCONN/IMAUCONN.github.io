(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{138:function(e,t,n){"use strict";var a=n(98),i=n(3),o=n(0),r=(n(1),n(97)),s=n(100),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=o.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,m=e.className,g=e.component,u=void 0===g?"div":g,f=e.container,p=void 0!==f&&f,x=e.direction,h=void 0===x?"row":x,w=e.item,v=void 0!==w&&w,y=e.justify,b=void 0===y?"flex-start":y,E=e.lg,j=void 0!==E&&E,S=e.md,W=void 0!==S&&S,C=e.sm,I=void 0!==C&&C,k=e.spacing,M=void 0===k?0:k,T=e.wrap,A=void 0===T?"wrap":T,O=e.xl,z=void 0!==O&&O,B=e.xs,N=void 0!==B&&B,P=e.zeroMinWidth,R=void 0!==P&&P,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(r.a)(d.root,m,p&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],v&&d.item,R&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==A&&d["wrap-xs-".concat(String(A))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==b&&d["justify-xs-".concat(String(b))],!1!==N&&d["grid-xs-".concat(String(N))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==W&&d["grid-md-".concat(String(W))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==z&&d["grid-xl-".concat(String(z))]);return o.createElement(u,Object(i.a)({className:G,ref:t},D))})),g=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=g},88:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(108),r=n(251),s=n(138);t.default=function(){const e=["Accenture","Cigna","Deloitte","EY","Northeast_Utilities","PWC","Synchrony","The_Hartford","Travelers","Raytheon"].map((e=>`/img/company/${e}.png`));return i.a.createElement(o.a,{title:"Company"},i.a.createElement(r.a,{maxWidth:"xl"},i.a.createElement("h1",{style:{marginTop:10,marginBottom:10}},"Companies That We Have Worked With: "),i.a.createElement(s.a,{container:!0,direction:"row",alignItems:"center",style:{backgroundColor:"lightgray",paddingLeft:10,paddingRight:10,borderRadius:10}},e.map(((e,t)=>i.a.createElement(s.a,{item:!0,xs:!0,key:`logo:${t}`},i.a.createElement("img",{src:e}))))),i.a.createElement("h1",{style:{marginTop:10,marginBottom:10}},"Recruitment"),i.a.createElement(s.a,{container:!0,direction:"column",alignItems:"center"},i.a.createElement(s.a,{item:!0,xs:!0},i.a.createElement("p",null,"A crucial aspect of the Information Management Association (IMA) is connecting our members with potential employers. We think that the best way to educate our members about career paths in MIS is to directly connect them with industry professionals (AKA: YOU!)."),i.a.createElement("p",null,"This can be done in a variety of ways, for example, hosting a ",i.a.createElement("strong",null," recruitment-focused informational session, a technical workshop, a professional development presentation"),", etc. Not only will this allow you to meet potential job candidates prior to the interviewing process, but you also can increase awareness of your company and contribute to the professional growth of our members!"),i.a.createElement("p",null,"Our meetings are on ",i.a.createElement("strong",null,"Wednesday")," nights from ",i.a.createElement("strong",null,"7:45PM - 8:30PM EST"),". So, if you fit this description and are interested in connecting with IMA, please fill out the form below. It will allow us to get an understanding of what you would like to present, your availability, and any questions or concerns you may have."),i.a.createElement("p",null,"We look forward to connecting with you! If you are interested in learning more about our club, please feel free to explore our website and take a look at all of the different initiatives we are involved in.")),i.a.createElement(s.a,{item:!0,xs:!0},i.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScwv5p0ITxzB0Tt7OA-PTIvalQ5BVzbJtqTbUniQE77PQv0_A/viewform?embedded=true",width:"640",height:"1500",frameBorder:"0"},"Loading\u2026")))))}}}]);