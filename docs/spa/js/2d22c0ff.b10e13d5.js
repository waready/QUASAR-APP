(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"hHh lpR fFf"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[e("q-toolbar",[e("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(a){t.left=!t.left}}}),e("q-toolbar-title",{staticClass:"text-center"},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),t._v("\n        App-vue\n      ")],1),e("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(a){t.right=!t.right}}})],1)],1),e("q-drawer",{attrs:{"show-if-above":"",side:"left","content-class":"bg-grey-2",bordered:""},model:{value:t.left,callback:function(a){t.left=a},expression:"left"}},[e("q-list",[e("q-item-label",{attrs:{header:""}},[t._v("Menu")]),e("q-item",{attrs:{clickable:"",to:{name:"index"}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("Home")]),e("q-item-label",{attrs:{caption:""}},[t._v("Nueva ruta")])],1)],1),e("q-item",{attrs:{to:"/programas"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"tv"}})],1),e("q-item-section",[e("q-item-label",[t._v("Programas de Tv")]),e("q-item-label",{attrs:{caption:""}},[t._v("Lista de programas de tv")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",to:{name:"login"}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v(" Login ")]),e("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",href:"https://forum.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("Forum")]),e("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("Twitter")]),e("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://facebook.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"public"}})],1),e("q-item-section",[e("q-item-label",[t._v("Facebook")]),e("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1)],1)],1),e("q-drawer",{attrs:{"show-if-above":"",side:"right","content-class":"bg-grey-2",bordered:""},model:{value:t.right,callback:function(a){t.right=a},expression:"right"}},[e("q-list",[e("q-item-label",{attrs:{header:""}},[t._v("Menu")]),e("q-item",{attrs:{clickable:"",to:{name:"dashboard"}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("Home")]),e("q-item-label",{attrs:{caption:""}},[t._v("Nueva ruta")])],1)],1),e("q-item",{attrs:{to:"/programas"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"tv"}})],1),e("q-item-section",[e("q-item-label",[t._v("Programas de Tv")]),e("q-item-label",{attrs:{caption:""}},[t._v("Lista de programas de tv")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://chat.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v("Discord Chat Channel")]),e("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("Forum")]),e("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("Twitter")]),e("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://facebook.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"public"}})],1),e("q-item-section",[e("q-item-label",[t._v("Facebook")]),e("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1)],1)],1),e("q-page-container",[e("router-view")],1),e("q-footer",{staticClass:"bg-grey-8 text-white text-center text-h6",attrs:{elevated:""}},[e("q-toolbar",[e("q-toolbar-title",[e("q-avatar",{attrs:{color:"red","text-color":"white",icon:"directions"}}),t._v("\n        Antony Japura Paredes\n      ")],1)],1)],1)],1)},i=[],s={data:function(){return{left:!1,right:!1}}},o=s,n=e("2877"),l=Object(n["a"])(o,r,i,!1,null,null,null);a["default"]=l.exports}}]);