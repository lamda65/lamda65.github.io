(this["webpackJsonpmyhome-booking"]=this["webpackJsonpmyhome-booking"]||[]).push([[26],{620:function(e,n,t){"use strict";var o=t(5),i=t(13),a=t(81),c=t(0),r=(t(4),t(19)),l=t(25),d=t(34),s=c.forwardRef((function(e,n){var t=e.classes,a=e.className,l=e.component,s=void 0===l?"div":l,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,b=void 0!==p&&p,h=e.maxWidth,v=void 0===h?"lg":h,j=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(s,Object(o.a)({className:Object(r.a)(t.root,a,b&&t.fixed,m&&t.disableGutters,!1!==v&&t["maxWidth".concat(Object(d.a)(String(v)))]),ref:n},j))}));n.a=Object(l.a)((function(e){return{root:Object(a.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(n,t){var o=e.breakpoints.values[t];return 0!==o&&(n[e.breakpoints.up(t)]={maxWidth:o}),n}),{}),maxWidthXs:Object(a.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(a.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(a.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(a.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(a.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},791:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t(21),a=t(0),c=t.n(a),r=t(289),l=t(288),d=t(698),s=t(702),u=(t(796),t(278)),m=t(620),p=t(70),b=t(701),h=t(699);function v(e){var n,t=Object(a.useState)(null),c=Object(i.a)(t,2),v=c[0],j=c[1],y=Object(a.useState)(null),g=Object(i.a)(y,2),f=(g[0],g[1]),O=e.modalType,C=e.Modal;return console.log("props.deliveries",e.deliveries),Object(o.jsxs)(u.a,{container:!0,direction:"column",className:"cart-container",children:[Object(o.jsxs)(m.a,{maxWidth:"lg",children:[Object(o.jsx)(p.n,{title:"Gi\u1ecf H\xe0ng",customStyle:"title-header"}),Object(o.jsx)(u.a,{container:!0,className:"title-item",direction:"row",justify:"space-between",children:Object(o.jsx)("p",{className:"title",children:"E-Voucher"})}),Object(o.jsxs)(u.a,{container:!0,spacing:3,className:"content-item",children:[Object(o.jsx)(u.a,{item:!0,xl:8,xs:12,md:8,lg:8,sm:12,children:e.vouchers.length>0?e.vouchers.map((function(n){return Object(o.jsx)(p.c,{onCountChange:e.onCountChange,onDeleteClick:e.onDeleteClick,deal:n},n.id)})):Object(o.jsx)("p",{className:"empty-cart",children:"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong gi\u1ecf h\xe0ng"})}),e.vouchers.length>0&&Object(o.jsxs)(u.a,{className:"right-section",item:!0,xl:4,md:4,sm:12,xs:12,lg:4,children:[Object(o.jsx)(r.a,{promotionCode:e.promotionCode,onPromotionCodeChange:e.onPromotionCodeVoucherChange,onApplyPromotionCodeClick:e.onApplyPromotionCodeVoucherClick}),Object(o.jsx)("p",{className:"error-message-promotion-code",children:e.errorMessagePromotionCode}),Object(o.jsx)(l.a,{discountMoney:e.discountMoneyVoucher,temporaryMoney:e.tempTotalMoneyVoucher,totalMoney:e.tempTotalMoneyVoucher-e.discountMoneyVoucher,onClick:e.onForceLoginClick})]})]}),(null===(n=e.deliveries)||void 0===n?void 0:n.length)>0&&e.deliveries.map((function(n,t){var i,a,c,d,s,m=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.reduce((function(e,n){return e+n.regular_price*n.quantity}),0);return Object(o.jsxs)("div",{children:[Object(o.jsx)(u.a,{container:!0,className:"title-item",direction:"row",justify:"space-between",children:Object(o.jsxs)("p",{className:"title",children:["Delivery ",null===n||void 0===n||null===(a=n.merchant)||void 0===a?void 0:a.name]})}),Object(o.jsxs)(u.a,{container:!0,spacing:3,className:"content-item",children:[Object(o.jsx)(u.a,{item:!0,xl:8,xs:12,md:8,lg:8,sm:12,children:n&&n.data&&n.data.length>0?null===n||void 0===n||null===(c=n.data)||void 0===c?void 0:c.map((function(n){return Object(o.jsx)(p.c,{onCountChange:e.onCountChange,onDeleteClick:e.onDeleteClick,deal:n},n.id)})):Object(o.jsx)("p",{className:"empty-cart",children:"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong gi\u1ecf h\xe0ng"})}),e.deliveries.length>0&&Object(o.jsxs)(u.a,{className:"right-section",item:!0,xl:4,md:4,sm:12,xs:12,lg:4,children:[Object(o.jsx)(r.a,{promotionCode:n.promotionCode,onPromotionCodeChange:function(t){"function"===typeof e.onPromotionCodeDeliveryChange&&e.onPromotionCodeDeliveryChange(t,n.merchant)},onApplyPromotionCodeClick:function(){"function"===typeof e.onApplyPromotionCodeDeliveryClick&&e.onApplyPromotionCodeDeliveryClick(n.merchant)}}),Object(o.jsx)("p",{className:"error-message-promotion-code",children:n.errorMessage}),Object(o.jsx)(l.a,{discountMoney:n.discountMoney,temporaryMoney:m,totalMoney:m-(n.discountMoney||0)+(n.shippingFee||0),shippingFee:n.shippingFee,onClick:function(){"function"===typeof e.onPaymentDeliveryClick&&e.onPaymentDeliveryClick(n.merchant)},title:(null===(d=n.deliveryInfo)||void 0===d||null===(s=d.branch)||void 0===s?void 0:s.id)?"Ti\u1ebfn h\xe0nh thanh to\xe1n":"Ki\u1ec3m tra ph\xed giao h\xe0ng"})]})]})]},t)}))]}),Object(o.jsx)(m.a,{maxWidth:"lg",children:Object(o.jsx)(C,{className:"asdasmodal",children:function(){var n=e.dataModal,t=void 0===n?{}:n;switch(O){case"Payment":return Object(o.jsx)(s.a,{dealType:t.dealType,money:t.tempTotalMoney-(t.discountMoney||0)+(t.shippingFee||0),paymentType:e.paymentType,setPaymentType:e.setPaymentType,onClick:e.onConfirmPaymentPointClick});case"ConfirmPaymentPointPopup":return Object(o.jsx)(b.a,{setValue:function(e){f(e)},errorMessage:t.errorMessage,money:t.tempTotalMoney-(t.discountMoney||0)+(t.shippingFee||0),onClick:function(){return t.onSubmitPayment(e.paymentType)}});case"PointPayMethod":return Object(o.jsx)(h.a,{isSelected:v,setIsSelected:function(e){j(e)},onClick:function(){}});case"PaymentFormPopup":return Object(o.jsx)(d.a,{});default:return null}}()})})]})}n.default=c.a.memo(v)},796:function(e,n,t){},952:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t(6),a=t(21),c=t(0),r=t(27),l=t(63),d=t(12),s=t(282),u=t(637),m=t(56),p=t(50),b=t(36),h=t(255),v=t(24),j=t(129),y=t(791).default,g=function(){var e=Object(r.d)(h.b),n=Object(r.d)(h.a),t=Object(r.d)(b.a),g=Object(r.c)(),f=Object(l.f)(),O=Object(c.useState)(""),C=Object(a.a)(O,2),x=C[0],M=C[1],k=Object(c.useState)([]),P=Object(a.a)(k,2),S=P[0],T=P[1],D=Object(c.useState)(0),V=Object(a.a)(D,2),_=V[0],N=V[1],E=Object(c.useState)(0),F=Object(a.a)(E,2),W=F[0],I=F[1],A=Object(c.useState)(0),R=Object(a.a)(A,2),q=R[0],w=R[1],L=Object(c.useState)(""),U=Object(a.a)(L,2),G=U[0],H=U[1],Y=Object(c.useState)({}),K=Object(a.a)(Y,2),J=K[0],X=K[1],z=Object(c.useState)(""),B=Object(a.a)(z,2),Q=B[0],Z=B[1],$=Object(c.useState)(""),ee=Object(a.a)($,2),ne=ee[0],te=ee[1],oe=Object(c.useState)(""),ie=Object(a.a)(oe,2),ae=ie[0],ce=ie[1];Object(c.useEffect)((function(){console.log("listDeliveries11111"),T(n.slice(0))}),[n]);var re=Object(s.a)(),le=re.Modal,de=re.show,se=re.hide;Object(c.useEffect)((function(){var n=e.reduce((function(e,n){return e+n.regular_price*n.quantity}),0);N(n);var t=e.reduce((function(e,n){return e+n.regular_price*n.quantity}),0);I(t)}),[e]);var ue=function(n){var t=e.map((function(e){return{deal_id:e.id,quantity:e.quantity}}));g(Object(p.b)(t,x,(function(){se(),g(Object(m.b)({type:d.d.PAYMENT_VOUCHER_SUCCESS,data:{vouchers:e,tempTotalMoneyVoucher:_,discountMoneyVoucher:q,promotionCode:x,paymentType:n}}))}),(function(e){X((function(n){return Object(i.a)(Object(i.a)({},n),{},{errorMessage:e.message})}))})))};return console.log("modalData>>>>",Q,J),Object(o.jsx)(y,{paymentType:Q,setPaymentType:Z,onCountChange:function(n,t){var o=e.findIndex((function(e){return e.id===n.id}));if(o>=0){var a=e.slice(0);a[o]=Object(i.a)(Object(i.a)({},a[o]),{},{quantity:t}),g(Object(u.c)(a))}M(""),w(0)},Modal:le,hide:se,tempTotalMoneyVoucher:_,totalMoneyVoucher:W,discountMoneyVoucher:q,onDeleteClick:function(n){var t=e.filter((function(e){return e.id!==n.id}));g(Object(u.c)(t)),0===t.length&&f.goBack()},onForceLoginClick:function(){t?(H("Payment"),X({dealType:"Voucher",tempTotalMoney:_,discountMoney:q,onSubmitPayment:ue}),de()):g(Object(m.b)({type:d.d.FORCE_USER_LOGIN}))},onConfirmPaymentPointClick:function(){te(""),Q===d.e.TRANSFER||Q===d.e.GATE_WAY?H("PaymentFormPopup"):(H("ConfirmPaymentPointPopup"),t&&g(Object(v.k)()))},promotionCode:x,onPromotionCodeVoucherChange:function(e){M(e.target.value),w(0)},onPromotionCodeDeliveryChange:function(e,n){var t=S.slice(0),o=t.findIndex((function(e){var t;return(null===e||void 0===e||null===(t=e.merchant)||void 0===t?void 0:t.id)===n.id}));o>=0&&(t[o]=Object(i.a)(Object(i.a)({},t[o]),{},{promotionCode:e.target.value,discountMoney:0,errorMessage:""})),T(t)},deliveries:S,modalType:G,errorMessagePaymentPointVoucher:ne,onApplyPromotionCodeVoucherClick:function(){g(Object(p.e)(x,_,(function(e){w(e.discount),I(_-e.discount),ce("")}),(function(){ce("M\xe3 khuy\u1ebfn m\xe3i kh\xf4ng h\u1ee3p l\u1ec7!")})))},onApplyPromotionCodeDeliveryClick:function(e){g(Object(p.e)(x,_,(function(n){var t=S.slice(0),o=t.findIndex((function(n){var t;return(null===n||void 0===n||null===(t=n.merchant)||void 0===t?void 0:t.id)===e.id}));o>=0&&(t[o]=Object(i.a)(Object(i.a)({},t[o]),{},{discountMoney:n.discount,errorMessage:""})),T(t)}),(function(){var n=S.slice(0),t=n.findIndex((function(n){var t;return(null===n||void 0===n||null===(t=n.merchant)||void 0===t?void 0:t.id)===e.id}));t>=0&&(n[t]=Object(i.a)(Object(i.a)({},n[t]),{},{discountMoney:0,errorMessage:"M\xe3 khuy\u1ebfn m\xe3i kh\xf4ng h\u1ee3p l\u1ec7!"})),T(n)})))},getUserInformation:function(){t&&g(Object(v.k)())},onPaymentDeliveryClick:function(e){var n,t,o,a,c,r,l,s,u,p,b=S.findIndex((function(n){var t;return(null===n||void 0===n||null===(t=n.merchant)||void 0===t?void 0:t.id)===e.id}));(null===(n=S[b])||void 0===n||null===(t=n.deliveryInfo)||void 0===t||null===(o=t.branch)||void 0===o?void 0:o.id)?(H("Payment"),X({dealType:"Delivery",tempTotalMoney:null===(a=S[b])||void 0===a||null===(c=a.data)||void 0===c?void 0:c.reduce((function(e,n){return e+n.regular_price*n.quantity}),0),shippingFee:null===(r=S[b])||void 0===r?void 0:r.shippingFee,discountMoney:null===(l=S[b])||void 0===l?void 0:l.discountMoney,onSubmitPayment:function(e){var n;return function(e,n){var t=S.slice(0),o=t.findIndex((function(n){var t;return(null===n||void 0===n||null===(t=n.merchant)||void 0===t?void 0:t.id)===e.id}));if(console.log("onConfirmPointPaymentDeliveryClick",t,e,Q,o),o>=0){var a,c,r,l,s=(null===(a=t[o])||void 0===a?void 0:a.data)||[],u=s.map((function(e){return{deal_id:e.id,quantity:e.quantity}})),p=null===(c=t[o])||void 0===c?void 0:c.deliveryInfo,b=p.note,h=p.time,v=p.date,y=p.branch,f=p.lat,O=p.lng,C=p.receiveDelivery;g(Object(j.b)({merchantId:null===(r=t[o])||void 0===r||null===(l=r.merchant)||void 0===l?void 0:l.id,deals:u,promotion_code:x,note:b,shipping_time:h,shipping_date:v,branch_id:y.id,address:C,lat:f,lng:O},(function(){var e,i,a,c;se(),console.log("PAYMENT_VOUCHER_SUCCESS",u,Q,t[o]),g(Object(m.b)({type:d.d.PAYMENT_VOUCHER_SUCCESS,data:{vouchers:s,tempTotalMoneyVoucher:null===(e=t[o])||void 0===e||null===(i=e.data)||void 0===i?void 0:i.reduce((function(e,n){return e+n.regular_price*n.quantity}),0),discountMoneyVoucher:null===(a=t[o])||void 0===a?void 0:a.discountMoney,shippingFee:null===(c=t[o])||void 0===c?void 0:c.shippingFee,promotionCode:x,paymentType:n}}))}),(function(e){console.log("createDeliveryFoodHandle",e),X((function(n){return Object(i.a)(Object(i.a)({},n),{},{errorMessage:e.message})}))})))}}(null===(n=S[b])||void 0===n?void 0:n.merchant,e)}}),de()):g(Object(m.b)({type:d.d.DELIVERY_ADDRESS,data:{branches:(null===(s=S[b])||void 0===s?void 0:s.data)&&(null===(u=S[b])||void 0===u?void 0:u.data.length)>0?null===(p=S[b])||void 0===p?void 0:p.data[0].branches:[],onSubmit:function(e){var n=S.slice(0),t=e.branch,o=e.lat,a=e.lng;g(Object(j.j)({branch_id:t.id,lat:o,lng:a},(function(t){var o;console.log("res11111",t),console.log("onSubmit",n,b,e),n[b]=Object(i.a)(Object(i.a)({},n[b]),{},{deliveryInfo:e,shippingFee:null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.shiping_price}),T(n)})))}}}))},dataModal:J,vouchers:e,errorMessagePromotionCode:ae})};n.default=g}}]);
//# sourceMappingURL=26.e0d41e04.chunk.js.map