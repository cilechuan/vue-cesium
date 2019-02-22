(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1Irb":function(s,t,a){"use strict";a.d(t,"a",function(){return e}),a.d(t,"b",function(){return n});var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("EllipseGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("add an EllipseGraphics to viewer with entity")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position1,description:s.description,ellipse:s.ellipse1},on:{"update:ellipse":function(t){s.ellipse1=t}}},[a("ellipse-graphics",{attrs:{semiMinorAxis:3e5,semiMajorAxis:3e5,height:2e5,material:s.material1,outline:!0}})],1),s._v(" "),a("entity",{attrs:{position:s.position2,description:s.description,ellipse:s.ellipse2},on:{"update:ellipse":function(t){s.ellipse2=t}}},[a("ellipse-graphics",{attrs:{semiMinorAxis:25e4,semiMajorAxis:4e5,material:s.material2}})],1),s._v(" "),a("entity",{attrs:{position:s.position3,description:s.description,ellipse:s.ellipse3},on:{"update:ellipse":function(t){s.ellipse3=t}}},[a("ellipse-graphics",{attrs:{semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:s.rotation3,material:s.material3,outline:!0}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},n=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("ellipse-graphics")]),this._v(" Add an entity containing a ellipse object to the viewer as a subcomponent of "),t("code",{pre:!0},[this._v("entity")]),this._v(". Describes an ellipse defined by a center point and semi-major and semi-minor axes. The ellipse conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. The center point is determined by the containing Entity. As shown in the example below.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ellipse1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ellipse2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"250000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ellipse3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"150000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rotation3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("ellipse-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ellipse1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ellipse2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ellipse3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rotation3")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {}\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("111.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("150000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.GREEN\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position2 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("103.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position3 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = Cesium.Color.BLUE.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation3 = Cesium.Math.toRadians("),a("span",{attrs:{class:"hljs-number"}},[s._v("45")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Reference official document "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/EllipseGraphics.html"}},[this._v("EllipseGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Gets the event that is raised whenever a property or sub-property is changed or modified.")])])])])}];e._withStripped=!0},AwZA:function(s,t,a){s.exports=a("quop")},CHb6:function(s,t,a){var e,n,r;n=[t],void 0===(r="function"==typeof(e=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",ellipse1:{},position1:{},material1:{},ellipse2:{},position2:{},material2:{},ellipse3:{},position3:{},rotation3:0,material3:{}}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.position1=t.Cartesian3.fromDegrees(111,40,15e4),this.material1=t.Color.GREEN,this.position2=t.Cartesian3.fromDegrees(103,40),this.material2=t.Color.RED.withAlpha(.5),this.position3=t.Cartesian3.fromDegrees(95,40,1e5),this.material3=t.Color.BLUE.withAlpha(.5),this.rotation3=t.Math.toRadians(45)}}},s.exports=t.default})?e.apply(t,n):e)||(s.exports=r)},quop:function(s,t,a){"use strict";a.r(t);var e=a("CHb6"),n=a.n(e);for(var r in e)"default"!==r&&function(s){a.d(t,s,function(){return e[s]})}(r);var l=a("1Irb"),i=a("JFUb"),v=Object(i.a)(n.a,l.a,l.b,!1,null,null,null);v.options.__file="docs/md/en/entities/ellipse-graphics.md",t.default=v.exports}}]);