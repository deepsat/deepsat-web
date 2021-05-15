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
        lineNumber: 43,
        columnNumber: 9
      }, _this), " ", locale.toLocaleUpperCase()]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
            lineNumber: 102,
            columnNumber: 19
          }, _this),
          display: useBreakpoint(bp, "none"),
          color: isTop ? "white" : "brand.default",
          ml: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
              lineNumber: 143,
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
            lineNumber: 155,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibG9nbyIsInJlcXVpcmUiLCJNZW51SXRlbSIsImhyZWYiLCJsb2NhbGUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsZXMiLCJwbCIsImVuIiwiY3VyciIsInJvdXRlIiwic2xpY2UiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwidXJsIiwidW5kZWZpbmVkIiwiRmFHbG9iZUFmcmljYSIsInRvTG9jYWxlVXBwZXJDYXNlIiwidXNlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJ2YWx1ZSIsIkhlYWRlciIsIm1lbnUiLCJ1c2VTdGF0ZSIsImlzVG9wIiwic2V0VG9wIiwiaXNPcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJ1c2VFZmZlY3QiLCJvbnNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnAiLCJiYXNlIiwibWQiLCJzcmNTZXQiLCJNZE1lbnUiLCJsYWJlbCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEwQztBQUFBLE1BQXZDQyxJQUF1QyxRQUF2Q0EsSUFBdUM7QUFBQSxNQUFqQ0MsTUFBaUMsUUFBakNBLE1BQWlDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ3pELHNCQUNFLHFFQUFDLDZDQUFELGdEQUEyQjtBQUFFSCxRQUFJLEVBQUpBLElBQUY7QUFBUUMs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SVRBLGEsRUFHbkJBLGEsRUFJQUEsYSxFQUl1QkEsYSxFQVN2QkEsYSxFQWlCQ0EsYSxFQUNnQkEsYSxFQUdiQSxhOzs7TUEzR2ZHLE07QUFxSFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLjA5NjRkMmJlY2RlNWVlZjc2MmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIExpbmssXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgSW1hZ2UsXG4gIEljb24sXG4gIEljb25CdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRhaW5lciBmcm9tIFwiLi9yZXNwb25zaXZlQ29udGFpbmVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZE1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRmFHbG9iZUFmcmljYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuY29uc3QgbG9nbyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbG9nb193ZWJfYnJhbmQuc3ZnXCIpO1xuXG5jb25zdCBNZW51SXRlbSA9ICh7IGhyZWYsIGxvY2FsZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tTGluayBrZXk9e2hyZWZ9IHsuLi57IGhyZWYsIGxvY2FsZSB9fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ3VzdG9tTGluaz5cbiAgKTtcbn07XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuY29uc3QgTGFuZ3VhZ2VTd2l0Y2hlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbG9jYWxlcyA9IHtcbiAgICBwbDogXCJcIixcbiAgICBlbjogXCJlblwiLFxuICB9O1xuICBjb25zdCBjdXJyID0gcm91dGVyLnJvdXRlLnNsaWNlKDEpO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMobG9jYWxlcykubWFwKChbbG9jYWxlLCB1cmxdKSA9PiB7XG4gICAgcmV0dXJuIHVybCA9PSBjdXJyID8gdW5kZWZpbmVkIDogKFxuICAgICAgPExpbmtcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBocmVmPXtgLyR7dXJsfWB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGxvY2FsZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxJY29uIGFzPXtGYUdsb2JlQWZyaWNhfSBtcj1cIjJcIiAvPiB7bG9jYWxlLnRvTG9jYWxlVXBwZXJDYXNlKCl9XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1c2VCcmVha3BvaW50ID0gKGJyZWFrcG9pbnQsIHZhbHVlKSA9PiB7XG4gIHJldHVybiB7IFticmVha3BvaW50XTogdmFsdWUgfTtcbn07XG5cbmNvbnN0IEhlYWRlciA9ICh7IG1lbnUgfSkgPT4ge1xuICBjb25zdCBbaXNUb3AsIHNldFRvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHNldE9wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gd2luZG93LnNjcm9sbFkgPCAxMDtcbiAgICAgIGlmIChjdXJyZW50ICE9PSBpc1RvcCkge1xuICAgICAgICBzZXRUb3AoY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uc2Nyb2xsKTtcbiAgICBvbnNjcm9sbCgpO1xuICB9KTtcbiAgY29uc3QgYnAgPSBcImxnXCI7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zPVwiZml4ZWRcIlxuICAgICAgdG9wPVwiMFwiXG4gICAgICBpbnNldFg9XCIwXCJcbiAgICAgIGJnPXtpc1RvcCA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cbiAgICAgIHNoYWRvdz17aXNUb3AgPyB1bmRlZmluZWQgOiBcImxnXCJ9XG4gICAgICB0cmFuc2l0aW9uPVwiYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dCAyMDBtc1wiXG4gICAgICB6SW5kZXg9XCJzdGlja3lcIlxuICAgID5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8RmxleCBweD17eyBiYXNlOiA4LCBtZDogMTYgfX0gYWxpZ249XCJjZW50ZXJcIiBoPVwiMjRcIiBwb3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPVwiLyNoZXJvXCJcbiAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtcbiAgICAgICAgICAgICAgaXNUb3BcbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAyMDBtc1wiXG4gICAgICAgICAgICAgICAgOiBcIm9wYWNpdHkgZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlzaWJpbGl0eT17aXNUb3AgPyBcImhpZGRlblwiIDogXCJ1bnNldFwifVxuICAgICAgICAgICAgb3BhY2l0eT17aXNUb3AgPyBcIjBcIiA6IFwidW5zZXRcIn1cbiAgICAgICAgICAgIGZsZXhTaHJpbms9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2UgaD1cIjEwXCIgc3JjPXtsb2dvfSBzcmNTZXQ9e2xvZ28uc3JjU2V0fSAvPlxuICAgICAgICAgIDwvQ3VzdG9tTGluaz5cbiAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG1pblc9XCJhdXRvXCJcbiAgICAgICAgICAgIG1pbkg9XCJhdXRvXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XG4gICAgICAgICAgICBpY29uPXs8SWNvbiBhcz17TWRNZW51fSB3PVwiNlwiIGg9XCI2XCIgLz59XG4gICAgICAgICAgICBkaXNwbGF5PXt1c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIil9XG4gICAgICAgICAgICBjb2xvcj17aXNUb3AgPyBcIndoaXRlXCIgOiBcImJyYW5kLmRlZmF1bHRcIn1cbiAgICAgICAgICAgIG1sPVwiNFwiXG4gICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgd3JhcD1cIndyYXBcIlxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17e1xuICAgICAgICAgICAgICBiYXNlOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInJvd1wiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwb3NpdGlvbj17eyBiYXNlOiBcImFic29sdXRlXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwic3RhdGljXCIpIH19XG4gICAgICAgICAgICBsZWZ0PVwiMFwiXG4gICAgICAgICAgICByaWdodD1cIjBcIlxuICAgICAgICAgICAgdG9wPVwiMTAwJVwiXG4gICAgICAgICAgICBiZz17eyBiYXNlOiBcIndoaXRlXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKSB9fVxuICAgICAgICAgICAgb3ZlcmZsb3dZPXt7XG4gICAgICAgICAgICAgIGJhc2U6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIHVuZGVmaW5lZCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNmb3JtPXt7XG4gICAgICAgICAgICAgIGJhc2U6IGlzT3BlbiA/IG51bGwgOiBcInNjYWxlWSgwKVwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInVuc2V0XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj1cInRvcFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cbiAgICAgICAgICAgIGJveFNoYWRvdz17eyBiYXNlOiBcImxnXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKSB9fVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiYmFzZVwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtcbiAgICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICAgICAgPyBcInRyYW5zZm9ybSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAwc1wiXG4gICAgICAgICAgICAgICAgOiBcInRyYW5zZm9ybSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAyMDBtc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aXNpYmlsaXR5PXt7XG4gICAgICAgICAgICAgIGJhc2U6IGlzT3BlbiA/IFwidW5zZXRcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwidW5zZXRcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgLi4uaXRlbSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAgIG14PXt1c2VCcmVha3BvaW50KGJwLCBcIjRcIil9XG4gICAgICAgICAgICAgICAgcGw9e3sgYmFzZTogXCI4XCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwiMFwiKSB9fVxuICAgICAgICAgICAgICAgIHB0PVwiNFwiXG4gICAgICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj17dXNlQnJlYWtwb2ludChicCwgaXNUb3AgPyBcIndoaXRlXCIgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyXG4gICAgICAgICAgICAgIG14PXt1c2VCcmVha3BvaW50KGJwLCBcIjRcIil9XG4gICAgICAgICAgICAgIHBsPXt7IGJhc2U6IFwiOFwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIjBcIikgfX1cbiAgICAgICAgICAgICAgcHQ9XCI0XCJcbiAgICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUJyZWFrcG9pbnQoYnAsIGlzVG9wID8gXCJ3aGl0ZVwiIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9