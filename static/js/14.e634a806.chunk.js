(this["webpackJsonpmyhome-booking"]=this["webpackJsonpmyhome-booking"]||[]).push([[14],{620:function(e,t,a){"use strict";var n=a(5),i=a(13),c=a(81),l=a(0),s=(a(4),a(19)),d=a(25),o=a(34),r=l.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,r=void 0===d?"div":d,b=e.disableGutters,j=void 0!==b&&b,u=e.fixed,m=void 0!==u&&u,h=e.maxWidth,p=void 0===h?"lg":h,O=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return l.createElement(r,Object(n.a)({className:Object(s.a)(a.root,c,m&&a.fixed,j&&a.disableGutters,!1!==p&&a["maxWidth".concat(Object(o.a)(String(p)))]),ref:t},O))}));t.a=Object(d.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(r)},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(1),i=a(0),c=a.n(i),l=a(62),s=(a(666),a(278)),d=(a(667),a(70)),o=a(201),r=a(35),b=a.n(r),j=Object(o.a)((function(){return{buttonCustom:{height:"25px !important"}}})),u=function(e){var t=j(),a=e.item,i=e.borderNone,c=e.updateListSelectedHandle;console.log("\ud83d\ude80 ~ file: index.js ~ line 17 ~ SelectedItem ~ item",a);var s=function(e){c({id:a.id,quantity:e})};return Object(n.jsxs)("div",{className:b()("selected-item-container",{"border-none":i}),children:[Object(n.jsx)("p",{className:"name-txt",children:null===a||void 0===a?void 0:a.name}),Object(n.jsxs)("p",{className:"name-txt",children:[Object(l.a)(null===a||void 0===a?void 0:a.price)," VN\u0110"]}),Object(n.jsx)(d.e,{handleDecrement:function(){(null===a||void 0===a?void 0:a.quantity)>0&&s((null===a||void 0===a?void 0:a.quantity)-1)},handleIncrement:function(){s((null===a||void 0===a?void 0:a.quantity)+1)},customStyle:t.buttonCustom,value:(null===a||void 0===a?void 0:a.quantity)||null})]})},m=a(290),h=function(e){var t=e.listSelected,a=e.updateListSelectedHandle,i=e.branch,c=t.reduce((function(e,t){return e+t.quantity}),0);return Object(n.jsx)("div",{className:"selected-component-container",children:Object(n.jsxs)(s.a,{container:!0,children:[Object(n.jsx)("p",{className:"header-title",children:"\u0110A\u0303 CHO\u0323N"}),Object(n.jsxs)(s.a,{item:!0,lg:9,sm:12,xs:12,children:[Object(n.jsxs)("div",{className:"header-table",children:[Object(n.jsx)("p",{className:"table-name  food_name_title",children:"T\xean m\xf3n"}),Object(n.jsx)("p",{className:"table-name",children:"\u0110\u01a1n gi\xe1"}),Object(n.jsx)("p",{className:"table-name",children:"S\u1ed1 l\u01b0\u1ee3ng"})]}),Object(n.jsx)("div",{className:"main-content-wrapper",children:Object(n.jsx)("div",{className:"main-content",children:t.map((function(e,i){return Object(n.jsx)(u,{item:e,borderNone:t.length===i+1,updateListSelectedHandle:a})}))})})]}),Object(n.jsx)("div",{className:"divider_line"}),Object(n.jsx)(s.a,{item:!0,lg:3,sm:12,xs:12,children:Object(n.jsxs)("div",{className:"request-container",children:[Object(n.jsx)("p",{className:"title-request",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(n.jsxs)("div",{className:"row-section",children:[Object(n.jsx)("p",{className:"quantity-txt",children:"S\u1ed1 m\xf3n"}),Object(n.jsxs)("p",{className:"quantity-value",children:["x ",t.length]})]}),Object(n.jsx)("div",{style:{width:"100%",height:"1px",backgroundColor:"black"}}),Object(n.jsxs)("div",{className:"row-section",children:[Object(n.jsx)("p",{className:"quantity-txt",children:"S\u1ed1 ph\u1ea7n"}),Object(n.jsxs)("p",{className:"quantity-value",children:["x ",c]})]}),Object(n.jsx)("div",{style:{width:"100%",height:"1px",backgroundColor:"black"}}),Object(n.jsxs)("div",{className:"row-section",children:[Object(n.jsx)("p",{className:"quantity-txt",children:"T\u1ea1m t\xednh"}),Object(n.jsxs)("p",{className:"temp-total-money",children:[Object(l.a)(t.reduce((function(e,t){return e+t.price*t.quantity}),0))," ","VN\u0110"]})]}),Object(n.jsx)("div",{className:"row-section",children:Object(n.jsx)("p",{className:"note-txt",children:"C\xf3 th\u1ec3 ph\xe1t sinh th\xeam chi ph\xed trong qu\xe1 tr\xecnh s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 t\u1ea1i nh\xe0 h\xe0ng"})}),Object(n.jsx)(m.a,{listSelected:t,branch:i})]})})]})})};t.a=c.a.memo(h)},884:function(e,t,a){},885:function(e,t,a){},932:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(113),c=a(6),l=a(21),s=a(0),d=a.n(s),o=a(27),r=a(127),b=a(283),j=a(82),u=a(56),m=a(12),h=a(63),p=a(36),O=(a(884),a(278)),x=a(620),v=a(613),g=a(70),f=(a(885),a(18)),N=function(e){var t=e.index,a=e.title,i=e.listData,c=e.branch,l=e.onAddItemClick,s=e.updateListSelectedHandle,d=e.seeAllHandle;return Object(n.jsxs)(O.a,{container:!0,lg:12,className:"category-section",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)(v.a,{display:"flex",children:[Object(n.jsx)("div",{style:{width:"4px",backgroundColor:"#EABFB9",marginRight:"20px"}}),Object(n.jsx)("p",{className:"category-title",children:a})]}),Object(n.jsxs)("a",{onClick:function(){return d(t)},className:"see-all",children:[Object(n.jsx)("p",{className:"see-all-txt",children:"Xem t\u1ea5t c\u1ea3"}),Object(n.jsx)(f.b,{})]})]}),Object(n.jsx)(O.a,{container:!0,lg:12,spacing:3,children:i.map((function(e){return Object(n.jsx)(g.i,{item:e,branch:c,onAddItemClick:l,updateListSelectedHandle:s})}))})]})},k=a(668),y=function(e){var t=e.branch,a=e.listMenu,i=e.onAddItemClick,c=e.updateListSelectedHandle,l=e.listSelected,s=e.onBookingClick,d=e.seeAllHandle;return console.log("listSelected",l),Object(n.jsxs)("div",{className:"order-detail-wrapper",children:[Object(n.jsx)(g.a,{items:[{name:"G\u1ecdi m\xf3n",url:"/order"},{name:t.name,url:"/order/".concat(t.id),state:{branch:t}}]}),Object(n.jsx)(O.a,{container:!0,children:Object(n.jsxs)(x.a,{maxWidth:"lg",className:"order-detail-container",children:[Object(n.jsx)(v.a,{style:{marginTop:"30px",marginBottom:"30px"},children:Object(n.jsx)(g.n,{title:t.name})}),(null===l||void 0===l?void 0:l.length)>0?Object(n.jsx)(k.a,{listSelected:l,updateListSelectedHandle:c,onBookingClick:s,branch:t}):null,Object(n.jsx)("div",{children:a.map((function(e,s){return Object(n.jsx)(N,{index:s,branch:t,title:e.name,listData:a[s].data,listSelected:l,onAddItemClick:i,updateListSelectedHandle:c,seeAllHandle:d})}))})]})})]})},S=d.a.memo(y),L=[{id:"01",type:{is_hot:!0},name:"M\xf3n b\xe1n ch\u1ea1y",data:[],total:0},{id:"02",type:{is_new:!0},name:"M\xf3n m\u1edbi",data:[],total:0},{id:"03",type:{is_drink:!0},name:"\u0110\u1ed3 u\u1ed1ng",data:[],total:0}];t.default=Object(o.b)((function(e){return{listSelected:Object(b.a)(e)}}),(function(e){return Object(j.b)({addListSelectedHandle:r.a,updateListSelectedHandle:r.i},e)}))((function(e){var t,a,d=Object(o.c)(),b=Object(o.d)(p.a),j=Object(s.useState)(L),O=Object(l.a)(j,2),x=O[0],v=O[1],g=Object(h.f)();Object(s.useEffect)((function(){for(var t,a,n=(null===e||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.branch)||{},l=function(e){d(Object(r.d)(1,6,Object(c.a)(Object(c.a)({},L[e].type),{},{branch_id:n.id}),(function(t){var a=t.menu,n=t.total,c=Object(i.a)(x);c[e].data=a,c[e].total=n,v(c)})))},s=0;s<L.length;s++)l(s)}),[]);var f=(null===e||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.branch)||{};return console.log("OrderDetailView"),Object(n.jsx)(S,{branch:f,listMenu:x,onAddItemClick:function(t){b?e.addListSelectedHandle(t):d(Object(u.b)({type:m.d.FORCE_USER_LOGIN}))},onBookingClick:function(){d(b?Object(u.b)({type:m.d.MODAL_BOOKING_FOOD,order:e.listSelected}):Object(u.b)({type:m.d.FORCE_USER_LOGIN}))},seeAllHandle:function(e){var t=Object(i.a)(x);if(t[e].data.length<t[e].total){var a=t[e].total-6;d(Object(r.d)(7,a,Object(c.a)(Object(c.a)({},L[e].type),{},{branch_id:f.id}),(function(a){var n=a.menu,c=a.total;t[e].data=[].concat(Object(i.a)(t[e].data),Object(i.a)(n)),t[e].total=c,console.log("temppp1",t[e].data),v(t)})))}g.push("/order/see-all/".concat(e),{branch:f,type:L[e].type})},updateListSelectedHandle:function(t){b?e.updateListSelectedHandle(t):d(Object(u.b)({type:m.d.FORCE_USER_LOGIN}))},listSelected:e.listSelected})}))}}]);
//# sourceMappingURL=14.e634a806.chunk.js.map