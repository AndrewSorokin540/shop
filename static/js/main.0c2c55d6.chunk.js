(this["webpackJsonpbook-shop"]=this["webpackJsonpbook-shop"]||[]).push([[0],Array(29).concat([function(e,t,a){e.exports=a.p+"static/media/logo.1a5abae4.png"},,,function(e,t,a){e.exports=a.p+"static/media/pizza-going.15a230a4.png"},,function(e,t,a){e.exports=a.p+"static/media/1.a6bbb905.jpeg"},function(e,t,a){e.exports=a.p+"static/media/2.0b8d21ce.jpeg"},function(e,t,a){e.exports=a.p+"static/media/3.9070d0ed.jpeg"},function(e,t,a){e.exports=a.p+"static/media/1.b2b1c35a.png"},function(e,t,a){e.exports=a.p+"static/media/2.333e9629.png"},function(e,t,a){e.exports=a.p+"static/media/3.85634cd5.png"},function(e,t,a){e.exports=a.p+"static/media/4.9587e200.png"},function(e,t,a){e.exports=a.p+"static/media/5.c6b5b0b7.png"},function(e,t,a){e.exports=a.p+"static/media/6.290b22db.png"},function(e,t,a){e.exports=a.p+"static/media/7.0be4e741.png"},function(e,t,a){e.exports=a.p+"static/media/8.69c35749.png"},function(e,t,a){e.exports=a.p+"static/media/9.0be23b48.png"},function(e,t,a){e.exports=a.p+"static/media/10.4adb6b12.png"},function(e,t,a){e.exports=a.p+"static/media/11.710bdcdf.png"},function(e,t,a){e.exports=a.p+"static/media/12.56ea5273.png"},function(e,t,a){e.exports=a.p+"static/media/13.ed687a27.png"},function(e,t,a){e.exports=a.p+"static/media/14.51614823.png"},function(e,t,a){e.exports=a.p+"static/media/15.c3af1211.png"},function(e,t,a){e.exports=a.p+"static/media/cola.a8dc7f81.png"},function(e,t,a){e.exports=a.p+"static/media/fanta.c854908c.png"},function(e,t,a){e.exports=a.p+"static/media/sprite.e9f523cb.png"},,function(e,t,a){e.exports=a(97)},,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/16.854f7279.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=a(14),o=a(13),s=(a(61),a(29)),m=a.n(s),d=a(2),u=function(e,t,a){return{type:"ITEM_ADD_TO_CART",payload:{itemId:e,count:t,size:a}}},p=function(e,t){return{type:"ITEM_REMOVE_FROM_CART",payload:{itemId:e,size:t}}},g=function(e,t){return{type:"ALL_ITEMS_REMOVE_FROM_CART",payload:{itemId:e,size:t}}},h=function(){return{type:"MODAL_CLOSE"}},b=(a(66),{onSearch:function(e){return{type:"ON_SEARCH",payload:e}}}),f=Object(d.b)(null,b)((function(e){var t=e.onSearch;return r.a.createElement("input",{className:"search-input",type:"search",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",onChange:function(e){return t(e.target.value)}})})),E=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__fixed"},r.a.createElement("div",{className:"container header__content"},r.a.createElement("div",{className:"header__top"},r.a.createElement("img",{className:"header__logo",src:m.a,alt:"logo"})),r.a.createElement("div",{className:"header__bottom"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__nav-list"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/pizza"},"\u041f\u0438\u0446\u0446\u0430")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/drinks"},"\u041d\u0430\u043f\u0438\u0442\u043a\u0438")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/cart"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")))),r.a.createElement(f,null)))))},v=a(3),N=a(6),_=a(8),O=a(7),y=a(9),I=(a(68),{openModal:function(e){return{type:"MODAL_OPEN",payload:e}}}),w=Object(d.b)(null,I)((function(e){var t=e.id,a=e.title,n=e.ingredientsInRus,i=e.details.sm.price,c=e.coverImage,l=e.openModal,o=e.minicardType,s="mini-card ".concat("cuttingBoard"===o?"cutting-board":"");return r.a.createElement("div",{className:s},r.a.createElement("div",{className:"mini-card__img",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"mini-card__body"},r.a.createElement("div",{className:"mini-card__content"},r.a.createElement("div",{className:"mini-card__item-title"},a),r.a.createElement("div",{className:"mini-card__item-description"},n),r.a.createElement("div",{className:"mini-card__item-price"}," \u043e\u0442 ",i," \u0440\u0443\u0431.")),r.a.createElement("button",{className:"button button-primary",onClick:function(){return l(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")))})),C=(a(69),function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getData().then((function(t){return e.props.dataLoaded(t)}))}},{key:"render",value:function(){var e=this;if(!this.props.visibleItems)return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"row"},"Loading..."));var t=this.props.visibleItems.map((function(t){return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 catalog-item",key:t.id},r.a.createElement(w,Object.assign({},t,{minicardType:e.props.minicardType})))}));return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"row"},t))}}]),t}(r.a.Component)),x={dataLoaded:function(e){return{type:"DATA_LOADED",payload:e}}},z=Object(d.b)((function(e){return{visibleItems:e.visibleItems}}),x)(C),j=r.a.createContext(),R=j.Provider,k=j.Consumer,S=function(e){return function(t){return r.a.createElement(k,null,(function(a){return r.a.createElement(e,Object.assign({},t,{dataServise:a}))}))}},A=S((function(e){var t=e.dataServise.getPizza;return r.a.createElement(z,{getData:t,minicardType:"cuttingBoard"})})),T=S((function(e){var t=e.dataServise.getDrinks;return r.a.createElement(z,{getData:t,minicardType:"noBg"})})),D=(a(70),a(71),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(_.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={street:"",building:"",room:"",phoneNumber:""},a.handleStreetChange=function(e){var t=e.target.value;a.setState({street:t})},a.handleBuildingChange=function(e){var t=e.target.value;a.setState({building:t})},a.handleRoomChange=function(e){var t=e.target.value;a.setState({room:t})},a.handlePhoneNumberChange=function(e){var t=e.target.value;a.setState({phoneNumber:t})},a.handleTimeNumberChange=function(e){var t=e.target.value;a.setState({time:t})},a.onSubmit=function(e){console.log(1.111111111111111e30);var t=a.state,n=t.street,r=t.building,i=t.room,c=t.phoneNumber;(0,a.props.placeOrder)({orderPlaced:!0,submitedStreet:n,submitedBuilding:r,submitedRoom:i,submitedPhoneNumber:c}),a.setState({street:"",building:"",room:"",phoneNumber:""})},a}return Object(y.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.state,t=e.street,a=e.building,n=e.room,i=e.phoneNumber;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"m-t-6"},"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441"),r.a.createElement("form",{action:"telegram.php",method:"POST",className:"order-form row"},r.a.createElement("label",{className:"form-group col-12 col-md-6 col-lg-3"},"\u0423\u043b\u0438\u0446\u0430:",r.a.createElement("input",{name:"street",type:"text",className:"input-text",value:t,onChange:this.handleStreetChange})),r.a.createElement("label",{className:"form-group col-12 col-md-6 col-lg-3"},"\u0414\u043e\u043c:",r.a.createElement("input",{name:"building",type:"text",className:"input-text",value:a,onChange:this.handleBuildingChange})),r.a.createElement("label",{className:"form-group col-12 col-md-6 col-lg-3"},"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430:",r.a.createElement("input",{name:"room",type:"number",className:"input-text",value:n,onChange:this.handleRoomChange})),r.a.createElement("label",{className:"form-group col-12 col-md-6 col-lg-3"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",r.a.createElement("input",{name:"phone",type:"tel",className:"input-text",value:i,onChange:this.handlePhoneNumberChange})),r.a.createElement("div",{className:"col-12 text-center m-t-1"},r.a.createElement("button",{type:"button",className:"button button-primary",onClick:this.onSubmit},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"))))}}]),t}(n.Component)),M={placeOrder:function(e){return{type:"ORDER_PLACED",payload:e}}},L=Object(d.b)(null,M)(D),P=(a(72),a(32)),F=a.n(P),B=function(){return r.a.createElement("div",{className:"order-sent"},r.a.createElement("h2",{className:"text-center"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!"),r.a.createElement("h4",{className:"text-center"},"\u041d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043d\u0435 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u0433\u043e \u0443 \u043d\u0430\u0441 \u043d\u0435\u0442."),r.a.createElement("img",{className:"order-sent__courier",src:F.a,alt:"Your order preparing"}))},V={itemRemoveFromCart:p,allItemsRemoveFromCart:g,itemAddToCart:u},H=Object(d.b)((function(e){return{cart:e.cart,orderPlaced:e.placedOrder.orderPlaced}}),V)((function(e){var t=e.cart,a=e.orderPlaced,n=e.itemRemoveFromCart,i=e.allItemsRemoveFromCart,c=e.itemAddToCart;if(a)return r.a.createElement(B,null);if(t.order.length<1)return r.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430");var l=t.order.map((function(e,t){var a=e.id,l=e.title,o=e.count,s=e.size;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,l),r.a.createElement("td",{className:"text-center"},o),r.a.createElement("td",{className:"cart-table__td-button"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return n(a,s)}},"-")),r.a.createElement("td",{className:"cart-table__td-button"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return i(a,s)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435")),r.a.createElement("td",{className:"cart-table__td-button"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return c(a,1,s)}},"+")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("table",{className:"cart-table"},r.a.createElement("tbody",null,l,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},"\u0418\u0442\u043e\u0433\u043e:"),r.a.createElement("td",{colSpan:"3",className:"text-center"},t.total," \u0440\u0443\u0431.")))),r.a.createElement(L,null))})),J=a(33),Q=a.n(J),Y=(a(88),a(89),a(90),a(34)),q=a.n(Y),G=a(35),K=a.n(G),U=a(36),W=a.n(U),X=[{imgSrc:q.a,textTitle:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f!",textDescription:"\u041a\u0443\u043f\u0438 \u043f\u0438\u0446\u0446\u0443 \u0432 \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0430 1000 \u0440\u0443\u0431\u043b\u0435\u0439 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u0446\u0446 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u0431\u0435 \u043b\u0435\u0442!!!"},{imgSrc:K.a,textTitle:"\u0421\u044b\u0442\u044b\u0439 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",textDescription:"\u041f\u043e \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430\u043c \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0432\u0441\u044e \u043f\u0438\u0446\u0446\u0443 50%!"},{imgSrc:W.a,textTitle:"\u041d\u0430 \u043c\u0430\u0441\u0441\u0435!",textDescription:"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u0443 \u043d\u0430\u0441 \u043f\u0438\u0446\u0446\u0443 30 \u0434\u043d\u0435\u0439 \u043f\u043e\u0434\u0440\u044f\u0434 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0433\u043e\u0434\u043e\u0432\u043e\u0439 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043b!"}],Z=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=X.map((function(e){return r.a.createElement("div",{className:"pizza-slide"},r.a.createElement("img",{className:"pizza-slide__img",src:e.imgSrc,alt:"pizza slide"}),r.a.createElement("div",{className:"pizza-slide__text"},r.a.createElement("h2",{className:"pizza-slide__text-title"},e.textTitle),r.a.createElement("p",{className:"pizza-slide__text-description"},e.textDescription)))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0410\u043a\u0446\u0438\u0438:"),r.a.createElement(Q.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},e))}}]),t}(n.Component),$=function(){return r.a.createElement(Z,null)},ee=a(37),te=a.n(ee),ae=a(38),ne=a.n(ae),re=a(39),ie=a.n(re),ce=a(40),le=a.n(ce),oe=a(41),se=a.n(oe),me=a(42),de=a.n(me),ue=a(43),pe=a.n(ue),ge=a(44),he=a.n(ge),be=a(45),fe=a.n(be),Ee=a(46),ve=a.n(Ee),Ne=a(47),_e=a.n(Ne),Oe=a(48),ye=a.n(Oe),Ie=a(49),we=a.n(Ie),Ce=a(50),xe=a.n(Ce),ze=a(51),je=a.n(ze),Re=(a(91),a(52)),ke=a.n(Re),Se=a(53),Ae=a.n(Se),Te=a(54),De=a.n(Te),Me=a(22),Le=function(e,t){if(!e)return[];switch(t.type){case"DATA_LOADED":return t.payload;default:return e.dataItems}},Pe=function(e,t){if(!e)return{isModalOpen:!1,openedItemId:null};switch(t.type){case"MODAL_OPEN":return{isModalOpen:!0,openedItemId:t.payload};case"MODAL_CLOSE":return{isModalOpen:!1};default:return e.modal}},Fe=a(55),Be=a(12),Ve=function(e,t){if(!e)return{order:[],total:0};switch(t.type){case"ITEM_ADD_TO_CART":var a=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),n=e.cart.order[a];if(n){var r=n.id,i=n.title,c=n.price,l=n.size,o=n.count;return{order:[].concat(Object(Be.a)(e.cart.order.slice(0,a)),[{id:r,title:i,count:n.count+t.payload.count,price:c,size:l,total:c*(o+t.payload.count)}],Object(Be.a)(e.cart.order.slice(a+1))),total:e.cart.total+c*t.payload.count}}var s=e.dataItems.find((function(e){return e.id===t.payload.itemId})),m=s.id,d=s.title,u=s.details,p=t.payload,g=p.count,h=p.size;return{order:[].concat(Object(Be.a)(e.cart.order),[{id:m,title:d,count:g,price:u[h].price,size:h,total:u[h].price*g}]),total:e.cart.total+u[h].price*g};case"ITEM_REMOVE_FROM_CART":var b=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),f=e.cart.order[b],E=f.price,v=f.count;return v>1?{order:[].concat(Object(Be.a)(e.cart.order.slice(0,b)),[Object(Fe.a)({},f,{count:v-1,total:f.total-E})],Object(Be.a)(e.cart.order.slice(b+1))),total:e.cart.total-E}:{order:[].concat(Object(Be.a)(e.cart.order.slice(0,b)),Object(Be.a)(e.cart.order.slice(b+1))),total:e.cart.total-E};case"ALL_ITEMS_REMOVE_FROM_CART":var N=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),_=e.cart.order[N];return console.log(N),{order:[].concat(Object(Be.a)(e.cart.order.slice(0,N)),Object(Be.a)(e.cart.order.slice(N+1))),total:e.cart.total-_.price*_.count};case"ORDER_PLACED":return{order:[],total:0};default:return e.cart}},He=function(e,t){if(!e)return[];switch(t.type){case"DATA_LOADED":return t.payload;case"ON_SEARCH":return""===t.payload?e.dataItems:e.dataItems.filter((function(e){return e.title.toLowerCase().indexOf(t.payload.toLowerCase())>-1}));default:return e.dataItems}},Je=function(e,t){if(!e)return{orderPlaced:!1,placedOrder:{}};switch(t.type){case"ORDER_PLACED":var a=t.payload,n=a.submitedStreet,r=a.submitedBuilding,i=a.submitedRoom,c=a.submitedPhoneNumber;return console.log("\u0417\u0430\u043a\u0430\u0437 \u043d\u0430 \u0430\u0434\u0440\u0435\u0441: \u0443\u043b.: ".concat(n,", \u0434\u043e\u043c: ").concat(r,", \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430: ").concat(i,". \u0422\u0435\u043b\u0435\u0444\u043e\u043d: ").concat(c,".")),{orderPlaced:!0,placedOrder:t.payload};default:return e.placedOrder}},Qe=function(e,t){return{dataItems:Le(e,t),visibleItems:He(e,t),cart:Ve(e,t),placedOrder:Je(e,t),modal:Pe(e,t)}},Ye=Object(Me.b)(Qe),qe=(a(92),function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return this.props.isModalOpen?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{className:"modal-close",onClick:this.props.closeModal},"\xd7")),r.a.createElement("div",{className:"modal-body"},this.props.children))):null}}]),t}(r.a.Component)),Ge={closeModal:h},Ke=Object(d.b)((function(e){return{isModalOpen:e.modal.isModalOpen}}),Ge)(qe),Ue=(a(93),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(_.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={itemsNumber:1,sizeName:"sm"},a.handleOptionChange=function(e){a.setState({sizeName:e.target.value})},a}return Object(y.a)(t,e),Object(N.a)(t,[{key:"changeNumber",value:function(e){"inc"===e&&this.setState({itemsNumber:this.state.itemsNumber+1}),"dec"===e&&this.state.itemsNumber>1&&this.setState({itemsNumber:this.state.itemsNumber-1})}},{key:"onAddItem",value:function(){this.props.itemAddToCart(this.props.openedItemId,this.state.itemsNumber,this.state.sizeName),this.props.closeModal()}},{key:"mapSizeNameToSize",value:function(e){switch(e){case"sm":return 35;case"md":return 45;case"lg":return 55;default:return null}}},{key:"render",value:function(){var e=this,t=this.props.dataItems.find((function(t){return t.id===e.props.openedItemId})),a=t.title,n=t.details,i=(t.weight,t.coverImage),c=t.ingredientsInRus,l=this.state,o=l.sizeName,s=l.itemsNumber;return console.log(this.props.dataItems),r.a.createElement("div",{className:"modal-order"},r.a.createElement("div",{className:"modal-order__img",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"modal-order__content"},r.a.createElement("h2",{className:"modal-order__title"},a),r.a.createElement("div",{className:"modal-order__details"},this.mapSizeNameToSize(o)," \u0441\u043c",n[o]&&", ".concat(n[o].weight)),r.a.createElement("p",{className:"modal-order__ingridients"},c),r.a.createElement("form",{className:"modal-order__size-form"},r.a.createElement("input",{type:"radio",name:"size",value:"sm",id:"size-sm",checked:"sm"===o,onChange:this.handleOptionChange}),r.a.createElement("label",{htmlFor:"size-sm"},"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f"),r.a.createElement("input",{type:"radio",name:"size",value:"md",id:"size-md",checked:"md"===o,onChange:this.handleOptionChange}),r.a.createElement("label",{htmlFor:"size-md"},"\u0421\u0440\u0435\u0434\u043d\u044f\u044f")),r.a.createElement("div",{className:"modal-order__number"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:",r.a.createElement("div",null,r.a.createElement("button",{className:"modal-order__num-btn decreace",onClick:function(){return e.changeNumber("dec")}},"-"),this.state.itemsNumber,r.a.createElement("button",{className:"modal-order__num-btn increace",onClick:function(){return e.changeNumber("inc")}},"+"))),r.a.createElement("button",{className:"modal-order__button-to-cart button button-primary",onClick:function(){return e.onAddItem()}},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0437\u0430 ",n[o].price*s,"\u0440.")))}}]),t}(r.a.Component)),We={itemAddToCart:u,closeModal:h},Xe=Object(d.b)((function(e){return{dataItems:e.dataItems,openedItemId:e.modal.openedItemId}}),We)(Ue),Ze=(a(94),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(_.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={cartVisible:!0},a.sizeName=function(e){switch(e){case"sm":return"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f";case"md":return"\u0421\u0440\u0435\u0434\u043d\u044f\u044f";case"lg":return"\u0411\u043e\u043b\u044c\u0448\u0430\u044f"}},a}return Object(y.a)(t,e),Object(N.a)(t,[{key:"toggle",value:function(){this.setState({cartVisible:!this.state.cartVisible})}},{key:"render",value:function(){var e=this;console.log("\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435:",this.props.cart.order);var t=this.props.cart.order.map((function(t,a){var n=t.id,i=t.title,c=t.size,l=t.count,o=t.total;return r.a.createElement("li",{key:a,className:"fixed-cart__li"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"fixed-cart__item-title"},i),r.a.createElement("span",{className:"fixed-cart__item-size"}," (",e.sizeName(c),")")),r.a.createElement("div",{className:"fixed-cart__number"},"\u041a\u043e\u043b-\u0432\u043e: ",l,", \u0441\u0443\u043c\u043c\u0430: ",o,"\u0440\u0443\u0431.")),r.a.createElement("div",{className:"fixed-cart__buttons"},r.a.createElement("div",{className:"fixed-cart__buttons-group"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.itemRemoveFromCart(n,c)}},"-"),r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.itemAddToCart(n,1,c)}},"+")),r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.allItemsRemoveFromCart(n,c)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0451")))})),a=this.state.cartVisible?"fixed-cart":"fixed-cart fixed-cart--hidden";return this.props.cart.order.length<1?null:r.a.createElement("div",{className:a},r.a.createElement("div",{className:"fixed-cart__header",onClick:function(){return e.toggle()}},r.a.createElement("span",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e: ",this.props.cart.total," \u0440\u0443\u0431.")),r.a.createElement("div",{className:"fixed-cart__body"},r.a.createElement("ul",{className:"fixed-cart__ul"},t)))}}]),t}(r.a.Component)),$e={itemRemoveFromCart:p,allItemsRemoveFromCart:g,itemAddToCart:u},et=Object(d.b)((function(e){return{cart:e.cart}}),$e)(Ze),tt=(a(95),new function e(){var t=this;Object(v.a)(this,e),this.pizza=[{id:1,title:"\u0424\u0438\u0440\u043c\u0435\u043d\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:te.a,ingredientsInRus:"\u0411\u0435\u043a\u043e\u043d, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u043a\u043e\u0440\u043d\u0438\u0448\u043e\u043d\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u043b\u0443\u043a \u0444\u0440\u0438, \u0433\u043e\u0440\u0447\u0438\u0446\u0430 \u0434\u0438\u0436\u043e\u043d\u0441\u043a\u0430\u044f, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:2,title:"\u0411\u0430\u0440\u0431\u0435\u043a\u044e",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:ne.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u0431\u0435\u043a\u043e\u043d, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 BBQ"},{id:3,title:"\u041a\u0430\u0440\u0431\u043e\u043d\u0430\u0440\u0430",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:ie.a,ingredientsInRus:"\u0411\u0435\u043a\u043e\u043d, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440\u044b \u041f\u0430\u0440\u043c\u0435\u0437\u0430\u043d \u0438 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439"},{id:4,title:"\u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:le.a,ingredientsInRus:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0431\u0435\u043a\u043e\u043d, \u043e\u043f\u044f\u0442\u0430 \u0438 \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:5,title:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:se.a,ingredientsInRus:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:6,title:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0441 \u0434\u0432\u043e\u0439\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:de.a,ingredientsInRus:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:7,title:"6 \u0441\u044b\u0440\u043e\u0432",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:pe.a,ingredientsInRus:"\u041f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0414\u043e\u0440-\u0431\u043b\u044e, \u0413\u0430\u0443\u0434\u0430, \u0427\u0435\u0434\u0434\u0435\u0440 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439, \u0442\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u0439, \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430"},{id:8,title:"\u041e\u0441\u0442\u0440\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:he.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u043f\u0435\u0440\u0435\u0446 \u0445\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043b\u0443\u043a, \u043b\u0435\u0447\u043e, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441"},{id:9,title:"\u0427\u0438\u043a\u0435\u043d \u0440\u044d\u043d\u0447",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:fe.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0420\u0430\u043d\u0447"},{id:10,title:"\u041c\u044f\u0441\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:ve.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0431\u0435\u043a\u043e\u043d, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u043a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430 , \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:11,title:"\u0421 \u0432\u0435\u0442\u0447\u0438\u043d\u043e\u0439 \u0438 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:_e.a,ingredientsInRus:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439, \u0441\u043e\u0443\u0441 \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439"},{id:12,title:"\u0413\u0430\u0432\u0430\u0439\u0441\u043a\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:ye.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u0430\u043d\u0430\u043d\u0430\u0441, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0440\u043e\u0437\u043e\u0432\u044b\u0439"},{id:13,title:"\u0411\u0430\u0440\u0431\u0435\u043a\u044e \u043c\u0438\u043a\u0441",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:we.a,ingredientsInRus:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u043e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0431\u0435\u043a\u043e\u043d, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u043a\u043e\u0440\u043d\u0438\u0448\u043e\u043d\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441\u043e\u0443\u0441\u044b \u0447\u0438\u043b\u0438, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0438 BBQ"},{id:14,title:"\u0413\u0440\u0438\u0431\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:xe.a,ingredientsInRus:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0420\u0430\u043d\u0447, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b"},{id:15,title:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440."},md:{price:420,weight:"470 \u0433\u0440."},lg:{price:650,weight:"720 \u0433\u0440."}},coverImage:je.a,ingredientsInRus:"\u0421\u044b\u0440 \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u044b\u0440 \u0422\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u0439, \u0442\u043e\u043c\u0430\u0442\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u043b\u0435\u0447\u043e, \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441\u043e\u0443\u0441\u044b \u0440\u0430\u043d\u0447, \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439, \u043c\u0430\u0441\u043b\u043e \u043e\u0441\u0442\u0440\u043e\u0435"}],this.drinks=[{id:17,title:"Coca-Cola",details:{sm:{price:80,weight:"0.5 \u043b"},md:{price:100,weight:"1 \u043b"}},coverImage:ke.a},{id:18,title:"Fanta",details:{sm:{price:80,weight:"0.5 \u043b"},md:{price:100,weight:"1 \u043b"}},coverImage:Ae.a},{id:19,title:"Sprite",details:{sm:{price:"0.5 \u043b",weight:.5},md:{price:100,weight:"1 \u043b"}},coverImage:De.a}],this.getPizza=function(){return new Promise((function(e){e(t.pizza)}))},this.getDrinks=function(){return new Promise((function(e){e(t.drinks)}))}}),at=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{store:Ye},r.a.createElement(l.a,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement(R,{value:tt},r.a.createElement("div",{className:"container"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:$}),r.a.createElement(o.a,{path:"/pizza",component:A}),r.a.createElement(o.a,{path:"/drinks",component:T}),r.a.createElement(o.a,{path:"/cart",component:H}))),r.a.createElement(et,null)))),r.a.createElement(Ke,null,r.a.createElement(Xe,null))))};a(96);c.a.render(r.a.createElement(at,null),document.getElementById("root"))}]),[[56,1,2]]]);
//# sourceMappingURL=main.0c2c55d6.chunk.js.map