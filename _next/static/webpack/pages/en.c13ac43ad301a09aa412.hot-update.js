webpackHotUpdate_N_E("pages/en",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _responsiveContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveContainer */ "./components/responsiveContainer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");





var _jsxFileName = "/home/pitek/projects/deepsat/web/components/header.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var logo = __webpack_require__(/*! ../images/logo_web_brand.svg */ "./images/logo_web_brand.svg");

var MenuItem = function MenuItem(_ref) {
  var href = _ref.href,
      locale = _ref.locale,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["href", "locale", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread(_objectSpread({}, {
    href: href,
    locale: locale
  }), props), {}, {
    children: children
  }), href, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = MenuItem;
MenuItem.defaultProps = {};

var LanguageSwitcher = function LanguageSwitcher(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var locales = {
    pl: "",
    en: "en"
  };
  var curr = router.route.slice(1);
  return Object.entries(locales).map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        locale = _ref3[0],
        url = _ref3[1];

    console.log(locale);
    return url == curr ? undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], _objectSpread(_objectSpread({}, props), {}, {
      href: "/".concat(url),
      display: "flex",
      alignItems: "center",
      locale: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        as: react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaGlobeAfrica"],
        mr: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), " ", locale.toLocaleUpperCase()]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
  });
};

_s(LanguageSwitcher, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c2 = LanguageSwitcher;

var useBreakpoint = function useBreakpoint(breakpoint, value) {
  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, breakpoint, value);
};

