(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0fc9":function(e,i,t){"use strict";t.r(i);var a=t("1231"),o=t("ef81");for(var n in o)"default"!==n&&function(e){t.d(i,e,(function(){return o[e]}))}(n);t("17de");var r,d=t("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"d8b5e866",null,!1,a["a"],r);i["default"]=s.exports},1231:function(e,i,t){"use strict";var a;t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return n})),t.d(i,"a",(function(){return a}));var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"carousel-section"},[t("v-uni-view",{staticClass:"titleNview-placing"}),t("v-uni-view",{staticClass:"titleNview-background",staticStyle:{backgroundColor:"rgb(203, 87, 60)"}}),t("v-uni-swiper",{staticClass:"carousel",attrs:{circular:!0},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.swiperChange.apply(void 0,arguments)}}},e._l(e.carouselList,(function(i,a){return t("v-uni-swiper-item",{key:a,staticClass:"carousel-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToWwiperPage({item:i})}}},[t("v-uni-image",{attrs:{src:i.resources.img},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo(i.url)}}})],1)})),1),t("v-uni-view",{staticClass:"swiper-dots"},[t("v-uni-text",{staticClass:"num"},[e._v(e._s(e.swiperCurrent+1))]),t("v-uni-text",{staticClass:"sign"},[e._v("/")]),t("v-uni-text",{staticClass:"num"},[e._v(e._s(e.swiperLength))])],1)],1),t("v-uni-view",{staticClass:"cate-section"},e._l(e.ctegory,(function(i){return t("v-uni-view",{key:i.id,staticClass:"cate-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/product/list?fid="+i.fid+"&sid="+i.sid+"&tid="+i.tid)}}},[t("v-uni-image",{attrs:{src:i.image,"lazy-load":!0}}),t("v-uni-text",[e._v(e._s(i.name))])],1)})),1),t("v-uni-view",{staticClass:"ad-1"},[e.adData.resources?t("v-uni-image",{attrs:{src:e.adData.resources.img,mode:"scaleToFill","lazy-load":!0},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo(e.adData.url)}}}):e._e()],1),t("v-uni-view",{staticClass:"f-header m-t"},[t("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),t("v-uni-view",{staticClass:"tit-box"},[t("v-uni-text",{staticClass:"tit"},[e._v("为你推荐")]),t("v-uni-text",{staticClass:"tit2"},[e._v("Recommend To You")])],1)],1),t("v-uni-view",{staticClass:"guess-section"},e._l(e.goodsList,(function(i,a){return t("v-uni-view",{key:a,staticClass:"guess-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToDetailPage(i)}}},[t("v-uni-view",{staticClass:"image-wrapper"},[t("v-uni-image",{attrs:{src:e._f("smallImage")(i.resources.img,250),mode:"aspectFill","lazy-load":!0}})],1),t("v-uni-text",{staticClass:"title clamp"},[e._v(e._s(i.name))]),t("v-uni-text",{staticClass:"price"},[e._v("￥"+e._s(e._f("1000")(i.order_price)))])],1)})),1)],1)},n=[]},"17de":function(e,i,t){"use strict";var a=t("ba0c"),o=t.n(a);o.a},a787:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */.mp-search-box[data-v-d8b5e866]{position:absolute;left:0;top:%?30?%;z-index:9999;width:100%;padding:0 %?80?%}.mp-search-box .ser-input[data-v-d8b5e866]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?56?%;line-height:%?56?%;text-align:center;font-size:%?28?%;color:#606266;-webkit-border-radius:20px;border-radius:20px;background:hsla(0,0%,100%,.6)}uni-page-body .cate-section[data-v-d8b5e866]{position:relative;z-index:5;-webkit-border-radius:%?16?% %?16?% 0 0;border-radius:%?16?% %?16?% 0 0;margin-top:%?-20?%}uni-page-body .carousel-section[data-v-d8b5e866]{padding:0}uni-page-body .carousel-section .titleNview-placing[data-v-d8b5e866]{padding-top:0;height:0}uni-page-body .carousel-section .carousel .carousel-item[data-v-d8b5e866]{padding:0}uni-page-body .carousel-section .swiper-dots[data-v-d8b5e866]{left:%?45?%;bottom:%?40?%}uni-page-body[data-v-d8b5e866]{background:#f5f5f5}.m-t[data-v-d8b5e866]{margin-top:%?16?%}\n/* 头部 轮播图 */.carousel-section[data-v-d8b5e866]{position:relative;padding-top:10px}.carousel-section .titleNview-placing[data-v-d8b5e866]{height:0;padding-top:44px;-webkit-box-sizing:content-box;box-sizing:content-box}.carousel-section .titleNview-background[data-v-d8b5e866]{position:absolute;top:0;left:0;width:100%;height:%?426?%;-webkit-transition:.4s;transition:.4s}.carousel[data-v-d8b5e866]{width:100%;height:%?350?%}.carousel .carousel-item[data-v-d8b5e866]{width:100%;height:100%;padding:0 %?28?%;overflow:hidden}.carousel uni-image[data-v-d8b5e866]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.swiper-dots[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:%?60?%;bottom:%?15?%;width:%?72?%;height:%?36?%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);background-size:100% 100%}.swiper-dots .num[data-v-d8b5e866]{width:%?36?%;height:%?36?%;-webkit-border-radius:50px;border-radius:50px;font-size:%?24?%;color:#fff;text-align:center;line-height:%?36?%}.swiper-dots .sign[data-v-d8b5e866]{position:absolute;top:0;left:50%;line-height:%?36?%;font-size:%?12?%;color:#fff;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n/* 分类 */.cate-section[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?30?% %?22?%;background:#fff\n  /* 原图标颜色太深,不想改图了,所以加了透明度 */}.cate-section .cate-item[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#303133}.cate-section uni-image[data-v-d8b5e866]{width:%?88?%;height:%?88?%;margin-bottom:%?14?%;-webkit-border-radius:50%;border-radius:50%;opacity:.7;-webkit-box-shadow:%?4?% %?4?% %?20?% rgba(250,67,106,.3);box-shadow:%?4?% %?4?% %?20?% rgba(250,67,106,.3)}.ad-1[data-v-d8b5e866]{width:100%;height:%?210?%;padding:%?20?% 0;background:#fff}.ad-1 uni-image[data-v-d8b5e866]{width:100%;height:100%}\n/* 秒杀专区 */.seckill-section[data-v-d8b5e866]{padding:%?4?% %?30?% %?24?%;background:#fff}.seckill-section .s-header[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?92?%;line-height:1}.seckill-section .s-header .s-img[data-v-d8b5e866]{width:%?140?%;height:%?30?%}.seckill-section .s-header .tip[data-v-d8b5e866]{font-size:%?28?%;color:#909399;margin:0 %?20?% 0 %?40?%}.seckill-section .s-header .timer[data-v-d8b5e866]{display:inline-block;width:%?40?%;height:%?36?%;text-align:center;line-height:%?36?%;margin-right:%?14?%;font-size:%?26?%;color:#fff;-webkit-border-radius:2px;border-radius:2px;background:rgba(0,0,0,.8)}.seckill-section .s-header .icon-you[data-v-d8b5e866]{font-size:%?32?%;color:#909399;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.seckill-section .floor-list[data-v-d8b5e866]{white-space:nowrap}.seckill-section .scoll-wrapper[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.seckill-section .floor-item[data-v-d8b5e866]{width:%?150?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.seckill-section .floor-item uni-image[data-v-d8b5e866]{width:%?150?%;height:%?150?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.seckill-section .floor-item .price[data-v-d8b5e866]{color:#fa436a}.f-header[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?140?%;padding:%?6?% %?30?% %?8?%;background:#fff}.f-header uni-image[data-v-d8b5e866]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%;margin-right:%?20?%}.f-header .tit-box[data-v-d8b5e866]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.f-header .tit[data-v-d8b5e866]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.f-header .tit2[data-v-d8b5e866]{font-size:%?24?%;color:#909399}.f-header .icon-you[data-v-d8b5e866]{font-size:%?34?%;color:#909399}\n/* 团购楼层 */.group-section[data-v-d8b5e866]{background:#fff}.group-section .g-swiper[data-v-d8b5e866]{height:%?650?%;padding-bottom:%?30?%}.group-section .g-swiper-item[data-v-d8b5e866]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.group-section uni-image[data-v-d8b5e866]{width:100%;height:%?460?%;-webkit-border-radius:4px;border-radius:4px}.group-section .g-item[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.group-section .left[data-v-d8b5e866]{-webkit-box-flex:1.2;-webkit-flex:1.2;flex:1.2;margin-right:%?24?%}.group-section .left .t-box[data-v-d8b5e866]{padding-top:%?20?%}.group-section .right[data-v-d8b5e866]{-webkit-box-flex:0.8;-webkit-flex:0.8;flex:0.8;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.group-section .right .t-box[data-v-d8b5e866]{padding-bottom:%?20?%}.group-section .t-box[data-v-d8b5e866]{height:%?160?%;font-size:%?30?%;color:#303133;line-height:1.6}.group-section .price[data-v-d8b5e866]{color:#fa436a}.group-section .m-price[data-v-d8b5e866]{font-size:%?26?%;text-decoration:line-through;color:#909399;margin-left:%?8?%}.group-section .pro-box[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%;font-size:%?24?%;color:%?28?%;padding-right:%?10?%}.group-section .progress-box[data-v-d8b5e866]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-border-radius:10px;border-radius:10px;overflow:hidden;margin-right:%?8?%}\n/* 分类推荐楼层 */.hot-floor[data-v-d8b5e866]{width:100%;overflow:hidden;margin-bottom:%?20?%}.hot-floor .floor-img-box[data-v-d8b5e866]{width:100%;height:%?320?%;position:relative}.hot-floor .floor-img-box[data-v-d8b5e866]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-gradient(linear,left top,left bottom,color-stop(30%,hsla(0,0%,100%,.06)),to(#f8f8f8));background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.hot-floor .floor-img[data-v-d8b5e866]{width:100%;height:100%}.hot-floor .floor-list[data-v-d8b5e866]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.2);box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.hot-floor .scoll-wrapper[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.hot-floor .floor-item[data-v-d8b5e866]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.hot-floor .floor-item uni-image[data-v-d8b5e866]{width:%?180?%;height:%?180?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.hot-floor .floor-item .price[data-v-d8b5e866]{color:#fa436a}.hot-floor .more[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.hot-floor .more uni-text[data-v-d8b5e866]:first-child{margin-bottom:%?4?%}\n/* 猜你喜欢 */.guess-section[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.guess-section .guess-item[data-v-d8b5e866]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.guess-section .guess-item[data-v-d8b5e866]:nth-child(2n+1){margin-right:4%}.guess-section .image-wrapper[data-v-d8b5e866]{width:100%;height:%?330?%;-webkit-border-radius:3px;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-d8b5e866]{width:100%;height:100%;opacity:1}.guess-section .title[data-v-d8b5e866]{font-size:%?32?%;color:#303133;line-height:%?80?%}.guess-section .price[data-v-d8b5e866]{font-size:%?32?%;color:#fa436a;line-height:1}body.?%PAGE?%[data-v-d8b5e866]{background:#f5f5f5}',""]),e.exports=i},ba0c:function(e,i,t){var a=t("a787");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("bde4560e",a,!0,{sourceMap:!1,shadowMode:!1})},ef81:function(e,i,t){"use strict";t.r(i);var a=t("f413"),o=t.n(a);for(var n in a)"default"!==n&&function(e){t.d(i,e,(function(){return a[e]}))}(n);i["default"]=o.a},f0be:function(e,i,t){"use strict";var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(t("2edd")),n={getList:function(e,i,t){o.default.setGetMessage("banner",e,"加载中",(function(e){i(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getAdvertising:function(e,i,t){o.default.setGetMessage("advertising",e,"加载中",(function(e){i(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))}};i.default=n},f413:function(e,i,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var o=a(t("1da1")),n=a(t("4a8c")),r=a(t("f0be")),d={data:function(){return{modalName:null,wechat:null,guidanceMy:!1,titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[],adData:{},ctegory:[{id:1,fid:1,sid:3,tid:20,image:this.configURL.DomainName+"/storage/image/category/nQNqh1606374465_80.png",name:"男士T恤"},{id:2,fid:49,sid:51,tid:60,image:this.configURL.DomainName+"/storage/image/category/gSh0W1606375215_80.png",name:"女士T恤"},{id:3,fid:49,sid:69,tid:73,image:this.configURL.DomainName+"/storage/image/category/h6OZV1606375632_80.png",name:"高根鞋"},{id:4,fid:49,sid:50,tid:53,image:this.configURL.DomainName+"/storage/image/category/Ncdvt1606375053_80.png",name:"半身裙"},{id:5,fid:49,sid:50,tid:65,image:this.configURL.DomainName+"/storage/image/category/rpuxK1606375087_80.png",name:"打底裙"}]}},onLoad:function(){this.loadData(),uni.getStorageSync("applyDsshopGuidanceMy")||(this.guidanceMy=!0)},methods:{loadData:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var t;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=e,i.next=3,r.default.getList({limit:10,type:0},(function(e){t.carouselList=e.data,t.swiperLength=e.data.length}));case 3:return i.next=5,r.default.getAdvertising({type:1},(function(e){t.adData=e}));case 5:return i.next=7,n.default.getList({limit:10,is_recommend:1},(function(e){t.goodsList=e.data}));case 7:case"end":return i.stop()}}),i)})))()},swiperChange:function(e){var i=e.detail.current;this.swiperCurrent=i},navToWwiperPage:function(i){e.log(i)},navToDetailPage:function(e){var i=e.id;uni.navigateTo({url:"/pages/product/product?id=".concat(i)})},navTo:function(e){e&&uni.navigateTo({url:e})}},onNavigationBarSearchInputClicked:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$api.msg("点击了搜索框");case 1:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),onNavigationBarButtonTap:function(e){var i=e.index;0===i?this.$api.msg("点击了扫描"):1===i&&uni.navigateTo({url:"/pages/notice/notice"})}};i.default=d}).call(this,t("5a52")["default"])}}]);