var h=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,r=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))f.call(t,s)&&l(e,s,t[s]);return e},a=(e,t)=>m(e,g(t));import{W as v}from"./ToolsSettings.004b222f.js";import{a as d,c as F,d as w}from"./index.d328c175.js";import"./helpers.db3922d1.js";import{n as y}from"./vueComponentNormalizer.87056a83.js";import{B as x}from"./Checkbox.5873a8d2.js";import{C as $}from"./ProBadge.7c0de2f7.js";import{G as k,a as C}from"./Row.13b6f3f1.js";import{W as b,a as P,b as z}from"./Header.fffa631d.js";import{W as A,a as W}from"./Steps.f359c40f.js";import"./Modal.1216ab78.js";import"./index.a4161053.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./default-i18n.abde8d59.js";import"./constants.a1b1778a.js";import"./isArrayLikeObject.a4a9229a.js";import"./cleanForSlug.e9a761bb.js";import"./Checkmark.e7547654.js";import"./Logo.1a5e022a.js";var S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-wizard-features"},[s("wizard-header"),s("wizard-container",[s("wizard-body",{scopedSlots:e._u([{key:"footer",fn:function(){return[s("div",{staticClass:"go-back"},[s("router-link",{staticClass:"no-underline",attrs:{to:e.getPrevLink}},[e._v("\u2190")]),e._v(" \xA0 "),s("router-link",{attrs:{to:e.getPrevLink}},[e._v(e._s(e.strings.goBack))])],1),s("div",{staticClass:"spacer"}),s("base-button",{attrs:{type:"blue",loading:e.loading},on:{click:e.saveAndContinue}},[e._v(e._s(e.strings.saveAndContinue)+" \u2192")])]},proxy:!0}])},[s("wizard-steps"),s("div",{staticClass:"header"},[e._v(" "+e._s(e.strings.whichFeatures)+" ")]),s("div",{staticClass:"description"},[e._v(" "+e._s(e.strings.description)+" ")]),e._l(e.getFeatures,function(i,n){return s("div",{key:n,staticClass:"feature-grid small-padding medium-margin"},[s("grid-row",[s("grid-column",{attrs:{xs:"11"}},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name small-margin"},[e._v(" "+e._s(i.name)+" "),e.needsUpsell(i)?s("core-pro-badge"):e._e()],1),s("div",{staticClass:"aioseo-description-text"},[e._v(" "+e._s(i.description)+" ")])])]),s("grid-column",{attrs:{xs:"1"}},[s("base-checkbox",{class:{"no-clicks":i.required},attrs:{round:"",type:i.required?"green":"blue",value:i.required?!0:e.getValue(i)},on:{input:function(u){return e.updateValue(u,i)}},nativeOn:{click:function(u){return function(p){return e.preventUncheck(p,i)}.apply(null,arguments)}}})],1)],1)],1)})],2),e.getPluginsText?s("div",{staticClass:"plugins"},[e._v(" "+e._s(e.getPluginsText)+" ")]):e._e(),s("wizard-close-and-exit")],1)],1)},O=[];const I={components:{BaseCheckbox:x,CoreProBadge:$,GridColumn:k,GridRow:C,WizardBody:b,WizardCloseAndExit:A,WizardContainer:P,WizardHeader:z,WizardSteps:W},mixins:[v],data(){return{loading:!1,stage:"features",strings:{whichFeatures:this.$t.__("Which SEO features do you want to enable?",this.$td),description:this.$t.__("We have already selected our recommended features based on your site category, but you can use the following features to fine-tune your site.",this.$td)}}},computed:a(r(r({},d(["options"])),d("wizard",{additionalInformation:"additionalInformation",presetFeatures:"features"})),{showPluginsAll(){return(this.presetFeatures.includes("analytics")||this.presetFeatures.includes("conversion-tools"))&&(this.presetFeatures.includes("image-seo")||this.presetFeatures.includes("news-sitemap")||this.presetFeatures.includes("video-sitemap")||this.presetFeatures.includes("local-seo")||this.presetFeatures.includes("redirects")||this.presetFeatures.includes("index-now")||this.presetFeatures.includes("link-assistant")||this.presetFeatures.includes("rest-api"))},showPluginsAddons(){return(!this.presetFeatures.includes("analytics")||!this.presetFeatures.includes("conversion-tools"))&&(this.presetFeatures.includes("image-seo")||this.presetFeatures.includes("news-sitemap")||this.presetFeatures.includes("video-sitemap")||this.presetFeatures.includes("local-seo")||this.presetFeatures.includes("redirects")||this.presetFeatures.includes("index-now")||this.presetFeatures.includes("link-assistant")||this.presetFeatures.includes("rest-api"))},showPluginsOnly(){return(this.presetFeatures.includes("analytics")||this.presetFeatures.includes("conversion-tools"))&&!this.presetFeatures.includes("image-seo")&&!this.presetFeatures.includes("news-sitemap")&&!this.presetFeatures.includes("video-sitemap")&&!this.presetFeatures.includes("local-seo")&&!this.presetFeatures.includes("redirects")&&!this.presetFeatures.includes("index-now")&&!this.presetFeatures.includes("link-assistant")&&!this.presetFeatures.includes("rest-api")},getPluginsText(){return this.showPluginsOnly?this.$t.sprintf(this.$t.__("The following plugins will be installed: %1$s",this.$td),this.getPluginNames):this.showPluginsAddons?this.$t.sprintf(this.$t.__("The following %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):this.showPluginsAll?this.$t.sprintf(this.$t.__("The following plugins and %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):null},getPluginNames(){const e=[];return this.presetFeatures.includes("analytics")&&e.push("MonsterInsights Free"),this.presetFeatures.includes("conversion-tools")&&e.push("OptinMonster"),this.presetFeatures.includes("image-seo")&&e.push("Image SEO"),this.presetFeatures.includes("local-seo")&&e.push("Local Business SEO"),this.presetFeatures.includes("video-sitemap")&&e.push("Video Sitemap"),this.presetFeatures.includes("news-sitemap")&&e.push("News Sitemap"),this.presetFeatures.includes("redirects")&&e.push("Redirects"),this.presetFeatures.includes("index-now")&&e.push("Index Now"),this.presetFeatures.includes("link-assistant")&&e.push("Link Assistant"),this.presetFeatures.includes("rest-api")&&e.push("REST API"),e.join(", ")},getFeatures(){return this.features.filter(e=>e.value!=="breadcrumbs").map(e=>(e.selected=!1,this.presetFeatures.includes(e.value)&&(e.selected=!0),e))}}),methods:a(r(r({},F("wizard",["updateFeatures"])),w("wizard",["saveWizard"])),{preventUncheck(e,t){t.required&&(e.preventDefault(),e.stopPropagation())},getValue(e){return this.presetFeatures.includes(e.value)},updateValue(e,t){const s=[...this.presetFeatures];if(e){s.push(t.value),this.updateFeatures(s);return}const i=s.findIndex(n=>n===t.value);i!==-1&&this.$delete(s,i),this.updateFeatures(s)},saveAndContinue(){this.loading=!0,this.saveWizard("features").then(()=>{this.$router.push(this.getNextLink)})}})},c={};var E=y(I,S,O,!1,N,null,null,null);function N(e){for(let t in c)this[t]=c[t]}var te=function(){return E.exports}();export{te as default};