var Header = function Header(_ref5) {
  _s3();

  var _s2 = $RefreshSig$();

  var menu = _ref5.menu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      isTop = _useState[0],
      setTop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    return setOpen(!isOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var onscroll = function onscroll() {
      var current = window.scrollY < 10;

      if (current !== isTop) {
        setTop(current);
      }
    };

    document.addEventListener("scroll", onscroll);
    onscroll();
  });
  var bp = "lg";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    pos: "fixed",
    top: "0",
    insetX: "0",
    bg: isTop ? "transparent" : "white",
    shadow: isTop ? undefined : "lg",
    transition: "background-color ease-in-out 200ms",
    zIndex: "sticky",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_responsiveContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
        px: {
          base: 8,
          md: 16
        },
        align: "center",
        h: "24",
        pos: "relative",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
          href: "/#hero",
          passHref: true,
          transition: isTop ? "opacity ease-in-out 200ms, visibility 0s 200ms" : "opacity ease-in-out 200ms, visibility 0s 0s",
          visibility: isTop ? "hidden" : "unset",
          opacity: isTop ? "0" : "unset",
          flexShrink: "0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
            h: "10",
            src: logo,
            srcSet: logo.srcSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
          minW: "auto",
          minH: "auto",
          variant: "link",
          onClick: toggleOpen,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            as: react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdMenu"],
            w: "6",
            h: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 19
          }, _this),
          display: useBreakpoint(bp, "none"),
          color: isTop ? "white" : "brand.default",
          ml: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
          wrap: "wrap",
          justify: "flex-end",
          as: "nav",
          direction: _objectSpread({
            base: "column"
          }, useBreakpoint(bp, "row")),
          position: _objectSpread({
            base: "absolute"
          }, useBreakpoint(bp, "static")),
          left: "0",
          right: "0",
          top: "100%",
          bg: _objectSpread({
            base: "white"
          }, useBreakpoint(bp, "none")),
          overflowY: _objectSpread({
            base: "hidden"
          }, useBreakpoint(bp, undefined)),
          transform: _objectSpread({
            base: isOpen ? null : "scaleY(0)"
          }, useBreakpoint(bp, "unset")),
          transformOrigin: "top",
          "aria-hidden": !isOpen,
          boxShadow: _objectSpread({
            base: "lg"
          }, useBreakpoint(bp, "none")),
          borderRadius: "base",
          transition: isOpen ? "transform ease-in-out 200ms, visibility 0s 0s" : "transform ease-in-out 200ms, visibility 0s 200ms",
          visibility: _objectSpread({
            base: isOpen ? "unset" : "hidden"
          }, useBreakpoint(bp, "unset")),
          children: [menu.map(_s2(function (_ref6) {
            _s2();

            var label = _ref6.label,
                item = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref6, ["label"]);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItem, _objectSpread(_objectSpread({}, item), {}, {
              mx: useBreakpoint(bp, "4"),
              pl: _objectSpread({
                base: "8"
              }, useBreakpoint(bp, "0")),
              pt: "4",
              pb: "4",
              color: useBreakpoint(bp, isTop ? "white" : undefined),
              display: "block",
              children: label
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this);
          }, "8gwVeJznUSXJoaFZ53fzyIELE5w=", false, function () {
            return [useBreakpoint, useBreakpoint, useBreakpoint];
          })), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(LanguageSwitcher, {
            mx: useBreakpoint(bp, "4"),
            pl: _objectSpread({
              base: "8"
            }, useBreakpoint(bp, "0")),
            pt: "4",
            pb: "4",
            color: useBreakpoint(bp, isTop ? "white" : undefined),
            display: "block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s3(Header, "iSfnn4JXO0R+qwZnvglg0i8r77U=", false, function () {
  return [useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint];
});

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "MenuItem");
$RefreshReg$(_c2, "LanguageSwitcher");
$RefreshReg$(_c3, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJsb2dvIiwicmVxdWlyZSIsIk1lbnVJdGVtIiwiaHJlZiIsImxvY2FsZSIsImNoaWxkcmVuIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJMYW5ndWFnZVN3aXRjaGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlcyIsInBsIiwiZW4iLCJjdXJyIiwicm91dGUiLCJzbGljZSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiRmFHbG9iZUFmcmljYSIsInRvTG9jYWxlVXBwZXJDYXNlIiwidXNlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJ2YWx1ZSIsIkhlYWRlciIsIm1lbnUiLCJ1c2VTdGF0ZSIsImlzVG9wIiwic2V0VG9wIiwiaXNPcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJ1c2VFZmZlY3QiLCJvbnNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnAiLCJiYXNlIiwibWQiLCJzcmNTZXQiLCJNZE1lbnUiLCJsYWJlbCIsIml0ZW0iXSwibWFwcGluZ3Mi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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLmMxM2FjNDNhZDMwMWEwOWFhNDEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIExpbmssXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgSW1hZ2UsXG4gIEljb24sXG4gIEljb25CdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRhaW5lciBmcm9tIFwiLi9yZXNwb25zaXZlQ29udGFpbmVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZE1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRmFHbG9iZUFmcmljYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuY29uc3QgbG9nbyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbG9nb193ZWJfYnJhbmQuc3ZnXCIpO1xuXG5jb25zdCBNZW51SXRlbSA9ICh7IGhyZWYsIGxvY2FsZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tTGluayBrZXk9e2hyZWZ9IHsuLi57IGhyZWYsIGxvY2FsZSB9fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ3VzdG9tTGluaz5cbiAgKTtcbn07XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuY29uc3QgTGFuZ3VhZ2VTd2l0Y2hlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbG9jYWxlcyA9IHtcbiAgICBwbDogXCJcIixcbiAgICBlbjogXCJlblwiLFxuICB9O1xuICBjb25zdCBjdXJyID0gcm91dGVyLnJvdXRlLnNsaWNlKDEpO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMobG9jYWxlcykubWFwKChbbG9jYWxlLCB1cmxdKSA9PiB7XG4gICAgY29uc29sZS5sb2cobG9jYWxlKTtcbiAgICByZXR1cm4gdXJsID09IGN1cnIgPyB1bmRlZmluZWQgOiAoXG4gICAgICA8TGlua1xuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGhyZWY9e2AvJHt1cmx9YH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgbG9jYWxlPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPEljb24gYXM9e0ZhR2xvYmVBZnJpY2F9IG1yPVwiMlwiIC8+IHtsb2NhbGUudG9Mb2NhbGVVcHBlckNhc2UoKX1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IHVzZUJyZWFrcG9pbnQgPSAoYnJlYWtwb2ludCwgdmFsdWUpID0+IHtcbiAgcmV0dXJuIHsgW2JyZWFrcG9pbnRdOiB2YWx1ZSB9O1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgbWVudSB9KSA9PiB7XG4gIGNvbnN0IFtpc1RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4gc2V0T3BlbighaXNPcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB3aW5kb3cuc2Nyb2xsWSA8IDEwO1xuICAgICAgaWYgKGN1cnJlbnQgIT09IGlzVG9wKSB7XG4gICAgICAgIHNldFRvcChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25zY3JvbGwpO1xuICAgIG9uc2Nyb2xsKCk7XG4gIH0pO1xuICBjb25zdCBicCA9IFwibGdcIjtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBwb3M9XCJmaXhlZFwiXG4gICAgICB0b3A9XCIwXCJcbiAgICAgIGluc2V0WD1cIjBcIlxuICAgICAgYmc9e2lzVG9wID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxuICAgICAgc2hhZG93PXtpc1RvcCA/IHVuZGVmaW5lZCA6IFwibGdcIn1cbiAgICAgIHRyYW5zaXRpb249XCJiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zXCJcbiAgICAgIHpJbmRleD1cInN0aWNreVwiXG4gICAgPlxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDxGbGV4IHB4PXt7IGJhc2U6IDgsIG1kOiAxNiB9fSBhbGlnbj1cImNlbnRlclwiIGg9XCIyNFwiIHBvcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPEN1c3RvbUxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvI2hlcm9cIlxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgIHRyYW5zaXRpb249e1xuICAgICAgICAgICAgICBpc1RvcFxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5IGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDIwMG1zXCJcbiAgICAgICAgICAgICAgICA6IFwib3BhY2l0eSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAwc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aXNpYmlsaXR5PXtpc1RvcCA/IFwiaGlkZGVuXCIgOiBcInVuc2V0XCJ9XG4gICAgICAgICAgICBvcGFjaXR5PXtpc1RvcCA/IFwiMFwiIDogXCJ1bnNldFwifVxuICAgICAgICAgICAgZmxleFNocmluaz1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBoPVwiMTBcIiBzcmM9e2xvZ299IHNyY1NldD17bG9nby5zcmNTZXR9IC8+XG4gICAgICAgICAgPC9DdXN0b21MaW5rPlxuICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgbWluVz1cImF1dG9cIlxuICAgICAgICAgICAgbWluSD1cImF1dG9cIlxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3Blbn1cbiAgICAgICAgICAgIGljb249ezxJY29uIGFzPXtNZE1lbnV9IHc9XCI2XCIgaD1cIjZcIiAvPn1cbiAgICAgICAgICAgIGRpc3BsYXk9e3VzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKX1cbiAgICAgICAgICAgIGNvbG9yPXtpc1RvcCA/IFwid2hpdGVcIiA6IFwiYnJhbmQuZGVmYXVsdFwifVxuICAgICAgICAgICAgbWw9XCI0XCJcbiAgICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7XG4gICAgICAgICAgICAgIGJhc2U6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwicm93XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBvc2l0aW9uPXt7IGJhc2U6IFwiYWJzb2x1dGVcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJzdGF0aWNcIikgfX1cbiAgICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICAgICAgICB0b3A9XCIxMDAlXCJcbiAgICAgICAgICAgIGJnPXt7IGJhc2U6IFwid2hpdGVcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpIH19XG4gICAgICAgICAgICBvdmVyZmxvd1k9e3tcbiAgICAgICAgICAgICAgYmFzZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2Zvcm09e3tcbiAgICAgICAgICAgICAgYmFzZTogaXNPcGVuID8gbnVsbCA6IFwic2NhbGVZKDApXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwidW5zZXRcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPVwidG9wXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshaXNPcGVufVxuICAgICAgICAgICAgYm94U2hhZG93PXt7IGJhc2U6IFwibGdcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpIH19XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJiYXNlXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e1xuICAgICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgICA/IFwidHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDBzXCJcbiAgICAgICAgICAgICAgICA6IFwidHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDIwMG1zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpc2liaWxpdHk9e3tcbiAgICAgICAgICAgICAgYmFzZTogaXNPcGVuID8gXCJ1bnNldFwiIDogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJ1bnNldFwiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnUubWFwKCh7IGxhYmVsLCAuLi5pdGVtIH0pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAgbXg9e3VzZUJyZWFrcG9pbnQoYnAsIFwiNFwiKX1cbiAgICAgICAgICAgICAgICBwbD17eyBiYXNlOiBcIjhcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCIwXCIpIH19XG4gICAgICAgICAgICAgICAgcHQ9XCI0XCJcbiAgICAgICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VCcmVha3BvaW50KGJwLCBpc1RvcCA/IFwid2hpdGVcIiA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoZXJcbiAgICAgICAgICAgICAgbXg9e3VzZUJyZWFrcG9pbnQoYnAsIFwiNFwiKX1cbiAgICAgICAgICAgICAgcGw9e3sgYmFzZTogXCI4XCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwiMFwiKSB9fVxuICAgICAgICAgICAgICBwdD1cIjRcIlxuICAgICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgICAgICBjb2xvcj17dXNlQnJlYWtwb2ludChicCwgaXNUb3AgPyBcIndoaXRlXCIgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==