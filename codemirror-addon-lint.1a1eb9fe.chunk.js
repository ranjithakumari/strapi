(self.webpackChunkcart_db=self.webpackChunkcart_db||[]).push([[2781],{3256:(D,U,w)=>{(function(l){l(w(4631))})(function(l){"use strict";var d="CodeMirror-lint-markers",M="CodeMirror-lint-line-";function O(t,e,i){var n=document.createElement("div");n.className="CodeMirror-lint-tooltip cm-s-"+t.options.theme,n.appendChild(i.cloneNode(!0)),t.state.lint.options.selfContain?t.getWrapperElement().appendChild(n):document.body.appendChild(n);function o(r){if(!n.parentNode)return l.off(document,"mousemove",o);n.style.top=Math.max(0,r.clientY-n.offsetHeight-5)+"px",n.style.left=r.clientX+5+"px"}return l.on(document,"mousemove",o),o(e),n.style.opacity!=null&&(n.style.opacity=1),n}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){!t.parentNode||(t.style.opacity==null&&k(t),t.style.opacity=0,setTimeout(function(){k(t)},600))}function C(t,e,i,n){var o=O(t,e,i);function r(){l.off(n,"mouseout",r),o&&(b(o),o=null)}var a=setInterval(function(){if(o)for(var s=n;;s=s.parentNode){if(s&&s.nodeType==11&&(s=s.host),s==document.body)return;if(!s){r();break}}if(!o)return clearInterval(a)},400);l.on(n,"mouseout",r)}function N(t,e,i){this.marked=[],e instanceof Function&&(e={getAnnotations:e}),(!e||e===!0)&&(e={}),this.options={},this.linterOptions=e.options||{};for(var n in v)this.options[n]=v[n];for(var n in e)v.hasOwnProperty(n)?e[n]!=null&&(this.options[n]=e[n]):e.options||(this.linterOptions[n]=e[n]);this.timeout=null,this.hasGutter=i,this.onMouseOver=function(o){H(t,o)},this.waitingFor=0}var v={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function y(t){var e=t.state.lint;e.hasGutter&&t.clearGutter(d),e.options.highlightLines&&E(t);for(var i=0;i<e.marked.length;++i)e.marked[i].clear();e.marked.length=0}function E(t){t.eachLine(function(e){var i=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);i&&t.removeLineClass(e,"wrap",i[0])})}function x(t,e,i,n,o){var r=document.createElement("div"),a=r;return r.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+i,n&&(a=r.appendChild(document.createElement("div")),a.className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),o!=!1&&l.on(a,"mouseover",function(s){C(t,s,e,a)}),r}function A(t,e){return t=="error"?t:e}function F(t){for(var e=[],i=0;i<t.length;++i){var n=t[i],o=n.from.line;(e[o]||(e[o]=[])).push(n)}return e}function L(t){var e=t.severity;e||(e="error");var i=document.createElement("div");return i.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,typeof t.messageHTML!="undefined"?i.innerHTML=t.messageHTML:i.appendChild(document.createTextNode(t.message)),i}function G(t,e){var i=t.state.lint,n=++i.waitingFor;function o(){n=-1,t.off("change",o)}t.on("change",o),e(t.getValue(),function(r,a){t.off("change",o),i.waitingFor==n&&(a&&r instanceof l&&(r=a),t.operation(function(){c(t,r)}))},i.linterOptions,t)}function g(t){var e=t.state.lint;if(!!e){var i=e.options,n=i.getAnnotations||t.getHelper(l.Pos(0,0),"lint");if(!!n)if(i.async||n.async)G(t,n);else{var o=n(t.getValue(),e.linterOptions,t);if(!o)return;o.then?o.then(function(r){t.operation(function(){c(t,r)})}):t.operation(function(){c(t,o)})}}}function c(t,e){var i=t.state.lint;if(!!i){var n=i.options;y(t);for(var o=F(e),r=0;r<o.length;++r){var a=o[r];if(!!a){var s=[];a=a.filter(function(_){return s.indexOf(_.message)>-1?!1:s.push(_.message)});for(var u=null,p=i.hasGutter&&document.createDocumentFragment(),m=0;m<a.length;++m){var f=a[m],h=f.severity;h||(h="error"),u=A(u,h),n.formatAnnotation&&(f=n.formatAnnotation(f)),i.hasGutter&&p.appendChild(L(f)),f.to&&i.marked.push(t.markText(f.from,f.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+h,__annotation:f}))}i.hasGutter&&t.setGutterMarker(r,d,x(t,p,u,o[r].length>1,n.tooltips)),n.highlightLines&&t.addLineClass(r,"wrap",M+u)}}n.onUpdateLinting&&n.onUpdateLinting(e,o,t)}}function T(t){var e=t.state.lint;!e||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){g(t)},e.options.delay))}function I(t,e,i){for(var n=i.target||i.srcElement,o=document.createDocumentFragment(),r=0;r<e.length;r++){var a=e[r];o.appendChild(L(a))}C(t,i,o,n)}function H(t,e){var i=e.target||e.srcElement;if(!!/\bCodeMirror-lint-mark-/.test(i.className)){for(var n=i.getBoundingClientRect(),o=(n.left+n.right)/2,r=(n.top+n.bottom)/2,a=t.findMarksAt(t.coordsChar({left:o,top:r},"client")),s=[],u=0;u<a.length;++u){var p=a[u].__annotation;p&&s.push(p)}s.length&&I(t,s,e)}}l.defineOption("lint",!1,function(t,e,i){if(i&&i!=l.Init&&(y(t),t.state.lint.options.lintOnChange!==!1&&t.off("change",T),l.off(t.getWrapperElement(),"mouseover",t.state.lint.onMouseOver),clearTimeout(t.state.lint.timeout),delete t.state.lint),e){for(var n=t.getOption("gutters"),o=!1,r=0;r<n.length;++r)n[r]==d&&(o=!0);var a=t.state.lint=new N(t,e,o);a.options.lintOnChange&&t.on("change",T),a.options.tooltips!=!1&&a.options.tooltips!="gutter"&&l.on(t.getWrapperElement(),"mouseover",a.onMouseOver),g(t)}}),l.defineExtension("performLint",function(){g(this)})})}}]);
