webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(160);

	var ReactDom = babelHelpers.interopRequireWildcard(_reactDom);

	var _App = __webpack_require__(161);

	var _App2 = babelHelpers.interopRequireDefault(_App);

	ReactDom.render(React.createElement(_App2.default, null), document.getElementById("root")); /// <reference path="../typings/tsd.d.ts" />

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	var _ContentPage = __webpack_require__(162);

	var _ContentPage2 = babelHelpers.interopRequireDefault(_ContentPage);

	var _CommonActionCreators = __webpack_require__(181);

	var CommonActionCreators = babelHelpers.interopRequireWildcard(_CommonActionCreators);

	var _BaseComponent2 = __webpack_require__(164);

	var _BaseComponent3 = babelHelpers.interopRequireDefault(_BaseComponent2);

	__webpack_require__(185);
	__webpack_require__(186);

	var App = function (_BaseComponent) {
	    babelHelpers.inherits(App, _BaseComponent);

	    function App() {
	        babelHelpers.classCallCheck(this, App);
	        return babelHelpers.possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
	    }

	    App.prototype.doRender = function doRender() {
	        return React.createElement("div", null, React.createElement(_ContentPage2.default, null));
	    };

	    App.prototype.componentDidMount = function componentDidMount() {
	        CommonActionCreators.loadApp();
	    };

	    return App;
	}(_BaseComponent3.default);

	exports.default = App;

	;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	var _ContentHeader = __webpack_require__(163);

	var _ContentHeader2 = babelHelpers.interopRequireDefault(_ContentHeader);

	var _ContentBody = __webpack_require__(169);

	var _ContentBody2 = babelHelpers.interopRequireDefault(_ContentBody);

	var _CommonStore = __webpack_require__(172);

	var _CommonStore2 = babelHelpers.interopRequireDefault(_CommonStore);

	var _CommonActionCreators = __webpack_require__(181);

	var CommonActionCreators = babelHelpers.interopRequireWildcard(_CommonActionCreators);

	var _SmartComponent2 = __webpack_require__(182);

	var _SmartComponent3 = babelHelpers.interopRequireDefault(_SmartComponent2);

	/* tslint:disable:no-any */
	var styles = __webpack_require__(183);

	var ContentPage = function (_SmartComponent) {
	    babelHelpers.inherits(ContentPage, _SmartComponent);

	    function ContentPage() {
	        babelHelpers.classCallCheck(this, ContentPage);
	        return babelHelpers.possibleConstructorReturn(this, _SmartComponent.call(this, _CommonStore2.default));
	    }

	    ContentPage.prototype.doRender = function doRender() {
	        var _this2 = this;

	        var headerTitle = "Welcome to Lorem Ipsum";
	        return React.createElement("div", { className: styles.container }, React.createElement(_ContentHeader2.default, { isActive: true, title: headerTitle }), React.createElement(_ContentBody2.default, { ref: "contentBodyRef", title: this.state.bodyTitle, summary: this.state.bodySummary }, React.createElement("div", { className: styles.hello }, React.createElement("button", { onClick: function onClick() {
	                return _this2.onButtonClick();
	            } }, "Say Hello!"), React.createElement("span", null, " You said ", this.state.greeting ? "'" + this.state.greeting + "'" : "nothing", "."))));
	    };

	    ContentPage.prototype.getState = function getState() {
	        return {
	            bodyTitle: _CommonStore2.default.getBodyTitle(),
	            bodySummary: _CommonStore2.default.getBodySummary(),
	            greeting: _CommonStore2.default.getGreeting()
	        };
	    };

	    ContentPage.prototype.onButtonClick = function onButtonClick() {
	        CommonActionCreators.sayHello();
	    };

	    return ContentPage;
	}(_SmartComponent3.default);

	exports.default = ContentPage;

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	var _BaseComponent2 = __webpack_require__(164);

	var _BaseComponent3 = babelHelpers.interopRequireDefault(_BaseComponent2);

	/* tslint:disable:no-any */
	var styles = __webpack_require__(165);
	;

	var ContentHeader = function (_BaseComponent) {
	    babelHelpers.inherits(ContentHeader, _BaseComponent);

	    function ContentHeader() {
	        babelHelpers.classCallCheck(this, ContentHeader);
	        return babelHelpers.possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
	    }

	    ContentHeader.prototype.doRender = function doRender() {
	        if (!this.props.isActive) {
	            return null;
	        }
	        return React.createElement("div", { className: styles.container }, this.props.title);
	    };

	    return ContentHeader;
	}(_BaseComponent3.default);

	exports.default = ContentHeader;

	;

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	/**
	 * Base component which wraps render function in a try catch structure
	 * Any child components who extends from this component will get protection when
	 * Exception thrown, so protect component life cycle.
	 */

	var BaseComponent = function (_React$Component) {
	    babelHelpers.inherits(BaseComponent, _React$Component);

	    function BaseComponent() {
	        babelHelpers.classCallCheck(this, BaseComponent);
	        return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    BaseComponent.prototype.render = function render() {
	        var result = void 0;
	        try {
	            result = this.doRender();
	        } catch (error) {
	            this.logError(error);
	            result = null;
	        }
	        return result;
	    };
	    /**
	     * API to log exception
	     */


	    BaseComponent.prototype.logError = function logError(error) {
	        /* tslint:disable */
	        var componentName = this._reactInternalInstance._currentElement.type.name;
	        var componentDetail = this._reactInternalInstance._currentElement.type.toString();
	        var propsString = "";
	        for (var propName in this.props) {
	            propsString += " " + propName;
	        }
	        /* tslint:enable */
	        console.error(error, { Component: componentName, ComponentDetail: componentDetail, PropList: propsString });
	        console.error("A component (" + componentName + ") had an error during render. " + "Please fix this immediately, even if you don't own this component. " + "This message is designed to be annoying so that the problem is addressed.");
	    };

	    return BaseComponent;
	}(React.Component);

	;
	exports.default = BaseComponent;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/less-loader/index.js?-compress!./ContentHeader.module.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/less-loader/index.js?-compress!./ContentHeader.module.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, ".ContentHeader-module__container___3m6Cy{color:#025204;border:1px;background-color:#afdeb0;text-align:center;height:40px;line-height:40px}", ""]);

	// exports
	exports.locals = {
		"container": "ContentHeader-module__container___3m6Cy"
	};

