(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"3Msk":function(s,t,a){"use strict";a.r(t);var r=a("zL45"),n=a.n(r);for(var l in r)"default"!==l&&function(s){a.d(t,s,function(){return r[s]})}(l);var e=a("MzYg"),v=a("JFUb"),_=Object(v.a)(n.a,e.a,e.b,!1,null,null,null);_.options.__file="docs/md/zh/entities/corridor-graphics.md",t.default=_.exports},MzYg:function(s,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("走廊")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加走廊到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{name:s.name1,description:s.description,corridor:s.corridor1},on:{"update:corridor":function(t){s.corridor1=t}}},[a("corridor-graphics",{attrs:{positions:s.positions1,material:s.material1,width:2e5}})],1),s._v(" "),a("entity",{attrs:{name:s.name2,description:s.description,corridor:s.corridor2},on:{"update:corridor":function(t){s.corridor2=t}}},[a("corridor-graphics",{attrs:{positions:s.positions2,height:1e5,width:2e5,cornerType:0,material:s.material2,outline:!0}})],1),s._v(" "),a("entity",{attrs:{name:s.name3,description:s.description,corridor:s.corridor3},on:{"update:corridor":function(t){s.corridor3=t}}},[a("corridor-graphics",{attrs:{positions:s.positions3,material:s.material3,outlineColor:s.outlineColor3,outline:!0,height:2e5,extrudedHeight:1e5,width:2e5,cornerType:s.cornerType3}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},n=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("corridor-graphics")]),this._v(" 走廊对象组件，作为"),t("code",{pre:!0},[this._v("entity")]),this._v("的子组件添加包含走廊对象的实体到场景。走廊对象是一个由中心线和宽度定义的形状，符合地球的曲率。 它可以放置在表面或海拔高度，并可任选地挤压成一个体积，如下面的示例所示。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"name1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"corridor1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"name2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"corridor2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"name3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"corridor3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"cornerType3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("corridor-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("corridor1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name1")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Red corridor on surface with rounded corners'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions1")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("corridor2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name2")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Green corridor at height with mitered corners and outline'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions2")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cornerType2")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("corridor3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name3")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Blue extruded corridor with beveled corners and outline'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions3")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cornerType3")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": {}\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'CesiumReady'")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions1 = Cesium.Cartesian3.fromDegreesArray([\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v("\n        ])\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions2 = Cesium.Cartesian3.fromDegreesArray([\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("90.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v("\n        ])\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType2 = Cesium.CornerType.MITERED\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.GREEN\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions3 =  Cesium.Cartesian3.fromDegreesArray([\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("80.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("85.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-number"}},[s._v("85.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v("\n        ])\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType3 = Cesium.CornerType.BEVELED,\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 =  Cesium.Color.BLUE.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor3 = Cesium.Color.WHITE\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档 "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/CorridorGraphics.html"}},[this._v("CorridorGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}];r._withStripped=!0},dnZt:function(s,t,a){s.exports=a("3Msk")},zL45:function(s,t,a){var r,n,l;n=[t],void 0===(l="function"==typeof(r=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",corridor1:{},name1:"Red corridor on surface with rounded corners",positions1:[],material1:{},corridor2:{},name2:"Green corridor at height with mitered corners and outline",positions2:[],cornerType2:0,material2:{},corridor3:{},name3:"Blue extruded corridor with beveled corners and outline",positions3:[],cornerType3:0,material3:{},outlineColor3:{}}},methods:{ready:function(s){console.log("CesiumReady");var t=s.Cesium;s.viewer,this.positions1=t.Cartesian3.fromDegreesArray([100,40,105,40,105,35]),this.material1=t.Color.RED.withAlpha(.5),this.positions2=t.Cartesian3.fromDegreesArray([90,40,95,40,95,35]),this.cornerType2=t.CornerType.MITERED,this.material2=t.Color.GREEN,this.positions3=t.Cartesian3.fromDegreesArray([80,40,85,40,85,35]),this.cornerType3=t.CornerType.BEVELED,this.material3=t.Color.BLUE.withAlpha(.5),this.outlineColor3=t.Color.WHITE}}},s.exports=t.default})?r.apply(t,n):r)||(s.exports=l)}}]);