(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0aa179"],{1015:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[t("q-card",{staticClass:"my-card shadow-24 doc-inset-shadow"},[t("div",{staticClass:"q-pa-md my-card"},[t("div",{staticClass:"q-gutter-y-md column"},[t("div",{staticClass:"q-pa-md"},[t("q-parallax",{attrs:{height:220,speed:0},scopedSlots:a._u([{key:"media",fn:function(){return[t("img",{attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]},proxy:!0}])},[t("h3",{staticClass:"text-green"},[a._v("LOGIN")])])],1),t("q-form",{staticClass:"q-gutter-y-md column",on:{submit:a.firebaseLogin}},[t("q-input",{attrs:{color:"teal",outlined:"",label:"email",clearable:""},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:""}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"account_box"}})]},proxy:!0}]),model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}}),t("q-input",{attrs:{type:"password",color:"teal",outlined:"",label:"password",clearable:""},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:""}})]},proxy:!0},{key:"append",fn:function(){return[t("q-avatar",[t("q-icon",{attrs:{name:"vpn_key"}})],1)]},proxy:!0}]),model:{value:a.form.password,callback:function(e){a.$set(a.form,"password",e)},expression:"form.password"}}),t("q-btn",{attrs:{color:"secondary",type:"submit","icon-right":"navigation",label:"Loguin"}})],1)],1)])])],1)},r=[],o=t("8aa5"),n=t.n(o),i={name:"Login",data:function(){return{form:{email:"antony@mail.com",password:"1234679"},error:"",readonly:!1,disable:!1}},methods:{firebaseLogin:function(){var a=this;if(this.error="",this.form.email&&this.form.password)return n.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(){a.$router.push("entro/mlwe2ia0x5rlmtsp"),console.warn("ingresaste a firebase.......")})).catch((function(e){a.error=e.message}));this.error="Todos los campos son requeridos"}}},l=i,c=t("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=u.exports}}]);