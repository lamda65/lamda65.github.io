(this["webpackJsonpmyhome-booking"]=this["webpackJsonpmyhome-booking"]||[]).push([[18],{620:function(t,e,n){"use strict";var i=n(5),c=n(13),a=n(81),o=n(0),s=(n(4),n(19)),r=n(25),u=n(34),l=o.forwardRef((function(t,e){var n=t.classes,a=t.className,r=t.component,l=void 0===r?"div":r,b=t.disableGutters,d=void 0!==b&&b,j=t.fixed,m=void 0!==j&&j,h=t.maxWidth,O=void 0===h?"lg":h,p=Object(c.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(l,Object(i.a)({className:Object(s.a)(n.root,a,m&&n.fixed,d&&n.disableGutters,!1!==O&&n["maxWidth".concat(Object(u.a)(String(O)))]),ref:e},p))}));e.a=Object(r.a)((function(t){return{root:Object(a.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var i=t.breakpoints.values[n];return 0!==i&&(e[t.breakpoints.up(n)]={maxWidth:i}),e}),{}),maxWidthXs:Object(a.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(a.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(a.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(a.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(a.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},888:function(t,e,n){},889:function(t,e,n){},890:function(t,e,n){},928:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(0),a=n(6),o=n(21),s=n(278),r=n(620),u=(n(888),n(18)),l=n(250),b=n(201),d=n(82),j=n(199),m=function(t){return t.fillRecruitment.listJobs},h=n(27),O=n(209),p=n(57),x=n.n(p),g=n(56),f=n(12);n(889);var v=function(t){var e=t.onClick,n=t.name;return Object(i.jsx)("div",{className:"drop-down-container",children:Object(i.jsx)("button",{type:"button",onClick:e,className:"btn",children:Object(i.jsx)("p",{children:n})})})};n(890);var k=function(t){var e=t.customStyle,n=t.onChange,c=t.disabled,a=t.onClick,o=t.customInputStyle,s=t.value;return Object(i.jsxs)("div",{onClick:a,className:"input-item-container ".concat(e),children:[t.icon,Object(i.jsx)("input",{value:s,readOnly:c,className:"input ".concat(o),placeholder:t.text,onChange:function(t){n(t.target.value)}})]})},w=Object(b.a)((function(){return{"button-custom":{background:"#FE5466",width:338,height:45,borderRadius:30,marginTop:40,marginBottom:30},"date-picker-custom":{background:"#ffffff",width:"100%",height:59,borderRadius:"8px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:18,outline:"none",border:"none","&& .MuiInputBase-root":{outline:"none",border:"none","&:hover":{outline:"none",border:"none"}},"&& .MuiOutlinedInput-adornedStart":{paddingLeft:0}}}}));var y=Object(h.b)((function(t){return{listJobs:m(t)}}),(function(t){return Object(d.b)({requestListJobsRecruitmentHandle:j.e},t)}))((function(t){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),b=n[0],d=n[1],m=Object(c.useState)(!1),p=Object(o.a)(m,2),y=p[0],_=p[1],C=Object(c.useState)(!1),S=Object(o.a)(C,2),N=S[0],E=S[1],I=w(),L=Object(c.useRef)(),R=Object(c.useRef)(),W=Object(c.useRef)(),T=Object(h.c)(),M=Object(c.useState)(""),Y=Object(o.a)(M,2),D=Y[0],A=(Y[1],Object(c.useState)("")),B=Object(o.a)(A,2),G=B[0],J=B[1],H=Object(c.useState)(""),z=Object(o.a)(H,2),Z=z[0],X=z[1],$=Object(c.useState)(!1),q=Object(o.a)($,2),F=q[0],P=q[1],Q=Object(c.useState)(!1),U=Object(o.a)(Q,2),V=U[0],K=U[1],tt=Object(c.useState)(!1),et=Object(o.a)(tt,2),nt=et[0],it=et[1],ct=Object(c.useCallback)((function(t){var e;b&&L&&!(null===L||void 0===L||null===(e=L.current)||void 0===e?void 0:e.contains(t.target))&&d(!1)}),[L,b]),at=Object(c.useCallback)((function(t){var e;y&&R&&!(null===R||void 0===R||null===(e=R.current)||void 0===e?void 0:e.contains(t.target))&&_(!1)}),[R,y]),ot=Object(c.useCallback)((function(t){var e;N&&W&&!(null===W||void 0===W||null===(e=W.current)||void 0===e?void 0:e.contains(t.target))&&E(!1)}),[W,N]);Object(c.useEffect)((function(){return document.addEventListener("mousedown",ct),function(){document.removeEventListener("mousedown",ct)}}),[ct]),Object(c.useEffect)((function(){return document.addEventListener("mousedown",at),function(){document.removeEventListener("mousedown",at)}}),[at]),Object(c.useEffect)((function(){return document.addEventListener("mousedown",ot),function(){document.removeEventListener("mousedown",ot)}}),[ot]),Object(c.useEffect)((function(){T(Object(j.e)())}),[]);var st=Object(c.useState)({fullname:"",dob:"",address:"",phone:"",email:"",position:"",working_start_time:"",work_location:"",working_time:"",shift_time:""}),rt=Object(o.a)(st,2),ut=rt[0],lt=rt[1],bt=""===ut.fullname||""===ut.dob||""===ut.address||""===ut.phone||""===ut.email||""===ut.position||""===ut.working_start_time||""===ut.work_location||""===ut.working_time||""===ut.shift_time,dt=function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{phone:t}))};return Object(i.jsx)(s.a,{container:!0,direction:"row",className:"fill-recruitment-container",children:Object(i.jsxs)(r.a,{maxWidth:"lg",className:"content-section",children:[Object(i.jsxs)(s.a,{container:!0,spacing:3,className:"main-content-section responsive-grid",children:[Object(i.jsx)(s.a,{item:!0,xs:12,md:6,lg:6,children:Object(i.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(i.jsx)("p",{className:"title-text",children:"Th\xf4ng tin \u1ee9ng tuy\u1ec3n"}),Object(i.jsx)(k,{icon:Object(i.jsx)(u.T,{}),text:"T\xean c\u1ee7a b\u1ea1n",value:ut.fullname,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{fullname:t}))}(t)},customInputStyle:nt&&""===ut.fullname?"disable":null}),Object(i.jsx)("div",{style:{width:"100%",position:"relative"},children:Object(i.jsx)(k,{customInputStyle:nt&&""===ut.dob?"disable":null,icon:Object(i.jsx)(u.N,{}),text:""===D?"Ng\xe0y sinh":D,value:ut.dob,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{dob:t}))}(t)}})}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.address?"disable":null,icon:Object(i.jsx)(u.A,{}),text:"\u0110\u1ecba ch\u1ec9",value:ut.address,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{address:t}))}(t)}}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.phone||F?"disable":null,icon:Object(i.jsx)(u.h,{}),text:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(t){new RegExp("^\\d+$").test(t)?(P(!1),dt(t)):(P(!0),dt(""))},value:ut.phone}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.email||V?"disable":null,icon:Object(i.jsx)(u.B,{}),text:"Email",value:ut.email,onChange:function(t){!function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{email:t}))}(t)}})]})}),Object(i.jsx)(s.a,{item:!0,xs:12,md:6,lg:6,children:Object(i.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(i.jsx)("p",{className:"title-text",children:"V\u1ecb tr\xed \u1ee9ng tuy\u1ec3n"}),Object(i.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(i.jsx)(k,{customInputStyle:nt&&""===ut.position?"disable":null,icon:Object(i.jsx)(u.T,{}),text:""===Z?"Ch\u1ecdn v\u1ecb tr\xed \u1ee9ng tuy\u1ec3n":Z,disabled:!0,onClick:function(){console.log("aaaaa123"),E(!0)},value:ut.position}),N&&Object(i.jsx)("div",{ref:W,className:"drop_custom_container",children:t.listJobs.map((function(t){return Object(i.jsx)(v,{onClick:function(){var e;e=t,lt(Object(a.a)(Object(a.a)({},ut),{},{position:e})),E(!1),X(t)},name:t})}))})]}),Object(i.jsxs)("div",{onClick:function(){_(!0)},style:{width:"100%",position:"relative"},children:[Object(i.jsx)(k,{customInputStyle:nt&&""===ut.working_start_time?"disable":null,icon:Object(i.jsx)(u.N,{}),text:""===G?"Ch\u1ecdn th\u1eddi gian b\u1eaft \u0111\u1ea7u l\xe0m vi\u1ec7c":G,disabled:!0,value:ut.working_start_time}),y&&Object(i.jsx)("div",{ref:R,className:"calendar_custom_container",children:Object(i.jsx)(O.a,{onChange:function(t){var e;e=x()(t).format("DD/MM/YYYY"),lt(Object(a.a)(Object(a.a)({},ut),{},{working_start_time:e})),_(!1),J(x()(t).format("DD/MM/YYYY"))},minDate:new Date})})]}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.work_location?"disable":null,icon:Object(i.jsx)(u.A,{}),text:"Ch\u1ecdn \u0111\u1ecba ch\u1ec9 l\xe0m vi\u1ec7c",value:ut.work_location,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{work_location:t}))}(t)}}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.working_time?"disable":null,icon:Object(i.jsx)(u.h,{}),text:"Ch\u1ecdn th\u1eddi gian l\xe0m vi\u1ec7c",value:ut.working_time,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{working_time:t}))}(t)}}),Object(i.jsx)(k,{customInputStyle:nt&&""===ut.shift_time?"disable":null,icon:Object(i.jsx)(u.N,{}),text:"Ch\u1ecdn ca l\xe0m vi\u1ec7c",value:ut.shift_time,onChange:function(t){return function(t){lt(Object(a.a)(Object(a.a)({},ut),{},{shift_time:t}))}(t)}})]})}),Object(i.jsx)(s.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(i.jsx)(l.a,{classes:{root:I["button-custom"]},variant:"contained",color:"primary",onClick:function(){new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$").test(ut.email)?bt?it(!0):T(Object(j.b)(Object(a.a)(Object(a.a)({},ut),{},{working_start_time:x()(ut.working_start_time,"DD/MM/YYYY").utc().format()}),(function(){lt({fullname:"",dob:"",address:"",phone:"",email:"",position:"",working_start_time:"",work_location:"",working_time:"",shift_time:""}),T(Object(g.b)({type:f.d.ALERT_SUCCESS,data:{title:"Th\xf4ng b\xe1o",subTitle:"G\u1edfi th\xe0nh c\xf4ng y\xeau c\u1ea7u \u1ee9ng tuy\u1ec3n",titleButton:"Ho\xe0n t\u1ea5t"}}))}))):K(!0)},children:Object(i.jsx)("p",{className:"btn-text",children:"G\u1eedi th\xf4ng tin \u1ee9ng tuy\u1ec3n"})})})]}),Object(i.jsx)(s.a,{container:!0,justify:"space-between",spacing:3,className:"responsive-grid",children:Object(i.jsx)("div",{className:"apply-method-section",children:Object(i.jsxs)("p",{className:"popular-text",children:["\u0110i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin v\xe0 ch\xednh x\xe1c, ph\xf2ng Nh\xe2n s\u1ef1 s\u1ebd x\xe1c nh\u1eadn v\xe0 li\xean h\u1ec7 c\xe1c b\u1ea1n ph\u1ecfng v\u1ea5n n\u1ebfu \u1ee9ng vi\xean ph\xf9 h\u1ee3p.",Object(i.jsx)("br",{}),"C\xf3 c\xe1c c\xe1ch \u0111\u1ec3 c\xe1c b\u1ea1n \u1ee9ng tuy\u1ec3n:",Object(i.jsx)("br",{}),"- C\xe1ch 1: \u0110i\u1ec1n \u0111\u01a1n \u1ee9ng tuy\u1ec3n, c\xf4ng ty s\u1ebd li\xean h\u1ec7 v\u1edbi b\u1ea1n (th\u01b0\u1eddng v\xe0o gi\u1edd h\xe0nh ch\xednh g\u1ea7n nh\u1ea5t).",Object(i.jsx)("br",{}),"- C\xe1ch 2: \u0110\u1ebfn tr\u1ef1c ti\u1ebfp c\xf4ng ty s\u1ed1 63B Ho\xe0ng Hoa Th\xe1m, P.13, Q.T\xe2n B\xecnh t\u1eeb T2-T6 l\xfac 10h ho\u1eb7c 15h.",Object(i.jsx)("br",{}),"H\u1ed3 s\u01a1 mang theo g\u1ed3m: 1 CMND photo. Li\xean h\u1ec7 ph\xf2ng NS: (028) 7300 3898 ext 101 (trong gi\u1edd h\xe0nh ch\xednh) n\u1ebfu c\xf3 b\u1ea5t k\u1ef3 th\u1eafc m\u1eafc n\xe0o."]})})})]})})})),_=function(){return Object(i.jsx)(y,{})};e.default=_}}]);
//# sourceMappingURL=18.02bbcaca.chunk.js.map