/***/ },

/***/ 167:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var React = babelHelpers.interopRequireWildcard(_react);

	var _BaseComponent2 = __webpack_require__(164);

	var _BaseComponent3 = babelHelpers.interopRequireDefault(_BaseComponent2);

	/* tslint:disable:no-any */
	var styles = __webpack_require__(170);
	;

	var ContentBody = function (_BaseComponent) {
	    babelHelpers.inherits(ContentBody, _BaseComponent);

	    function ContentBody() {
	        babelHelpers.classCallCheck(this, ContentBody);
	        return babelHelpers.possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
	    }

	    ContentBody.prototype.doRender = function doRender() {
	        return React.createElement("div", { className: styles.container }, React.createElement("div", { className: styles.title }, this.props.title), React.createElement("span", { className: styles.summaryTitle }, "Summary:"), React.createElement("div", { ref: "summaryRef", className: styles.summary }, this.props.summary), this.props.children);
	    };

	    return ContentBody;
	}(_BaseComponent3.default);

	exports.default = ContentBody;

	;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/less-loader/index.js?-compress!./ContentBody.module.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/less-loader/index.js?-compress!./ContentBody.module.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, ".ContentBody-module__container___1StBP{background-color:#e6f2e9;height:100%;padding:10px}.ContentBody-module__title___2vPqk{font-size:24px;padding-top:10px;padding-bottom:10px;font-weight:700}.ContentBody-module__summary___25sJy{font-size:20px}.ContentBody-module__summaryTitle___17IEN{font-weight:700}", ""]);

	// exports
	exports.locals = {
		"container": "ContentBody-module__container___1StBP",
		"title": "ContentBody-module__title___2vPqk",
		"summary": "ContentBody-module__summary___25sJy",
		"summaryTitle": "ContentBody-module__summaryTitle___17IEN ContentBody-module__summary___25sJy"
	};

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _BaseStore2 = __webpack_require__(173);

	var _BaseStore3 = babelHelpers.interopRequireDefault(_BaseStore2);

	var _Dispatcher = __webpack_require__(174);

	var _Dispatcher2 = babelHelpers.interopRequireDefault(_Dispatcher);

	var _AppLoadedAction = __webpack_require__(178);

	var _AppLoadedAction2 = babelHelpers.interopRequireDefault(_AppLoadedAction);

	var _SayHelloAction = __webpack_require__(180);

	var _SayHelloAction2 = babelHelpers.interopRequireDefault(_SayHelloAction);

	var CommonStore = function (_BaseStore) {
	    babelHelpers.inherits(CommonStore, _BaseStore);

	    function CommonStore() {
	        babelHelpers.classCallCheck(this, CommonStore);

	        var _this = babelHelpers.possibleConstructorReturn(this, _BaseStore.call(this));

	        _this.messages = [];
	        _Dispatcher2.default.register(function (action) {
	            return _this.processActions(action);
	        });
	        return _this;
	    }

	    CommonStore.prototype.getBodyTitle = function getBodyTitle() {
	        if (this.bodyTitle) {
	            return this.bodyTitle.toUpperCase();
	        }
	        return "";
	    };

	    CommonStore.prototype.getBodySummary = function getBodySummary() {
	        return this.bodySummary;
	    };

	    CommonStore.prototype.getGreeting = function getGreeting() {
	        return this.messages.join(", ");
	    };

	    CommonStore.prototype.processActions = function processActions(action) {
	        if (action instanceof _AppLoadedAction2.default) {
	            this.bodyTitle = action.bodyTitle;
	            this.bodySummary = action.bodySummary;
	            this.emitChange();
	        } else if (action instanceof _SayHelloAction2.default) {
	            this.messages.push("Hello");
	            this.emitChange();
	        }
	    };

	    return CommonStore;
	}(_BaseStore3.default);

	exports.default = new CommonStore();

