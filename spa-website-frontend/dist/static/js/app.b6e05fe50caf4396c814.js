webpackJsonp([1],{0:function(t,e){},Fmv6:function(t,e){},FtC3:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={name:"App",methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}},mounted:function(){this.$http.headers.common["X-CSRFToken"]=document.getElementsByName("csrfmiddlewaretoken").val()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("h1",{attrs:{id:"header-h5"}},[t._v("随机数据显示demo")])]),t._v(" "),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:25}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"background-color":"#303133","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"/new"}},[n("i",{staticClass:"el-icon-more"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("New Random Data")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/stored"}},[n("i",{staticClass:"el-icon-more"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" Stored Random Data")])])],1)],1)],1)],1),t._v(" "),n("el-main",[n("el-card",{staticClass:"box-card"},[n("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("T0to")},null,null).exports,r=n("/ocq"),d={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};n("VU/8")({name:"HelloWorld"},d,!1,function(t){n("Fmv6")},"data-v-b1e88128",null).exports;var l=n("504h"),c=n.n(l),h={props:{id:{type:String},option:{type:Object},httpGet:{type:Object,default:null}},watch:{option:function(){c.a.chart(this.id,this.option)}},mounted:function(){c.a.chart(this.id,this.option)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"x-bar"},[e("div",{attrs:{id:this.id,option:this.option}})])},staticRenderFns:[]};var m=n("VU/8")(h,u,!1,function(t){n("FtC3")},"data-v-305c006e",null).exports,p={name:"NewRandom",data:function(){var t=this.$http;return{random_data_list:"",random_data_list_id:"",showchart:!1,option:{chart:{type:"line",animation:!0,duration:3e3,events:{load:function(){var e=this.series;setInterval(function(){t.get("/random_data/new").then(function(t){this.content=t.body,this.random_data_list=this.content.random_data_list,this.random_data_list_id=this.content.random_data_list_id,e[0].update({data:this.random_data_list})})},1e6)}}},credits:{enabled:!1},title:{text:"随机数据折线图",margin:50},tooltip:{headerFormat:"<small>{point.key}</small><table>",pointFormat:"{series.name}: <b>{point.y}</b><br/>"},xAxis:{title:{text:"random data"},categories:[1,2,3,4,5,6,7,8,9,10],allowDecimals:!1},yAxis:{min:0,max:1e3,title:{text:"random data value"}},plotOptions:{series:{animation:!0,duration:3e3}},series:[{name:"random data value",data:[]}]}}},components:{XChart:m},methods:{readCookie:function(t){for(var e=t+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null},save:function(){var t=this;console.log(this.random_data_list_id),this.$http.post("/random_data/save",{list_id:this.random_data_list_id},{emulateJSON:!0}).then(function(e){t.content=e.status,t.$notify({title:"成功",message:"数据保存成功",type:"success"}),console.log(t.content)}).catch(function(t){this.content=t.status,this.$notify.error({title:"错误",message:"保存失败，请稍后重试！"}),console.log(t.status)})},new_data:function(){this.$http.get("/random_data/new").then(function(t){this.content=t.body,this.random_data_list=this.content.random_data_list,this.random_data_list_id=this.content.random_data_list_id,this.option.series[0].data=this.random_data_list,this.showchart=!0}).catch(function(t){this.content=t.status,console.log(t)})}},mounted:function(){this.new_data()}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"NewRandom"}},[1==this.showchart?e("x-chart",{attrs:{option:this.option,id:"id",http_get:this.$http,width:"244px",height:"244px"}}):this._e(),this._v(" "),e("br"),this._v(" "),e("br"),this._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:this.save}},[this._v("保存当前数据")])],1)},staticRenderFns:[]};var f=n("VU/8")(p,_,!1,function(t){n("PrR6")},"data-v-2f6e1167",null).exports,v={name:"StoredRandom",data:function(){return{showchart:!1,option:{chart:{type:"line",animation:!0,duration:3e3},credits:{enabled:!1},title:{text:"最近存储的100条数据",floating:!1,margin:50},tooltip:{headerFormat:"<small>random data id: {point.key}</small><table><br/>",pointFormat:"{series.name}: <b>{point.y}</b><br/>"},xAxis:{title:{text:"random data"}},yAxis:{min:0,max:1e3,title:{text:"random data value"}},plotOptions:{series:{animation:!0,duration:3e3}},series:[{name:"random data value",data:[]}]}}},components:{XChart:m},mounted:function(){var t=this;this.$http.get("/stored_data/").then(function(e){t.content=e.body,t.stored_random_data=t.content,t.option.series[0].data=e.body,t.showchart=!0}).catch(function(t){this.content=t.status,console.log(t)})}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"StoredRandom"}},[1==this.showchart?e("x-chart",{attrs:{option:this.option,id:"id"}}):this._e()],1)},staticRenderFns:[]};var b=n("VU/8")(v,x,!1,function(t){n("P8ZC")},"data-v-2aa57cf9",null).exports,g=n("8+8L");a.default.use(g.a),a.default.use(r.a);var w=new r.a({mode:"history",routes:[{path:"*",redirect:"/new"},{path:"/new",name:"NewRandom",component:f},{path:"/stored",name:"StoredRandom",component:b}]}),y=n("zL8q"),R=n.n(y);n("tvR6");a.default.config.productionTip=!1,a.default.use(R.a),new a.default({el:"#app",router:w,components:{App:s},template:"<App/>"})},P8ZC:function(t,e){},PrR6:function(t,e){},T0to:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6e05fe50caf4396c814.js.map