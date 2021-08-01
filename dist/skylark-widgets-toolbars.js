/**
 * skylark-widgets-toolbars - The skylark toolbar widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-toolbars/
 * @license MIT
 */
!function(t,e){var o=e.define,require=e.require,n="function"==typeof o&&o.amd,a=!n&&"undefined"!=typeof exports;if(!n&&!o){var s={};o=e.define=function(t,e,o){"function"==typeof o?(s[t]={factory:o,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var o=e.split("/"),n=t.split("/");o.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?o.pop():o.push(n[a]));return o.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):s[t]={factory:null,resolved:!0,exports:o}},require=e.require=function(t){if(!s.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=s[t];if(!module.resolved){var o=[];module.deps.forEach(function(t){o.push(require(t))}),module.exports=module.factory.apply(e,o)||null,module.resolved=!0}return module.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-widgets-toolbars/toolbars",["skylark-langx/skylark"],function(t){return t.attach("widgets.toolbars",{})}),t("skylark-domx-plugins-panels/Toolbar",["skylark-langx/langx","skylark-domx-query","skylark-domx-plugins-base","./panels","./panel"],function(t,e,o,n,a){var s=a.inherit({klassName:"Toolbar",pluginName:"lark.panels.toolbar",options:{toolbarFloat:!0,toolbarHidden:!1,toolbarFloatOffset:0,template:'<div class="domx-toolbar"><ul></ul></div>',separator:{template:'<li><span class="separator"></span></li>'}},_construct:function(t,o){var n,s;a.prototype._construct.call(this,t,o),this.opts=this.options,this.wrapper=e(this._elm),this.list=this.wrapper.find("ul"),this.list.on("click",function(t){return!1}),this.wrapper.on("mousedown",(s=this,function(t){return s.list.find(".menu-on").removeClass(".menu-on")})),e(document).on("mousedown.toolbar",function(t){return function(e){return t.list.find(".menu-on").removeClass("menu-on")}}(this)),!this.opts.toolbarHidden&&this.opts.toolbarFloat&&(this.wrapper.css("top",this.opts.toolbarFloatOffset),n=0,function(t){return function(){return t.wrapper.css("position","static"),t.wrapper.width("auto"),t.editor.editable.util.reflow(t.wrapper),t.wrapper.width(t.wrapper.outerWidth()),t.wrapper.css("left",t.editor.editable.util.os.mobile?t.wrapper.position().left:t.wrapper.offset().left),t.wrapper.css("position",""),n=t.wrapper.outerHeight(),t.editor.placeholderEl.css("top",n),!0}}(this))},addToolItem:function(t){return e(t._elm).appendTo(this.list),this},addSeparator:function(){return e(this.options.separator.template).appendTo(this.list),this}});return o.register(s),n.Toolbar=s}),t("skylark-widgets-toolbars/ToolbarItem",["skylark-langx/langx","skylark-domx-query","skylark-widgets-base/Widget","./toolbars"],function(t,e,o,n){var a=o.inherit({options:{template:'<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',menu:{menuWrapper:'<div class="toolbar-menu"></div>',menuItem:'<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',separator:'<li><span class="separator"></span></li>'}},_construct:function(t){this.action=t.action,this.toolbar=t.toolbar,o.prototype._construct.call(this,t)},_init:function(){this.toolbar.addToolItem(this),this.wrapper=e(this._elm),this.el=this.wrapper.find("a.toolbar-item"),this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this),this.setIcon(this.icon),this.menu&&(this.menuWrapper=e(this.options.menu.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu());var t=this;this.el.on("mousedown",function(e){var o;return e.preventDefault(),!t.el.hasClass("disabled")&&(t.menu?(t.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"),t.wrapper.is(".menu-on")&&(t.menuWrapper.offset().left+t.menuWrapper.outerWidth()+5-t.toolbar.offset().left-t.toolbar.outerWidth()>0&&t.menuWrapper.css({left:"auto",right:0}),t.trigger("menuexpand")),!1):(o=t.el.data("param"),t.command(o),!1))}),this.wrapper.on("click","a.menu-item",function(o){var n,a;return o.preventDefault(),n=e(o.currentTarget),t.wrapper.removeClass("menu-on"),!n.hasClass("disabled")&&(t.toolbar.removeClass("menu-on"),a=n.data("param"),t.command(a),!1)}),this.wrapper.on("mousedown","a.menu-item",function(t){return!1}),this.action.state.on("changed",function(e,o){var n=o.data;void 0!==n.active&&t._doActive(n.active.value),void 0!==n.disabled&&t._doDisabled(n.disabled.value)})},_doActive:function(t){return this.el.toggleClass("active",t)},_doDisabled:function(t){return this.el.toggleClass("disabled",t)},iconClassOf:function(t){return t?this.toolbar.options.classes&&this.toolbar.options.classes.icons&&this.toolbar.options.classes.icons[t]?this.toolbar.options.classes.icons[t]:"wordpad-icon wordpad-icon-"+t:""},setIcon:function(t){return this.el.find("span").removeClass().addClass(this.iconClassOf(t)).text(this.text)},render:function(){if(this.toolbar.addToolItem(this),this.wrapper=e(this._elm),this.el=this.wrapper.find("a.toolbar-item"),this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this),this.setIcon(this.icon),this.menu)return this.menuWrapper=e(this.options.menu.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu()},renderMenu:function(){var o,n,a,s,i,r,l,u;if(t.isArray(this.menu)){for(this.menuEl=e("<ul/>").appendTo(this.menuWrapper),r=this.menu,u=[],a=0,s=r.length;a<s;a++)"|"!==(i=r[a])?(n=e(this.options.menu.menuItem).appendTo(this.menuEl),o=n.find("a.menu-item").attr({title:null!=(l=i.title)?l:i.text,"data-param":i.param}).addClass("menu-item-"+i.name),i.icon?u.push(o.find("span").addClass(this.iconClassOf(i.icon))):u.push(o.find("span").text(i.text))):e(this.options.menu.separator).appendTo(this.menuEl);return u}},command:function(t){this.action.execute(t)},name:{get:function(){return this.action.name}},icon:{get:function(){return this.action.icon}},title:{get:function(){return this.action.tooltip}},text:{get:function(){return this.action.text}},htmlTag:{get:function(){return this.action.htmlTag}},disableTag:{get:function(){return this.action.disableTag}},menu:{get:function(){return this.action.menu}},editable:{get:function(){return this._options.editable}},active:{get:function(){return this.action.active}},disabled:{get:function(){return this.action.disabled}},needFocus:{get:function(){return this.action.needFocus}},shortcut:{get:function(){return this.action.shortcut}}});return n.ToolbarItem=a}),t("skylark-widgets-toolbars/Toolbar",["skylark-langx/langx","skylark-domx-query","skylark-domx-plugins-panels/Toolbar","skylark-widgets-base/Widget","./toolbars","./ToolbarItem"],function(t,e,o,n,a,s){var i=n.inherit({klassName:"Toolbar",pluginName:"lark.wordpad.toolbar",options:{template:'<div class="domx-toolbar"><ul></ul></div>'},_construct:function(t,e){n.prototype._construct.call(this,t,e)},_init:function(){this._xtoolbar=o.instantiate(this._elm,this.options),this.buttons=[];for(var t=this.options.actions,e=0;e<t.length;e++){var n=t[e];if("|"!==n.name){var a=n.toolItemCtor;a||(a=s),this.buttons.push(new a({action:n,toolbar:this}))}else this._xtoolbar.addSeparator()}},addToolItem:function(t){this._xtoolbar.addToolItem(t)},findButton:function(t){var e;return null!=(e=this._xtoolbar.list.find(".toolbar-item-"+t).data("button"))?e:null}});return i.addButton=function(t){return this.buttons[t.prototype.name]=t},i.buttons={},a.Toolbar=i}),t("skylark-widgets-toolbars/main",["./toolbars","./Toolbar","./ToolbarItem"],function(t){return t}),t("skylark-widgets-toolbars",["skylark-widgets-toolbars/main"],function(t){return t})}(o),!n){var i=require("skylark-langx-ns");a?module.exports=i:e.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-widgets-toolbars.js.map