/***/ },

/***/ 173:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var BaseStore = function () {
	    function BaseStore() {
	        babelHelpers.classCallCheck(this, BaseStore);

	        this.listeners = null;
	        this.listeners = [];
	    }

	    BaseStore.prototype.addListener = function addListener(listener) {
	        this.listeners.push(listener);
	    };

	    BaseStore.prototype.removeListener = function removeListener(listener) {
	        var index = this.listeners.indexOf(listener);
	        if (index > -1) {
	            this.listeners.splice(index, 1);
	        } else {
	            // We should never be trying to remove a listener we have not registered
	            console.error("BaseStore: Trying to remove a listener that was never added. This indicates a bug in a component.");
	        }
	    };

	    BaseStore.prototype.emitChange = function emitChange() {
	        for (var i = 0; i < this.listeners.length; i++) {
	            this.listeners[i]();
	        }
	    };

	    return BaseStore;
	}();

	exports.default = BaseStore;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _flux = __webpack_require__(175);

	var Flux = babelHelpers.interopRequireWildcard(_flux);
	exports.default = new Flux.Dispatcher();

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _ActionLogEntry = __webpack_require__(179);

	var _ActionLogEntry2 = babelHelpers.interopRequireDefault(_ActionLogEntry);

	var AppLoadedAction = function () {
	    function AppLoadedAction(bodyTitle, bodySummary) {
	        babelHelpers.classCallCheck(this, AppLoadedAction);

	        this.bodyTitle = bodyTitle;
	        this.bodySummary = bodySummary;
	    }

	    AppLoadedAction.prototype.toLogEntry = function toLogEntry() {
	        return new _ActionLogEntry2.default("AppLoadedAction", {
	            "bodyTitle": this.bodyTitle
	        });
	    };

	    return AppLoadedAction;
	}();

	exports.default = AppLoadedAction;

/***/ },

