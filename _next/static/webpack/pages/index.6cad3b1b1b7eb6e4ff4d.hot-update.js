webpackHotUpdate_N_E("pages/index",{

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
  var locale = "en";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Link"], _objectSpread(_objectSpread({}, props), {}, {
    href: "/".concat(locale),
    display: "flex",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      as: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaGlobeAfrica"],
      mr: "2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), " ", locale.toLocaleUpperCase()]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
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
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
            lineNumber: 90,
            columnNumber: 19
          }, _this),
          display: useBreakpoint(bp, "none"),
          color: isTop ? "white" : "brand.default",
          ml: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
              lineNumber: 131,
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
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibG9nbyIsInJlcXVpcmUiLCJNZW51SXRlbSIsImhyZWYiLCJsb2NhbGUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInJvdXRlciIsInVzZVJvdXRlciIsIkZhR2xvYmVBZnJpY2EiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInVzZUJyZWFrcG9pbnQiLCJicmVha3BvaW50IiwidmFsdWUiLCJIZWFkZXIiLCJtZW51IiwidXNlU3RhdGUiLCJpc1RvcCIsInNldFRvcCIsImlzT3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwidXNlRWZmZWN0Iiwib25zY3JvbGwiLCJjdXJyZW50Iiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJwIiwidW5kZWZpbmVkIiwiYmFzZSIsIm1kIiwic3JjU2V0IiwiTWRNZW51IiwibWFwIiwibGFiZWwiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGlFQUFELENBQXBCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTBDO0FBQUEsTUFBdkNDLElBQXVDLFFBQXZDQSxJQUF1QztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDekQsc0JBQ0UscUVBQUMsNkNBQUQsZ0RBQTJCO0FBQUVILFFBQUksRUFBSkEsSUFBRjtBQUFRQyxVQUFNLEVBQU5BO0FBQVIsR0FBM0IsR0FBaURFLEtBQWpEO0FBQUEsY0FDR0Q7QUFESCxNQUFpQkYsSUFBakI7QUFBQTtB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O0FBQUEscUJBRFE7QUFBQSxXQUFUO0FBQUEsb0JBR096QixhQUhQLEVBSXVCQSxhQUp2QixFQU9VQSxhQVBWO0FBQUEsYUFuQ0gsZUFnREUscUVBQUMsZ0JBQUQ7QUFDRSxjQUFFLEVBQUVBLGFBQWEsQ0FBQ2tCLEVBQUQsRUFBSyxHQUFMLENBRG5CO0FBRUUsY0FBRTtBQUFJRSxrQkFBSSxFQUFFO0FBQVYsZUFBa0JwQixhQUFhLENBQUNrQixFQUFELEVBQUssR0FBTCxDQUEvQixDQUZKO0FBR0UsY0FBRSxFQUFDLEdBSEw7QUFJRSxjQUFFLEVBQUMsR0FKTDtBQUtFLGlCQUFLLEVBQUVsQixhQUFhLENBQUNrQixFQUFELEVBQUtaLEtBQUssR0FBRyxPQUFILEdBQWFhLFNBQXZCLENBTHRCO0FBTUUsbUJBQU8sRUFBQztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtHRCxDQW5IRDs7SUFBTWhCLE07VUFrRGVILGEsRUFVSkEsYSxFQUU0QkEsYSxFQUlUQSxhLEVBR25CQSxhLEVBSUFBLGEsRUFJdUJBLGEsRUFTdkJBLGEsRUFpQkNBLGEsRUFDZ0JBLGEsRUFHYkEsYTs7O01BM0dmRyxNO0FBcUhTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2FkM2IxYjFiN2ViNmU0ZmY0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBMaW5rLFxuICBGbGV4LFxuICBTcGFjZXIsXG4gIEltYWdlLFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlc3BvbnNpdmVDb250YWluZXIgZnJvbSBcIi4vcmVzcG9uc2l2ZUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWRNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZhR2xvYmVBZnJpY2EgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmNvbnN0IGxvZ28gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2xvZ29fd2ViX2JyYW5kLnN2Z1wiKTtcblxuY29uc3QgTWVudUl0ZW0gPSAoeyBocmVmLCBsb2NhbGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEN1c3RvbUxpbmsga2V5PXtocmVmfSB7Li4ueyBocmVmLCBsb2NhbGUgfX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0N1c3RvbUxpbms+XG4gICk7XG59O1xuTWVudUl0ZW0uZGVmYXVsdFByb3BzID0ge307XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxvY2FsZSA9IFwiZW5cIjtcbiAgcmV0dXJuIChcbiAgICA8TGluayB7Li4ucHJvcHN9IGhyZWY9e2AvJHtsb2NhbGV9YH0gZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SWNvbiBhcz17RmFHbG9iZUFmcmljYX0gbXI9XCIyXCIgLz4ge2xvY2FsZS50b0xvY2FsZVVwcGVyQ2FzZSgpfVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZUJyZWFrcG9pbnQgPSAoYnJlYWtwb2ludCwgdmFsdWUpID0+IHtcbiAgcmV0dXJuIHsgW2JyZWFrcG9pbnRdOiB2YWx1ZSB9O1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgbWVudSB9KSA9PiB7XG4gIGNvbnN0IFtpc1RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4gc2V0T3BlbighaXNPcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB3aW5kb3cuc2Nyb2xsWSA8IDEwO1xuICAgICAgaWYgKGN1cnJlbnQgIT09IGlzVG9wKSB7XG4gICAgICAgIHNldFRvcChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25zY3JvbGwpO1xuICAgIG9uc2Nyb2xsKCk7XG4gIH0pO1xuICBjb25zdCBicCA9IFwibGdcIjtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBwb3M9XCJmaXhlZFwiXG4gICAgICB0b3A9XCIwXCJcbiAgICAgIGluc2V0WD1cIjBcIlxuICAgICAgYmc9e2lzVG9wID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxuICAgICAgc2hhZG93PXtpc1RvcCA/IHVuZGVmaW5lZCA6IFwibGdcIn1cbiAgICAgIHRyYW5zaXRpb249XCJiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zXCJcbiAgICAgIHpJbmRleD1cInN0aWNreVwiXG4gICAgPlxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDxGbGV4IHB4PXt7IGJhc2U6IDgsIG1kOiAxNiB9fSBhbGlnbj1cImNlbnRlclwiIGg9XCIyNFwiIHBvcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPEN1c3RvbUxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvI2hlcm9cIlxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgIHRyYW5zaXRpb249e1xuICAgICAgICAgICAgICBpc1RvcFxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5IGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDIwMG1zXCJcbiAgICAgICAgICAgICAgICA6IFwib3BhY2l0eSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAwc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aXNpYmlsaXR5PXtpc1RvcCA/IFwiaGlkZGVuXCIgOiBcInVuc2V0XCJ9XG4gICAgICAgICAgICBvcGFjaXR5PXtpc1RvcCA/IFwiMFwiIDogXCJ1bnNldFwifVxuICAgICAgICAgICAgZmxleFNocmluaz1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBoPVwiMTBcIiBzcmM9e2xvZ299IHNyY1NldD17bG9nby5zcmNTZXR9IC8+XG4gICAgICAgICAgPC9DdXN0b21MaW5rPlxuICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgbWluVz1cImF1dG9cIlxuICAgICAgICAgICAgbWluSD1cImF1dG9cIlxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3Blbn1cbiAgICAgICAgICAgIGljb249ezxJY29uIGFzPXtNZE1lbnV9IHc9XCI2XCIgaD1cIjZcIiAvPn1cbiAgICAgICAgICAgIGRpc3BsYXk9e3VzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKX1cbiAgICAgICAgICAgIGNvbG9yPXtpc1RvcCA/IFwid2hpdGVcIiA6IFwiYnJhbmQuZGVmYXVsdFwifVxuICAgICAgICAgICAgbWw9XCI0XCJcbiAgICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7XG4gICAgICAgICAgICAgIGJhc2U6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwicm93XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBvc2l0aW9uPXt7IGJhc2U6IFwiYWJzb2x1dGVcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJzdGF0aWNcIikgfX1cbiAgICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICAgICAgICB0b3A9XCIxMDAlXCJcbiAgICAgICAgICAgIGJnPXt7IGJhc2U6IFwid2hpdGVcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpIH19XG4gICAgICAgICAgICBvdmVyZmxvd1k9e3tcbiAgICAgICAgICAgICAgYmFzZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2Zvcm09e3tcbiAgICAgICAgICAgICAgYmFzZTogaXNPcGVuID8gbnVsbCA6IFwic2NhbGVZKDApXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwidW5zZXRcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPVwidG9wXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshaXNPcGVufVxuICAgICAgICAgICAgYm94U2hhZG93PXt7IGJhc2U6IFwibGdcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpIH19XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJiYXNlXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e1xuICAgICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgICA/IFwidHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDBzXCJcbiAgICAgICAgICAgICAgICA6IFwidHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDIwMG1zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpc2liaWxpdHk9e3tcbiAgICAgICAgICAgICAgYmFzZTogaXNPcGVuID8gXCJ1bnNldFwiIDogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJ1bnNldFwiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnUubWFwKCh7IGxhYmVsLCAuLi5pdGVtIH0pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAgbXg9e3VzZUJyZWFrcG9pbnQoYnAsIFwiNFwiKX1cbiAgICAgICAgICAgICAgICBwbD17eyBiYXNlOiBcIjhcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCIwXCIpIH19XG4gICAgICAgICAgICAgICAgcHQ9XCI0XCJcbiAgICAgICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VCcmVha3BvaW50KGJwLCBpc1RvcCA/IFwid2hpdGVcIiA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoZXJcbiAgICAgICAgICAgICAgbXg9e3VzZUJyZWFrcG9pbnQoYnAsIFwiNFwiKX1cbiAgICAgICAgICAgICAgcGw9e3sgYmFzZTogXCI4XCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwiMFwiKSB9fVxuICAgICAgICAgICAgICBwdD1cIjRcIlxuICAgICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgICAgICBjb2xvcj17dXNlQnJlYWtwb2ludChicCwgaXNUb3AgPyBcIndoaXRlXCIgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=