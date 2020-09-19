(this["webpackJsonpdg-poc"]=this["webpackJsonpdg-poc"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(23),a(5)),s=a(6),l=a(8),u=a(7),m=a(1),p=a(15),d=function(e){var t=e.src,a=e.alt;return r.a.createElement("div",{className:"xl:h-64 xl:overflow-hidden"},r.a.createElement(p.LazyLoadImage,{alt:a,src:t,effect:"blur"}))};a(29);var h=function(e){var t="./images/".concat(e.poster),a=e.poster&&"posterthatismissing.jpg"!==e.poster?t:"./images/placeholder_for_missing_posters.png";return r.a.createElement("div",{className:"movielist__wrapper"},r.a.createElement(d,{src:a,alt:e.name}),r.a.createElement("img",{className:"pb-2",alt:""}),r.a.createElement("h4",{className:"text-sm"},e.name))};var g=a(2),f=a(4),v={movielist:[],pageSizeReturned:null,hasMore:!0,pageNo:0,totalContentItems:null,title:"",search:""};var E=a(16),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.c,N=Object(g.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_LIST":return Object(f.a)(Object(f.a)({},e),{},{movielist:e.movielist.concat(t.payload),pageSizeReturned:e.pageSizeReturned+t.pageSizeReturned,totalContentItems:t.totalContentItems,hasMore:!!(t.totalContentItems-(e.pageSizeReturned+t.pageSizeReturned)),pageNo:t.pageNo,title:t.title});case"SEARCH":return Object(f.a)(Object(f.a)({},e),{},{search:t.search});default:return e}}),b(Object(g.a)(E.a)));function y(e){return function(t){fetch("./data/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){setTimeout((function(){N.dispatch(function(e){var t=parseInt(e["total-content-items"]),a=parseInt(e["page-size-returned"]),n=e["content-items"].content,r=parseInt(e["page-num-requested"]);return{type:"GET_MOVIE_LIST",title:e.title,payload:n,totalContentItems:t,pageSizeReturned:a,pageNo:r}}(e.page))}),300)})).catch((function(e){console.log("Error Reading data "+e)}))}}var O=a(17),j=a.n(O),x=(a(31),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.search,a=e.value;return r.a.createElement("div",{className:"searchBox flex-1 text-right text-gray-600 relative"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1 "},r.a.createElement("input",{id:"search",name:"search",type:"text",placeholder:"search",onChange:function(e){return t(e.target.value)},value:a,className:"focus:outline-none",onBlur:function(){return t("")}})),r.a.createElement("div",{className:"flex-1 "},r.a.createElement("img",{src:"/dg-poc/images/search.png",alt:"",className:"searchIcon"}))))}}]),a}(n.Component)),S=Object(m.b)((function(e){return{search:e.search}}),(function(e){return{search:function(t){return e(function(e){return N.dispatch(function(e){return{type:"SEARCH",search:e}}(e))}(t))}}}))(x);function w(e){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1 pt-2 text-lg"},r.a.createElement("h1",null,e.title)),r.a.createElement(S,null))}var I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).loadMore=function(){return!!e.props.hasMore},e.filterMovies=function(){return e.props.movielist.filter((function(t){return t.name.toLowerCase().includes(e.props.search.toLowerCase())}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"movielist pb-16"},r.a.createElement("div",{className:"sticky top-0 pb-4 pt-6 bg-black z-10"},r.a.createElement(w,{title:this.props.title,search:this.props.search})),r.a.createElement(j.a,{pageStart:0,loadMore:this.props.fetch,initialLoad:!0,hasMore:this.loadMore(),loader:r.a.createElement("div",{className:"loader",key:0,style:{textAlign:"center"}},r.a.createElement("img",{className:"m-auto mt-16",src:"https://cdn.themis-media.com/media/global/images/library/deriv/1291/1291107.gif",alt:"Loading ..."}))},r.a.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 gap-y-10"},this.props.search?this.filterMovies().map((function(e,t){return r.a.createElement(h,{key:t,name:e.name,poster:e["poster-image"]})})):this.props.movielist.map((function(e,t){return r.a.createElement(h,{key:t,name:e.name,poster:e["poster-image"]})})))))}}]),a}(r.a.Component),_=Object(m.b)((function(e){return{movielist:e.movielist,pageSizeReturned:e.pageSizeReturned,hasMore:e.hasMore,pageNo:e.pageNo,title:e.title,search:e.search}}),(function(e){return{fetch:function(t){return e(y(t))}}}))(I);var M=function(){return r.a.createElement("div",{className:'container items-center justify-center bg-black text-white pr-4 pl-4 pb-4"'},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:N},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4cd90b15.chunk.js.map