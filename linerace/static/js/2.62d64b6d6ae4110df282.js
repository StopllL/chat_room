webpackJsonp([2],{101:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{step:{type:Number,default:0},values:{type:Array,default:function(){return["验证","成功"]}}},data:function(){return{}},filters:{getClassName:function(t,n,e){var A=n.length,a="pg_component_l";return a+=0===t?" pg_component_l_b":t===A-1?" pg_component_l_c":" pg_component_l_m",0!==e&&e>=t&&(a+=e===t?" pg_component_l_ac":" pg_component_l_active"),a}}}},106:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var A=e(124),a=e.n(A);n.default={data:function(){return{re_flag:!1}},methods:{verificationHandler:function(){this.re_flag=!0},nextHandler:function(){this.$router.push({name:"checkcard",params:{next:"my"}})}},components:{Progressbar:a.a},directives:{btnClickEffect:{bind:function(t){t.addEventListener("touchstart",function(){this.style.background="rgba(81,225,209,.9)"}),t.addEventListener("touchend",function(){this.style.background="rgba(81,225,193,1)"})}}}}},110:function(t,n,e){n=t.exports=e(88)(!0),n.push([t.i,"#process[data-v-51ce637c]{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.5);-webkit-transition:all 2s ease;transition:all 2s ease}#process #loading[data-v-51ce637c]{text-align:center;font-size:.42667rem;color:#d1d1d1}#process #loading img[data-v-51ce637c]{margin-top:23%;width:1.12rem;height:1.10667rem}section[data-v-51ce637c]{padding-bottom:55px}.re_pic_box[data-v-51ce637c]{width:8.53333rem;height:3.6rem;margin:0 auto 20px;background:#151921;border:2px solid #30353f}.re_article_border[data-v-51ce637c]{padding-top:20px;border-top:1px solid #2f3647}article[data-v-51ce637c]{margin:0 auto;color:#717989;font-size:.32rem}.re_yzm_article[data-v-51ce637c]{width:9.06667rem}.re_success_article[data-v-51ce637c]{width:8.93333rem;text-align:center;font-size:.26667rem}.re_success_article h2[data-v-51ce637c]{font-size:.37333rem;color:#51d1b1;line-height:2.5}.re_success_article p[data-v-51ce637c]{line-height:1.5}.re_success_article .re_art_c[data-v-51ce637c]{width:7.06667rem;margin:0 auto;padding:5px 0;font-size:.32rem}.re_success_article .re_art_c span[data-v-51ce637c]{color:#efc261}.re_yzm_box[data-v-51ce637c]{margin:5px 0}.re_yzm_box input[data-v-51ce637c]{width:6.13333rem;background:#151921}.re_yzm_box button[data-v-51ce637c],.re_yzm_box input[data-v-51ce637c]{height:30px;line-height:30px;outline:none;border:none;color:#fff;border-radius:3px;text-align:center;float:left}.re_yzm_box button[data-v-51ce637c]{width:2.4rem;margin-left:.4rem;padding:0;verticle-align:middle;background:#51d1b1}dd[data-v-51ce637c]{font-size:.26667rem}.re_next_btn[data-v-51ce637c]{position:fixed;bottom:0;left:0;width:100%;height:50px;line-height:50px;padding:0;font-size:.48rem;color:#fff;background:#51d1b1;border:none;line-height:none;outline:none}.re_next_tips[data-v-51ce637c]{padding:50px 0}.re_next_tips span[data-v-51ce637c]{color:#efc261}.re_art_tips[data-v-51ce637c]{text-align:left}","",{version:3,sources:["D:/workProject/linerace/src/page/register.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,gCAAqC,AACrC,+BAAgC,AAChC,sBAAwB,CACzB,AACD,mCACE,kBAAmB,AACnB,oBAAsB,AACtB,aAAe,CAChB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACpB,AACD,yBACE,mBAAqB,CACtB,AACD,6BACE,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,mBAAoB,AACpB,wBAA0B,CAC3B,AACD,oCACE,iBAAkB,AAClB,4BAA8B,CAC/B,AACD,yBACE,cAAe,AACf,cAAe,AACf,gBAAmB,CACpB,AACD,iCACE,gBAAkB,CACnB,AACD,qCACE,iBAAkB,AAClB,kBAAmB,AACnB,mBAAsB,CACvB,AACD,wCACI,oBAAsB,AACtB,cAAe,AACf,eAAiB,CACpB,AACD,uCACI,eAAiB,CACpB,AACD,+CACI,iBAAkB,AAClB,cAAe,AACf,cAAe,AACf,gBAAmB,CACtB,AACD,oDACM,aAAe,CACpB,AACD,6BACE,YAAc,CACf,AACD,mCAGI,iBAAkB,AAGlB,kBAAoB,CAKvB,AACD,uEAXI,YAAa,AACb,iBAAkB,AAElB,aAAc,AACd,YAAa,AAEb,WAAe,AACf,kBAAmB,AACnB,kBAAmB,AACnB,UAAY,CAgBf,AAdD,oCAEI,aAAc,AAEd,kBAAoB,AACpB,UAAW,AAGX,sBAAuB,AAGvB,kBAAoB,CAGvB,AACD,oBACE,mBAAsB,CACvB,AACD,8BACE,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,UAAW,AACX,iBAAmB,AACnB,WAAe,AACf,mBAAoB,AACpB,YAAa,AACb,iBAAkB,AAClB,YAAc,CACf,AACD,+BACE,cAAgB,CACjB,AACD,oCACI,aAAe,CAClB,AACD,8BACE,eAAiB,CAClB",file:"register.vue",sourcesContent:["\n#process[data-v-51ce637c] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n#process #loading[data-v-51ce637c] {\n  text-align: center;\n  font-size: 0.42667rem;\n  color: #d1d1d1;\n}\n#process #loading img[data-v-51ce637c] {\n  margin-top: 23%;\n  width: 1.12rem;\n  height: 1.10667rem;\n}\nsection[data-v-51ce637c] {\n  padding-bottom: 55px;\n}\n.re_pic_box[data-v-51ce637c] {\n  width: 8.53333rem;\n  height: 3.6rem;\n  margin: 0 auto 20px;\n  background: #151921;\n  border: 2px solid #30353f;\n}\n.re_article_border[data-v-51ce637c] {\n  padding-top: 20px;\n  border-top: 1px solid #2f3647;\n}\narticle[data-v-51ce637c] {\n  margin: 0 auto;\n  color: #717989;\n  font-size: 0.32rem;\n}\n.re_yzm_article[data-v-51ce637c] {\n  width: 9.06667rem;\n}\n.re_success_article[data-v-51ce637c] {\n  width: 8.93333rem;\n  text-align: center;\n  font-size: 0.26667rem;\n}\n.re_success_article h2[data-v-51ce637c] {\n    font-size: 0.37333rem;\n    color: #51d1b1;\n    line-height: 2.5;\n}\n.re_success_article p[data-v-51ce637c] {\n    line-height: 1.5;\n}\n.re_success_article .re_art_c[data-v-51ce637c] {\n    width: 7.06667rem;\n    margin: 0 auto;\n    padding: 5px 0;\n    font-size: 0.32rem;\n}\n.re_success_article .re_art_c span[data-v-51ce637c] {\n      color: #efc261;\n}\n.re_yzm_box[data-v-51ce637c] {\n  margin: 5px 0;\n}\n.re_yzm_box input[data-v-51ce637c] {\n    height: 30px;\n    line-height: 30px;\n    width: 6.13333rem;\n    outline: none;\n    border: none;\n    background: #151921;\n    color: #ffffff;\n    border-radius: 3px;\n    text-align: center;\n    float: left;\n}\n.re_yzm_box button[data-v-51ce637c] {\n    float: left;\n    width: 2.4rem;\n    height: 30px;\n    margin-left: 0.4rem;\n    padding: 0;\n    line-height: 30px;\n    border: none;\n    verticle-align: middle;\n    outline: none;\n    border-radius: 3px;\n    background: #51d1b1;\n    color: #ffffff;\n    text-align: center;\n}\ndd[data-v-51ce637c] {\n  font-size: 0.26667rem;\n}\n.re_next_btn[data-v-51ce637c] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0;\n  font-size: 0.48rem;\n  color: #ffffff;\n  background: #51d1b1;\n  border: none;\n  line-height: none;\n  outline: none;\n}\n.re_next_tips[data-v-51ce637c] {\n  padding: 50px 0;\n}\n.re_next_tips span[data-v-51ce637c] {\n    color: #efc261;\n}\n.re_art_tips[data-v-51ce637c] {\n  text-align: left;\n}\n"],sourceRoot:""}])},114:function(t,n,e){n=t.exports=e(88)(!0),n.push([t.i,".pg_component_box[data-v-d1d57c72]{display:-webkit-box;display:-ms-flexbox;display:flex;color:#717989}.pg_component_l[data-v-d1d57c72]{-webkit-box-flex:1;-ms-flex:1;flex:1}.pg_component_l_acitve[data-v-d1d57c72]{color:#51d1b1}.pg_component_bg[data-v-d1d57c72]{position:relative;height:9px;overflow:hidden}.pg_component_l i[data-v-d1d57c72]{position:absolute;width:9px;height:9px;border-radius:50%;background:#12141d}.pg_component_l_b[data-v-d1d57c72]{color:#51d1b1}.pg_component_l_b i[data-v-d1d57c72]{background:#51d1b1;top:0;left:0}.pg_component_l_m i[data-v-d1d57c72]{top:0;left:0;bottom:0;right:0;margin:0 auto}.pg_component_l_c i[data-v-d1d57c72]{top:0;right:0}.pg_component_l_c .pg_component_title[data-v-d1d57c72]{text-align:right}.pg_component_l_m .pg_component_title[data-v-d1d57c72]{text-align:center}.pg_component_bg span[data-v-d1d57c72]{display:block;height:5px;margin-top:2px;background:#12141d}.pg_component_l_m .pg_component_bg span[data-v-d1d57c72]{float:left;width:50%}.pg_component_bg[data-v-d1d57c72]{margin-top:4px}.pg_component_l_ac i[data-v-d1d57c72],.pg_component_l_active i[data-v-d1d57c72],.pg_component_l_active span[data-v-d1d57c72]{background:#51d1b1}.pg_component_l_ac[data-v-d1d57c72],.pg_component_l_active[data-v-d1d57c72]{color:#51d1b1}.pg_component_l_ac .pg_compomemt_left[data-v-d1d57c72]{background:#51d1b1}","",{version:3,sources:["D:/workProject/linerace/src/components/progressbar/index.vue"],names:[],mappings:"AACA,mCACC,oBAAoB,AACpB,oBAAoB,AACpB,aAAa,AACb,aAAc,CACd,AACD,iCACC,mBAAmB,AACf,WAAW,AACP,MAAO,CACf,AACD,wCACC,aAAc,CACd,AACD,kCACC,kBAAkB,AAClB,WAAW,AACX,eAAgB,CAChB,AACD,mCACC,kBAAkB,AAClB,UAAU,AACV,WAAW,AACX,kBAAkB,AAClB,kBAAmB,CACnB,AACD,mCACC,aAAc,CACd,AACD,qCACC,mBAAmB,AAGnB,MAAM,AACN,MAAO,CAHP,AAKD,qCACC,MAAM,AACN,OAAO,AACP,SAAS,AACT,QAAQ,AACR,aAAc,CACd,AACD,qCACC,MAAM,AACN,OAAQ,CACR,AACD,uDACC,gBAAiB,CACjB,AACD,uDACC,iBAAkB,CAClB,AACD,uCACC,cAAc,AACd,WAAW,AACX,eAAe,AACf,kBAAmB,CACnB,AACD,yDACC,WAAW,AACX,SAAU,CACV,AACD,kCACC,cAAe,CACf,AAID,6HACC,kBAAmB,CACnB,AACD,4EACC,aAAc,CACd,AACD,uDACC,kBAAmB,CACnB",file:"index.vue",sourcesContent:["\n.pg_component_box[data-v-d1d57c72]{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\tcolor:#717989;\n}\n.pg_component_l[data-v-d1d57c72]{\n\t-webkit-box-flex:1;\n\t    -ms-flex:1;\n\t        flex:1;\n}\n.pg_component_l_acitve[data-v-d1d57c72]{\n\tcolor:#51d1b1;\n}\n.pg_component_bg[data-v-d1d57c72]{\n\tposition:relative;\n\theight:9px;\n\toverflow:hidden;\n}\n.pg_component_l i[data-v-d1d57c72]{\n\tposition:absolute;\n\twidth:9px;\n\theight:9px;\n\tborder-radius:50%;\n\tbackground:#12141d;\n}\n.pg_component_l_b[data-v-d1d57c72]{\n\tcolor:#51d1b1;\n}\n.pg_component_l_b i[data-v-d1d57c72]{\n\tbackground:#51d1b1;\n}\n.pg_component_l_b i[data-v-d1d57c72]{\n\ttop:0;\n\tleft:0;\n}\n.pg_component_l_m i[data-v-d1d57c72]{\n\ttop:0;\n\tleft:0;\n\tbottom:0;\n\tright:0;\n\tmargin:0 auto;\n}\n.pg_component_l_c i[data-v-d1d57c72]{\n\ttop:0;\n\tright:0;\n}\n.pg_component_l_c .pg_component_title[data-v-d1d57c72]{\n\ttext-align:right;\n}\n.pg_component_l_m .pg_component_title[data-v-d1d57c72]{\n\ttext-align:center;\n}\n.pg_component_bg span[data-v-d1d57c72]{\n\tdisplay:block;\n\theight:5px;\n\tmargin-top:2px;\n\tbackground:#12141d;\n}\n.pg_component_l_m .pg_component_bg span[data-v-d1d57c72]{\n\tfloat:left;\n\twidth:50%;\n}\n.pg_component_bg[data-v-d1d57c72]{\n\tmargin-top:4px;\n}\n.pg_component_l_active span[data-v-d1d57c72]{\n\tbackground:#51d1b1;\n}\n.pg_component_l_active i[data-v-d1d57c72],.pg_component_l_ac i[data-v-d1d57c72]{\n\tbackground:#51d1b1;\n}\n.pg_component_l_active[data-v-d1d57c72],.pg_component_l_ac[data-v-d1d57c72]{\n\tcolor:#51d1b1;\n}\n.pg_component_l_ac .pg_compomemt_left[data-v-d1d57c72]{\n\tbackground:#51d1b1;\n}\n\n\n"],sourceRoot:""}])},117:function(t,n,e){var A=e(110);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);e(89)("66c663fa",A,!0)},121:function(t,n,e){var A=e(114);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);e(89)("22686310",A,!0)},124:function(t,n,e){function A(t){e(121)}var a=e(44)(e(101),e(132),A,"data-v-d1d57c72",null);t.exports=a.exports},128:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("Progressbar",{staticStyle:{width:"90%",margin:"0 auto",padding:"10px"},attrs:{step:0}}),t._v(" "),t._m(0),t._v(" "),t.re_flag?e("div",{staticClass:"re_article_border"},[t._m(2)]):e("div",{staticClass:"re_article_border"},[e("article",{staticClass:"re_yzm_article"},[e("p",[t._v("请输入20位门票识别码")]),t._v(" "),e("div",{staticClass:"re_yzm_box c"},[e("input",{attrs:{type:"text"}}),t._v(" "),e("button",{directives:[{name:"btnClickEffect",rawName:"v-btnClickEffect"}],attrs:{type:"button"},on:{click:t.verificationHandler}},[t._v("验证")])]),t._v(" "),t._m(1)])]),t._v(" "),t.re_flag?e("button",{directives:[{name:"btnClickEffect",rawName:"v-btnClickEffect"}],staticClass:"re_next_btn",attrs:{type:"button"},on:{click:t.nextHandler}},[t._v("下一步")]):t._e()],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"re_pic_box"},[e("img",{attrs:{src:"",alt:""}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("dl",[e("dt",[t._v("温馨提示")]),t._v(" "),e("dd",[t._v("1.输入识别码时请注意数字0、字母o的区别。")]),t._v(" "),e("dd",[t._v("2.官方不会以任何形式向您索要识别码，请勿告知任何人。")]),t._v(" "),e("dd",[t._v("3.邀请函请在开赛前及时使用，以免因过期造成您的损失。")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"re_success_article"},[e("h2",[t._v("验证通过")]),t._v(" "),e("p",[t._v("恭喜您 "),e("span",[t._v("刘海涛")])]),t._v(" "),e("p",{staticClass:"re_art_c"},[t._v("您已成功报名"),e("span",[t._v("WPT National China 中国（三亚）扑克游戏锦标赛")])]),t._v(" "),e("p",{staticClass:"re_next_tips"},[t._v("专属检录牌已生成，请使用"),e("span",[t._v("电子检录牌")]),t._v("和"),e("span",[t._v("身份证件")]),t._v("配合现场检录，点击下一步查看")]),t._v(" "),e("ul",{staticClass:"re_art_tips"},[e("h3",[t._v("温馨提示：")]),t._v(" "),e("li",[t._v("1.电子凭证一经检录立即失效，请勿将电子凭证信息泄露给任何人。")]),t._v(" "),e("li",[t._v("2.任何原因导致的迟到将会错失比赛资格，请您尽量提前抵达现场进行检录。")]),t._v(" "),e("li",[t._v("3.遇到任何问题请及时求助现场工作人员，请勿相信他人提供的任何信息。")]),t._v(" "),e("li",[t._v("4.本次赛事最终解释权归联众公司所有。")])])])}]}},132:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",[e("ul",{staticClass:"pg_component_box"},t._l(t.values,function(n,A){return e("li",{class:t._f("getClassName")(A,t.values,t.step),staticStyle:{flex:"1"}},[e("div",{staticClass:"pg_component_title"},[t._v(t._s(n))]),t._v(" "),t._m(0,!0)])}))])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pg_component_bg"},[e("span",{staticClass:"pg_compomemt_left"}),e("i"),e("span")])}]}},93:function(t,n,e){function A(t){e(117)}var a=e(44)(e(106),e(128),A,"data-v-51ce637c",null);t.exports=a.exports}});
//# sourceMappingURL=2.62d64b6d6ae4110df282.js.map