webpackJsonp([2],{220:function(t,e,i){var n=i(221);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("cd2ee6b6",n,!0,{})},221:function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,"",""])},222:function(t,e,i){"use strict";function n(t){i(223)}var c=i(55),o=i(230),a=i(5),s=n,r=a(c.a,o.a,!1,s,"data-v-55b45cdd",null);e.a=r.exports},223:function(t,e,i){var n=i(224);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("107c1a2e",n,!0,{})},224:function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".light[data-v-55b45cdd]{position:absolute;background-color:rgba(255,255,0,.6);transform-origin:50% 100%}.light-in[data-v-55b45cdd]{height:80%;width:10%;left:50%;top:20%;transform:skewX(-10deg)}.light-out[data-v-55b45cdd]{height:50%;width:6%;left:50%;top:50%;transform:skewX(15deg)}.text-light[data-v-55b45cdd]{position:absolute;color:#e65613;font-family:sans-serif;font-size:clamp(1.5em,2.3vw,2em);font-weight:900;text-shadow:-1px 0 #3d0200,0 1px #3d0200,1px 0 #3d0200,0 -1px #3d0200;word-break:keep-all;text-align:center;transform:translateX(-50%)}@media screen and (max-width:960px){.text-light[data-v-55b45cdd]{font-size:clamp(1.5em,2vw,2em)}}.text-light-in[data-v-55b45cdd]{left:75%;top:5%}.text-light-out[data-v-55b45cdd]{left:22%;top:23%}",""])},225:function(t,e,i){t.exports=i.p+"assets/css/001-908ab62b54cbb9274aaed510b9a4e887.jpg"},226:function(t,e,i){t.exports=i.p+"assets/css/002-214ac8dc1d9c687391f01cea81ca2349.jpg"},227:function(t,e,i){t.exports=i.p+"assets/css/003-4a54f42a8d31399e1c0bfebac8988dea.jpg"},228:function(t,e,i){t.exports=i.p+"assets/css/004-e678842eccf35ddd6bf33aa0ee99b818.jpg"},229:function(t,e,i){t.exports=i.p+"assets/css/005-ac4fc8a81aed7cfec0167815c2a5a384.jpg"},230:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-container",style:t.cardStyle},[i("svg",{attrs:{width:"100%",height:"100%",viewBox:"-2 -10 100 125",preserveAspectRatio:"none"}},[i("polygon",{attrs:{fill:"rgba(255, 255, 0, 0.8)","stroke-width":"5",points:"80,20 55,100 45,100 "+(23.5-.8*t.reflection/t.incident)+","+(49.7+5.6*t.reflection/t.incident)+" "+(22.3-3.6*t.reflection/t.incident)+","+(50.3+7*t.reflection/t.incident)+" "+(22.3-3.6*t.reflection/t.incident)+","+(44.3-7*t.reflection/t.incident)+" "+(27.1+7.6*t.reflection/t.incident)+","+(48+1.3*t.reflection/t.incident)+" "+(25.9+4.8*t.reflection/t.incident)+","+(48.6+2.7*t.reflection/t.incident)+" "+(48.6+.3*t.reflection/t.incident)+","+(88.6-1*t.reflection/t.incident)+" 70,20"}})]),t._v(" "),i("div",{staticClass:"text-light text-light-in"},[t._v("\n            陽光入射"),i("br"),t._v("\n            "+t._s(t.incident)+"\n        ")]),t._v(" "),i("div",{staticClass:"text-light text-light-out"},[t._v("\n            地表反射"),i("br"),t._v("\n            "+t._s(t.reflection)+"\n        ")]),t._v(" "),t._l(t.images,function(t){return[i("img",{key:t,attrs:{src:t}})]})],2)},c=[],o={render:n,staticRenderFns:c};e.a=o},33:function(t,e,i){"use strict";function n(t){i(220)}Object.defineProperty(e,"__esModule",{value:!0});var c=i(54),o=i(5),a=n,s=o(c.a,null,!1,a,null,null);e.default=s.exports},54:function(t,e,i){"use strict";var n=i(222),c=i(45),o=i(63);i.n(o);e.a={name:"page1",mixins:[c.a],components:{albedoCards:n.a},data:function(){return{description:[{text:"地表反照率是指地表反射太陽輻射量與太陽入射總輻射量的比率，不同地表的反照率不同，其數值大小常取決於他們的顏色和組成物。",icon:"fire"}],title:"用滑鼠選擇不同的地表，觀察圖中太陽輻射入射和反射的量，計算反照率，填入空格中",infoList:[],dataType:0,areaList:[{color:"#FFFFFF",title:"雪地",incident:100,reflection:80,hideInput:!1},{color:"#F7BC5E",title:"沙漠",incident:100,reflection:30,hideInput:!1},{color:"#C1CE98",title:"都市化地表",subTitle:"0.3",incident:100,reflection:30,hideInput:!0},{color:"#008800",title:"森林&草原",incident:100,reflection:15,hideInput:!1},{color:"#3B56FF",title:"海洋",incident:100,reflection:10,hideInput:!1}],cursorGridColor:"#A1B",imageIndex:2,showSuccess:!1}},methods:{onCorrect:function(t){t.hideInput=!0,t.subTitle=""+t.reflection/t.incident;var e=!0;this.areaList.forEach(function(t){t.hideInput||(e=!1)}),(this.showSuccess=e)&&(localStorage.finished="true")},mousemove:function(t){}},computed:{cursorGrid:function(){return{top:this.mouseTop-this.offsetY+"px",left:this.mouseleft-this.offsetX+"px"}}},created:function(){}}},55:function(t,e,i){"use strict";var n=i(225),c=i.n(n),o=i(226),a=i.n(o),s=i(227),r=i.n(s),d=i(228),l=i.n(d),f=i(229),u=i.n(f);e.a={name:"images",props:{incident:{type:Number,default:100},reflection:{type:Number,default:30},imageIndex:{type:Number,default:0}},data:function(){return{images:[c.a,a.a,r.a,l.a,u.a]}},computed:{cardStyle:function(){return{background:"url("+this.images[this.imageIndex]+") center 0px / cover no-repeat"}}}}}});