(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-381fa2f5"],{"0262":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content g2-content"},[a("div",{staticClass:"video-content"},[a("video",{attrs:{id:"vid",width:"100%",height:"100%","plays-inline":"",preload:"metadata",controls:""}},[a("source",{attrs:{src:t.apiurl,type:"video/mp4"}})])]),a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._m(0),t._v(" "+t._s(t.$t("page.video.play"))+" / "),t._m(1),t._v(" "+t._s(t.$t("page.video.download"))+" ")])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("page.video.link")))]),a("div",{staticClass:"control"},[a("input",{staticClass:"input download-link",attrs:{type:"text"},domProps:{value:t.videourl}})])]),a("div",{staticClass:"columns is-mobile is-multiline has-text-centered"},t._l(t.players,(function(e,i){return a("div",{key:i,staticClass:"column"},[a("p",{staticClass:"heading"},[a("a",{attrs:{href:e.scheme}},[a("figure",{staticClass:"image is-48x48",staticStyle:{margin:"0 auto"}},[a("img",{staticClass:"icon",attrs:{src:e.icon}})])])]),a("p",{},[t._v(t._s(e.name))])])})),0)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])}],s=a("6a54"),r=s["a"],l=a("2877"),o=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=o.exports},"6a54":function(t,e,a){"use strict";(function(t){a("d3b7"),a("25f0");var i=a("45d8"),n=setInterval((function(){var t=document.getElementById("vid").readyState;4==t&&(document.getElementById("vid").play(),clearInterval(n))}),2e3);e["a"]={data:function(){return{apiurl:"",videourl:""}},methods:{render:function(){this.videourl=window.location.origin+encodeURI(this.url),this.apiurl=this.videourl}},activated:function(){this.render()},computed:{url:function(){return this.$route.params.path?Object(i["d"])(this.$route.params.path):""},players:function(){return[{name:"IINA",icon:"https://www.iina.io/images/iina-icon-60.png",scheme:"iina://weblink?url="+this.videourl},{name:"PotPlayer",icon:"https://cloud.jsonpop.cn/go2index/player/potplayer.png",scheme:"potplayer://"+this.videourl},{name:"VLC",icon:"https://cloud.jsonpop.cn/go2index/player/vlc.png",scheme:"vlc://"+this.videourl},{name:"Thunder",icon:"https://cloud.jsonpop.cn/go2index/player/thunder.png",scheme:"thunder://"+this.getThunder},{name:"nPlayer",icon:"https://cloud.jsonpop.cn/go2index/player/nplayer.png",scheme:"nplayer-"+this.videourl},{name:"MXPlayer(Free)",icon:"https://cloud.jsonpop.cn/go2index/player/mxplayer.png",scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+this.title+";end"},{name:"MXPlayer(Pro)",icon:"https://cloud.jsonpop.cn/go2index/player/mxplayer.png",scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+this.title+";end"}]},getThunder:function(){return t.from("AA"+this.videourl+"ZZ").toString("base64")}}}}).call(this,a("b639").Buffer)}}]);