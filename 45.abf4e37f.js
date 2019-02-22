(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"Tl/+":function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return e});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("实体")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加布告板实体到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position,billboard:s.billboard,description:s.description,id:s.id}})],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},e=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("entity")]),this._v(" 实体实例类，它将多种可视化对象聚合到单个高级对象中")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":billboard")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"billboard"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"id"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'This is a billboard'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": {}\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboard = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.BillboardGraphics({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(", "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default: undefined")]),s._v("\n          show: "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          pixelOffset: "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("-50")]),s._v("), "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default: (0, 0)")]),s._v("\n          eyeOffset: "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("), "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          horizontalOrigin: Cesium.HorizontalOrigin.CENTER, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default: CENTER")]),s._v("\n          scale: "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default: 1.0")]),s._v("\n          color: Cesium.Color.LIME, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default: WHITE")]),s._v("\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0")]),s._v("\n          alignedAxis: Cesium.Cartesian3.ZERO, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n        })\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档 "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/Entity.html"}},[this._v("Entity")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}];n._withStripped=!0},XkIZ:function(s,t,a){var n,e,r;e=[t],void 0===(r="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{id:"This is a billboard",description:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{},billboard:{}}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.position=t.Cartesian3.fromDegrees(108,35,100),this.billboard=new t.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",show:!0,pixelOffset:new t.Cartesian2(0,-50),eyeOffset:new t.Cartesian3(0,0,0),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.BOTTOM,scale:.5,color:t.Color.LIME,alignedAxis:t.Cartesian3.ZERO})}}},s.exports=t.default})?n.apply(t,e):n)||(s.exports=r)},d8oN:function(s,t,a){"use strict";a.r(t);var n=a("XkIZ"),e=a.n(n);for(var r in n)"default"!==r&&function(s){a.d(t,s,function(){return n[s]})}(r);var l=a("Tl/+"),v=a("JFUb"),i=Object(v.a)(e.a,l.a,l.b,!1,null,null,null);i.options.__file="docs/md/zh/entities/entity.md",t.default=i.exports},pyke:function(s,t,a){s.exports=a("d8oN")}}]);