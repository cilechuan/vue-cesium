(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"2LwJ":function(s,a,t){"use strict";t.r(a);var r=t("dfbU"),l=t.n(r);for(var n in r)"default"!==n&&function(s){t.d(a,s,function(){return r[s]})}(n);var v=t("cSMt"),e=t("JFUb"),_=Object(e.a)(l.a,v.a,v.b,!1,null,null,null);_.options.__file="docs/md/en/imageryLayers/bingmaps-imagery-provider.md",a.default=_.exports},"7HE6":function(s,a,t){s.exports=t("2LwJ")},cSMt:function(s,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return l});var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("BingMapsImageryProvider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Examples")]),s._v(" "),t("h3",[s._v("add a BingMapsImageryProvider layer to viewer")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("div",{staticClass:"demo-tool"},[t("span",[s._v("alpha")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("brightness")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("contrast")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}}),s._v(" "),t("span",[s._v("switch url")]),s._v(" "),t("md-select",{attrs:{placeholder:"switch url"},model:{value:s.mapStyle,callback:function(a){s.mapStyle=a},expression:"mapStyle"}},s._l(s.options,function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])}))],1),s._v(" "),t("cesium-viewer",{on:{ready:s.ready}},[t("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[t("bingmaps-imagery-provider",{attrs:{url:s.url,bmKey:s.bmKey,mapStyle:s.mapStyle}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},l=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("bingmaps-imagery-provider")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch url"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"switch url"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("bingmaps-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":bmKey")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bmKey"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":mapStyle")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("bingmaps-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://dev.virtualearth.net'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("bmKey")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w'")]),s._v(", "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 可到(https://www.bingmapsportal.com/)申请Key。")]),s._v("\n        mapStyle: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Aerial'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Aerial'")]),s._v("\n        }, {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AerialWithLabels'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AerialWithLabels'")]),s._v("\n        },{\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v("\n        }, {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'CanvasDark'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'CanvasDark'")]),s._v("\n        }],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v("The url of the Bing Maps server hosting the imagery.")])]),s._v(" "),t("tr",[t("td",[s._v("bmKey")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The Bing Maps key for your application, which can be created at https://www.bingmapsportal.com/. If this parameter is not provided, BingMapsApi.defaultKey is used, which is undefined by default.")])]),s._v(" "),t("tr",[t("td",[s._v("tileProtocol")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page.")])]),s._v(" "),t("tr",[t("td",[s._v("mapStyle")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("'Aerial'")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The type of Bing Maps imagery to load.")])]),s._v(" "),t("tr",[t("td",[s._v("culture")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures.")])]),s._v(" "),t("tr",[t("td",[s._v("ellipsoid")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The ellipsoid. If not specified, the WGS84 ellipsoid is used.")])]),s._v(" "),t("tr",[t("td",[s._v("tileDiscardPolicy")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used which requests tile 0,0 at the maximum tile level and checks pixels (0,0), (120,140), (130,160), (200,50), and (200,200). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard Bing Maps server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when BingMapsImageryProvider is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.")])])])])}];r._withStripped=!0},dfbU:function(s,a,t){var r,l,n;l=[a],void 0===(n="function"==typeof(r=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{url:"https://dev.virtualearth.net",bmKey:"AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w",mapStyle:"Road",options:[{value:"Aerial",label:"Aerial"},{value:"AerialWithLabels",label:"AerialWithLabels"},{value:"Road",label:"Road"},{value:"CanvasDark",label:"CanvasDark"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},s.exports=a.default})?r.apply(a,l):r)||(s.exports=n)}}]);