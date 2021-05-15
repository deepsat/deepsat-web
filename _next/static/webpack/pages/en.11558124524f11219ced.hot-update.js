webpackHotUpdate_N_E("pages/en",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _responsiveContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveContainer */ "./components/responsiveContainer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




var _jsxFileName = "/home/pitek/projects/deepsat/web/components/header.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var logo = __webpack_require__(/*! ../images/logo_web_brand.svg */ "./images/logo_web_brand.svg");

var MenuItem = function MenuItem(_ref) {
  var href = _ref.href,
      locale = _ref.locale,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["href", "locale", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread(_objectSpread({}, {
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var locales = {
    pl: "",
    en: "en"
  };
  var curr = router.route.slice(-2);
  return locales.entries.map(function (locale) {
    console.log(locale);
    return locale == curr ? undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Link"], _objectSpread(_objectSpread({}, props), {}, {
      href: "/".concat(locale),
      display: "flex",
      alignItems: "center",
      locale: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        as: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaGlobeAfrica"],
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
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c2 = LanguageSwitcher;

var useBreakpoint = function useBreakpoint(breakpoint, value) {
  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakpoint, value);
};

var Header = function Header(_ref3) {
  _s3();

  var _s2 = $RefreshSig$();

  var menu = _ref3.menu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isTop = _useState[0],
      setTop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    return setOpen(!isOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pos: "fixed",
    top: "0",
    insetX: "0",
    bg: isTop ? "transparent" : "white",
    shadow: isTop ? undefined : "lg",
    transition: "background-color ease-in-out 200ms",
    zIndex: "sticky",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_responsiveContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        px: {
          base: 8,
          md: 16
        },
        align: "center",
        h: "24",
        pos: "relative",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: "/#hero",
          passHref: true,
          transition: isTop ? "opacity ease-in-out 200ms, visibility 0s 200ms" : "opacity ease-in-out 200ms, visibility 0s 0s",
          visibility: isTop ? "hidden" : "unset",
          opacity: isTop ? "0" : "unset",
          flexShrink: "0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
          minW: "auto",
          minH: "auto",
          variant: "link",
          onClick: toggleOpen,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            as: react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdMenu"],
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
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
          children: [menu.map(_s2(function (_ref4) {
            _s2();

            var label = _ref4.label,
                item = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, ["label"]);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuItem, _objectSpread(_objectSpread({}, item), {}, {
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
          })), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LanguageSwitcher, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibG9nbyIsInJlcXVpcmUiLCJNZW51SXRlbSIsImhyZWYiLCJsb2NhbGUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsZXMiLCJwbCIsImVuIiwiY3VyciIsInJvdXRlIiwic2xpY2UiLCJlbnRyaWVzIiwibWFwIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsIkZhR2xvYmVBZnJpY2EiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInVzZUJyZWFrcG9pbnQiLCJicmVha3BvaW50IiwidmFsdWUiLCJIZWFkZXIiLCJtZW51IiwidXNlU3RhdGUiLCJpc1RvcCIsInNldFRvcCIsImlzT3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwidXNlRWZmZWN0Iiwib25zY3JvbGwiLCJjdXJyZW50Iiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJwIiwiYmFzZSIsIm1kIiwic3JjU2V0IiwiTWRNZW51IiwibGFiZWwiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGlFQUFELENBQXBCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTBDO0FBQUEsTUFBdkNDLElBQXVDLFFBQXZDQSxJQUF1QztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDekQsc0JBQ0UscUVBQUMsNkNBQUQsZ0RBQTJCO0FBQUVILFFBQUksRUFBSkEsSUFBRjtBQUFRQyxV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QSxhLEVBR25CQSxhLEVBSUFBLGEsRUFJdUJBLGEsRUFTdkJBLGEsRUFpQkNBLGEsRUFDZ0JBLGEsRUFHYkEsYTs7O01BM0dmRyxNO0FBcUhTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi4xMTU1ODEyNDUyNGYxMTIxOWNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBMaW5rLFxuICBGbGV4LFxuICBTcGFjZXIsXG4gIEltYWdlLFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlc3BvbnNpdmVDb250YWluZXIgZnJvbSBcIi4vcmVzcG9uc2l2ZUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWRNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZhR2xvYmVBZnJpY2EgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmNvbnN0IGxvZ28gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2xvZ29fd2ViX2JyYW5kLnN2Z1wiKTtcblxuY29uc3QgTWVudUl0ZW0gPSAoeyBocmVmLCBsb2NhbGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEN1c3RvbUxpbmsga2V5PXtocmVmfSB7Li4ueyBocmVmLCBsb2NhbGUgfX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0N1c3RvbUxpbms+XG4gICk7XG59O1xuTWVudUl0ZW0uZGVmYXVsdFByb3BzID0ge307XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxvY2FsZXMgPSB7XG4gICAgcGw6IFwiXCIsXG4gICAgZW46IFwiZW5cIixcbiAgfTtcbiAgY29uc3QgY3VyciA9IHJvdXRlci5yb3V0ZS5zbGljZSgtMik7XG4gIHJldHVybiBsb2NhbGVzLmVudHJpZXMubWFwKChsb2NhbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhbGUpO1xuICAgIHJldHVybiBsb2NhbGUgPT0gY3VyciA/IHVuZGVmaW5lZCA6IChcbiAgICAgIDxMaW5rXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaHJlZj17YC8ke2xvY2FsZX1gfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBsb2NhbGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8SWNvbiBhcz17RmFHbG9iZUFmcmljYX0gbXI9XCIyXCIgLz4ge2xvY2FsZS50b0xvY2FsZVVwcGVyQ2FzZSgpfVxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgdXNlQnJlYWtwb2ludCA9IChicmVha3BvaW50LCB2YWx1ZSkgPT4ge1xuICByZXR1cm4geyBbYnJlYWtwb2ludF06IHZhbHVlIH07XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBtZW51IH0pID0+IHtcbiAgY29uc3QgW2lzVG9wLCBzZXRUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKCFpc09wZW4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHdpbmRvdy5zY3JvbGxZIDwgMTA7XG4gICAgICBpZiAoY3VycmVudCAhPT0gaXNUb3ApIHtcbiAgICAgICAgc2V0VG9wKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbnNjcm9sbCk7XG4gICAgb25zY3JvbGwoKTtcbiAgfSk7XG4gIGNvbnN0IGJwID0gXCJsZ1wiO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvcz1cImZpeGVkXCJcbiAgICAgIHRvcD1cIjBcIlxuICAgICAgaW5zZXRYPVwiMFwiXG4gICAgICBiZz17aXNUb3AgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICBzaGFkb3c9e2lzVG9wID8gdW5kZWZpbmVkIDogXCJsZ1wifVxuICAgICAgdHJhbnNpdGlvbj1cImJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMjAwbXNcIlxuICAgICAgekluZGV4PVwic3RpY2t5XCJcbiAgICA+XG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPEZsZXggcHg9e3sgYmFzZTogOCwgbWQ6IDE2IH19IGFsaWduPVwiY2VudGVyXCIgaD1cIjI0XCIgcG9zPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8Q3VzdG9tTGlua1xuICAgICAgICAgICAgaHJlZj1cIi8jaGVyb1wiXG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17XG4gICAgICAgICAgICAgIGlzVG9wXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHkgZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMjAwbXNcIlxuICAgICAgICAgICAgICAgIDogXCJvcGFjaXR5IGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDBzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpc2liaWxpdHk9e2lzVG9wID8gXCJoaWRkZW5cIiA6IFwidW5zZXRcIn1cbiAgICAgICAgICAgIG9wYWNpdHk9e2lzVG9wID8gXCIwXCIgOiBcInVuc2V0XCJ9XG4gICAgICAgICAgICBmbGV4U2hyaW5rPVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIGg9XCIxMFwiIHNyYz17bG9nb30gc3JjU2V0PXtsb2dvLnNyY1NldH0gLz5cbiAgICAgICAgICA8L0N1c3RvbUxpbms+XG4gICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBtaW5XPVwiYXV0b1wiXG4gICAgICAgICAgICBtaW5IPVwiYXV0b1wiXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxuICAgICAgICAgICAgaWNvbj17PEljb24gYXM9e01kTWVudX0gdz1cIjZcIiBoPVwiNlwiIC8+fVxuICAgICAgICAgICAgZGlzcGxheT17dXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpfVxuICAgICAgICAgICAgY29sb3I9e2lzVG9wID8gXCJ3aGl0ZVwiIDogXCJicmFuZC5kZWZhdWx0XCJ9XG4gICAgICAgICAgICBtbD1cIjRcIlxuICAgICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICBkaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgYmFzZTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJyb3dcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcG9zaXRpb249e3sgYmFzZTogXCJhYnNvbHV0ZVwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcInN0YXRpY1wiKSB9fVxuICAgICAgICAgICAgbGVmdD1cIjBcIlxuICAgICAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgICAgIHRvcD1cIjEwMCVcIlxuICAgICAgICAgICAgYmc9e3sgYmFzZTogXCJ3aGl0ZVwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIikgfX1cbiAgICAgICAgICAgIG92ZXJmbG93WT17e1xuICAgICAgICAgICAgICBiYXNlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybT17e1xuICAgICAgICAgICAgICBiYXNlOiBpc09wZW4gPyBudWxsIDogXCJzY2FsZVkoMClcIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJ1bnNldFwiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49XCJ0b3BcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFpc09wZW59XG4gICAgICAgICAgICBib3hTaGFkb3c9e3sgYmFzZTogXCJsZ1wiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIikgfX1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImJhc2VcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17XG4gICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMHNcIlxuICAgICAgICAgICAgICAgIDogXCJ0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMjAwbXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlzaWJpbGl0eT17e1xuICAgICAgICAgICAgICBiYXNlOiBpc09wZW4gPyBcInVuc2V0XCIgOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInVuc2V0XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVudS5tYXAoKHsgbGFiZWwsIC4uLml0ZW0gfSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBteD17dXNlQnJlYWtwb2ludChicCwgXCI0XCIpfVxuICAgICAgICAgICAgICAgIHBsPXt7IGJhc2U6IFwiOFwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIjBcIikgfX1cbiAgICAgICAgICAgICAgICBwdD1cIjRcIlxuICAgICAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgICAgICAgY29sb3I9e3VzZUJyZWFrcG9pbnQoYnAsIGlzVG9wID8gXCJ3aGl0ZVwiIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlclxuICAgICAgICAgICAgICBteD17dXNlQnJlYWtwb2ludChicCwgXCI0XCIpfVxuICAgICAgICAgICAgICBwbD17eyBiYXNlOiBcIjhcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCIwXCIpIH19XG4gICAgICAgICAgICAgIHB0PVwiNFwiXG4gICAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VCcmVha3BvaW50KGJwLCBpc1RvcCA/IFwid2hpdGVcIiA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==