/***/ 179:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var ActionLogEntry = function () {
	    function ActionLogEntry(name, logProperties) {
	        babelHelpers.classCallCheck(this, ActionLogEntry);

	        this.name = name;
	        this.logProperties = logProperties;
	    }

	    ActionLogEntry.prototype.toString = function toString() {
	        return this.name + " | " + JSON.stringify(this.logProperties);
	    };

	    return ActionLogEntry;
	}();

	exports.default = ActionLogEntry;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _ActionLogEntry = __webpack_require__(179);

	var _ActionLogEntry2 = babelHelpers.interopRequireDefault(_ActionLogEntry);

	var SayHelloAction = function () {
	    function SayHelloAction() {
	        babelHelpers.classCallCheck(this, SayHelloAction);
	    }

	    SayHelloAction.prototype.toLogEntry = function toLogEntry() {
	        return new _ActionLogEntry2.default("SayHelloAction");
	    };

	    return SayHelloAction;
	}();

	exports.default = SayHelloAction;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.loadApp = loadApp;
	exports.sayHello = sayHello;

	var _Dispatcher = __webpack_require__(174);

	var _Dispatcher2 = babelHelpers.interopRequireDefault(_Dispatcher);

	var _AppLoadedAction = __webpack_require__(178);

	var _AppLoadedAction2 = babelHelpers.interopRequireDefault(_AppLoadedAction);

	var _SayHelloAction = __webpack_require__(180);

	var _SayHelloAction2 = babelHelpers.interopRequireDefault(_SayHelloAction);

	function loadApp() {
	    var bodyTitle = "The standard Lorem Ipsum passage, used since the 1500s";
	    var bodySummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" + "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" + "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt" + "in culpa qui officia deserunt mollit anim id est laborum.";
	    _Dispatcher2.default.dispatch(new _AppLoadedAction2.default(bodyTitle, bodySummary));
	}
	function sayHello() {
	    _Dispatcher2.default.dispatch(new _SayHelloAction2.default());
	}

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _BaseComponent2 = __webpack_require__(164);

	var _BaseComponent3 = babelHelpers.interopRequireDefault(_BaseComponent2);

	/**
	 * The smart component hooks into the component lifecycle and registers/deregisters listeners to stores
	 */

	var SmartComponent = function (_BaseComponent) {
	    babelHelpers.inherits(SmartComponent, _BaseComponent);

	    function SmartComponent() {
	        babelHelpers.classCallCheck(this, SmartComponent);

	        /*
	         * This is an antipattern, so use it only if there is no other way.
	         * See: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
	         */

	        var _this = babelHelpers.possibleConstructorReturn(this, _BaseComponent.call(this));

	        _this.isComponentMounted = false;
	        _this.onChangeInternal = _this.onChange.bind(_this);

	        for (var _len = arguments.length, stores = Array(_len), _key = 0; _key < _len; _key++) {
	            stores[_key] = arguments[_key];
	        }

	        _this.stores = stores;
	        _this.state = _this.getState();
	        _this.isComponentMounted = false;
	        return _this;
	    }

	    SmartComponent.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;

	        this.isComponentMounted = true;
	        if (this.stores !== undefined && this.stores !== null) {
	            this.stores.forEach(function (store) {
	                store.addListener(_this2.onChangeInternal);
	            });
	        }
	    };

	    SmartComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	        var _this3 = this;

	        this.isComponentMounted = false;
	        if (this.stores !== undefined && this.stores !== null) {
	            this.stores.forEach(function (store) {
	                store.removeListener(_this3.onChangeInternal);
	            });
	        }
	    };
	    /** Invoked when a store emits a change event */


	    SmartComponent.prototype.onChange = function onChange() {
	        this.setStateIfMounted(this.getState());
	    };

	    SmartComponent.prototype.setStateIfMounted = function setStateIfMounted(state) {
	        if (this.isComponentMounted) {
	            this.setState(state);
	        }
	    };

	    return SmartComponent;
	}(_BaseComponent3.default);

	;
	exports.default = SmartComponent;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/less-loader/index.js?-compress!./ContentPage.module.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/less-loader/index.js?-compress!./ContentPage.module.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, ".ContentPage-module__container___1COw_{height:100%}.ContentPage-module__hello___37EYk{margin-top:40px;font-size:20px;color:red}", ""]);

	// exports
	exports.locals = {
		"container": "ContentPage-module__container___1COw_",
		"hello": "ContentPage-module__hello___37EYk"
	};

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _Dispatcher = __webpack_require__(174);

	var _Dispatcher2 = babelHelpers.interopRequireDefault(_Dispatcher);

	/**
	 * Logger that logs all actions
	 */

	var ActionLogger = function () {
	    function ActionLogger() {
	        var _this = this;

	        babelHelpers.classCallCheck(this, ActionLogger);

	        this.processActions = function (action) {
	            _this.log(action);
	        };
	        _Dispatcher2.default.register(this.processActions);
	    }

	    ActionLogger.prototype.log = function log(action) {
	        var logEntry = action.toLogEntry();
	        if (logEntry != null) {
	            console.log("ActionLogger: " + logEntry.toString());
	        }
	    };

	    return ActionLogger;
	}();

	exports.default = new ActionLogger();

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/less-loader/index.js?compress!./global.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/less-loader/index.js?compress!./global.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "body{margin:0;padding:0}", ""]);

	// exports


/***/ }

});