(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9a64"],{"3nOS":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.listQuery}},[i("el-form-item",{attrs:{label:"模板名称"}},[i("el-input",{attrs:{placeholder:"模板名称",clearable:""},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v("搜索")])],1)],1),e._v(" "),i("br"),e._v(" "),i("router-link",{directives:[{name:"permission",rawName:"v-permission",value:e.$store.jurisdiction.CreateFreight,expression:"$store.jurisdiction.CreateFreight"}],attrs:{to:"CreateFreight"}},[i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",icon:"el-icon-edit"}},[e._v("添加")])],1),e._v(" "),i("br")],1),e._v(" "),e._l(e.list,function(t,a){return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:a,staticClass:"zt"},[i("div",[i("el-card",{attrs:{shadow:"never"}},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[i("el-col",{attrs:{span:4}},[i("b",[e._v(e._s(t.name))])]),e._v(" "),i("el-col",{staticStyle:{"text-align":"right"},attrs:{span:20}},[e._v("\n            最后编辑时间："+e._s(t.updated_at)+"\n            "),i("router-link",{directives:[{name:"permission",rawName:"v-permission",value:e.$store.jurisdiction.EditFreight,expression:"$store.jurisdiction.EditFreight"}],attrs:{to:{path:"CreateFreight",query:{id:t.id,copy:!0}}}},[i("el-button",{attrs:{type:"text"}},[e._v("复制模板")])],1),e._v(" "),i("router-link",{directives:[{name:"permission",rawName:"v-permission",value:e.$store.jurisdiction.EditFreight,expression:"$store.jurisdiction.EditFreight"}],attrs:{to:{path:"EditFreight",query:{id:t.id}}}},[i("el-button",{attrs:{type:"text"}},[e._v("修改")])],1),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(i){e.handleDelete(t)}}},[e._v("删除")])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"multipleTable",refInFor:!0,staticStyle:{width:"100%"},attrs:{data:t.freight_way,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{label:"运送到",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.location_name.join(",")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"首件",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.first_piece))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"运费(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.first_cost))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"费件",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.add_piece))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"运费(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.add_cost))])]}}])})],1)],1)])}),e._v(" "),i("div",{staticClass:"pagination-operation"},[i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticClass:"pagination",attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1)],2)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"6g3Z":function(e,t,i){"use strict";i.r(t);var a=i("M3qR"),n=i.n(a);for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);t.default=n.a},"86NG":function(e,t,i){},"98PG":function(e){e.exports=[{value:"11",label:"北京市"},{value:"12",label:"天津市"},{value:"13",label:"河北省"},{value:"14",label:"山西省"},{value:"15",label:"内蒙古自治区"},{value:"21",label:"辽宁省"},{value:"22",label:"吉林省"},{value:"23",label:"黑龙江省"},{value:"31",label:"上海市"},{value:"32",label:"江苏省"},{value:"33",label:"浙江省"},{value:"34",label:"安徽省"},{value:"35",label:"福建省"},{value:"36",label:"江西省"},{value:"37",label:"山东省"},{value:"41",label:"河南省"},{value:"42",label:"湖北省"},{value:"43",label:"湖南省"},{value:"44",label:"广东省"},{value:"45",label:"广西壮族自治区"},{value:"46",label:"海南省"},{value:"50",label:"重庆市"},{value:"51",label:"四川省"},{value:"52",label:"贵州省"},{value:"53",label:"云南省"},{value:"54",label:"西藏自治区"},{value:"61",label:"陕西省"},{value:"62",label:"甘肃省"},{value:"63",label:"青海省"},{value:"64",label:"宁夏回族自治区"},{value:"65",label:"新疆维吾尔自治区"}]},EdaV:function(e,t,i){"use strict";i.r(t);var a=i("3nOS"),n=i("PwVD");for(var l in n)"default"!==l&&function(e){i.d(t,e,function(){return n[e]})}(l);i("Us/w");var r=i("KHd+"),s=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);s.options.__file="list.vue",t.default=s.exports},HKPr:function(e,t,i){"use strict";var a=i("YPLS");i.n(a).a},Jdhx:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[i("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},M3qR:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Y5bG");t.default={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&(0,a.scrollTo)(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&(0,a.scrollTo)(0,800)}}}},Mz3J:function(e,t,i){"use strict";i.r(t);var a=i("Jdhx"),n=i("6g3Z");for(var l in n)"default"!==l&&function(e){i.d(t,e,function(){return n[e]})}(l);i("HKPr");var r=i("KHd+"),s=Object(r.a)(n.default,a.a,a.b,!1,null,"cebf2f0c",null);s.options.__file="index.vue",t.default=s.exports},PwVD:function(e,t,i){"use strict";i.r(t);var a=i("phMG"),n=i.n(a);for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);t.default=n.a},"Us/w":function(e,t,i){"use strict";var a=i("86NG");i.n(a).a},Y5bG:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scrollTo=function(e,t,i){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=e-n,r=0;t=void 0===t?500:t,function e(){r+=20;var s=Math.easeInOutQuad(r,n,l,t);!function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(s),r<t?a(e):i&&"function"==typeof i&&i()}()},Math.easeInOutQuad=function(e,t,i,a){return(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},YPLS:function(e,t,i){},ip1f:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getList=function(e){return(0,a.default)({url:"freight",method:"get",params:e})},t.createSubmit=function(e){return e=(e=n.default.parse({data:e})).data,(0,a.default)({url:"freight",method:"POST",data:e})},t.updateSubmit=function(e,t){return t=(t=n.default.parse({data:t})).data,(0,a.default)({url:"freight/"+e,method:"PUT",data:t})},t.setDelete=function(e,t){return t=(t=n.default.parse({data:t})).data,(0,a.default)({url:"freight/"+e,method:"DELETE",data:t})},t.getShow=function(e){return(0,a.default)({url:"freight/"+e,method:"GET"})};var a=l(i("t3Un")),n=l(i("Qyje"));function l(e){return e&&e.__esModule?e:{default:e}}},phMG:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("ip1f"),n=i("X4fA"),l=function(e){return e&&e.__esModule?e:{default:e}}(i("Mz3J"));var r=i("98PG");t.default={name:"FreightList",components:{Pagination:l.default},data:function(){return{actionurl:"http://dsshop.test/api/v1/admin/uploadPictures",imgHeaders:{Authorization:"Bearer "+(0,n.getToken)("access_token")},dialogVisible:!1,ruleForm:[],checkAll:!1,tableKey:0,list:null,total:0,textMap:{update:"修改",create:"添加"},imgData:{type:1,size:512e3},provinces:r,imgProgressPercent:0,loading:!1,listLoading:!1,imgProgress:!1,dialogStatus:"",dialogFormVisible:!1,listQuery:{page:1,limit:10,sort:"+id",activeIndex:"1"},temp:{},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],price:[{required:!0,message:"请填写价格",trigger:"change"}],img:[{required:!0,message:"请上传图片",trigger:"change"}],state:[{required:!0,message:"请选择状态",trigger:"change"}],sort:[{required:!0,message:"请填写排序",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,(0,a.getList)(this.listQuery).then(function(t){e.list=t.data.data,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(e){var t=e.prop,i=e.order;"id"===t?this.sortByID(i):"time"===t&&this.sortByTIME(i)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},handleSelect:function(e,t){this.listQuery.activeIndex=e,this.handleFilter()},resetTemp:function(){this.temp={state:0,sort:"5",img:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleUpdate:function(e){var t=this;this.temp=null,this.temp=e,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleCheckAllChange:function(){this.$refs.multipleTable.toggleAllSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleDelete:function(e){var t=this;this.$confirm("是否确认删除该内容?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){(0,a.setDelete)(e.id,e).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:"删除成功",type:"success",duration:2e3})})}).catch(function(){})},handleAllDelete:function(){var e=this;this.$confirm("是否确认批量删除内容?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){(0,a.setDelete)(0,e.multipleSelection).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:e.$t("hint.succeed"),message:"删除成功",type:"success",duration:2e3})})}).catch(function(){})},createSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(0,a.createSubmit)(e.temp).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:e.$t("hint.succeed"),message:e.$t("hint.creatingSuccessful"),type:"success",duration:2e3})})})},updateSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(0,a.updateSubmit)(e.temp.id,e.temp).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:e.$t("hint.succeed"),message:e.$t("hint.updateSuccessful"),type:"success",duration:2e3})})})},handleAvatarSuccess:function(e,t){this.temp.img=t.response,this.imgProgress=!1,this.imgProgressPercent=0},handleProgress:function(e,t){this.imgProgressPercent=e.percent},beforeAvatarUpload:function(e){var t=e.size/1024<500;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(e.type)?(this.$message.error("请上传正确的图片格式"),!1):(t||this.$message.error("上传头像图片大小不能超过 500KB!"),this.imgProgress=!0,t)}}}}}]);