(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f870f7e"],{"32be":function(e,s,t){"use strict";t("ed02")},"3fca":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"manage-account-container",class:{"header-below":e.isPc}},[e.isLoading?t("div",{class:{"pc-loading":e.isPc,"mobile-loading":!e.isPc}},[t("a-spin",[t("a-icon",{style:{"font-size":"80px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1):e._e(),e.isPc&&!e.isLoading?t("div",{staticClass:"manage-account-box",style:{filter:e.showResetService?"blur(5px)":"unset"}},[t("span",{staticClass:"title"},[e._v("管理账户")]),t("div",{staticClass:"card-row-item"},[t("div",{staticClass:"card-item"},[t("div",{staticClass:"card-icon au-address"}),t("div",{staticClass:"card-content"},[t("span",{staticClass:"title"},[e._v("账户")]),t("span",{staticClass:"tips"},[e._v("管理账户相关的设定")]),t("div",{staticClass:"detail"},[t("span",{staticClass:"link"},[e._v(e._s(e.userInfo.email))])]),t("div",{staticClass:"operations"},[t("span",{staticClass:"operation reset-account",on:{click:e.resetPassword}},[e._v("重置密码")])])])])])]):e._e(),t("ResetPasswordDialog",{directives:[{name:"show",rawName:"v-show",value:e.showResetService,expression:"showResetService"}],class:{dialog:e.isPc,"dialog-out":!e.showResetService},on:{closeDialog:e.closeDialog}}),e.isPc||e.isLoading?e._e():t("div",{staticClass:"manage-account-box-mobile"},[t("span",{staticClass:"box-title"},[e._v("管理账户")]),t("div",{staticClass:"row-box"},[t("i",{staticClass:"i-account"}),t("span",{staticClass:"row-first"},[e._v("账户")]),t("span",{staticClass:"row-sec"},[e._v("管理账户相关的设定 ")]),t("a-divider",{staticStyle:{"background-color":"#E5E9ED",margin:"0.427rem 0"}}),t("span",{staticClass:"row-third au-address"},[e._v(e._s(e.userInfo.email))]),t("div",{staticClass:"operations"},[t("span",{staticClass:"operation reset-account",on:{click:e.resetPassword}},[e._v("重置密码")])])],1)])],1)},o=[],i=(t("a5c9"),t("f0e4"),t("bca7")),r=t("ab91"),n={name:"UserServicePanel",components:{ResetPasswordDialog:r["default"]},data:function(){return{isLoading:!0,showResetService:!1,selectedService:localStorage.getItem(i["AU_SELECTED_SERVICE"])?JSON.parse(localStorage.getItem(i["AU_SELECTED_SERVICE"])):{},lang:this.$i18n.locale,auAddress:"".concat(VUE_SITE,"/user/service"),clientInfo:'{"uuid": '.concat(localStorage.getItem(i["AU_UUID"]),', "hmac": ').concat(localStorage.getItem(i["AU_HMAC"]),', "email":""}'),email:localStorage.getItem(i["AU_EMAIL"])?localStorage.getItem(i["AU_EMAIL"]).endsWith("@UnPanel.net")&&localStorage.getItem(i["AU_EMAIL"]).length>40?"":localStorage.getItem(i["AU_EMAIL"]):"",emailStatus:parseInt(localStorage.getItem(i["AU_EMAIL_STATUS"])),intervalId:"",userInfo:{},isPc:this.isPc(),hideCopyTips:!0}},created:function(){this.getUserinfo()},mounted:function(){},destroyed:function(){window.clearInterval(this.intervalId)},methods:{getUserinfo:function(){var e=this;e.request.getUserinfo({}).then((function(s){e.isLoading=!1,e.userInfo=s.data}))},resetPassword:function(){this.isPc||window.scrollTo({top:0,left:0,behavior:"smooth"}),this.showResetService=!0,this.$emit("dialogShow",!0)},closeDialog:function(e){e&&(this.auAddress="".concat(VUE_SITE,"?uuid=").concat(localStorage.getItem(i["AU_UUID"]),"&hmac=").concat(localStorage.getItem(i["AU_HMAC"]))),this.showSwitchService&&(this.selectedService=localStorage.getItem(i["AU_SELECTED_SERVICE"])?JSON.parse(localStorage.getItem(i["AU_SELECTED_SERVICE"])):{}),this.showResetService=!1,this.$emit("dialogShow",!1)}}},c=n,l=(t("bc96"),t("5d22")),d=Object(l["a"])(c,a,o,!1,null,null,null);s["default"]=d.exports},"7cd8":function(e,s,t){var a=t("0f4e"),o=t("fdfe"),i=t("9bc6"),r=i("match");e.exports=function(e){var s;return a(e)&&(void 0!==(s=e[r])?!!s:"RegExp"==o(e))}},8846:function(e,s,t){var a=t("9bc6"),o=a("match");e.exports=function(e){var s=/./;try{"/./"[e](s)}catch(t){try{return s[o]=!1,"/./"[e](s)}catch(a){}}return!1}},"8f28":function(e,s,t){var a=t("7cd8");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab91:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"dialog-container"},[t("div",{staticClass:"dialog-bg"}),t("div",{staticClass:"dialog-box",class:{"email-dialog-box":e.isPc,"email-dialog-box-mobile":!e.isPc}},[t("div",{staticClass:"first-row"},[t("span",[e._v("重置密码")]),t("i",{on:{click:function(s){return e.closeDialog()}}})]),t("span",{staticClass:"tips-one"},[e._v("方便找回服务，接收最新消息。")]),t("a-form-model",{attrs:{model:e.form,"label-col":{span:5},"wrapper-col":{span:14}}},[t("a-form-model-item",{attrs:{label:"旧密码",required:""}},[t("a-input",{attrs:{type:"password",placeholder:"请输入旧密码"},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}})],1),t("a-form-model-item",{attrs:{label:"新密码",required:""}},[t("a-input",{attrs:{type:"password",placeholder:"请输入新密码"},model:{value:e.form.new_password,callback:function(s){e.$set(e.form,"new_password",s)},expression:"form.new_password"}})],1),t("a-form-model-item",{attrs:{label:"重复新密码",required:""}},[t("a-input",{attrs:{type:"password",placeholder:"请再输入新密码"},model:{value:e.form.new_password2,callback:function(s){e.$set(e.form,"new_password2",s)},expression:"form.new_password2"}})],1)],1),t("div",{staticClass:"error-message"},[t("span",{staticStyle:{position:"absolute",color:"red"}},[e._v(e._s(e.errorMessage))])]),t("div",{staticClass:"btn-row"},[t("a-button",{staticClass:"btn-confirm",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")]),t("a-button",{on:{click:function(s){return e.closeDialog()}}},[e._v("取消")])],1)],1)])},o=[],i={name:"AccessPointDialog",data:function(){return{isPc:this.isPc(),errorMessage:"",isTrue:!0,form:{password:"",new_password:"",new_password2:""}}},props:{},watch:{},methods:{closeDialog:function(){this.$emit("closeDialog",!1)},onSubmit:function(){var e=this;return""===e.form.password||""===e.form.new_password||""===e.form.new_password2?(e.errorMessage="密码不能为空！",!1):e.form.new_password.length<6?(e.errorMessage="新密码长度不能小于6位数！",!1):e.form.new_password!==e.form.new_password2?(e.errorMessage="两次密码输入不一致，请从新输入！",!1):void this.request.resetPassword(e.form).then((function(s){if(0===s.code)return e.errorMessage=s.msg,!1;e.$message.success(s.msg),setTimeout((function(){e.$emit("closeDialog",!1)}),1e3)}))},resendEmail:function(){}}},r=i,n=(t("32be"),t("5d22")),c=Object(n["a"])(r,a,o,!1,null,null,null);s["default"]=c.exports},bc96:function(e,s,t){"use strict";t("c90b")},c90b:function(e,s,t){},ed02:function(e,s,t){},f0e4:function(e,s,t){"use strict";var a=t("e450"),o=t("fc06").f,i=t("a4fc"),r=t("8f28"),n=t("e08f"),c=t("8846"),l=t("1cd8"),d="".endsWith,u=Math.min,f=c("endsWith"),m=!l&&!f&&!!function(){var e=o(String.prototype,"endsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!m&&!f},{endsWith:function(e){var s=String(n(this));r(e);var t=arguments.length>1?arguments[1]:void 0,a=i(s.length),o=void 0===t?a:u(i(t),a),c=String(e);return d?d.call(s,c,o):s.slice(o-c.length,o)===c}})}}]);
//# sourceMappingURL=chunk-0f870f7e.e29b60e7.js.map