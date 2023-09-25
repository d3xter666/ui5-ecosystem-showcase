sap.ui.define(['require', 'exports'], (function (require, exports) { 'use strict';

	function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t);}function r(e){return "function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,a;function c(e,t){return e===t||(s||(s=document.createElement("a")),s.href=t,e===s.href)}function u(e){return null==e?"":e}function l(e,t,n){const i=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!i.getElementById(t)){const e=E("style");e.id=t,e.textContent=n,function(e,t){((function(e,t){e.appendChild(t);}))(e.head||e,t),t.sheet;}(i,e);}}function d(e,t,n){e.insertBefore(t,n||null);}function h(e){e.parentNode&&e.parentNode.removeChild(e);}function E(e){return document.createElement(e)}function m(){return e="",document.createTextNode(e);var e;}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n);}function _(e){a=e;}function g(){if(!a)throw new Error("Function called outside component initialization");return a}function $(e){g().$$.on_mount.push(e);}const T=[],f=[];let C=[];const R=[],A=Promise.resolve();let I=!1;function S(e){C.push(e);}const w=new Set;let b=0;function v(){if(0!==b)return;const e=a;do{try{for(;b<T.length;){const e=T[b];b++,_(e),O(e.$$);}}catch(e){throw T.length=0,b=0,e}for(_(null),T.length=0,b=0;f.length;)f.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];w.has(t)||(w.add(t),t());}C.length=0;}while(T.length);for(;R.length;)R.pop()();I=!1,w.clear(),_(e);}function O(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S);}}const N=new Set;function U(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];C.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),C=t;}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[]);}function L(e,t){-1===e.$$.dirty[0]&&(T.push(e),I||(I=!0,A.then(v)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31;}function D(o,s,c,u,l,d,E,m=[-1]){const p=a;_(o);const g=o.$$={fragment:null,ctx:[],props:d,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||p.$$.root};E&&E(g.root);let $=!1;if(g.ctx=c?c(o,s.props||{},((e,t,...n)=>{const i=n.length?n[0]:t;return g.ctx&&l(g.ctx[e],g.ctx[e]=i)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](i),$&&L(o,e)),t})):[],g.update(),$=!0,i(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);g.fragment&&g.fragment.l(e),e.forEach(h);}else g.fragment&&g.fragment.c();s.intro&&((T=o.$$.fragment)&&T.i&&(N.delete(T),T.i(f))),function(e,n,o){const{fragment:s,after_update:a}=e.$$;s&&s.m(n,o),S((()=>{const n=e.$$.on_mount.map(t).filter(r);e.$$.on_destroy?e.$$.on_destroy.push(...n):i(n),e.$$.on_mount=[];})),a.forEach(S);}(o,s.target,s.anchor),v();}var T,f;_(p);}let y;function x(e,t,n,i){const r=n[e]?.type;if(t="Boolean"===r&&"boolean"!=typeof t?null!=t:t,!i||!n[e])return t;if("toAttribute"===i)switch(r){case"Object":case"Array":return null==t?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return null==t?null:t;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":default:return t;case"Number":return null!=t?+t:t}}function k(e,t,n,i,r,o){let s=class extends y{constructor(){super(e,n,r),this.$$p_d=t;}static get observedAttributes(){return Object.keys(t).map((e=>(t[e].attribute||e).toLowerCase()))}};return Object.keys(t).forEach((e=>{Object.defineProperty(s.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=x(e,n,t),this.$$d[e]=n,this.$$c?.$set({[e]:n});}});})),i.forEach((e=>{Object.defineProperty(s.prototype,e,{get(){return this.$$c?.[e]}});})),o&&(s=o(s)),e.element=s,s}"function"==typeof HTMLElement&&(y=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"});}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const n=this.$$c.$on(e,t);this.$$l_u.set(t,n);}super.addEventListener(e,t,n);}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t));}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function e(e){return ()=>{let t;return {c:function(){t=E("slot"),"default"!==e&&p(t,"name",e);},m:function(e,n){d(e,t,n);},d:function(e){e&&h(t);}}}}const t={},n=function(e){const t={};return e.childNodes.forEach((e=>{t[e.slot||"default"]=!0;})),t}(this);for(const r of this.$$s)r in n&&(t[r]=[e(r)]);for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=x(s,o.value,this.$$p_d,"toProp"));}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const e in this.$$p_d)if(this.$$d[e]=this.$$c.$$.ctx[this.$$c.$$.props[e]],this.$$p_d[e].reflect){const t=x(e,this.$$d[e],this.$$p_d,"toAttribute");null==t?this.removeAttribute(e):this.setAttribute(this.$$p_d[e].attribute||e,t);}this.$$r=!1;};this.$$c.$$.after_update.push(i),i();for(const a in this.$$l)for(const c of this.$$l[a]){const u=this.$$c.$on(a,c);this.$$l_u.set(c,u);}this.$$l={};}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=x(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}));}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0);}));}$$g_p(e){return Object.keys(this.$$p_d).find((t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e))||e}});class M{$$=void 0;$$set=void 0;$destroy(){U(this,1),this.$destroy=e;}$on(t,n){if(!r(n))return e;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const e=i.indexOf(n);-1!==e&&i.splice(e,1);}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1);}}var Q,P;"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4"),function(e){e.CUSTOM_MESSAGE="custom-message",e.GET_CONTEXT_REQUEST="get-context-request",e.NAVIGATION_REQUEST="navigation-request",e.ALERT_REQUEST="show-alert-request",e.ALERT_CLOSED="close-alert-request",e.INITIALIZED="initialized",e.ADD_SEARCH_PARAMS_REQUEST="add-search-params-request",e.ADD_NODE_PARAMS_REQUEST="add-node-params-request",e.SHOW_CONFIRMATION_MODAL_REQUEST="show-confirmation-modal-request",e.SHOW_LOADING_INDICATOR_REQUEST="show-loading-indicator-request",e.HIDE_LOADING_INDICATOR_REQUEST="hide-loading-indicator-request",e.SET_CURRENT_LOCALE_REQUEST="set-current-locale-request",e.LOCAL_STORAGE_SET_REQUEST="set-storage-request",e.RUNTIME_ERROR_HANDLING_REQUEST="runtime-error-handling-request",e.SET_ANCHOR_LINK_REQUEST="set-anchor-request",e.SET_THIRD_PARTY_COOKIES_REQUEST="set-third-party-cookies-request",e.BACK_NAVIGATION_REQUEST="navigate-back-request",e.GET_CURRENT_ROUTE_REQUEST="get-current-route-request",e.NAVIGATION_COMPLETED_REPORT="report-navigation-completed-request",e.UPDATE_MODAL_PATH_DATA_REQUEST="update-modal-path-data-request",e.CHECK_PATH_EXISTS_REQUEST="check-path-exists-request",e.SET_DIRTY_STATUS_REQUEST="set-dirty-status-request";}(Q||(Q={})),function(e){e.CUSTOM_MESSAGE="custom",e.GET_CONTEXT="luigi.get-context",e.SEND_CONTEXT_HANDSHAKE="luigi.init",e.CONTEXT_RECEIVED="luigi.init.ok",e.NAVIGATION_REQUEST="luigi.navigation.open",e.ALERT_REQUEST="luigi.ux.alert.show",e.ALERT_CLOSED="luigi.ux.alert.hide",e.INITIALIZED="luigi.init.ok",e.ADD_SEARCH_PARAMS_REQUEST="luigi.addSearchParams",e.ADD_NODE_PARAMS_REQUEST="luigi.addNodeParams",e.SHOW_CONFIRMATION_MODAL_REQUEST="luigi.ux.confirmationModal.show",e.SHOW_LOADING_INDICATOR_REQUEST="luigi.show-loading-indicator",e.HIDE_LOADING_INDICATOR_REQUEST="luigi.hide-loading-indicator",e.SET_CURRENT_LOCALE_REQUEST="luigi.ux.set-current-locale",e.LOCAL_STORAGE_SET_REQUEST="storage",e.RUNTIME_ERROR_HANDLING_REQUEST="luigi-runtime-error-handling",e.SET_ANCHOR_LINK_REQUEST="luigi.setAnchor",e.SET_THIRD_PARTY_COOKIES_REQUEST="luigi.third-party-cookie",e.BACK_NAVIGATION_REQUEST="luigi.navigation.back",e.GET_CURRENT_ROUTE_REQUEST="luigi.navigation.currentRoute",e.SEND_CONTEXT_OBJECT="luigi.navigate",e.NAVIGATION_COMPLETED_REPORT="luigi.navigate.ok",e.UPDATE_MODAL_PATH_DATA_REQUEST="luigi.navigation.updateModalDataPath",e.CHECK_PATH_EXISTS_REQUEST="luigi.navigation.pathExists",e.SET_DIRTY_STATUS_REQUEST="luigi.set-page-dirty";}(P||(P={}));const H=new class{isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}};var W;!function(e){e.SEND_CONTEXT_TO_MICROFRONTEND="sendContextToMicrofrontend";}(W||(W={}));class G{constructor(){}isVisible(e){return !!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}sendCustomMessageToIframe(e,t,n){const i=n||"custom";if(e.iframe.contentWindow){const n=new URL(e.iframe.src);"custom"===i?e.iframe.contentWindow.postMessage({msg:i,data:t},n.origin):e.iframe.contentWindow.postMessage(Object.assign({msg:i},t),n.origin);}else console.error("Message target could not be resolved");}dispatch(e,t,n,i,r){let o=new CustomEvent(e,{detail:n});i&&H.isFunction(i)&&r&&(o[r]=e=>{i(e);}),t.dispatchEvent(o);}getTargetContainer(e){let t;return globalThis.__luigi_container_manager.container.forEach((n=>{var i;(null===(i=n.iframeHandle)||void 0===i?void 0:i.iframe)&&n.iframeHandle.iframe.contentWindow===e.source&&(t=n);})),t}getContainerManager(){return globalThis.__luigi_container_manager||(globalThis.__luigi_container_manager={container:[],messageListener:e=>{var t,n;const i=this.getTargetContainer(e),r=null===(n=null===(t=null==i?void 0:i.iframeHandle)||void 0===t?void 0:t.iframe)||void 0===n?void 0:n.contentWindow;if(r&&r===e.source){const t=e.data.msg;switch(t){case P.CUSTOM_MESSAGE:const n=e.data.data,o=n.id;delete n.id,this.dispatch(Q.CUSTOM_MESSAGE,i,{id:o,_metaData:{},data:n});break;case P.GET_CONTEXT:r.postMessage({msg:P.SEND_CONTEXT_HANDSHAKE,context:i.context||{},internal:{}},"*");break;case P.NAVIGATION_REQUEST:this.dispatch(Q.NAVIGATION_REQUEST,i,e.data.params);break;case P.ALERT_REQUEST:this.dispatch(Q.ALERT_REQUEST,i,e);break;case P.INITIALIZED:this.dispatch(Q.INITIALIZED,i,e.data.params);break;case P.ADD_SEARCH_PARAMS_REQUEST:this.dispatch(Q.ADD_SEARCH_PARAMS_REQUEST,i,{data:e.data.data,keepBrowserHistory:e.data.keepBrowserHistory});break;case P.ADD_NODE_PARAMS_REQUEST:this.dispatch(Q.ADD_NODE_PARAMS_REQUEST,i,{data:e.data.data,keepBrowserHistory:e.data.keepBrowserHistory});break;case P.SHOW_CONFIRMATION_MODAL_REQUEST:this.dispatch(Q.SHOW_CONFIRMATION_MODAL_REQUEST,i,e.data.data);break;case P.SHOW_LOADING_INDICATOR_REQUEST:this.dispatch(Q.SHOW_LOADING_INDICATOR_REQUEST,i,e);break;case P.HIDE_LOADING_INDICATOR_REQUEST:this.dispatch(Q.HIDE_LOADING_INDICATOR_REQUEST,i,e);break;case P.SET_CURRENT_LOCALE_REQUEST:this.dispatch(Q.SET_CURRENT_LOCALE_REQUEST,i,e);break;case P.LOCAL_STORAGE_SET_REQUEST:this.dispatch(Q.LOCAL_STORAGE_SET_REQUEST,i,e);break;case P.RUNTIME_ERROR_HANDLING_REQUEST:this.dispatch(Q.RUNTIME_ERROR_HANDLING_REQUEST,i,e);break;case P.SET_ANCHOR_LINK_REQUEST:this.dispatch(Q.SET_ANCHOR_LINK_REQUEST,i,e);break;case P.SET_THIRD_PARTY_COOKIES_REQUEST:this.dispatch(Q.SET_THIRD_PARTY_COOKIES_REQUEST,i,e);break;case P.BACK_NAVIGATION_REQUEST:this.dispatch(Q.BACK_NAVIGATION_REQUEST,i,e);break;case P.GET_CURRENT_ROUTE_REQUEST:this.dispatch(Q.GET_CURRENT_ROUTE_REQUEST,i,e);break;case P.NAVIGATION_COMPLETED_REPORT:this.dispatch(Q.NAVIGATION_COMPLETED_REPORT,i,e);break;case P.UPDATE_MODAL_PATH_DATA_REQUEST:this.dispatch(Q.UPDATE_MODAL_PATH_DATA_REQUEST,i,e);break;case P.CHECK_PATH_EXISTS_REQUEST:this.dispatch(Q.CHECK_PATH_EXISTS_REQUEST,i,e);break;case P.SET_DIRTY_STATUS_REQUEST:this.dispatch(Q.SET_DIRTY_STATUS_REQUEST,i,e);break;case"luigi.third-party-cookie":break;default:console.warn("Functionality not yet implemented: ",t);}}}},window.addEventListener("message",globalThis.__luigi_container_manager.messageListener)),globalThis.__luigi_container_manager}registerContainer(e){this.getContainerManager().container.push(e);}}const j=new G;class F{constructor(e){e?(this.rendererObject=e,this.config=e.config||{}):this.config={};}createCompoundContainer(){return document.createElement("div")}createCompoundItemContainer(e){return document.createElement("div")}attachCompoundItem(e,t){e.appendChild(t);}}class B extends F{constructor(e){super(e||{use:{}}),e&&e.use&&e.use.extends&&(this.superRenderer=V({use:e.use.extends,config:e.config}));}createCompoundContainer(){return this.rendererObject.use.createCompoundContainer?this.rendererObject.use.createCompoundContainer(this.config,this.superRenderer):this.superRenderer?this.superRenderer.createCompoundContainer():super.createCompoundContainer()}createCompoundItemContainer(e){return this.rendererObject.use.createCompoundItemContainer?this.rendererObject.use.createCompoundItemContainer(e,this.config,this.superRenderer):this.superRenderer?this.superRenderer.createCompoundItemContainer(e):super.createCompoundItemContainer(e)}attachCompoundItem(e,t){this.rendererObject.use.attachCompoundItem?this.rendererObject.use.attachCompoundItem(e,t,this.superRenderer):this.superRenderer?this.superRenderer.attachCompoundItem(e,t):super.attachCompoundItem(e,t);}}class q extends F{createCompoundContainer(){const e="__lui_compound_"+(new Date).getTime(),t=document.createElement("div");t.classList.add(e);let n="";return this.config.layouts&&this.config.layouts.forEach((t=>{if(t.minWidth||t.maxWidth){let i="@media only screen ";null!=t.minWidth&&(i+=`and (min-width: ${t.minWidth}px) `),null!=t.maxWidth&&(i+=`and (max-width: ${t.maxWidth}px) `),i+=`{\n            .${e} {\n              grid-template-columns: ${t.columns||"auto"};\n              grid-template-rows: ${t.rows||"auto"};\n              grid-gap: ${t.gap||"0"};\n            }\n          }\n          `,n+=i;}})),t.innerHTML=`\n        <style scoped>\n          .${e} {\n            display: grid;\n            grid-template-columns: ${this.config.columns||"auto"};\n            grid-template-rows: ${this.config.rows||"auto"};\n            grid-gap: ${this.config.gap||"0"};\n            min-height: ${this.config.minHeight||"auto"};\n          }\n          ${n}\n        </style>\n    `,t}createCompoundItemContainer(e){const t=e||{},n=document.createElement("div");return n.setAttribute("style",`grid-row: ${t.row||"auto"}; grid-column: ${t.column||"auto"}`),n}}const V=e=>{const t=e.use;return t?"grid"===t?new q(e):t.createCompoundContainer||t.createCompoundItemContainer||t.attachCompoundItem?new B(e):new F(e):new F(e)},K=(e,t,n,i)=>{(null==t?void 0:t.eventListeners)&&t.eventListeners.forEach((t=>{const r=t.source+"."+t.name,o=e[r],s={wcElementId:n,wcElement:i,action:t.action,converter:t.dataConverter};o?o.push(s):e[r]=[s];}));};function X(e){return String(e).replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#39;","'").replaceAll("&sol;","/")}class Z{constructor(){this.containerService=new G;}dynamicImport(e){return Object.freeze(import(/* webpackIgnore: true */e))}processViewUrl(e,t){return e}attachWC(e,t,n,i,r,o,s){if(n&&n.contains(t)){const a=document.createElement(e);o&&a.setAttribute("nodeId",o),this.initWC(a,e,n,r,i,o,s),n.replaceChild(a,t),n._luigi_node&&(n._luigi_mfe_webcomponent=a),n.dispatchEvent(new Event("wc_ready"));}}dispatchLuigiEvent(e,t,n){this.containerService.dispatch(e,this.thisComponent,t,n);}createClientAPI(e,t,n,i,r){return {linkManager:()=>({navigate:e=>{this.dispatchLuigiEvent(Q.NAVIGATION_REQUEST,{link:e});}}),uxManager:()=>({showAlert:e=>{this.dispatchLuigiEvent(Q.ALERT_REQUEST,e);},showConfirmationModal:async e=>new Promise(((t,n)=>{this.dispatchLuigiEvent(Q.SHOW_CONFIRMATION_MODAL_REQUEST,e,(e=>{e?t(e):n();}));})),getCurrentTheme:()=>this.thisComponent.getAttribute("theme")}),getCurrentLocale:()=>this.thisComponent.getAttribute("locale"),getActiveFeatureToggles:()=>this.thisComponent.getAttribute("active-feature-toggle-list"),publishEvent:r=>{e&&e.eventBus&&e.eventBus.onPublishEvent(r,t,n);const o={id:r.type,_metaData:{nodeId:t,wc_id:n,src:i},data:r.detail};this.dispatchLuigiEvent(Q.CUSTOM_MESSAGE,o);},luigiClientInit:()=>{this.dispatchLuigiEvent(Q.INITIALIZED,{});},addNodeParams:(e,t)=>{r||this.dispatchLuigiEvent(Q.ADD_NODE_PARAMS_REQUEST,{params:e,keepBrowserHistory:t});},getNodeParams:e=>{if(r)return {};let t=this.thisComponent.getAttribute("node-params")||{};return t=JSON.parse(t),e?(n=t,Object.entries(n).reduce(((e,t)=>(e[X(t[0])]=X(t[1]),e)),{})):t;var n;},setAnchor:e=>{r||this.dispatchLuigiEvent(Q.SET_ANCHOR_LINK_REQUEST,e);}}}initWC(e,t,n,i,r,o,s){const a=this.createClientAPI(n,o,t,e,s);if(e.__postProcess){const t=new URL(document.baseURI).origin===new URL(i,document.baseURI).origin?new URL("./",new URL(i,document.baseURI)):new URL("./",i);e.__postProcess(r,a,t.origin+t.pathname);}else e.context=r,e.LuigiClient=a;}generateWCId(e){let t="",n=new URL(e,location.href).href;for(let e=0;e<n.length;e++)t+=n.charCodeAt(e).toString(16);return "luigi-wc-"+t}registerWCFromUrl(e,t){const n=this.processViewUrl(e);return new Promise(((e,i)=>{if(this.checkWCUrl(n))this.dynamicImport(n).then((n=>{try{if(!window.customElements.get(t)){let e=n.default;if(!HTMLElement.isPrototypeOf(e)){let t=Object.keys(n);for(let i=0;i<t.length&&(e=n[t[i]],!HTMLElement.isPrototypeOf(e));i++);}window.customElements.define(t,e);}e(1);}catch(e){i(e);}})).catch((e=>{i(e);}));else {i(`Error: View URL '${n}' not allowed to be included`);}}))}includeSelfRegisteredWCFromUrl(e,t,n){if(this.checkWCUrl(t)){this.containerService.getContainerManager()._registerWebcomponent||(this.containerService.getContainerManager()._registerWebcomponent=(e,t)=>{window.customElements.define(this.generateWCId(e),t);});let i=document.createElement("script");i.setAttribute("src",t),"module"===e.webcomponent.type&&i.setAttribute("type","module"),i.setAttribute("defer","true"),i.addEventListener("load",(()=>{n();})),document.body.appendChild(i);}else console.warn(`View URL '${t}' not allowed to be included`);}checkWCUrl(e){return !0}renderWebComponent(e,t,n,i,r,o){const s=this.processViewUrl(e,{context:n}),a=i.webcomponent&&i.webcomponent.tagName?i.webcomponent.tagName:this.generateWCId(s),c=document.createElement("div");t.appendChild(c),t._luigi_node=i,window.customElements.get(a)?this.attachWC(a,c,t,n,s,r,o):window.luigiWCFn?window.luigiWCFn(s,a,c,(()=>{this.attachWC(a,c,t,n,s,r,o);})):i.webcomponent&&i.webcomponent.selfRegistered?this.includeSelfRegisteredWCFromUrl(i,s,(()=>{this.attachWC(a,c,t,n,s,r,o);})):this.registerWCFromUrl(s,a).then((()=>{this.attachWC(a,c,t,n,s,r,o);})).catch((e=>{console.warn("ERROR =>",e),this.containerService.dispatch(Q.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}createCompoundContainerAsync(e,t){return new Promise(((n,i)=>{if(e.viewUrl)try{const i=this.generateWCId(e.viewUrl);this.registerWCFromUrl(e.viewUrl,i).then((()=>{const r=document.createElement(i);this.initWC(r,i,r,e.viewUrl,t,"_root"),n(r);})).catch((e=>{console.warn("Error: ",e),this.containerService.dispatch(Q.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}catch(e){i(e);}else n(e.createCompoundContainer());}))}renderWebComponentCompound(e,t,n){var i;let r;return e.webcomponent&&e.viewUrl?(r=new F,r.viewUrl=this.processViewUrl(e.viewUrl,{context:n}),r.createCompoundItemContainer=e=>{var t=document.createElement("div");return e&&e.slot&&t.setAttribute("slot",e.slot),t}):(null===(i=e.compound)||void 0===i?void 0:i.renderer)&&(r=V(e.compound.renderer)),r=r||new F,new Promise((i=>{this.createCompoundContainerAsync(r,n).then((o=>{var s;const a={};o.eventBus={listeners:a,onPublishEvent:(e,t,n)=>{const i=a[t+"."+e.type]||[];i.push(...a["*."+e.type]||[]),i.forEach((t=>{const n=t.wcElement||o.querySelector("[nodeId="+t.wcElementId+"]");n?n.dispatchEvent(new CustomEvent(t.action,{detail:t.converter?t.converter(e.detail):e.detail})):console.debug("Could not find event target",t);}));}},null===(s=e.compound)||void 0===s||s.children.forEach(((e,t)=>{const i=Object.assign(Object.assign({},n),e.context),s=r.createCompoundItemContainer(e.layoutConfig);s.eventBus=o.eventBus,r.attachCompoundItem(o,s);const c=e.id||"gen_"+t;this.renderWebComponent(e.viewUrl,s,i,e,c,!0),K(a,e,c);})),t.appendChild(o),K(a,e.compound,"_root",o),i(o);})).catch((e=>{console.warn("Error: ",e),this.containerService.dispatch(Q.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}))}}const Y=new class{constructor(){this.updateContext=(e,t,n)=>{if(n){const i=t||{};j.sendCustomMessageToIframe(n,{context:e,internal:i},P.SEND_CONTEXT_OBJECT);}else console.warn("Attempting to update context on inexisting iframe");},this.sendCustomMessage=(e,t,n,i,r)=>{if(n&&t._luigi_mfe_webcomponent)j.dispatch(e,t._luigi_mfe_webcomponent,r);else {const t=Object.assign({},r);t.id&&console.warn('Property "id" is reserved and can not be used in custom message data'),t.id=e,j.sendCustomMessageToIframe(i,t);}};}closeAlert(e,t,n){j.sendCustomMessageToIframe(n,{id:e,dismissKey:t},P.ALERT_CLOSED);}};function z(e){l(e,"svelte-1s382vm","main.svelte-1s382vm,iframe.svelte-1s382vm{width:100%;height:100%;border:none}main.lui-isolated.svelte-1s382vm{line-height:0}");}function J(e){let t,n=!e[2]&&ee(e);return {c(){n&&n.c(),t=m();},m(e,i){n&&n.m(e,i),d(e,t,i);},p(e,i){e[2]?n&&(n.d(1),n=null):n?n.p(e,i):(n=ee(e),n.c(),n.m(t.parentNode,t));},d(e){e&&h(t),n&&n.d(e);}}}function ee(e){let t,n;return {c(){t=E("iframe"),c(t.src,n=e[0])||p(t,"src",n),p(t,"title",e[1]),p(t,"class","svelte-1s382vm");},m(n,i){d(n,t,i),e[14](t);},p(e,i){1&i&&!c(t.src,n=e[0])&&p(t,"src",n),2&i&&p(t,"title",e[1]);},d(n){n&&h(t),e[14](null);}}}function te(t){let n,i,r=t[5]&&J(t);return {c(){n=E("main"),r&&r.c(),p(n,"class",i=u(t[2]?void 0:"lui-isolated")+" svelte-1s382vm");},m(e,i){d(e,n,i),r&&r.m(n,null),t[15](n);},p(e,[t]){e[5]?r?r.p(e,t):(r=J(e),r.c(),r.m(n,null)):r&&(r.d(1),r=null),4&t&&i!==(i=u(e[2]?void 0:"lui-isolated")+" svelte-1s382vm")&&p(n,"class",i);},i:e,o:e,d(e){e&&h(n),r&&r.d(),t[15](null);}}}function ne(e,t,n){let i,{viewurl:r}=t,{context:o}=t,{label:s}=t,{webcomponent:a}=t,{deferInit:c}=t,{locale:u}=t,{theme:l}=t,{activeFeatureToggleList:d}=t,{skipInitCheck:h}=t,{nodeParams:E}=t,m={},p=!1;const _=new Z,T=e=>{if(!p){e.sendCustomMessage=(e,t)=>{Y.sendCustomMessage(e,i,!!a,m,t);},e.updateContext=(e,t)=>{Y.updateContext(e,t,m);},e.closeAlert=(e,t)=>{Y.closeAlert(e,t,m);},j.registerContainer(e),_.thisComponent=e;const t=o?JSON.parse(o):{};a&&(n(4,i.innerHTML="",i),_.renderWebComponent(r,i,t,{})),h?(e.initialized=!0,setTimeout((()=>{_.dispatchLuigiEvent(Q.INITIALIZED,{});}))):a&&i.addEventListener("wc_ready",(()=>{var t;(null===(t=i._luigi_mfe_webcomponent)||void 0===t?void 0:t.deferLuigiClientWCInit)||(e.initialized=!0,_.dispatchLuigiEvent(Q.INITIALIZED,{}));})),n(5,p=!0);}};var C;return $((async()=>{const e=i.getRootNode().host;e.iframeHandle=m,e.init=()=>{T(e);},c||T(e);})),C=async()=>{},g().$$.on_destroy.push(C),e.$$set=e=>{"viewurl"in e&&n(0,r=e.viewurl),"context"in e&&n(6,o=e.context),"label"in e&&n(1,s=e.label),"webcomponent"in e&&n(2,a=e.webcomponent),"deferInit"in e&&n(7,c=e.deferInit),"locale"in e&&n(8,u=e.locale),"theme"in e&&n(9,l=e.theme),"activeFeatureToggleList"in e&&n(10,d=e.activeFeatureToggleList),"skipInitCheck"in e&&n(11,h=e.skipInitCheck),"nodeParams"in e&&n(12,E=e.nodeParams);},[r,s,a,m,i,p,o,c,u,l,d,h,E,()=>u&&l&&d&&E,function(e){f[e?"unshift":"push"]((()=>{m.iframe=e,n(3,m);}));},function(e){f[e?"unshift":"push"]((()=>{i=e,n(4,i);}));}]}class ie extends M{constructor(e){super(),D(this,e,ne,te,o,{viewurl:0,context:6,label:1,webcomponent:2,deferInit:7,locale:8,theme:9,activeFeatureToggleList:10,skipInitCheck:11,nodeParams:12,unwarn:13},z);}get viewurl(){return this.$$.ctx[0]}set viewurl(e){this.$$set({viewurl:e}),v();}get context(){return this.$$.ctx[6]}set context(e){this.$$set({context:e}),v();}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),v();}get webcomponent(){return this.$$.ctx[2]}set webcomponent(e){this.$$set({webcomponent:e}),v();}get deferInit(){return this.$$.ctx[7]}set deferInit(e){this.$$set({deferInit:e}),v();}get locale(){return this.$$.ctx[8]}set locale(e){this.$$set({locale:e}),v();}get theme(){return this.$$.ctx[9]}set theme(e){this.$$set({theme:e}),v();}get activeFeatureToggleList(){return this.$$.ctx[10]}set activeFeatureToggleList(e){this.$$set({activeFeatureToggleList:e}),v();}get skipInitCheck(){return this.$$.ctx[11]}set skipInitCheck(e){this.$$set({skipInitCheck:e}),v();}get nodeParams(){return this.$$.ctx[12]}set nodeParams(e){this.$$set({nodeParams:e}),v();}get unwarn(){return this.$$.ctx[13]}}function re(e){l(e,"svelte-7j5yk6","main.svelte-7j5yk6{width:100%;height:100%;border:none}");}function oe(t){let n;return {c(){n=E("main"),p(n,"class","svelte-7j5yk6");},m(e,i){d(e,n,i),t[7](n);},p:e,i:e,o:e,d(e){e&&h(n),t[7](null);}}}function se(e,t,n){let i,r,{viewurl:o}=t,{context:s}=t,{deferInit:a}=t,{compoundConfig:c}=t,{nodeParams:u}=t,l=!1;const d=new G,h=new Z,E=e=>{if(!c||l)return;const t=s?JSON.parse(s):{};n(1,a=!1);const u={compound:c,viewUrl:o||void 0,webcomponent:!0};h.renderWebComponentCompound(u,i,t).then((t=>{r=t,e.hasAttribute("skip-init-check")||!u.viewUrl?(e.initialized=!0,setTimeout((()=>{h.dispatchLuigiEvent(Q.INITIALIZED,{});}))):r.LuigiClient&&!r.deferLuigiClientWCInit&&(e.initialized=!0,h.dispatchLuigiEvent(Q.INITIALIZED,{}));})),l=!0;};return $((async()=>{const e=i.getRootNode().host;e.init=()=>{E(e);},a||E(e),d.registerContainer(e),h.thisComponent=e;})),e.$$set=e=>{"viewurl"in e&&n(2,o=e.viewurl),"context"in e&&n(3,s=e.context),"deferInit"in e&&n(1,a=e.deferInit),"compoundConfig"in e&&n(4,c=e.compoundConfig),"nodeParams"in e&&n(5,u=e.nodeParams);},[i,a,o,s,c,u,()=>u,function(e){f[e?"unshift":"push"]((()=>{i=e,n(0,i);}));}]}k(ie,{viewurl:{type:"String",reflect:!1,attribute:"viewurl"},context:{type:"String",reflect:!1,attribute:"context"},label:{type:"String",reflect:!1,attribute:"label"},webcomponent:{type:"String",reflect:!1,attribute:"webcomponent"},deferInit:{type:"Boolean",attribute:"defer-init"},locale:{type:"String",reflect:!1,attribute:"locale"},theme:{type:"String",reflect:!1,attribute:"theme"},activeFeatureToggleList:{type:"Array",reflect:!1,attribute:"active-feature-toggle-list"},skipInitCheck:{type:"Boolean",reflect:!1,attribute:"skip-init-check"},nodeParams:{type:"Object",reflect:!1,attribute:"node-params"}},[],["unwarn"],!0,(e=>{let t=e=>()=>console.warn(e+" can't be called on luigi-container before its micro frontend is attached to the DOM.");return class extends e{sendCustomMessage=t("sendCustomMessage");updateContext=t("updateContext");closeAlert=t("closeAlert");constructor(){super();}}}));class ae extends M{constructor(e){super(),D(this,e,se,oe,o,{viewurl:2,context:3,deferInit:1,compoundConfig:4,nodeParams:5,unwarn:6},re);}get viewurl(){return this.$$.ctx[2]}set viewurl(e){this.$$set({viewurl:e}),v();}get context(){return this.$$.ctx[3]}set context(e){this.$$set({context:e}),v();}get deferInit(){return this.$$.ctx[1]}set deferInit(e){this.$$set({deferInit:e}),v();}get compoundConfig(){return this.$$.ctx[4]}set compoundConfig(e){this.$$set({compoundConfig:e}),v();}get nodeParams(){return this.$$.ctx[5]}set nodeParams(e){this.$$set({nodeParams:e}),v();}get unwarn(){return this.$$.ctx[6]}}k(ae,{viewurl:{type:"String",reflect:!1,attribute:"viewurl"},context:{type:"String",reflect:!1,attribute:"context"},deferInit:{type:"Boolean",attribute:"defer-init"},compoundConfig:{type:"Object",reflect:!1,attribute:"compound-config"},nodeParams:{type:"Object",reflect:!1,attribute:"node-params"}},[],["unwarn"],!0);var ce=Q;customElements.get("luigi-container")||customElements.define("luigi-container",ie.element),customElements.get("luigi-compound-container")||customElements.define("luigi-compound-container",ae.element);

	try { Object.defineProperty(ce, "__" + "esModule", { value: true }); } catch (ex) {}

	exports.LuigiCompoundContainer = ae;
	exports.LuigiContainer = ie;
	exports.default = ce;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
